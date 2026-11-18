### Ibrahim M. Badr — full-stack engineer, currently deep in AI agents

I build AI products and the tooling that keeps them shipping: Python services and LLM pipelines on one
side, TypeScript/Next.js front ends on the other, and lately a lot of agent infrastructure — MCP
servers, tool harnesses, and the skills that make coding agents behave like senior engineers instead
of enthusiastic interns.

**What I'm working on**

- **[Appit Labs](https://github.com/Appit-labs)** — twelve open-source agent skills (browser QA, CI
  triage, Postgres inspection, release automation, Hermes agent setup) published as an npm package
  and a Claude Code marketplace: `npm i @appitlabs/skills`.
- **AI products end to end** — FastAPI + Celery + Postgres services, streaming LLM pipelines, Tauri
  desktop clients, and the deploy stack under them.

**Stack I actually ship with**

<p>
  <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white">
  <img alt="FastAPI" src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white">
  <img alt="Postgres" src="https://img.shields.io/badge/Postgres-4169E1?style=flat-square&logo=postgresql&logoColor=white">
  <img alt="Redis" src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black">
  <img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white">
  <img alt="Linux" src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black">
</p>

**Featured**

| Project | What it is |
| --- | --- |
| [live-qa](https://github.com/Appit-labs/live-qa) | Live QA in a real browser: a verified screenshot per step, a pass/fail table, and a login flow that survives SSO and captcha-free staging |
| [pg-inspect](https://github.com/Appit-labs/pg-inspect) | 34 read-only Postgres commands — `audit`, plan trees with cost bars, schema-drift fingerprint, index/bloat/xid checks |
| [hermes-setup](https://github.com/Appit-labs/hermes-setup) | Wiring an AI agent to an app the boring-safe way: short-lived JWT, least-privilege DB role, three-assertion link check |
| [code-scan](https://github.com/Appit-labs/code-scan) | Skylos (Python) + Fallow (TS/JS) as one prioritised report, with a baseline gate so CI fails only on new findings |


**More of what I've built**

| Repo | What it is |
| --- | --- |
| [work-os](https://github.com/Appit-labs/work-os) | Local-first personal AI & work OS — Tauri + React desktop client, FastAPI service with SQLAlchemy/alembic, APScheduler jobs, keyring-held secrets (private) |
| [livekit-dev](https://github.com/Appit-labs/livekit-dev) | A local LiveKit stack that behaves like production: dev and prod-shaped compose files, token issuing, one-command bring-up |
| [slack-livekit-bridge](https://github.com/Appit-labs/slack-livekit-bridge) | Slack ↔ LiveKit bridge — Bolt events in, room tokens out, Redis for presence and event de-duplication |
| [byd-otd-desk](https://github.com/Appit-labs/byd-otd-desk) | Order-to-delivery tracker built spec-first from eight planning documents — NestJS + Fastify backend, frontend workspace |
| [appit-skills](https://github.com/Appit-labs/appit-skills) | The twelve agent skills as one npm package + Claude Code marketplace |

**How I work**

- Spec first: a planning document per capability before the code, so review happens on the design and
  not on a 900-line diff.
- The boring infrastructure is the product: migrations, health checks, least-privilege database roles,
  and a script for the thing you do every day.
- Agents are tools with a cost: I measure what a workflow spends (tokens, tool calls, minutes) and cut
  the part that is re-derivation rather than thinking.

**Writing**

- [Your Cloudflare Turnstile may never be issuing a token](https://dev.to/ibrahimbdr/your-cloudflare-turnstile-may-never-be-issuing-a-token-here-is-the-one-liner-that-tells-you-4h75)
  — a 15-second check that catches a contact form nobody can submit
- [16,315 `cd && grep` calls](https://github.com/Appit-labs/appit-skills/discussions) — what an agent
  wastes re-learning your repo, and the numbers that came out of my own session logs

**Elsewhere**

[Appit Labs](https://github.com/Appit-labs) · [npm](https://www.npmjs.com/package/@appitlabs/skills) ·
[dev.to](https://dev.to/ibrahimbdr) · [pi package gallery](https://pi.dev/packages/@appitlabs/skills)

<sub>Most of my public work is MIT-licensed and meant to be copied into your own setup. If something
here saved you an afternoon, a star on the repo is the whole currency.</sub>
