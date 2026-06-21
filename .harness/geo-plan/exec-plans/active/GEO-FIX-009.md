# GEO-FIX-009: Agregar security headers faltantes

**Severidad:** 🟢 Medium  
**Fase:** 3  
**Repo:** podoclinic-saas + Vercel config  
**Tiempo estimado:** 60 min  
**Dependencias:** Ninguna

## Síntoma

La respuesta HTTP solo tiene HSTS. Faltan 5 headers críticos de seguridad:
- `X-Frame-Options` — Riesgo de clickjacking
- `X-Content-Type-Options` — Riesgo de MIME sniffing
- `Content-Security-Policy` — Sin protección contra XSS
- `Referrer-Policy` — Sin control de referrer
- `Permissions-Policy` — Sin control de APIs del browser
- `Access-Control-Allow-Origin: *` — CORS abierto globalmente

## Causa Raíz

El sitio está en Vercel que no agrega estos headers por defecto. El backend Django no los configura explícitamente.

## Solución

Dos capas:
1. **Vercel:** Configurar headers en `vercel.json` o `next.config.js`
2. **Backend Django:** Agregar middleware para security headers como fallback

### next.config.js (recomendado para Vercel)
```js
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
      ],
    },
  ]
}
```

## Archivos Afectados

- `next.config.js` o `next.config.mjs` — agregar headers
- Opcional: middleware Django para security headers

## Verificación

- `curl -I https://www.estetikflow.cl` muestra los nuevos headers
- `npm run build` pasa
- No hay errores de CORS en funcionalidad existente

## Comando para Claude Code

```bash
cd /root/estetikflow-landing
claude -p "Ejecuta GEO-FIX-009 según el plan en .harness/geo-plan/exec-plans/active/GEO-FIX-009.md" --allowedTools "Read,Edit" --max-turns 5
```
