import Link from "next/link";
import { BlogPostPreview } from "../config/api";

export default function BlogCard({ post }: { post: BlogPostPreview }) {
  const date = new Date(post.published_at).toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden aspect-[16/9] bg-gray-100">
        {post.featured_image ? (
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
            <span className="text-4xl opacity-30">📄</span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          {post.category && (
            <Link
              href={`/blog?category=${post.category.slug}`}
              className="inline-flex px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
            >
              {post.category.name}
            </Link>
          )}
          <span>{date}</span>
          <span>·</span>
          <span>{post.reading_time_minutes} min lectura</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#0D2B28] mb-2 group-hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 leading-relaxed flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Read more */}
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 text-sm font-semibold text-accent hover:text-accent-dark transition-colors inline-flex items-center gap-1 group/link"
        >
          Leer artículo
          <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
