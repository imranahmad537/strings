"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const servicesData = [
    { id: 1, title: "Digital Transformation", bgImage: "/services_images/Data Migration.jpg", squareCorner: "rounded-tl-none" },
    { id: 2, title: "Digital Marketing", bgImage: "/services_images/Digital Marketing.jpg", squareCorner: "rounded-tr-none" },
    { id: 3, title: "AI Consultancy", bgImage: "/services_images/AI Consultancy.jpg", squareCorner: "rounded-bl-none" },
    { id: 4, title: "Vocational & Technical Training", bgImage: "/services_images/Vocational & Technical Training.jpg", squareCorner: "rounded-br-none" },
    { id: 5, title: "End To End Business Consultancy", bgImage: "/services_images/End To End Business Consultancy.jpg", squareCorner: "rounded-tl-none" },
    { id: 6, title: "Web Development", bgImage: "/services_images/Web Development.jpg", squareCorner: "rounded-bl-none" },
    { id: 7, title: "Mobile Apps Development", bgImage: "/services_images/Mobile Apps Development.jpg", squareCorner: "rounded-tr-none" },
    { id: 8, title: "Content Writing & Creation", bgImage: "/services_images/Contant Writing & Creation.jpg", squareCorner: "rounded-br-none" },
    { id: 9, title: "UI/UX Designing", bgImage: "/services_images/UI UX Designing.jpg", squareCorner: "rounded-tl-none" },
    { id: 10, title: "User Acceptance Testing", bgImage: "/services_images/User Acceptance Testing.jpg", squareCorner: "rounded-bl-none" },
    { id: 11, title: "System Integration", bgImage: "/services_images/System Integration.jpg", squareCorner: "rounded-tr-none" },
    { id: 12, title: "E-Commerce Solutions", bgImage: "/services_images/E-Commerce Solutions.jpg", squareCorner: "rounded-br-none" },
    { id: 13, title: "E-Book Translation", bgImage: "/services_images/E-Book Translation.jpg", squareCorner: "rounded-bl-none" },
    { id: 14, title: "Data Migration", bgImage: "/services_images/Data Migration.jpg", squareCorner: "rounded-tr-none" },
];

const defaultDescription = "For any inquiries concerning our products or services, our dedicated team is available to provide comprehensive support.";

export default function ServicesPage() {
    // 1. ADD STATE FOR VISIBLE CARDS (Default is 6 for 2 rows of 3)
    const [visibleCount, setVisibleCount] = useState(6);

    // 2. TOGGLE BOOLEAN TO CHECK IF ALL ARE SHOWING
    const isShowingAll = visibleCount >= servicesData.length;

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
                        href="/services"
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

                {/* GRID 1: The First 12 Cards (Standard 3 Columns) */}
                <div className="grid grid-cols-1 justify-center item-center md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1280px] mx-auto w-full">
                    {/* 3. USE VISIBLE COUNT IN THE SLICE INSTEAD OF 14 */}
                    {servicesData.slice(0, visibleCount).map((service) => (
                        <div
                            key={service.id}
                            className="relative overflow-hidden rounded-3xl min-h-[320px] flex flex-col bg-black shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl group"
                        >
                            {/* 1. IMAGE (z-0) */}
                            <Image
                                src={service.bgImage}
                                alt={service.title}
                                fill
                                className="object-cover"
                                style={{
                                    filter: "brightness(0.15)"
                                }}
                            />
                            {/* <div className="absolute inset-0 bg-black/80"></div> */}
                            <div className="absolute inset-0 bg-black-500"></div>
                            {/* 3. CONTENT (z-20) */}
                            <div className="relative z-20 p-8 md:p-10 flex flex-col h-full flex-1">
                                <div className="flex-1 flex flex-col items-center justify-center text-center">
                                    <h3 className="text-white text-lg md:text-xl font-bold mb-4 leading-snug">
                                        {service.title}
                                    </h3>
                                    <hr className='text-[#E1702C] w-full my-5' />
                                    <div className="w-16 h-[2px] bg-[#E1702C] mb-4"></div>

                                    <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-[240px]">
                                        {defaultDescription}
                                    </p>
                                </div>

                                <div className="w-full text-right mt-auto pt-6">
                                    <Link
                                        href={`/services/${service.title
                                            .toLowerCase()
                                            .replace(/ & /g, '-')
                                            .replace(/ /g, '-')}`}
                                        className="text-[#E1702C] font-bold text-sm flex items-center gap-2 w-fit ml-auto group/link"
                                    >
                                        Read More
                                        <ArrowRight
                                            size={14}
                                            className="transition-transform duration-300 group-hover/link:translate-x-1"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 4. ADD THE BUTTON BENEATH THE GRID */}
                {servicesData.length > 6 && (
                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={() => setVisibleCount(isShowingAll ? 6 : servicesData.length)}
                            className="px-8 py-3 bg-[#E1702C] text-white font-bold text-sm tracking-wide rounded-full shadow-lg hover:bg-[#c45e22] hover:-translate-y-0.5 transition-all duration-300"
                        >
                            {isShowingAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}

                {/* GRID 2: The Last 2 Cards (Centered 2 Columns) */}
                {/* max-w-[840px] restricts the width so the 2 cards sit perfectly in the center under the 3-column grid */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[840px] mx-auto w-full mt-6 lg:mt-8">
                    {servicesData.slice(12, 14).map((service) => (
                        <div key={service.id} className="bg-black rounded-[2rem] overflow-hidden group min-h-[320px] flex flex-col relative transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl shadow-lg">
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={service.bgImage}
                                    alt={service.title}
                                    fill
                                    className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
                            </div>
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
                </div> */}

            </section>
        </main>
    );
}