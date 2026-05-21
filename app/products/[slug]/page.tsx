// app/products/[slug]/page.tsx
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { productArchive } from '@/config/products'; // We will create this next!
import { ArrowUpRight } from 'lucide-react';

export default function UnifiedProductPage() {
    const params = useParams();


    // params.slug tells us exactly which page the user is on (e.g., "erp" or "pms")
    const currentPage = params?.slug as string;

    // Grab the correct text data matching this page name
    const data = productArchive[currentPage];
    const words = data.title.split(" ");


    // If someone goes to /products/xyz (which doesn't exist), show a 404
    if (!data) return notFound();

    return (
        <main className="bg-white min-h-screen font-sans">

            {/* 1. HERO SECTION */}
            <section className="relative bg-[#000000] py-36 px-6 lg:px-12 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <Image src={data.heroImg} alt={data.title} fill className="object-cover opacity-25" priority />
                    <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1116] via-transparent to-transparent z-15" />
                </div>
                <div className="max-w-[1440px] mx-auto relative z-20">
                    <div className="max-w-[820px]">
                        <h1 className="text-white text-5xl md:text-7xl font-bold uppercase">
                            {words.map((word, index) => (
                                <span
                                    key={index}
                                    className={index === 1 ? "text-[#E1702C]" : ""}
                                >
                                    {word}{" "}
                                </span>
                            ))}
                        </h1>
                        <p className="text-white/70 text-lg leading-relaxed max-w-[580px] font-light">
                            {data.heroSubtext}
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. SUB-HERO HIGHLIGHTS BAR */}
            <section className="border-b border-gray-100 py-6 px-6 lg:px-12 bg-white">
                <div className="max-w-[1440px] mx-auto flex flex-wrap justify-between gap-x-12 gap-y-6 items-center">
                    {data.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                            <div className="p-2.5 bg-[#FFF7ED] rounded-xl text-[#E1702C] shrink-0">
                                {item.icon}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#0A1116] font-bold text-sm uppercase tracking-tight leading-none mb-1">{item.label}</span>
                                <span className="text-gray-400 text-[11px] font-mono tracking-tight leading-none">{item.subtext}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. OVERVIEW SECTION */}
            <section className="py-32 px-6 lg:px-12 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-6 space-y-6">
                        <h2 className="text-[#0A1116] text-3xl font-bold tracking-tighter uppercase">Overview</h2>
                        <p className="text-[#0A1116]/70 text-xl leading-[1.75] max-w-[560px]">
                            {data.overviewText}
                        </p>
                    </div>
                    <div className="lg:col-span-6 relative h-[380px] lg:h-[500px] w-full rounded-2xl overflow-hidden border border-gray-100 shadow-md">
                        <Image src={data.overviewImg} alt="Overview image" fill className="object-contain object-center scale-105" />
                    </div>
                </div>
            </section>

            {/* 4. FEATURES & BENEFITS CARDS */}
            <section className="bg-[#FAFBFB] py-32 px-6 lg:px-12 border-t border-b border-gray-100">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center max-w-xl mx-auto mb-20">
                        <span className="text-[10px] font-mono font-black tracking-[0.4em] text-[#E1702C] uppercase block mb-3">Capabilities</span>
                        <h2 className="text-[#0A1116] text-4xl font-bold tracking-tighter uppercase">Features & Benefits</h2>
                    </div>
                    <div className="grid grid-cols-12 gap-6 md:gap-8">
                        {data.features.map((feature, idx) => (
                            <div key={idx} className="col-span-12 md:col-span-6 lg:col-span-3 bg-white border border-gray-100 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group min-h-[220px]">
                                <div>
                                    <div className="p-3 bg-[#0A1116] rounded-xl text-[#E1702C] w-fit mb-6 transition-transform duration-500 group-hover:scale-110">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-[#0A1116] text-lg font-bold tracking-tight mb-3 uppercase leading-snug">{feature.title}</h3>
                                    <p className="text-[#0A1116]/60 text-[12px] leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CALL TO ACTION SECTION */}
            <section className="bg-[#1C1212] py-28 px-6 lg:px-12 text-white text-center relative overflow-hidden">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-tight">{data.ctaTitle}</h2>
                    <p className="text-white/60 text-sm max-w-xl mx-auto">{data.ctaDescription}</p>
                    <div className="pt-4">
                        <Link href="/contact" className="inline-block bg-white text-[#1C1212] hover:bg-[#D4FF59] hover:text-black transition-all duration-300 px-10 py-4 text-[10px] font-bold uppercase tracking-widest rounded-none shadow-xl">
                            Get Started Now
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}