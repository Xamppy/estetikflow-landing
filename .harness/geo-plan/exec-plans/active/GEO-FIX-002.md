# GEO-FIX-002: Arreglar páginas 404

**Severidad:** 🔴 Critical  
**Fase:** 1  
**Repo:** estetikflow-landing  
**Tiempo estimado:** 45 min  
**Dependencias:** Ninguna

## Síntoma

Las siguientes páginas retornan 404:
- `/contacto`
- `/precios`
- `/caracteristicas`  
- `/reservar`
- `/casos-de-exito`

Estas URLs están referenciadas en navegación, botones o expectativas de usuarios.

## Causa Raíz

El menú de navegación tiene enlaces a páginas que nunca fueron creadas, o fueron eliminadas durante el desarrollo.

## Solución

Opción recomendada (mínimo esfuerzo, máximo impacto):
1. **Redirigir** cada ruta 404 a su equivalente en homepage usando anchors:
   - `/precios` → `/#precios` (o la sección de precios)
   - `/caracteristicas` → `/#caracteristicas` (o features section)
   - `/contacto` → `/#contacto` (o sección de contacto)
   - `/reservar` → `https://app.estetikflow.cl/reservar/` (o la página de booking)
   - `/casos-de-exito` → `/#testimonios`

Usar Next.js `next.config.js` redirects o crear páginas mínimas que redirijan.

## Archivos Probablemente Afectados

- `next.config.js` o `next.config.mjs` — para agregar redirects
- O crear páginas: `app/precios/page.tsx`, `app/contacto/page.tsx`, etc.

## Implementación

1. Verificar `next.config.*` y agregar redirects para las 5 rutas
2. O crear páginas mínimas con redirect client-side
3. No crear páginas complejas — solo redirigir

## Verificación

- `npm run build` pasa
- Cada URL redirige correctamente (código 308/301)
- No aparece "404 Not Found" en ninguna de las rutas

## Comando para Claude Code

```bash
cd /root/estetikflow-landing
claude -p "Ejecuta GEO-FIX-002 según el plan en .harness/geo-plan/exec-plans/active/GEO-FIX-002.md" --allowedTools "Read,Edit,Write,Bash" --max-turns 10
```
