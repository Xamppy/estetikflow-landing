# GEO-FIX-004: Agregar reglas AI crawlers a robots.txt

**Severidad:** 🟡 High  
**Fase:** 1  
**Repo:** estetikflow-landing  
**Tiempo estimado:** 15 min  
**Dependencias:** Ninguna

## Síntoma

El `robots.txt` actual solo tiene `User-agent: *` sin reglas específicas para AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot). Esto significa que no hay control granular sobre qué crawlers pueden acceder al sitio para training vs crawling.

## Causa Raíz

robots.txt configurado con enfoque SEO tradicional, sin considerar crawlers de AI generativa.

## Solución

Agregar reglas específicas para AI crawlers en `public/robots.txt`:

```txt
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /
```

**Nota:** Permitir todos (Allow: /) es la decisión correcta para GEO. Si en el futuro se quiere bloquear AI training, se puede cambiar a Disallow selectivamente.

## Archivos Afectados

- `public/robots.txt` — modificar existente

## Verificación

- `curl https://www.estetikflow.cl/robots.txt` muestra las nuevas reglas
- Crawlers AI tienen acceso explícito
- Crawlers tradicionales no se ven afectados

## Comando para Claude Code

```bash
cd /root/estetikflow-landing
claude -p "Ejecuta GEO-FIX-004 según el plan en .harness/geo-plan/exec-plans/active/GEO-FIX-004.md" --allowedTools "Read,Edit" --max-turns 3
```
