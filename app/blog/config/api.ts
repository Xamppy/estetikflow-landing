// Blog API Configuration
// Uses same base URL as the booking system
const RAW_API_URL = process.env.NEXT_PUBLIC_API_URL;
const isVercelDeployment = process.env.VERCEL === "1";

if (!RAW_API_URL && isVercelDeployment) {
  throw new Error(
    "Missing NEXT_PUBLIC_API_URL. Configure it in Vercel (Production/Preview)."
  );
}

const API_URL = (RAW_API_URL || "http://localhost:8000").replace(/\/$/, "");

export const blogApi = {
  baseUrl: API_URL,
  endpoints: {
    // GET /api/public/blog/?page=1&category=slug
    posts: (page = 1, category?: string) => {
      const params = new URLSearchParams();
      params.set("page", String(page));
      if (category) params.set("category", category);
      return `${API_URL}/api/public/blog/?${params.toString()}`;
    },

    // GET /api/public/blog/<slug>/
    post: (slug: string) => `${API_URL}/api/public/blog/${slug}/`,

    // GET /api/public/blog/categorias/
    categories: () => `${API_URL}/api/public/blog/categorias/`,

    // POST /api/blog/create — server-side proxy (keeps API key secret)
    create: () => `/api/blog/create`,
  },
};

// Types matching Django API (snake_case)
export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  post_count?: number;
}

export interface BlogPostPreview {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string | null;
  category: BlogCategory | null;
  published_at: string;
  author: string;
  reading_time_minutes: number;
  tags: string[];
}

export interface BlogPostDetail extends BlogPostPreview {
  content: string;
  meta_description: string;
  meta_keywords: string;
  seo_title: string | null;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
