# Git / SSH setup

This repo is pushed with a **personal** GitHub account (`juan-ramirez-dev`, email `rjuandavid1002@gmail.com`), separate from the machine's default work account.

- Remote: `origin` → `git@github-personal:juan-ramirez-dev/actividades.git`
- SSH key: `~/.ssh/id_ed25519_personal`, selected via the `github-personal` Host alias in `~/.ssh/config` (`IdentitiesOnly yes`), so it doesn't collide with the work SSH key used for `github.com` by default.
- `gh` CLI on this machine is authenticated as the work account (`juan-ramirez-katapult`); repo/PR operations here that need the personal account require `gh auth switch` or a separate token, not the default `gh` session.

@AGENTS.md
