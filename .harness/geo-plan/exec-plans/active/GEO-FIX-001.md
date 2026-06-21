# GEO-FIX-001: Reemplazar demo falsa (Rick Roll)

**Severidad:** 🔴 Critical  
**Fase:** 1  
**Repo:** estetikflow-landing  
**Tiempo estimado:** 15 min  
**Dependencias:** Ninguna

## Síntoma

El botón "Ver demo en 60 segundos" redirige a `https://www.youtube.com/watch?v=dQw4w9WgXcQ` (Rick Astley — Rick Roll). Cualquier prospecto que hace clic esperando ver el producto se encuentra con una broma de internet. Esto destruye la confianza al instante.

## Causa Raíz

Placeholder de desarrollo que nunca fue reemplazado antes del deploy a producción.

## Solución

Reemplazar el href del botón por un video real del producto. Opciones:
1. **Ideal:** Subir un video walkthrough/screencast real a YouTube y enlazar ese
2. **Mínimo:** Sacar el enlace y dejar solo texto, o redirigir a la sección de features con un modal

## Archivos Probablemente Afectados

- `components/DemoSection.tsx` — componente con el botón de demo
- `app/page.tsx` — o donde se renderice la homepage
- Buscar patrón: `dQw4w9WgXcQ` o `rick` o `watch?v=`

## Implementación

1. Buscar en el repo la referencia al video de Rick Roll
2. Reemplazar por URL de video real de producto
3. Si no hay video real, cambiar a un modal con screenshots o un placeholder honesto ("Próximamente")

## Verificación

- `npm run build` pasa
- Click en botón lleva a video real o contenido relevante
- No hay más referencias a Rick Roll en el código

## Comando para Claude Code

```bash
cd /root/estetikflow-landing
claude -p "Ejecuta GEO-FIX-001 según el plan en .harness/geo-plan/exec-plans/active/GEO-FIX-001.md" --allowedTools "Read,Edit,Write,Bash" --max-turns 10
```
