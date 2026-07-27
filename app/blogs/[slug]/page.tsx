import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';

interface BlogData {
    slug: string;
    title: string;
    orangeTitleWord: string;
    introText: string[];
    introImage: string;
    section1Title: string;
    section1Content: string[];
    bannerImage: string;
    section2Title: string;
    section2Image: string;
}


async function getBlogPost(slug: string): Promise<BlogData | null> {
    try {
        const filePath = path.join(process.cwd(), 'config', 'blogdata.json');
        const fileContents = await fs.readFile(filePath, 'utf8');
        const blogs: Record<string, BlogData> = JSON.parse(fileContents);
        return blogs[slug] || null;
    } catch (error) {
        console.error("Error loading blog JSON source database entry:", error);
        return null;
    }
}

interface PageProps {
    params: Promise<{ slug: string }>;
}
export default async function BlogDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white text-black font-sans">
                <h1 className="text-xl font-semibold tracking-tight">Post Entry Not Found</h1>
            </div>
        );
    }

    return (
        <div className="bg-white text-neutral-800 font-sans min-h-screen flex flex-col justify-between antialiased">


            {/* RENDER BODY FOR DISCRETE SECTIONS */}
            <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex-grow w-full">

                {/* SECTION 1: Dual Grid Interface — Header Title Words / Parallel Accent Media Box */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
                    <div className="lg:col-span-7 space-y-6">
                        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-orange-500 uppercase leading-none">
                            {post.title}
                        </h1>
                        <div className="space-y-3 text-[15px] leading-relaxed text-neutral-800 font-normal">
                            {post.introText.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-5 w-full aspect-[4/3] bg-neutral-200 rounded-sm overflow-hidden border border-neutral-300 shadow-inner">
                        <div className="w-full h-full bg-[#D9D9D9] flex items-center justify-center text-neutral-400 font-medium text-sm" />
                    </div>
                </div>

                {/* SECTION 2: Structural Explainer Blocks */}
                <div className="space-y-6 mb-20">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900">
                        {post.section1Title} <span className="text-orange-500">{post.orangeTitleWord}</span>
                    </h2>
                    <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700 font-normal">
                        {post.section1Content.map((paragraph, index) => (
                            <p key={index} className={index === 0 ? "font-bold text-neutral-900 text-base mb-2" : ""}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* SECTION 3: Large Custom Rounded Content Banner with Asymmetric Inner Corner Cutout */}
                <div className="w-full h-64 md:h-80 bg-[#1E1E1E] rounded-[2.5rem] relative overflow-hidden mb-24 flex items-center p-8 md:p-12 shadow-sm border border-neutral-800">
                    {/* Bottom Right Inverted Border Card Anchor Mock */}
                    <div className="absolute right-0 bottom-0 w-2/5 h-3/4 bg-white rounded-tl-[3.5rem] hidden md:block border-l border-t border-neutral-100" />

                    <div className="z-10 text-white space-y-3 max-w-sm">
                        <div className="w-28 h-9 border-2 border-dashed border-white/20 rounded-full flex items-center justify-center text-[10px] uppercase tracking-widest text-white/40" />
                        <div className="w-36 h-9 border-2 border-dashed border-white/30 rounded-full ml-8" />
                    </div>
                </div>

                {/* SECTION 4: Mirror Inverted Flex Grid Layout (Media Left, Content Right Side) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
                    <div className="lg:col-span-5 w-full aspect-[4/3] bg-neutral-200 rounded-sm overflow-hidden order-2 lg:order-1 border border-neutral-300 shadow-inner">
                        <div className="w-full h-full bg-[#D9D9D9]" />
                    </div>
                    <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-16">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-neutral-900 leading-tight">
                            {post.section2Title} <span className="text-orange-500">{post.orangeTitleWord}</span>
                        </h2>
                    </div>
                </div>

            </main>
        </div>
    );
}