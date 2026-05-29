# Launch Assets Checklist

Use this inventory to track launch-ready content before flipping
`photosReady` in `lib/content.ts`.

## Photo Slots

| Status | Asset | Used by | Required before launch | Acceptance notes |
|---|---|---|---|---|
| [ ] | `public/images/hero.jpg` | Home hero | Yes | Premium remodel photo, strong first-viewport crop on desktop and mobile. |
| [ ] | `public/images/results-1.jpg` | Results highlights | Yes | Real project or before/after tied to the first proof point. |
| [ ] | `public/images/results-2.jpg` | Results highlights | Yes | Real project or before/after tied to the second proof point. |
| [ ] | `public/images/results-3.jpg` | Future results/case study slot | No | Keep naming reserved if more proof cards are added. |
| [ ] | `public/images/results-4.jpg` | Future results/case study slot | No | Keep naming reserved if more proof cards are added. |
| [ ] | `public/images/industry-kitchen-bath.jpg` | Industries and kitchen/bath page | Yes | Finished kitchen or bath project with clean composition. |
| [ ] | `public/images/industry-roofing.jpg` | Industries and roofing page | Yes | Roofing crew or finished roof, clearly relevant at card crop size. |
| [ ] | `public/images/industry-decking.jpg` | Industries and decking page | Yes | Finished deck or outdoor living space. |
| [ ] | `public/images/founder.jpg` | About / FounderBio | Yes | Square, high-resolution portrait of Diogo. |
| [ ] | `public/images/og.jpg` | Social preview | Recommended | 1200x630 brand/share card; update metadata if this replaces `og-default.png`. |

## Existing Brand Assets

| Status | Asset | Notes |
|---|---|---|
| [ ] | `public/logo.png` | Confirm transparent background, crisp display in navbar/footer. |
| [ ] | `public/mark.png` | Confirm favicon/app-mark suitability. |
| [ ] | `public/og-default.png` | Keep until `public/images/og.jpg` is approved and wired. |
| [ ] | `app/icon.png` | Confirm it matches the final production mark. |

## Content And Launch Checks

- [ ] Confirm all proof claims and press links in `lib/content.ts`.
- [ ] Review `/privacy` and `/terms` before launch.
- [ ] Confirm `NEXT_PUBLIC_SITE_URL=https://www.voxhorizon.com` in the VPS env.
- [ ] Confirm `LEAD_API_MODE=live` only in production runtime env.
- [ ] Confirm Resend sender domain SPF/DKIM before enabling live notifications.
- [ ] Confirm GoHighLevel booking URL and webhook path before live traffic.
- [ ] Run `npm run typecheck`, `npm run build`, and `npm run smoke:api`.

See `public/images/README.md` for image dimensions and optimization targets.
