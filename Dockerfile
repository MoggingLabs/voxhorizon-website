# syntax=docker/dockerfile:1.7
#
# VoxHorizon public website — Next.js standalone, multi-stage build.
# Mirrors the dashboard's web image pattern. Build context = repo root.
#
# Only NEXT_PUBLIC_* values cross the build boundary (inlined into the
# client bundle by `next build`, public by design). Server-only secrets
# (SUPABASE_SERVICE_ROLE_KEY, etc.) are injected at RUNTIME via the
# compose env_file (/opt/voxhorizon-website/.env) — never baked in.

# ---- Stage 1: deps ----------------------------------------------------------
FROM node:22-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---- Stage 2: builder -------------------------------------------------------
FROM node:22-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Inlined into the client bundle at build time. Changing it requires a
# rebuild + redeploy (not just a container restart).
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- Stage 3: runtime -------------------------------------------------------
FROM node:22-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0 \
    NEXT_TELEMETRY_DISABLED=1

RUN apt-get update \
    && apt-get install -y --no-install-recommends curl ca-certificates \
    && rm -rf /var/lib/apt/lists/* \
    && groupadd --system --gid 1001 app \
    && useradd --system --uid 1001 --gid app --create-home --home-dir /home/app --shell /usr/sbin/nologin app \
    && chown -R app:app /app /home/app

# Standalone bundle is self-contained; static + public copied alongside.
COPY --from=builder --chown=app:app /app/.next/standalone ./
COPY --from=builder --chown=app:app /app/.next/static ./.next/static
COPY --from=builder --chown=app:app /app/public ./public

USER app
EXPOSE 3000

# The under-construction gate (middleware.ts) returns HTTP 200 for "/", so this
# stays green while the public site is gated; authenticated previews pass through.
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
    CMD curl -fsS http://localhost:3000/ || exit 1

CMD ["node", "server.js"]
