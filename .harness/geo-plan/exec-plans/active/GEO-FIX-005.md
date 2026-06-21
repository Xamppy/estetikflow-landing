# GEO-FIX-005: Publicar artículos en el blog (producción)

**Severidad:** 🟡 High  
**Fase:** 2  
**Repo:** podoclinic-saas + cronjobs  
**Tiempo estimado:** 30 min  
**Dependencias:** ⚠️ Deploy del endpoint API Key en producción (usuario via Dokploy)

## Síntoma

El blog en `estetikflow.cl/blog` muestra "Aún no hay artículos". Los cronjobs de blog escriben en la BD local (SQLite) pero no en producción (PostgreSQL en `api.estetikflow.cl`).

## Causa Raíz

Arquitectura: cronjobs locales → BD local. Landing page → API de producción. Sin conexión entre ambos.

## Solución (ya implementada parcialmente)

1. ✅ **Endpoint creado:** `POST /api/public/blog/create/` con API Key (commit `5b108ce` en podoclinic-saas)
2. ⬜ **Pendiente:** Usuario deployea via Dokploy la branch `dev`
3. ⬜ **Pendiente:** Usuario agrega env var `BLOG_API_KEY=-PJKxfxUZwdIPvuDiPg7czueti5FbEfVsk04ELLx7eY`
4. ⬜ **Pendiente:** Modificar cronjobs para POST a producción

## Modificación de Cronjobs

Una vez desplegado, actualizar los 3 cronjobs de blog (Lunes, Miércoles, Viernes) para que en vez de ejecutar `create_blog_post` local, hagan POST a:

```
POST https://api.estetikflow.cl/api/public/blog/create/
Headers:
  X-Blog-API-Key: -PJKxfxUZwdIPvuDiPg7czueti5FbEfVsk04ELLx7eY
Content-Type: multipart/form-data

Fields:
  title: "Título del artículo"
  content: "<html>..."
  excerpt: "Resumen corto"
  category_slug: "cuidados-del-pie|tecnologia|emprendimiento"
  tags: "tag1,tag2"
  meta_description: "SEO desc"
  meta_keywords: "palabras, clave"
  featured_image: (archivo)
  status: "published"
```

## Archivos Afectados

- Cronjobs (via Hermes cronjob update)
- Podoclinic-saas backend (ya codeado, pendiente deploy)

## Verificación

- `curl -s https://api.estetikflow.cl/api/public/blog/` muestra artículos
- `estetikflow.cl/blog` muestra los artículos publicados
- Los cronjobs semanales crean artículos automáticamente en producción
