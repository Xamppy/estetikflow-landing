# GEO-FIX-014: Agregar reseñas verificables

**Severidad:** 🔵 Low  
**Fase:** 4  
**Repo:** estetikflow-landing  
**Tiempo estimado:** 60 min  
**Dependencias:** Tener reseñas reales de clientes

## Síntoma

El Schema JSON-LD tiene `aggregateRating` con 4.8/5 estrellas y 127 reseñas, pero no hay ninguna plataforma de reseñas visible en el sitio (Google Reviews, Trustpilot, etc.). Esto genera desconfianza porque el rating no es verificable.

## Causa Raíz

El `aggregateRating` probablemente se incluyó como placeholder o estimación, sin una fuente real de reseñas.

## Solución

1. **Si hay reseñas reales:** Integrar Google Reviews widget o similar en la homepage
2. **Si no hay reseñas:** Quitar el `aggregateRating` del Schema hasta tener reseñas reales verificables (es mejor no tener rating que tener uno falso)
3. **Alternativa:** Migrar a una plataforma de reseñas (Trustpilot, Reseñas.cl, Google Business Profile)

## Archivos Afectados

- Donde se define el Schema JSON-LD (`app/layout.tsx` o componente de schema)
- Posiblemente homepage para agregar widget de reseñas

## Implementación

1. Decidir si remover temporalmente el aggregateRating o mantenerlo con datos reales
2. Si se remueve: eliminar `aggregateRating` del JSON-LD de SoftwareApplication
3. Si se integra: agregar widget de Google Reviews o Trustpilot

## Verificación

- aggregateRating en Schema es preciso y verificable O ha sido removido
- `npm run build` pasa
- No hay claims de reseñas no verificables en la página

## Comando para Claude Code

```bash
cd /root/estetikflow-landing
claude -p "Ejecuta GEO-FIX-014 según el plan en .harness/geo-plan/exec-plans/active/GEO-FIX-014.md" --allowedTools "Read,Edit" --max-turns 5
```
