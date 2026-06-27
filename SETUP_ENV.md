# 🔧 Environment Setup

## Create .env.local File

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
BLOG_API_KEY=your-secret-blog-api-key-here
```

- `NEXT_PUBLIC_API_URL` — Django backend URL (exposed to client)
- `BLOG_API_KEY` — Server-side only, must match Dokploy's `BLOG_API_KEY`

## 🚀 Restart

```bash
npm run dev
```

## 📝 Creating Blog Posts

Via the proxy endpoint (key stays server-side):

```bash
curl -X POST http://localhost:3000/api/blog/create \
  -F "title=Mi Articulo" \
  -F "content=<p>Contenido HTML</p>" \
  -F "category_slug=podologia" \
  -F "status=published" \
  -F "featured_image=@/ruta/imagen.jpg"
```
