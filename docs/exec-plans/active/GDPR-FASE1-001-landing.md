# GDPR-FASE1-001: Cumplimiento Ley 21.719 — Landing EstetikFlow

**Severidad:** 🔴 Crítica | **Fase:** 1 (antes del 1 dic 2026) | **Repo:** estetikflow-landing | **Rama:** main | **Est.:** 2h

## Objetivo

Actualizar el landing de EstetikFlow para cumplir con la **Ley 21.719** (Protección de Datos Personales Chile, vigente 1 diciembre 2026):
1. Actualizar política de privacidad (Ley 19.628 → 21.719)
2. Agregar derechos ARCO+ completos
3. Agregar banner de cookies con consentimiento granular
4. Agregar checkbox de consentimiento en formulario de reserva

## Archivos a modificar

| Archivo | Acción |
|---------|--------|
| `app/legal/page.jsx` | Actualizar sección privacidad con Ley 21.719 + ARCO+ + plazos + brechas |
| `app/reservar/[slug]/components/PatientForm.tsx` | Agregar checkbox consentimiento NO pre-marcado |
| `components/CookieConsent.tsx` | NUEVO — Banner de cookies granular (funcional/analítica/marketing) |
| `app/layout.tsx` | Importar y renderizar CookieConsent |
| `components/Footer.jsx` | Links a `/legal#privacidad` y `/legal#terminos` (ya existen, verificar) |

## Cambios detallados

### 1. `app/legal/page.jsx` — Sección Privacidad

REEMPLAZAR la sección `#privacidad` completa. Cambios clave:
- ❌ "Ley 19.628" → ✅ "Ley 21.719 de Protección de Datos Personales"
- Agregar los 6 derechos ARCO+ con sus plazos:
  - Acceso (15 días hábiles)
  - Rectificación (15 días hábiles)
  - Cancelación/Supresión (3 días hábiles)
  - Oposición (15 días hábiles, absoluto para marketing)
  - Portabilidad (15 días hábiles)
  - Decisiones automatizadas (15 días hábiles)
- Agregar sección "Consentimiento": explícito, registrable, revocable
- Agregar sección "Notificación de brechas": 5 días hábiles
- Agregar email de contacto para ejercer derechos: `privacidad@estetikflow.cl`
- Actualizar "Última actualización" a la fecha actual
- Base legal del tratamiento (consentimiento + ejecución contractual)
- Mención de la Agencia de Protección de Datos Personales como autoridad fiscalizadora

### 2. `app/reservar/[slug]/components/PatientForm.tsx`

Agregar ANTES del botón "Confirmar Reserva":
```jsx
<label className="flex items-start gap-3 cursor-pointer">
  <input
    type="checkbox"
    required
    checked={consentimiento}
    onChange={(e) => setConsentimiento(e.target.checked)}
    className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
  />
  <span className="text-sm text-gray-600">
    Autorizo el tratamiento de mis datos personales para la gestión de esta reserva,
    de acuerdo a la{" "}
    <a href="/legal#privacidad" target="_blank" className="text-primary underline">
      Política de Privacidad
    </a>{" "}
    (Ley 21.719). Puedo revocar este consentimiento en cualquier momento.
  </span>
</label>
```
- Agregar estado `const [consentimiento, setConsentimiento] = useState(false)`
- No pre-marcar el checkbox (falso por defecto)
- Hacerlo `required` para que no se pueda enviar sin aceptar
- Si el backend acepta el campo, enviarlo en el POST

### 3. `components/CookieConsent.tsx` (NUEVO)

Banner de cookies con 3 categorías (funcional, analítica, marketing):
- **Funcionales** (obligatorias, siempre activas) — sesión, carrito, CSRF
- **Analíticas** (opcional) — Google Analytics
- **Marketing** (opcional) — Meta Pixel, Facebook Ads

Solo se puede aceptar todo o personalizar. Guardar preferencia en localStorage con timestamp.
Formato "cookie_consent": `{functional:true, analytics:bool, marketing:bool, timestamp:ISO}`

### 4. `app/layout.tsx`

Agregar import y renderizado del CookieConsent:
```tsx
import { CookieConsent } from '@/components/CookieConsent';
// Dentro del body, al final:
<CookieConsent />
```

## Verificación

```bash
cd /root/estetikflow-landing
npm run build  # Debe compilar sin errores
```
- Verificar que `/legal` muestra la nueva política
- Verificar que el banner de cookies aparece
- Verificar que el formulario de reserva tiene checkbox de consentimiento

## Claude Code Command

```bash
claude --max-turns 15 "Implementa los cambios de la Ley 21.719 en el landing de EstetikFlow según el plan en docs/exec-plans/active/GDPR-FASE1-001-landing.md. Repo: /root/estetikflow-landing, rama main. npm run build antes de commit."
```
