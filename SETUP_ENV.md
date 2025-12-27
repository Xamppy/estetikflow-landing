# IMPORTANT: Environment Setup Required

## 🔧 Create .env.local File

Before testing the booking system, you need to create a `.env.local` file in your project root:

**File location:**
```
estetikflow-landing/
├── app/
├── components/
├── .env.local  ← CREATE THIS FILE
├── package.json
└── ...
```

**File contents:**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

> Replace `http://localhost:8000` with your Django server URL

## 🚀 After Creating .env.local

Restart your development server:
```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## ✅ You're Ready!

Test the booking page at: `http://localhost:3000/reservar/[your-clinic-slug]`
