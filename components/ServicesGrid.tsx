// "use client"
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowUpRight } from 'lucide-react';

// // 1. NESTED DATA ARRAY: Grouped by Row/Category
// const portfolioSegments = [
//     {
//         categoryTitle: "Enterprise & Commerce",
//         projects: [
//             {
//                 id: "erp-01",
//                 cardSize: "large", // 2/3 width
//                 category: "Core Enterprise",
//                 title: "Enterprise Resource Planning",
//                 description: "Unify corporate infrastructure under an automated, secure ecosystem.",
//                 imagePath: "/erphero.png",
//                 link: "/products/erp"
//             },
//             {
//                 id: "ecommerce-02",
//                 cardSize: "small", // 1/3 width
//                 category: "Retail & Sales",
//                 title: "E-Commerce Management System",
//                 description: "A complete digital solution to manage products, orders, customers, payments, inventory, and online sales.",
//                 imagePath: "/ecommerce.png",
//                 link: "/products/ecommerce"
//             }
//         ]
//     },
//     {
//         categoryTitle: "Property & Healthcare",
//         projects: [
//             {
//                 id: "pms-03",
//                 cardSize: "small", // 1/3 width
//                 category: "Real Estate",
//                 title: "Property Management System",
//                 description: "Smart Real Estate Operations & Tenant Management Software.",
//                 imagePath: "/pms.png",
//                 link: "/products/pms"
//             },
//             {
//                 id: "hms-04",
//                 cardSize: "large", // 2/3 width
//                 category: "Healthcare",
//                 title: "Hospital Management System",
//                 description: "A complete digital platform to manage patients, appointments, billing, medical records, and hospital administration.",
//                 imagePath: "/hms.png",
//                 link: "/products/hms"
//             }
//         ]
//     },
//     {
//         categoryTitle: "Education Sector",
//         projects: [
//             {
//                 id: "cms-05",
//                 cardSize: "large", // 2/3 width
//                 category: "Education",
//                 title: "Campus Management System",
//                 description: "A centralized digital platform to manage students, faculty, admissions, attendance, and academic performance.",
//                 imagePath: "/cms.png",
//                 link: "/products/cms"
//             },
//             {
//                 id: "lms-06",
//                 cardSize: "small", // 1/3 width
//                 category: "E-Learning",
//                 title: "Learning Management System",
//                 description: "A complete cloud-based solution to create, manage, deliver, and track online learning programs and assessments.",
//                 imagePath: "/lms.png",
//                 link: "/products/lms"
//             }
//         ]
//     },
//     {
//         categoryTitle: "Operations & Logistics",
//         projects: [
//             {
//                 id: "dms-07",
//                 cardSize: "small", // 1/3 width
//                 category: "Logistics",
//                 title: "Distribution Management System",
//                 description: "A centralized digital solution to manage inventory, distributors, order processing, and supply chain operations.",
//                 imagePath: "/dms.png",
//                 link: "/products/dms"
//             },
//             {
//                 id: "omr-08",
//                 cardSize: "large", // 2/3 width
//                 category: "Assessment",
//                 title: "Optical Mark Recognition System",
//                 description: "A powerful automated system for fast, accurate, and secure scanning, evaluation, and result processing.",
//                 imagePath: "/omr.png",
//                 link: "/products/omr"
//             }
//         ]
//     }
// ];

// export default function FeaturedProjects() {
//     return (
//         <section className="py-24 px-6 md:px-8 max-w-[1440px] mx-auto w-full font-sans">

//             {/* Header */}
//             <div className="text-center max-w-2xl mx-auto mb-20">
//                 <h2 className="text-[#0A1116] text-4xl lg:text-5xl font-bold tracking-tighter uppercase mb-4">
//                     Our Product Portfolio
//                 </h2>
//                 <p className="text-[#0A1116]/60 text-base leading-relaxed">
//                     Discover specialized platforms designed to tackle the complexities of your industry. Seamlessly integrated, infinitely scalable.
//                 </p>
//             </div>

//             {/* SEGMENT LOOP: Renders a Heading, then a Grid for each category */}
//             {portfolioSegments.map((segment, index) => (
//                 <div key={index} className="mb-16 lg:mb-24">

//                     {/* Category Divider Heading */}
//                     <div className="flex items-center justify-center gap-4 mb-10">
//                         <div className="h-[1px] bg-gray-200 flex-1 max-w-[60px] md:max-w-[120px]"></div>
//                         <h4 className="text-gray-400 font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold text-center">
//                             — {segment.categoryTitle} —
//                         </h4>
//                         <div className="h-[1px] bg-gray-200 flex-1 max-w-[60px] md:max-w-[120px]"></div>
//                     </div>

//                     {/* The Grid for this specific segment */}
//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full">

//                         {/* PROJECT LOOP: Renders the cards inside this segment */}
//                         {segment.projects.map((project) => {

