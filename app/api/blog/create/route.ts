/**
 * POST /api/blog/create
 * 
 * Server-side proxy to Django blog create endpoint.
 * Keeps BLOG_API_KEY secret — never exposed to the client.
 * 
 * Requires: BLOG_API_KEY env var set in Vercel / production.
 */
import { NextRequest, NextResponse } from "next/server";

const DJANGO_API = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000").replace(/\/$/, "");
const BLOG_API_KEY = process.env.BLOG_API_KEY || "";

export async function POST(request: NextRequest) {
  if (!BLOG_API_KEY) {
    return NextResponse.json(
      { error: "BLOG_API_KEY no configurada en el servidor" },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();

    const res = await fetch(`${DJANGO_API}/api/public/blog/create/`, {
      method: "POST",
      headers: { "X-Blog-API-Key": BLOG_API_KEY },
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(data, { status: res.status });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al conectar con el backend Django" },
      { status: 502 }
    );
  }
}
