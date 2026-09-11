import Link from "next/link";

import { BlogCard } from "@/components/blog-card";
import { SectionTag } from "@/components/section-tag";
import { getLatestPosts } from "@/lib/blog";

export function BlogSection() {
  return (
    <section id="blog" className="scroll-mt-24 bg-paper-white py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionTag>Güncel</SectionTag>
            <h2 className="mt-4 max-w-[20ch] font-signifier text-[clamp(36px,4.6vw,56px)] font-[400] leading-[1.2] tracking-[-0.015em] text-ink-black">
              Bakım ve ölçümden <em className="italic">pratik</em> ipuçları.
            </h2>
          </div>
          <Link
            href="/blog"
            className="pb-2 text-[15px] font-[430] text-ink-black decoration-ink-black/30 underline-offset-4 hover:underline"
          >
            Tüm Yazılar <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {getLatestPosts(3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
