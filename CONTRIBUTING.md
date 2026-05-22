# Contributing

This repository follows Pedro's release workflow. Keep changes scoped, reviewable,
and non-destructive unless Pedro explicitly approves otherwise.

## Commit Authorship

- Pedro is the only person who should create commits for this repository.
- Do not add `Co-authored-by`, generated-by, bot, tool, or other attribution
  trailers to commits, pull requests, comments, or docs.
- Keep commit messages direct and human-authored.

## Branch And PR Workflow

- Work on a short-lived branch named for the task, for example
  `chore/launch-readiness-cleanup`.
- Open a pull request into `main` and link the relevant milestone and issues.
- Keep the PR focused on the approved scope. Split unrelated work into a
  separate branch and PR.
- Before requesting review, run the relevant local checks and list them in the PR.
- Document user-visible risks, operational risks, and any follow-up launch tasks.

## Protected Actions

Do not perform any of these actions without Pedro's explicit approval:

- Merge a pull request.
- Push directly to `main`.
- Deploy or manually trigger a deployment workflow.
- Rewrite git history, force-push, reset, rebase shared history, or delete
  branches needed for review.
- Rotate, expose, or replace production secrets.

## Local Checks

Run the checks that match the change scope. For launch-readiness work, the
baseline is:

```bash
npm run typecheck
npm run build
npm run smoke:api
```