//                             // Render LARGE CARD Layout
//                             if (project.cardSize === "large") {
//                                 return (
//                                     <div key={project.id} className="lg:col-span-2 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 grid grid-cols-1 md:grid-cols-2 group min-h-[450px]">
//                                         <div className="relative w-full h-full min-h-[300px] lg:min-h-full bg-gray-50 overflow-hidden">
//                                             <Image
//                                                 src={project.imagePath}
//                                                 alt={project.title}
//                                                 fill
//                                                 className="object-cover transition-transform duration-700 group-hover:scale-105"
//                                             />
//                                         </div>
//                                         <div className="p-8 lg:p-12 bg-black flex flex-col justify-between">
//                                             <div>
//                                                 <span className="text-[10px] font-mono text-white tracking-[0.25em] uppercase block mb-3 font-bold">
//                                                     {project.category}
//                                                 </span>
//                                                 <h3 className="text-[#E1702C] text-2xl lg:text-3xl font-bold tracking-tight mb-4 uppercase leading-snug">
//                                                     {project.title}
//                                                 </h3>
//                                                 <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
//                                                     {project.description}
//                                                 </p>
//                                             </div>
//                                             <Link
//                                                 href={project.link}
//                                                 className="text-[#E1702C] font-bold text-xs tracking-widest uppercase flex items-center gap-1 group-hover:text-[#E1702C] transition-colors w-fit mt-8"
//                                             >
//                                                 Explore Platform <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 );
//                             }

//                             // Render SMALL CARD Layout
//                             return (
//                                 <div key={project.id} className="lg:col-span-1 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group min-h-[450px]">
//                                     <div className="relative h-[280px] min-h-[280px] w-full shrink-0 bg-gray-50 overflow-hidden">
//                                         <Image
//                                             src={project.imagePath}
//                                             alt={project.title}
//                                             fill
//                                             className="object-cover transition-transform duration-700 group-hover:scale-105"
//                                         />
//                                     </div>
//                                     <div className="p-8 lg:p-10 bg-black flex flex-col flex-1 justify-between">
//                                         <div>
//                                             <span className="text-[10px] font-mono text-white tracking-[0.25em] uppercase block mb-3 font-bold">
//                                                 {project.category}
//                                             </span>
//                                             <h3 className="text-[#E1702C] text-xl lg:text-2xl font-bold tracking-tight mb-3 uppercase leading-snug">
//                                                 {project.title}
//                                             </h3>
//                                             <p className="text-white/60 text-sm leading-relaxed mb-6">
//                                                 {project.description}
//                                             </p>
//                                         </div>
//                                         <Link
//                                             href={project.link}
//                                             className="text-[#E1702C] font-bold text-xs tracking-widest uppercase flex items-center gap-1 group-hover:text-[#E1702C] transition-colors w-fit mt-8"
//                                         >
//                                             Explore Platform <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                                         </Link>
//                                     </div>
//                                 </div>
//                             );
//                         })}

//                     </div>
//                 </div>
//             ))}

//         </section>
//     );
// }
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const servicesData = [
    { id: 1, title: "Digital Transformation", bgImage: "/services_images/Data Migration.jpg" },
    { id: 2, title: "Digital Marketing", bgImage: "/services_images/Digital Marketing.jpg" },
    { id: 3, title: "AI Consultancy", bgImage: "/services_images/AI Consultancy.jpg" },
    { id: 4, title: "Vocational & Technical Training", bgImage: "/services_images/Vocational & Technical Training.jpg" },
    { id: 5, title: "End To End Business Consultancy", bgImage: "/services_images/End To End Business Consultancy.jpg" },
    { id: 6, title: "Web Development", bgImage: "/services_images/Web Development.jpg" },
    { id: 7, title: "Mobile Apps Development", bgImage: "/services_images/Mobile Apps Development.jpg" },
    { id: 8, title: "Content Writing & Creation", bgImage: "/services_images/Contant Writing & Creation.jpg" },
    { id: 9, title: "UI/UX Designing", bgImage: "/services_images/UI UX Designing.jpg" },
    { id: 10, title: "User Acceptance Testing", bgImage: "/services_images/User Acceptance Testing.jpg" },
    { id: 11, title: "System Integration", bgImage: "/services_images/System Integration.jpg" },
    { id: 12, title: "E-Commerce Solutions", bgImage: "/services_images/E-Commerce Solutions.jpg" },
    { id: 13, title: "E-Book Translation", bgImage: "/services_images/E-Book Translation.jpg" },
    { id: 14, title: "Data Migration", bgImage: "/services_images/Data Migration.jpg" },
];

const defaultDescription = "For any inquiries concerning our products or services, our dedicated team is available to provide comprehensive support.";

export default function ServicesGrid() {
    const [visibleCount, setVisibleCount] = useState(6);
    const isShowingAll = visibleCount >= servicesData.length;

    return (
        <section id="services" className="py-24 px-6 md:px-8 max-w-[1440px] mx-auto w-full bg-white">
            {/* Section Header */}
            <div className="flex items-center justify-center gap-6 mb-16">
                <div className="h-[1px] bg-gray-300 flex-1 max-w-[180px]"></div>
                <h2 className="text-[#0A1116] text-xl font-bold tracking-[0.2em] uppercase">
                    Our Services
                </h2>
                <div className="h-[1px] bg-gray-300 flex-1 max-w-[180px]"></div>
            </div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1280px] mx-auto w-full">
                {servicesData.slice(0, visibleCount).map((service) => (
                    <div
                        key={service.id}
                        className="relative overflow-hidden rounded-3xl min-h-[320px] flex flex-col bg-black shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl group"
                    >
                        <Image
                            src={service.bgImage}
                            alt={service.title}
                            fill
                            className="object-cover"
                            style={{ filter: "brightness(0.15)" }}
                        />
                        <div className="absolute inset-0 bg-black-500/20"></div>
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
                                    href={`/services/${service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                    className="text-[#E1702C] font-bold text-sm flex items-center gap-2 w-fit ml-auto group/link"
                                >
                                    Read More
                                    <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show More/Less Button */}
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
        </section>
    );
}