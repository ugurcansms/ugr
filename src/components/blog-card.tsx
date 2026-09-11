import Image from "next/image";
import Link from "next/link";

import type { BlogPost } from "@/lib/blog";

export function BlogCard({
  post,
  priority = false,
}: {
  post: BlogPost;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-[24px] bg-mist-gray transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, 92vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-center gap-2.5 text-[12px] font-[480] text-ash-gray">
          <span className="uppercase tracking-[0.12em]">{post.category}</span>
          <span aria-hidden="true">·</span>
          <span>{post.date}</span>
        </div>
        <h3 className="mt-3 text-[20px] font-[480] leading-snug tracking-[-0.01em] text-ink-black">
          {post.title}
        </h3>
        <p className="mt-2.5 text-[14.5px] font-[400] leading-[1.55] text-slate-gray">
          {post.excerpt}
        </p>
        <span className="mt-auto pt-5 text-[15px] font-[430] text-ink-black decoration-ink-black/30 underline-offset-4 group-hover:underline">
          Devamını Oku <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
