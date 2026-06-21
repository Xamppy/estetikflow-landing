# GEO Optimization Plan — EstetikFlow Landing Page

**Versión:** 1.0  
**Fecha:** Junio 21, 2026  
**Basado en:** GEO Audit Report (score: 47/100)  
**Stack:** Next.js (App Router) + Tailwind + Vercel  
**Branch:** `dev`

---

## Estructura

```
.harness/geo-plan/
├── AGENTS.md                 ← Este archivo (índice)
├── feature_list.json         ← Estado de cada tarea
├── CLAUDE.md                 ← Contexto para Claude Code
└── exec-plans/
    ├── active/               ← Planes pendientes
    │   ├── GEO-FIX-001.md    (🔴 Reemplazar demo falsa)
    │   ├── GEO-FIX-002.md    (🔴 Arreglar páginas 404)
    │   ├── GEO-FIX-003.md    (🟡 Crear /llms.txt)
    │   ├── GEO-FIX-004.md    (🟡 AI crawlers en robots.txt)
    │   ├── GEO-FIX-005.md    (🟡 Blog - publicar artículos)
    │   ├── GEO-FIX-006.md    (🟡 Poblar sameAs en Schema)
    │   ├── GEO-FIX-007.md    (🟡 BreadcrumbList Schema)
    │   ├── GEO-FIX-008.md    (🟡 Teléfono y dirección contacto)
    │   ├── GEO-FIX-009.md    (🟢 Security Headers)
    │   ├── GEO-FIX-010.md    (🟢 Corregir precios Schema)
    │   ├── GEO-FIX-011.md    (🟢 Sitemap + /blog)
    │   ├── GEO-FIX-012.md    (🟢 About page - equipo)
    │   ├── GEO-FIX-013.md    (🔵 Estrategia contenidos/menciones)
    │   └── GEO-FIX-014.md    (🔵 Reseñas verificables)
    └── completed/            ← Planes terminados
```

## Repositorios Involucrados

| Repo | Ruta Local | GitHub | Propósito |
|------|-----------|--------|-----------|
| estetikflow-landing | `/root/estetikflow-landing/` | `Xamppy/estetikflow-landing` | Frontend Next.js (landing page) |
| podoclinic-saas | `/root/podoclinic-saas/` | `Xamppy/podoclinic-saas` | Backend Django (blog API, seguridad) |

## Prioridades por Fase

| Fase | Items | Timeline | Dependencias |
|------|-------|----------|-------------|
| **Fase 1** | GEO-FIX-001 al 004 | Esta semana | Ninguna |
| **Fase 2** | GEO-FIX-005 al 008 | Esta semana | Deploy endpoint API Key (FIX-005) |
| **Fase 3** | GEO-FIX-009 al 012 | Próximas 2 semanas | Ninguna |
| **Fase 4** | GEO-FIX-013 al 014 | Continuo | Ninguna |

## Reglas para Claude Code

1. **Commits atómicos:** Un commit por FIX, con mensaje convencional: `fix(geo): GEO-FIX-NNN descripción`
2. **Push inmediato:** `git push origin dev` después de cada commit exitoso
3. **No acumular cambios:** Cada agente trabaja UN FIX a la vez
4. **Build antes de commit:** `npm run build` debe pasar
5. **Branch:** Siempre en `dev`
6. **Git identity:** `user.name=Xamppy`, `user.email=fe.orellanaa@duocuc.cl`
7. **Usar Ponytail:** Lazy senior dev — mínimo código, YAGNI, stdlib primero
