"use client"
import React, { useState, useRef } from 'react';
import ServiceCard from './ServiceCard';

const servicesData = [
    {
        title: "Digital Transformation",
        description: "Modernize legacy systems and integrate intelligent, cloud-native architectures to optimize enterprise workflow efficiency.",
        href: "/services/digital-transformation",
        bgImage: "/dt.png"
    },
    {
        title: "Digital Marketing",
        description: "Data-driven, high-velocity performance marketing structures built to capture global market share and maximize ROI metrics.",
        href: "/services/digital-marketing",
        bgImage: "/images/srv-marketing.jpg"
    },
    {
        title: "AI Consultancy",
        description: "Deploy automated natural language layers and deep learning models tailored directly to your core operational processes.",
        href: "/services/ai-consultancy",
        bgImage: "/images/srv-ai.jpg"
    },
    {
        title: "Vocational & Technical Training",
        description: "Empower engineering teams through enterprise-level software workflows, cloud platforms, and modern coding paradigms.",
        href: "/services/training",
        bgImage: "/images/srv-training.jpg"
    },
    {
        title: "End To End Business Consultancy",
        description: "Strategic execution roadmaps spanning compliance structures, global scaling strategy, and digital infrastructure blueprinting.",
        href: "/services/business-consultancy",
        bgImage: "/images/srv-consulting.jpg"
    },
    {
        title: "Web Development",
        description: "Architecting high-concurrency, ultra-fast Next.js/MERN stack digital storefronts and core enterprise application dashboards.",
        href: "/services/web-development",
        bgImage: "/images/srv-web.jpg"
    },
    {
        title: "Mobile Apps Development",
        description: "Premium cross-platform iOS and Android native utility configurations engineered for extreme performance and clean UX aesthetics.",
        href: "/services/mobile-development",
        bgImage: "/images/srv-mobile.jpg"
    },
    {
        title: "Content Writing & Creation",
        description: "Highly technical, SEO-optimized system documentation, branding copy, and precise multi-channel corporate positioning arrays.",
        href: "/services/content-creation",
        bgImage: "/images/srv-content.jpg"
    },
    {
        title: "UI/UX Designing",
        description: "Cinematic digital interfaces built on high-end layouts, micro-interactions, and premium glassmorphism visual tokens.",
        href: "/services/ui-ux",
        bgImage: "/images/srv-uiux.jpg"
    },
    {
        title: "User Acceptance Testing",
        description: "Rigorous quality assurance tracking frameworks ensuring full compliance, security protocols, and total functional verification.",
        href: "/services/uat",
        bgImage: "/images/srv-testing.jpg"
    },
    {
        title: "System Integration",
        description: "Orchestrate decoupled multi-tenant cloud ecosystems, API pipelines, and automated database syncing routines seamlessly.",
        href: "/services/system-integration",
        bgImage: "/images/srv-integration.jpg"
    },
    {
        title: "E-Commerce Solutions",
        description: "Next-gen storefront platforms featuring automated checkout configurations, robust transaction layers, and inventory hooks.",
        href: "/services/ecommerce",
        bgImage: "/images/srv-ecommerce.jpg"
    }
];

export default function OurServices() {
    const [showAll, setShowAll] = useState<boolean>(false);
    const gridTopRef = useRef<HTMLDivElement>(null);

    const visibleServices = showAll ? servicesData : servicesData.slice(0, 6);

    const handleToggle = () => {
        if (showAll) {
            // Smoothly scroll back up to the grid top anchor when collapsing
            gridTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Minor delay to let the scroll trigger before modifying the DOM height layout
            setTimeout(() => setShowAll(false), 200);
        } else {
            setShowAll(true);
        }
    };

    return (
        <div className="w-full">
            {/* Scroll Anchor Top Element */}
            <div ref={gridTopRef} className="scroll-mt-24" />

            {/* 12-Column Grid Wrapper */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
                {visibleServices.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        href={service.href}
                        bgImage={service.bgImage}
                    />
                ))}
            </div>

            {/* Controller Toggle Button */}
            <div className="w-full flex justify-center mt-16">
                <button
                    onClick={handleToggle}
                    className="border-2 border-[#0A1116] text-[#0A1116] hover:bg-[#0A1116] hover:text-white px-12 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-md shadow-sm hover:shadow-xl"
                >
                    {showAll ? "Show Less Solutions" : "Explore All Services"}
                </button>
            </div>
        </div>
    );
}