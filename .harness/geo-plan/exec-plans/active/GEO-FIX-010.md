# GEO-FIX-010: Corregir precios en Schema JSON-LD

**Severidad:** 🟢 Medium  
**Fase:** 3  
**Repo:** estetikflow-landing  
**Tiempo estimado:** 15 min  
**Dependencias:** Ninguna

## Síntoma

En el Schema JSON-LD de SoftwareApplication, los precios aparecen como `$12.99`, `$24.99`, `$59.99` con `priceCurrency: "CLP"`. Pero los precios reales son `$12.990`, `$24.990`, `$59.990` CLP mensuales.

Esto puede confundir a Google y AI crawlers, que interpretarían los valores como $12.99 CLP (~$0.01 USD) en vez de $12.990 CLP (~$14 USD).

## Causa Raíz

Error al generar el schema — probablemente se copiaron valores en dólares pero se dejó la moneda como CLP.

## Solución

Corregir los valores de precio en el JSON-LD de SoftwareApplication:
- `$12.99` → `12990` (price con valor numérico correcto)
- `$24.99` → `24990`
- `$59.99` → `59990`

## Archivos Probablemente Afectados

- Donde se define el JSON-LD de SoftwareApplication (probablemente `app/layout.tsx` o componente de schema)
- Buscar `"offers"` o `"price"` o `"SoftwareApplication"`

## Implementación

1. Buscar los valores incorrectos en el código
2. Reemplazar con los valores reales en CLP
3. Verificar que `priceCurrency` sigue siendo `"CLP"`

## Verificación

- JSON-LD tiene precios correctos (12990, 24990, 59990)
- Google Rich Results Test no muestra advertencias de precio
- `npm run build` pasa

## Comando para Claude Code

```bash
cd /root/estetikflow-landing
claude -p "Ejecuta GEO-FIX-010 según el plan en .harness/geo-plan/exec-plans/active/GEO-FIX-010.md" --allowedTools "Read,Edit" --max-turns 3
```
