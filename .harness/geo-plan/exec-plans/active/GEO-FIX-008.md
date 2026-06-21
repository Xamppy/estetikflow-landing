# GEO-FIX-008: Agregar teléfono y dirección de contacto

**Severidad:** 🟡 High  
**Fase:** 2  
**Repo:** estetikflow-landing  
**Tiempo estimado:** 30 min  
**Dependencias:** Ninguna

## Síntoma

El sitio solo tiene email como medio de contacto (`contacto@estetikflow.cl`). No hay:
- Número de teléfono visible
- Dirección física verificable (solo "Iquique, Chile" en términos legales)
- Formulario de contacto funcional

Para un SaaS B2B en Chile, la falta de teléfono reduce significativamente la confianza del cliente.

## Causa Raíz

El proyecto está en etapa temprana (2024, persona natural "en proceso de formalización") y no se ha priorizado la información de contacto.

## Solución

1. **Agregar número de teléfono** de contacto (si Felipe tiene uno para el negocio)
2. **Agregar dirección** más específica en la página de contacto o footer
3. **Asegurar que el formulario de contacto** en `components/Contact.jsx` funciona correctamente
4. **Agregar los datos de contacto al Schema Organization** (`telephone`, `address`)

## Archivos Probablemente Afectados

- `components/Contact.jsx` — formulario de contacto
- `components/Footer.jsx` — información de contacto en footer
- `app/layout.tsx` — schema JSON-LD para agregar telephone y address
- Posiblemente una página `app/contacto/page.tsx` nueva o redirigida

## Implementación

1. Agregar teléfono y dirección en el footer
2. Agregar `telephone` y `address` en el Schema Organization del JSON-LD
3. Verificar que el formulario de Contact.jsx funciona (usa formsubmit.co)

## Verificación

- Teléfono visible en footer/página de contacto
- Schema Organization tiene `telephone` y `address`
- Formulario de contacto envía correctamente
- `npm run build` pasa

## Comando para Claude Code

```bash
cd /root/estetikflow-landing
claude -p "Ejecuta GEO-FIX-008 según el plan en .harness/geo-plan/exec-plans/active/GEO-FIX-008.md" --allowedTools "Read,Edit" --max-turns 8
```
