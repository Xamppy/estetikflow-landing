# GEO-FIX-011: Sitemap — agregar /blog y más URLs

**Severidad:** 🟢 Medium  
**Fase:** 3  
**Repo:** estetikflow-landing  
**Tiempo estimado:** 15 min  
**Dependencias:** Ninguna

## Síntoma

El sitemap.xml actual solo tiene 6 URLs. Falta `/blog`, `/blog/[slug]` (artículos individuales), y otras páginas de contenido. Google no indexa páginas que no están en el sitemap.

## Causa Raíz

Sitemap estático generado manualmente que no se actualiza con nuevas rutas.

## Solución

Opción recomendada: Usar `next-sitemap` (si no está ya configurado) o actualizar el sitemap manual.

Si el proyecto ya usa `next-sitemap`, solo falta configurar las rutas adicionales. Si no, instalar y configurar:

```bash
npm install next-sitemap
```

Crear `next-sitemap.config.js`:
```js
module.exports = {
  siteUrl: 'https://www.estetikflow.cl',
  generateRobotsTxt: false, // ya tenemos robots.txt manual
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/legal'],
  additionalPaths: async (config) => [
    { loc: '/blog', changefreq: 'weekly', priority: 0.8 },
    { loc: '/nosotros', changefreq: 'monthly', priority: 0.7 },
    { loc: '/faq', changefreq: 'monthly', priority: 0.8 },
    { loc: '/guia-gratis', changefreq: 'monthly', priority: 0.8 },
    { loc: '/reservar', changefreq: 'weekly', priority: 0.8 },
  ],
};
```

O simplemente actualizar `public/sitemap.xml` manualmente agregando las URLs faltantes.

## Archivos Afectados

- `public/sitemap.xml` — actualizar
- O `next-sitemap.config.js` si se implementa generación automática

## Verificación

- `https://www.estetikflow.cl/sitemap.xml` incluye `/blog` y otras URLs
- Google Search Console no muestra errores de sitemap
- `npm run build` pasa

## Comando para Claude Code

```bash
cd /root/estetikflow-landing
claude -p "Ejecuta GEO-FIX-011 según el plan en .harness/geo-plan/exec-plans/active/GEO-FIX-011.md" --allowedTools "Read,Edit,Write,Bash" --max-turns 5
```
