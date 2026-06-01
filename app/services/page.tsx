"use client"
import React, { useState } from 'react';
import ServiceCard from '@/components/ServiceCard'; // Import the clean standalone component

const servicesData = [
    { title: "Digital Transformation", description: "For any inquiries concerning our products or services, our dedicated team is available to provide comprehensive support.", href: "/services/digital-transformation", bgImage: "/images/srv-digital.jpg" },
    { title: "Digital Marketing", description: "For any inquiries concerning our products or services, our dedicated team is available to provide comprehensive support.", href: "/services/digital-marketing", bgImage: "/images/srv-marketing.jpg" },
    { title: "AI Consultancy", description: "For any inquiries concerning our products or services, our dedicated team is available to provide comprehensive support.", href: "/services/ai-consultancy", bgImage: "/images/srv-ai.jpg" },
    { title: "Vocational & Technical Training", description: "For any inquiries concerning our products or services, our dedicated team is available to provide comprehensive support.", href: "/services/training", bgImage: "/images/srv-training.jpg" },
    { title: "End To End Business Consultancy", description: "For any inquiries concerning our products or services, our dedicated team is available to provide comprehensive support.", href: "/services/business-consultancy", bgImage: "/images/srv-consulting.jpg" },
    { title: "Web Development", description: "For any inquiries concerning our products or services, our dedicated team is available to provide comprehensive support.", href: "/services/web-development", bgImage: "/images/srv-web.jpg" },
    { title: "Mobile Apps Development", description: "For any inquiries concerning our products or services, our dedicated team is available to provide comprehensive support.", href: "/services/mobile-development", bgImage: "/images/srv-mobile.jpg" },
    { title: "Content Writing & Creation", description: "For any inquiries concerning our products or services, our dedicated team is available to provide comprehensive support.", href: "/services/content-creation", bgImage: "/images/srv-content.jpg" },
    { title: "UI/UX Designing", description: "For any inquiries concerning our products or services, our dedicated team is available to provide comprehensive support.", href: "/services/ui-ux", bgImage: "/images/srv-uiux.jpg" },
    { title: "User Acceptance Testing", description: "For any inquiries concerning our products or services, our dedicated team is available to provide comprehensive support.", href: "/services/uat", bgImage: "/images/srv-testing.jpg" },
    { title: "System Integration", description: "For any inquiries concerning our products or services, our dedicated team is available to provide comprehensive support.", href: "/services/system-integration", bgImage: "/images/srv-integration.jpg" },
    { title: "E-Commerce Solutions", description: "For any inquiries concerning our products or services, our dedicated team is available to provide comprehensive support.", href: "/services/ecommerce", bgImage: "/images/srv-ecommerce.jpg" }
];

export default function EmbeddedServicesGrid() {
    const [showAll, setShowAll] = useState<boolean>(false);

    // Slices data to exactly 6 items unless showAll is active
    const visibleServices = showAll ? servicesData : servicesData.slice(0, 6);

    return (
        <>
            {/* 12-Column Responsive Portfolio Grid */}
            <div className="grid grid-cols-12 gap-6 lg:gap-8 w-full">
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

            {/* Dynamic Toggle Button Container */}
            <div className="w-full flex justify-center mt-16">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="border-2 border-[#0A1116] text-[#0A1116] hover:bg-[#0A1116] hover:text-white px-12 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-md"
                >
                    {showAll ? "Show Less Solutions" : "Explore All Services"}
                </button>
            </div>
        </>
    );
}