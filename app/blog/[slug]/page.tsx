import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogApi, BlogPostDetail } from "../config/api";

// Dynamic — no static generation for blog posts
export const dynamic = "force-dynamic";

async function fetchPost(slug: string): Promise<BlogPostDetail | null> {
  try {
    const res = await fetch(blogApi.endpoints.post(slug), {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    return { title: "Artículo no encontrado | EstetikFlow" };
  }

  const title = post.seo_title || `${post.title} | EstetikFlow`;
  const description = post.meta_description || post.excerpt;

  return {
    title,
    description,
    keywords: post.meta_keywords,
    openGraph: {
      title,
      description,
      url: `https://www.estetikflow.cl/blog/${post.slug}`,
      type: "article",
      publishedTime: post.published_at,
      authors: [post.author],
      images: post.featured_image
        ? [{ url: post.featured_image, alt: post.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    notFound();
  }

  const date = new Date(post.published_at).toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Navbar />
      <main>
        <article>
          {/* Header */}
          <header className="bg-gradient-to-br from-secondary/30 via-white to-white pt-28 pb-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <Link href="/" className="hover:text-primary transition-colors">
                  Inicio
                </Link>
                <span>·</span>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
                <span>·</span>
                <span className="text-gray-400 truncate">{post.title}</span>
              </div>

              {/* Category & Meta */}
              <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
                {post.category && (
                  <Link
                    href={`/blog?category=${post.category.slug}`}
                    className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                  >
                    {post.category.name}
                  </Link>
                )}
                <span className="text-gray-500">{date}</span>
                <span className="text-gray-300">·</span>
                <span className="text-gray-500">{post.reading_time_minutes} min de lectura</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D2B28] leading-tight mb-4">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-lg text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0D2B28]">{post.author}</p>
                  <p className="text-xs text-gray-500">EstetikFlow</p>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.featured_image && (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-10">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full rounded-2xl shadow-lg aspect-video object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div
              className="prose prose-lg max-w-none prose-headings:text-[#0D2B28] prose-a:text-primary prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10 text-center">
              <h3 className="text-xl font-bold text-[#0D2B28] mb-2">
                ¿Lista para digitalizar tu clínica?
              </h3>
              <p className="text-gray-600 mb-4">
                Agenda online, fichas clínicas y control de inventario en un solo lugar.
              </p>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-colors shadow-lg shadow-accent/20"
              >
                Probar EstetikFlow gratis
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Back to blog */}
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
              >
                ← Volver al blog
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
