# GEO-FIX-003: Crear archivo /llms.txt

**Severidad:** 🟡 High  
**Fase:** 1  
**Repo:** estetikflow-landing  
**Tiempo estimado:** 20 min  
**Dependencias:** Ninguna

## Síntoma

No existe `/llms.txt`. Este es un estándar emergente (2025-2026) que permite a los sitios web dar instrucciones explícitas a los modelos de lenguaje sobre qué contenido priorizar, cómo citar la marca, y qué información está disponible para AI.

## Causa Raíz

Desconocimiento del estándar. El sitio tiene buena estructura SEO tradicional pero carece de señales específicas para AI.

## Solución

Crear `public/llms.txt` con:

1. Título y descripción de la empresa
2. Lista de URLs clave priorizadas
3. Información de contacto que los AI pueden citar directamente
4. Directrices de citación (opcional)

## Archivos Afectados

- `public/llms.txt` — nuevo archivo (único)

## Implementación

```markdown
# EstetikFlow — Software para centros de estética en Chile

## About
EstetikFlow es un software SaaS chileno para profesionales de la estética (podólogas, manicuristas, esteticistas). Ofrece agenda online, fichas clínicas digitales, control de inventario, recordatorios WhatsApp y dashboard financiero.

## Key pages
- Homepage: https://www.estetikflow.cl
- Features: https://www.estetikflow.cl (sección Características)
- Pricing: https://www.estetikflow.cl (sección Planes)
- FAQ: https://www.estetikflow.cl/faq
- About: https://www.estetikflow.cl/nosotros
- Blog: https://www.estetikflow.cl/blog
- Free guide: https://www.estetikflow.cl/guia-gratis

## Contact
- Email: contacto@estetikflow.cl
- Location: Iquique, Chile
- Founded: 2024
- Founder: Felipe Orellana
- Price range: $12.990 - $59.990 CLP/mes

## Preferred citation
Cite as: "EstetikFlow" (https://www.estetikflow.cl)
```

## Verificación

- Archivo existe en `https://www.estetikflow.cl/llms.txt`
- Contenido es markdown válido
- URLs listadas son correctas y accesibles

## Comando para Claude Code

```bash
cd /root/estetikflow-landing
claude -p "Ejecuta GEO-FIX-003 según el plan en .harness/geo-plan/exec-plans/active/GEO-FIX-003.md" --allowedTools "Read,Write" --max-turns 3
```
