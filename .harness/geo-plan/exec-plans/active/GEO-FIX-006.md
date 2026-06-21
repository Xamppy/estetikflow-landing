# GEO-FIX-006: Poblar sameAs en Schema JSON-LD

**Severidad:** 🟡 High  
**Fase:** 2  
**Repo:** estetikflow-landing  
**Tiempo estimado:** 20 min  
**Dependencias:** Ninguna

## Síntoma

El JSON-LD de Organization tiene `"sameAs": []` vacío. Los AI crawlers no pueden encontrar las redes sociales de EstetikFlow para corroborar la identidad de la marca.

## Causa Raíz

El schema fue generado sin incluir las URLs de perfiles sociales.

## Solución

Poblar `sameAs` en el JSON-LD de Organization con los perfles reales de EstetikFlow:

```json
"sameAs": [
  "https://www.instagram.com/estetikflow.cl/",
  "https://www.linkedin.com/company/estetikflow"
]
```

Buscar en el código dónde se genera el JSON-LD (probablemente en una función de metadata o layout) y actualizar el array.

## Archivos Probablemente Afectados

- Buscar `sameAs` en el repo:
  - `app/layout.tsx` o similar (metadata/JSON-LD)
  - `components/` donde se genere schema
  - Archivos con `"Organization"` o `@graph`

## Implementación

1. Encontrar dónde se define el JSON-LD con `sameAs: []`
2. Agregar URLs de Instagram y LinkedIn
3. Si no existen los perfiles, documentar que hay que crearlos

## Verificación

- `sameAs` tiene al menos 2 URLs en el JSON-LD de la homepage
- Las URLs son accesibles (HTTP 200)
- `npm run build` pasa

## Comando para Claude Code

```bash
cd /root/estetikflow-landing
claude -p "Ejecuta GEO-FIX-006 según el plan en .harness/geo-plan/exec-plans/active/GEO-FIX-006.md" --allowedTools "Read,Edit" --max-turns 5
```
