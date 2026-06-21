# GEO-FIX-007: Agregar BreadcrumbList Schema

**Severidad:** 🟡 High  
**Fase:** 2  
**Repo:** estetikflow-landing  
**Tiempo estimado:** 25 min  
**Dependencias:** Ninguna

## Síntoma

No hay schema de BreadcrumbList en ninguna página. Los AI crawlers no tienen una guía estructurada de navegación del sitio, y Google no puede mostrar breadcrumbs en los snippets de búsqueda.

## Causa Raíz

Schema no implementado. El sitio tiene JSON-LD con Organization, SoftwareApplication y FAQPage, pero falta el de navegación.

## Solución

Agregar BreadcrumbList schema a las páginas que lo necesiten:

1. **Homepage:** breadcrumb simple (Home)
2. **Páginas internas:** breadcrumb con ruta (Home > FAQ, Home > Nosotros, Home > Blog > Artículo)
3. **Blog:** breadcrumb dinámico (Home > Blog > Categoría > Artículo)

El schema BreadcrumbList va en el JSON-LD de cada página:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://www.estetikflow.cl"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "FAQ",
      "item": "https://www.estetikflow.cl/faq"
    }
  ]
}
```

## Implementación

1. Buscar dónde se genera el JSON-LD actual (probablemente `app/layout.tsx` o un componente de schema)
2. Agregar función que genere BreadcrumbList según la ruta actual
3. Integrar en el layout o en cada page según corresponda

## Archivos Probablemente Afectados

- `app/layout.tsx` — o donde se inyecta el JSON-LD
- Posiblemente un componente de schema compartido

## Verificación

- BreadcrumbList aparece en el JSON-LD de páginas internas
- Google Rich Results Test valida el schema
- `npm run build` pasa

## Comando para Claude Code

```bash
cd /root/estetikflow-landing
claude -p "Ejecuta GEO-FIX-007 según el plan en .harness/geo-plan/exec-plans/active/GEO-FIX-007.md" --allowedTools "Read,Edit" --max-turns 8
```
