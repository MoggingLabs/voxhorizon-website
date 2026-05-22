# API Smoke Tests

The API smoke runner checks the local `/api/lead` and `/api/booking-webhook`
routes without production secrets or live side effects.

## Command

```bash
npm run smoke:api
```

By default, the script starts a local Next server on `127.0.0.1:3100` in
`LEAD_API_MODE=mock`. If a production build exists, it uses `next start`;
otherwise it uses `next dev`.

## What It Checks

- Confirms the target server is in mock mode using a no-side-effect
  `/api/booking-webhook` guard request.
- Posts a valid mock lead payload to `/api/lead` and expects a mock success.
- Posts a sample booking payload to `/api/booking-webhook` and expects the mock
  skip response.

## Running Against An Existing Local Server

```bash
LEAD_API_MODE=mock npm run dev
SMOKE_BASE_URL=http://127.0.0.1:3000 npm run smoke:api
```

The script refuses non-local URLs unless `SMOKE_ALLOW_NON_LOCAL=1` is set. Keep
the default local flow for PR checks and launch-readiness validation.

## Useful Options

| Variable | Default | Notes |
|---|---|---|
| `SMOKE_PORT` | `3100` | Port used when the script starts Next. |
| `SMOKE_BASE_URL` | unset | Existing local server to test instead of starting one. |
| `SMOKE_START_SERVER` | `1` | Set to `0` with `SMOKE_BASE_URL` for explicit no-start mode. |
| `SMOKE_READY_TIMEOUT_MS` | `90000` | Max wait for the local server to become ready. |
| `SMOKE_REQUEST_TIMEOUT_MS` | `8000` | Per-request timeout. |
| `SMOKE_BOOKING_URL` | `https://booking.example.local/voxhorizon` | Mock booking URL returned by `/api/lead`. |
| `SMOKE_ALLOW_NON_LOCAL` | unset | Set to `1` only for an explicitly approved preview/staging smoke run. |
