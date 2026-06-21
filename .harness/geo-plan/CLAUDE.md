# EstetikFlow Landing — GEO Optimization

## Stack
- Next.js 14+ App Router (React, TypeScript, Tailwind CSS)
- Deployed on Vercel
- Repo: Xamppy/estetikflow-landing (branch: dev)

## Key Directories
- `app/` — Next.js App Router pages
- `components/` — React components
- `public/` — Static files (robots.txt, sitemap.xml, images)
- `.harness/geo-plan/` — Plan de optimización GEO

## Commands
- `npm run dev` — Local dev server
- `npm run build` — Build (must pass before commit)
- `npm run lint` — Lint check

## Git Rules
- Branch: `dev` — nunca commitear directo a `main`
- Commits atómicos con prefijo del FIX: `fix(geo): GEO-FIX-NNN descripción`
- Push inmediato tras build exitoso
- Git identity: `user.name=Xamppy`, `user.email=fe.orellanaa@duocuc.cl`

## Ponytail Rules (Lazy Senior Dev)
Antes de escribir código, checkear:
1. ¿YAGNI? (no lo vas a necesitar)
2. ¿Ya existe en stdlib/Next.js?
3. ¿Se puede hacer nativo en browser/Next.js?
4. ¿Ya hay un dep que lo resuelve?
5. ¿Se puede hacer en 1 línea?
6. Mínimo código posible
Marcar simplificaciones con `ponytail:` comment.

## CLAUDE.md file
This file is loaded automatically by Claude Code when working in this repo.
