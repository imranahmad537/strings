"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* =========================
   TYPES
========================= */

interface Service {
    title: string;
    description: string;
    href: string;
    bgImage: string;
}

/* =========================
   DUMMY DATA
========================= */

const services: Service[] = [
    {
        title: "Digital Transformation",
        description:
            "For any enquiries concerning our products or services, our dedicated team is available to provide comprehensive support.",
        href: "/services/digital-transformation",
        bgImage: "/images/service1.jpg",
    },
    {
        title: "ERP Solutions",
        description:
            "Custom ERP systems designed to streamline business operations and improve organizational efficiency.",
        href: "/services/erp-solutions",
        bgImage: "/images/service2.jpg",
    },
    {
        title: "Ecommerce Solutions",
        description:
            "Scalable ecommerce platforms tailored for growing businesses and online enterprises.",
        href: "/services/ecommerce",
        bgImage: "/images/service3.jpg",
    },
    {
        title: "Property Management",
        description:
            "Advanced property management systems with automation and real-time reporting features.",
        href: "/services/property-management",
        bgImage: "/images/service4.jpg",
    },
    {
        title: "Campus Management",
        description:
            "Smart campus solutions for attendance, fee management, communication, and reporting.",
        href: "/services/campus-management",
        bgImage: "/images/service5.jpg",
    },
    {
        title: "Learning Management",
        description:
            "Modern LMS platforms built for schools, universities, and online training institutes.",
        href: "/services/lms",
        bgImage: "/images/service6.jpg",
    },
    {
        title: "Mobile Applications",
        description:
            "Cross-platform mobile app development focused on performance and user experience.",
        href: "/services/mobile-apps",
        bgImage: "/images/service7.jpg",
    },
    {
        title: "Cloud Solutions",
        description:
            "Secure and scalable cloud infrastructure services for modern businesses.",
        href: "/services/cloud",
        bgImage: "/images/service8.jpg",
    },
];

/* =========================
   CARD COMPONENT
========================= */

function ServiceCard({
    title,
    description,
    href,
    bgImage,
}: Service) {
    return (
        <div className="group relative h-[380px] w-full overflow-hidden rounded-[32px] bg-black p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src={bgImage}
                    alt={title}
                    fill
                    className="object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/85" />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
            </div>

            {/* Grid Floor Effect */}
            <div className="absolute bottom-0 left-0 h-40 w-full opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_top,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col">

                {/* Title */}
                <h3 className="min-h-[70px] text-2xl font-bold leading-tight text-white line-clamp-2">
                    {title}
                </h3>

                {/* Divider */}
                <div className="my-5 h-[2px] w-full bg-[#E1702C]" />

                {/* Description */}
                <p className="min-h-[120px] text-sm leading-7 text-white/75 line-clamp-4">
                    {description}
                </p>

                {/* Button */}
                <div className="mt-auto">
                    <Link
                        href={href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#E1702C] transition-all duration-300 hover:gap-3"
                    >
                        Read More
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

/* =========================
   MAIN SECTION
========================= */

export default function ServicesSection() {
    const [showAll, setShowAll] = useState(false);

    const visibleServices = showAll
        ? services
        : services.slice(0, 6);

    return (
        <section className="bg-white px-6 py-20 lg:px-12">

            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-14 text-center">
                    <h2 className="text-4xl font-bold text-black">
                        Our Services
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                        Innovative digital solutions designed to help businesses
                        scale, automate, and grow efficiently.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

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

                {/* Show More Button */}
                {services.length > 6 && (
                    <div className="mt-14 flex justify-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#E1702C]"
                        >
                            {showAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}

            </div>

        </section>
    );
}
// import { ArrowRight } from 'lucide-react';
// import Link from 'next/link';

// interface ServiceCardProps {
//     icon: React.ElementType;
//     title: string;
//     description: string;
//     linkText: string;
//     href: string;
// }

// const ServiceCard = ({ icon: Icon, title, description, linkText, href }: ServiceCardProps) => {
//     return (
//         <div className="group bg-[#1A1A1A] p-8 lg:p-10 flex flex-col justify-between h-full min-h-[380px] border border-white/5 hover:border-tech-orange/30 transition-all duration-300">
//             <div>
//                 <div className="mb-8">
//                     <Icon className="w-8 h-8 text-tech-orange" strokeWidth={1.5} />
//                 </div>
//                 <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">
//                     {title}
//                 </h3>
//                 <p className="text-white/60 text-sm leading-relaxed mb-8">
//                     {description}
//                 </p>
//             </div>

//             <Link
//                 href={href}
//                 className="flex items-center gap-2 text-tech-orange text-[10px] font-bold tracking-[0.2em] uppercase group-hover:gap-4 transition-all"
//             >
//                 {linkText}
//                 <ArrowRight className="w-3 h-3" />
//             </Link>
//         </div>
//     );
// };

// export default ServiceCard;