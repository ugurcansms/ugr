import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/cta-banner";
import { SectionTag } from "@/components/section-tag";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  return {
    title: post?.title ?? "Blog",
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <article className="bg-paper-white">
        <div className="mx-auto max-w-[760px] px-6 pb-20 pt-16 md:pt-24">
          <SectionTag>{post.category}</SectionTag>
          <h1 className="mt-4 font-signifier text-[clamp(32px,4.6vw,52px)] font-[400] leading-[1.25] tracking-[-0.015em] text-ink-black">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-3 text-[13px] font-[430] text-ash-gray">
            <span>{post.date}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[24px] ring-1 ring-ink-black/[0.06]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(min-width: 768px) 760px, 92vw"
              className="object-cover"
            />
          </div>

          <div className="mt-8 space-y-5">
            {post.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-[17px] font-[400] leading-[1.75] text-ink-black/85"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-ink-black/[0.08] pt-8">
            <Button
              render={<Link href="/blog" />}
              variant="outline"
              className="h-11 rounded-full border-ink-black bg-transparent px-6 text-[15px] font-[430] text-ink-black hover:bg-mist-gray hover:text-ink-black"
            >
              <span aria-hidden="true">←</span> Tüm Yazılar
            </Button>
            <span className="text-[13px] font-[430] text-ash-gray">
              {post.readingTime}
            </span>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-paper-white py-20 md:py-28">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionTag>İlgili yazılar</SectionTag>
                <h2 className="mt-4 max-w-[20ch] font-signifier text-[clamp(30px,3.8vw,44px)] font-[400] leading-[1.2] tracking-[-0.015em] text-ink-black">
                  Bunları da <em className="italic">okuyabilirsiniz</em>.
                </h2>
              </div>
              <Link
                href="/blog"
                className="pb-2 text-[15px] font-[430] text-ink-black decoration-ink-black/30 underline-offset-4 hover:underline"
              >
                Tüm Yazılar <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        title="Bizimle İletişime Geçin."
        description="Ücretsiz keşif ve size özel fiyat teklifi için bizimle iletişime geçin."
      />
    </>
  );
}
