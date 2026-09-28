'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogService } from '@/lib/services';
import { BlogPost, BlogCategory } from '@/lib/types';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function BlogPage() {
  const { lang, t } = useLanguage();
  const [activeCategoryId, setActiveCategoryId] = useState('all');
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    blogService.getBlogCategories(lang).then(setCategories);
  }, [lang]);

  useEffect(() => {
    let isCancelled = false;
    blogService
      .getBlogPosts({ locale: lang as any, categoryId: activeCategoryId })
      .then((data) => {
        if (!isCancelled) {
          setPosts(data);
        }
      });
    return () => {
      isCancelled = true;
    };
  }, [lang, activeCategoryId]);



  return (
    <div className="flex flex-col min-h-screen">
      {/* Subpage Hero Header */}
      <header className="bg-brand-navy px-4 pb-20 pt-36 text-white sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-subtle">
            {t.pages.blog.eyebrow}
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-5xl font-black uppercase leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {t.pages.blog.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">
            {t.pages.blog.desc}
          </p>
        </div>
      </header>

      {/* Main Content & Categories */}
      <section className="bg-surface-cream px-4 py-[var(--section-y)] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Filter Categories */}
          <div className="mb-12 flex flex-wrap gap-2 border-b border-ink/10 pb-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`rounded-box px-4 py-2 text-xs font-bold transition ${
                  activeCategoryId === cat.id
                    ? 'bg-brand-navy text-surface-cream shadow-sm'
                    : 'border border-ink/10 bg-surface-card text-ink-soft hover:border-brand-navy/30 hover:text-brand-navy'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}

                className="flex flex-col overflow-hidden rounded-box border border-ink/10 bg-surface-card shadow-sm transition duration-300 hover:border-brand-navy/30 hover:shadow-lg group"
              >
                {/* Cover Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-navy/10">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-115 group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-box bg-brand-navy/85 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-surface-cream">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <span className="text-xs font-semibold text-brand-soft">
                      {post.date}
                    </span>
                    <h2 className="mt-2 font-display text-xl font-bold uppercase leading-snug text-brand-navy group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft line-clamp-3">
                      {post.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-ink/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-navy group-hover:text-accent transition-colors">
                      {t.blogPage.readBriefing}
                    </span>
                    <span className="text-xs text-ink-soft">
                      {t.blogPage.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-navy px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl font-bold uppercase sm:text-5xl">
              {t.aboutPage.ctaTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
              {t.aboutPage.ctaDesc}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              className="rounded-box bg-surface-cream px-6 py-3.5 text-sm font-bold text-brand-navy transition hover:bg-white shadow-lg"
              href="/#contact"
            >
              {t.common.designProgram}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
