import type { Metadata } from "next";

import { BlogCard } from "@/components/blog-card";
import { BlogPagination } from "@/components/blog-pagination";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Klima bakımı, F-Gaz ölçümünün önemi ve enerji tasarrufu üzerine pratik rehberler ve güncel içerikler.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  // searchParams Promise'dir (Next 16) — await etmeden erişilemez.
  const { page: pageParam } = await searchParams;
  const { posts, totalPages, page } = getBlogPosts(Number(pageParam) || 1);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Bakım, ölçüm ve <em className="italic">tasarruf</em> üzerine.
          </>
        }
        intro="Klima bakımı, F-Gaz ölçümünün önemi ve enerji tasarrufu konularında pratik rehberler."
      />
      <section className="bg-paper-white py-20 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-6 px-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} priority={i === 0} />
          ))}
        </div>
        <div className="mx-auto max-w-[1200px] px-6">
          <BlogPagination currentPage={page} totalPages={totalPages} />
        </div>
      </section>

      <CtaBanner
        title="Bizimle İletişime Geçin."
        description="Ücretsiz keşif ve size özel fiyat teklifi için bizimle iletişime geçin."
      />
    </>
  );
}
