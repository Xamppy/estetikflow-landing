"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BlogCategory } from "../config/api";

export default function CategoryFilter({
  categories,
}: {
  categories: BlogCategory[];
}) {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || null;

  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/blog"
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          !activeCategory
            ? "bg-primary text-white shadow-sm"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        Todas
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={`/blog?category=${cat.slug}`}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === cat.slug
              ? "bg-primary text-white shadow-sm"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {cat.name}
          {cat.post_count !== undefined && (
            <span className="ml-1.5 opacity-60">({cat.post_count})</span>
          )}
        </Link>
      ))}
    </div>
  );
}
