import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "./components/BlogCard";
import CategoryFilter from "./components/CategoryFilter";
import { blogApi, BlogPostPreview, BlogCategory, PaginatedResponse } from "./config/api";

// Revalidate every hour
export const revalidate = 3600;

async function fetchPosts(page: number, category?: string): Promise<PaginatedResponse<BlogPostPreview>> {
  try {
    const res = await fetch(blogApi.endpoints.posts(page, category), {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
  } catch {
    return { count: 0, next: null, previous: null, results: [] };
  }
}

async function fetchCategories(): Promise<BlogCategory[]> {
  try {
    const res = await fetch(blogApi.endpoints.categories(), {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export const metadata = {
  title: "Blog | EstetikFlow",
  description:
    "Consejos, guías y novedades sobre podología, cuidado de los pies y gestión de clínicas de estética en Chile.",
  openGraph: {
    title: "Blog | EstetikFlow",
    description:
      "Consejos, guías y novedades sobre podología y gestión de clínicas de estética en Chile.",
    url: "https://www.estetikflow.cl/blog",
    siteName: "EstetikFlow",
    locale: "es_CL",
    type: "website",
  },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || "1", 10);
  const category = params.category;

  const [data, categories] = await Promise.all([
    fetchPosts(page, category),
    fetchCategories(),
  ]);

  const { results: posts, count, next: nextUrl, previous: prevUrl } = data;
  const totalPages = Math.ceil(count / 12) || 1;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-secondary/30 via-white to-white pt-24 pb-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              📖 Blog
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D2B28] mb-4">
              Consejos & Novedades
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            </p>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="mb-10">
              <CategoryFilter categories={categories} />
            </div>

            {/* Posts Grid */}
            {posts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {posts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex items-center justify-center gap-2">
                    {prevUrl && (
                      <Link
                        href={`/blog?page=${page - 1}${category ? `&category=${category}` : ""}`}
                        className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                      >
                        ← Anterior
                      </Link>
                    )}
                    <span className="px-4 py-2 text-sm text-gray-500">
                      Página {page} de {totalPages}
                    </span>
                    {nextUrl && (
                      <Link
                        href={`/blog?page=${page + 1}${category ? `&category=${category}` : ""}`}
                        className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                      >
                        Siguiente →
                      </Link>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <span className="text-5xl mb-4 block">📝</span>
                <h3 className="text-xl font-semibold text-[#0D2B28] mb-2">
                  Aún no hay artículos
                </h3>
                <p className="text-gray-500">
                  Estamos preparando contenido para ti. ¡Vuelve pronto!
                </p>
                <Link
                  href="/"
                  className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  ← Volver al inicio
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
