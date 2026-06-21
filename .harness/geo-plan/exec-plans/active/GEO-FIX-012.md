# GEO-FIX-012: Mejorar página /nosotros con equipo

**Severidad:** 🟢 Medium  
**Fase:** 3  
**Repo:** estetikflow-landing  
**Tiempo estimado:** 90 min  
**Dependencias:** Ninguna

## Síntoma

La página /nosotros existe pero no tiene biografías del equipo, fotos, credenciales ni experiencia. Los AI crawlers y visitantes no pueden verificar la expertise del equipo detrás del producto.

## Causa Raíz

Página de about mínima, sin información detallada del equipo.

## Solución

Mejorar la página `/nosotros` con:
1. Historia de la empresa (contexto real, no corporativo)
2. Foto y biografía del fundador (Felipe Orellana) con credenciales
3. Equipo de desarrollo (Angel Code Soluciones)
4. Misión/visión enfocada en el mercado de estética chileno
5. Sección de "Por qué confiar en nosotros" con hitos reales

## Archivos Afectados

- `app/nosotros/page.tsx` — página existente

## Implementación

1. Leer el contenido existente de /nosotros
2. Enriquecer con biografías, fotos (si están disponibles), y credenciales
3. Agregar schema `Person` para el fundador en el JSON-LD
4. Mantener el tono auténtico chileno

## Estructura sugerida

```tsx
// Hero: Título + subtítulo
// Sección 1: Nuestra historia (origen, motivación)
// Sección 2: El equipo (fotos + bios)
// Sección 3: Nuestra misión
// Sección 4: Hitos (fundación 2024, +127 profesionales, etc.)
```

## Verificación

- Página /nosotros tiene contenido sustancial (>300 palabras)
- Schema Person agregado para el fundador
- `npm run build` pasa

## Comando para Claude Code

```bash
cd /root/estetikflow-landing
claude -p "Ejecuta GEO-FIX-012 según el plan en .harness/geo-plan/exec-plans/active/GEO-FIX-012.md" --allowedTools "Read,Edit,Write,Bash" --max-turns 12
```
