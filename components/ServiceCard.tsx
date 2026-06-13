"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const servicesData = [
    { id: 1, title: "Digital Transformation", bgImage: "/services/transformation.jpg" },
    { id: 2, title: "Digital Marketing", bgImage: "/services/marketing.jpg" },
    { id: 3, title: "AI Consultancy", bgImage: "/services/ai.jpg" },
    { id: 4, title: "Vocational & Technical Training", bgImage: "/services/training.jpg" },
    { id: 5, title: "End To End Business Consultancy", bgImage: "/services/consultancy.jpg" },
    { id: 6, title: "Web Development", bgImage: "/services/web.jpg" },
    { id: 7, title: "Mobile Apps Development", bgImage: "/services/mobile.jpg" },
    { id: 8, title: "Content Writing & Creation", bgImage: "/services/content.jpg" },
    { id: 9, title: "UI/UX Designing", bgImage: "/services/uiux.jpg" },
    { id: 10, title: "User Acceptance Testing", bgImage: "/services/uat.jpg" },
    { id: 11, title: "System Integration", bgImage: "/services/integration.jpg" },
    { id: 12, title: "E-Commerce Solutions", bgImage: "/services/ecommerce.jpg" },
    { id: 13, title: "E-Book Translation", bgImage: "/services/translation.jpg" },
    { id: 14, title: "Data Migration", bgImage: "/services/data.jpg" },
];

const defaultDescription = "For any inquiries concerning our products or services, our dedicated team is available to provide comprehensive support.";

export default function ServicesPage() {
    return (
        <main className="bg-white min-h-screen font-sans">

            {/* HERO SECTION */}
            <section className="relative w-full min-h-screen flex items-center justify-center text-center px-6">
                <div className="absolute inset-0 z-0 bg-black">
                    <Image
                        src="/service-hero.png" // Verify your image path
                        alt="Enterprise Technology"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-12">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight leading-[1.1] mb-6">
                        Architecting the Future of <br />
                        <span className="text-[#E1702C]">Enterprise Technology</span>
                    </h1>
                    <p className="text-white/80 text-sm md:text-base max-w-[600px] mb-8 leading-relaxed">
                        We deliver high-performance digital systems and engineering excellence. From legacy modernization to AI-driven automation, we power global innovation.
                    </p>
                    <Link
                        href="#services"
                        className="bg-[#E1702C] hover:bg-[#c96225] text-white font-bold text-xs tracking-widest uppercase px-8 py-3.5 rounded transition-all"
                    >
                        Explore Services
                    </Link>
                </div>
            </section>

            {/* SERVICES GRID SECTION */}
            <section id="services" className="py-24 px-6 md:px-8 max-w-[1440px] mx-auto w-full">

                {/* Section Header */}
                <div className="flex items-center justify-center gap-6 mb-16">
                    <div className="h-[1px] bg-gray-300 flex-1 max-w-[180px]"></div>
                    <h2 className="text-[#0A1116] text-xl font-bold tracking-[0.2em] uppercase">
                        Our Services
                    </h2>
                    <div className="h-[1px] bg-gray-300 flex-1 max-w-[180px]"></div>
                </div>

                {/* THE 6-COLUMN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 max-w-[1280px] mx-auto w-full">

                    {servicesData.map((service, index) => (
                        <div
                            key={service.id}
                            // md:col-span-1 = 2 per row on tablet
                            // lg:col-span-2 = 3 per row on desktop
                            // lg:col-start-2 centers the 13th item perfectly
                            className={`bg-black rounded-[2rem] overflow-hidden group min-h-[320px] flex flex-col relative transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl shadow-lg
                                md:col-span-1 lg:col-span-2
                                ${index === 12 ? 'lg:col-start-2' : ''} 
                            `}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={service.bgImage}
                                    alt={service.title}
                                    fill
                                    className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
                            </div>

                            {/* Card Content */}
                            <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">

                                <div className="flex-1 flex flex-col items-center justify-center text-center mt-4">
                                    <h3 className="text-white text-lg md:text-xl font-bold mb-4 leading-snug">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-300 text-[13px] leading-relaxed max-w-[240px]">
                                        {defaultDescription}
                                    </p>
                                </div>

                                <div className="w-full text-left mt-auto pt-6">
                                    <Link
                                        href={`/services/${service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                        className="text-[#E1702C] font-bold text-xs flex items-center gap-2 group/link w-fit"
                                    >
                                        Read More <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}