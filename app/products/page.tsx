// "use client"
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowUpRight, ShieldCheck, CheckCircle2, Clock, Terminal } from 'lucide-react';

// // --- Interfaces for Type Safety ---
// interface ProductCardProps {
//     category: string;
//     title: string;
//     description: string;
//     image: string;
//     isFeatured?: boolean;
//     link: string;
// }

// // --- Reusable Product Card Component ---
// const ProductCard: React.FC<ProductCardProps> = ({ category, title, description, image, isFeatured, link }) => {
//     // if (!isFeatured) {
//     //     return (
//     //         <div className="col-span-12 grid grid-cols-1 lg:grid-cols-12 bg-[#0A1116] rounded-2xl overflow-hidden shadow-xl border border-white/5 min-h-[420px]">
//     //             <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
//     //                 <div>
//     //                     <div className="flex items-center gap-2 mb-6">
//     //                         <span className="w-2 h-2 bg-[#E1702C] rounded-full"></span>
//     //                         <span className="text-[10px] font-mono text-[#E1702C] tracking-[0.3em] uppercase font-bold">Featured Solution</span>
//     //                     </div>
//     //                     <h3 className="text-white text-3xl font-bold tracking-tight mb-4 uppercase">{title}</h3>
//     //                     <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-[400px]">{description}</p>
//     //                 </div>
//     //                 <Link href={link} className="w-fit border border-white/20 hover:border-white hover:bg-white/5 text-white font-bold text-xs tracking-widest uppercase px-6 py-3 rounded-md transition-all">
//     //                     Expore platform
//     //                 </Link>
//     //             </div>
//     //             <div className="lg:col-span-7 relative h-[300px] lg:h-auto">
//     //                 <Image src={image} alt={title} fill className="object-cover" />
//     //             </div>
//     //         </div>
//     //     );
//     // }

//     return (


//         <section className="py-24 px-6 md:px-8 max-w-[1440px] mx-auto w-full font-sans">

//             {/* CSS Grid: 1 column on mobile, 3 columns on tablet/desktop */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">

//                 {/* ========================================================= */}
//                 {/* CARD 1: 2/3 Width (md:col-span-2)                         */}
//                 {/* Image on Left, Text on Right                              */}
//                 {/* ========================================================= */}
//                 <div className="col-span-1 md:col-span-2 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row group">

//                     {/* IMAGE SECTION (Left Side) */}
//                     {/* md:w-[45%] ensures the image takes up nearly half the card width on desktop without squishing */}
//                     <div className="relative w-full md:w-[45%] min-h-[280px] shrink-0 overflow-hidden">
//                         <Image
//                             src={image} // Replace with your actual image
//                             alt="Enterprise Resource Planning"
//                             fill
//                             className="object-cover transition-transform duration-700 group-hover:scale-105"
//                         />
//                     </div>

//                     {/* TEXT SECTION (Right Side) */}
//                     {/* Using the exact classes you provided */}
//                     <div className="p-8 lg:p-10 flex flex-col flex-1 justify-between">
//                         <div>
//                             <span className="text-[10px] font-mono text-gray-400 tracking-[0.25em] uppercase block mb-3 font-bold">
//                                 {category}
//                             </span>
//                             <h3 className="text-[#0A1116] text-2xl font-bold tracking-tight mb-3 uppercase">
//                                 {title}
//                             </h3>
//                             <p className="text-[#0A1116]/60 text-sm leading-relaxed mb-6">
//                                 {description}
//                             </p>
//                         </div>
//                         <Link
//                             href={link}
//                             className="text-[#0A1116] font-bold text-xs tracking-widest uppercase flex items-center gap-1 group-hover:text-[#E1702C] transition-colors w-fit mt-auto"
//                         >
//                             Explore Platform <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                         </Link>
//                     </div>
//                 </div>

//                 {/* ========================================================= */}
//                 {/* CARD 2: 1/3 Width (md:col-span-1)                         */}
//                 {/* Image on Top, Text on Bottom                              */}
//                 {/* ========================================================= */}
//                 <div className="col-span-1 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group">

//                     {/* IMAGE SECTION (Top) */}
//                     <div className="relative h-[240px] overflow-hidden shrink-0">
//                         <Image
//                             src={image} // Replace with your actual image
//                             alt="Ecommerce Portal"
//                             fill
//                             className="object-cover transition-transform duration-700 group-hover:scale-105"
//                         />
//                     </div>

//                     {/* TEXT SECTION (Bottom) */}
//                     {/* Using the exact classes you provided */}
//                     <div className="p-8 flex flex-col flex-1 justify-between">
//                         <div>
//                             <span className="text-[10px] font-mono text-gray-400 tracking-[0.25em] uppercase block mb-3 font-bold">
//                                 {category}
//                             </span>
//                             <h3 className="text-[#0A1116] text-2xl font-bold tracking-tight mb-3 uppercase">
//                                 {title}
//                             </h3>
//                             <p className="text-[#0A1116]/60 text-sm leading-relaxed mb-6">
//                                 {description}
//                             </p>
//                         </div>
//                         <Link
//                             href={link}
//                             className="text-[#0A1116] font-bold text-xs tracking-widest uppercase flex items-center gap-1 group-hover:text-[#E1702C] transition-colors mt-auto w-fit"
//                         >
//                             Explore Platform <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                         </Link>
//                     </div>
//                 </div>

//             </div>
//         </section>

//     );
// };

// export default function ServicesPage() {
//     return (
//         <main className="bg-white min-h-screen">

// {/* ================= 1. HERO SECTION ================= */}
// <section className="relative bg-black/60 py-32 px-6 lg:px-12 overflow-hidden border-b border-white/5">
//     <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
//         <div className="lg:col-span-7 max-w-[680px]">
//             <div className="flex items-center gap-2 mb-6">
//                 <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-[#E1702C] uppercase">
//                     Global Reliability // Trusted For 6+ Years
//                 </span>
//             </div>
//             <h1 className="text-white text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-8 uppercase">
//                 Innovative Digital <br /> <span className="text-[#E1702C]">Ecosystem</span> For <br /> Global Enterprises
//             </h1>
//             <p className="text-white/60 text-lg leading-relaxed max-w-[540px]">
//                 Unify your operations with our suite of premium software solutions. Engineered for precision, scaled for the world, and designed to propel modern businesses into the future.
//             </p>
//         </div>
//         <div className="lg:col-span-5 relative h- [380px] lg:h-[420px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
//             <Image src="/producthero.png" alt="Enterprise Architecture" fill className="object-cover border border-[#0F172A] border-15" priority />
//             <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-[260px] flex items-center gap-3">
//                 <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shrink-0" />
//                 <div>
//                     <h4 className="text-[#0A1116] text-xs font-bold uppercase tracking-wider">Enterprise Ready</h4>
//                     <p className="text-gray-400 text-[10px] font-mono mt-0.5">Tier-1 Security Standards</p>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>

//             {/* ================= 2. PRODUCT PORTFOLIO ================= */}
//             <section className="py-32 px-6 lg:px-12 max-w-[1440px] mx-auto">
// <div className="text-center max-w-2xl mx-auto mb-24">
//     <h2 className="text-[#0A1116] text-4xl lg:text-5xl font-bold tracking-tighter uppercase mb-4">Our Product Portfolio</h2>
//     <p className="text-[#0A1116]/60 text-base leading-relaxed">
//         Discover specialized platforms designed to tackle the complexities of your industry. Seamlessly integrated, infinitely scalable.
//     </p>
// </div>

//                 {/* Segment 1: Core Enterprise */}
//                 <div className="mb-24">
//                     <div className="text-center font-mono text-[10px] tracking-[0.5em] font-bold uppercase text-gray-300 mb-12">— Core Enterprise —</div>
//                     <div className="grid grid-cols-12 gap-8">
//                         <ProductCard
//                             category="ERP"
//                             title="Enterprise Resource Planning (ERP)"
//                             description="The central nervous system for global business. Centralize finance, human resources, and supply chain management with intuitive predictive analytics."
//                             image="/erp.jpg"
//                             isFeatured={true}
//                             link="/products/erp"
//                         />
//                         <ProductCard
//                             category="E-Commerce"
//                             title="Ecommerce Portal"
//                             description="Next-gen digital storefronts designed for high transaction volume. Seamless checkout setups and robust execution engines."
//                             image="/ecommerce.jpg"
//                             link="/products/ecommerce"
//                         />
//                         <ProductCard
//                             category="Real Estate"
//                             title="Property Management System"
//                             description="From tenant lifecycle to asset monitoring, manage your real estate portfolio with precision data orchestration."
//                             image="/realstate.jpg"
//                             link="/products/property-management"
//                         />
//                     </div>
//                 </div>

//                 {/* Segment 2: Education Sector */}
//                 <div className="mb-24">
//                     <div className="text-center font-mono text-[10px] tracking-[0.5em] font-bold uppercase text-gray-300 mb-12">— Education Sector —</div>
//                     <div className="grid grid-cols-12 gap-8">
//                         <ProductCard
//                             category="Unified Operations"
//                             title="Campus Management System"
//                             description="Streamline admissions, faculty planning, and campus logistics in one secure environment."
//                             image="/campus.jpg"
//                             link="/products/campus-management"
//                         />
//                         <ProductCard
//                             category="Learning Management"
//                             title="Learning Management System"
//                             description="Empower students and educators with intuitive pedagogical tools and deep performance analytics."
//                             image="/lms.jpg"
//                             link="/products/lms"
//                         />
//                     </div>
//                 </div>
//             </section>

// {/* ================= 3. ENGINEERING EXCELLENCE ================= */}
// <section className="bg-[#0A1116] py-28 px-6 lg:px-12 text-white">
//     <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
//         <div className="lg:col-span-6 space-y-10">
//             <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter uppercase leading-none">
//                 Engineering Excellence <br /> for the Global Enterprise
//             </h2>
//             <div className="space-y-8">
//                 <div className="flex gap-4">
//                     <CheckCircle2 className="text-[#E1702C] shrink-0" size={24} />
//                     <div>
//                         <h4 className="text-lg font-bold uppercase tracking-tight mb-1">3+ Years of Proven Impact</h4>
//                         <p className="text-white/60 text-sm leading-relaxed max-w-[440px]">A legacy of delivering premium software that powers daily operations for thousands of users globally.</p>
//                     </div>
//                 </div>
//                 <div className="flex gap-4">
//                     <ShieldCheck className="text-[#E1702C] shrink-0" size={24} />
//                     <div>
//                         <h4 className="text-lg font-bold uppercase tracking-tight mb-1">Global Reliability</h4>
//                         <p className="text-white/60 text-sm leading-relaxed max-w-[440px]">Distributed architecture and Tier-1 security standards ensure your data is always safe and available.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div className="lg:col-span-6 grid grid-cols-2 gap-4">
//             <div className="bg-white/5 border border-white/5 rounded-2xl p-8 flex flex-col justify-between min-h-[160px]">
//                 <span className="text-white/40 text-xs font-mono font-bold uppercase tracking-widest block">Uptime Record</span>
//                 <h3 className="text-5xl font-black tracking-tighter text-[#E1702C] mt-4">99.9%</h3>
//             </div>
//             <div className="bg-white/5 border border-white/5 rounded-2xl p-8 flex flex-col justify-between min-h-[160px]">
//                 <span className="text-white/40 text-xs font-mono font-bold uppercase tracking-widest block">Expert Support</span>
//                 <h3 className="text-5xl font-black tracking-tighter text-[#E1702C] mt-4">24/7</h3>
//             </div>
//             <div className="col-span-2 bg-white/5 border border-white/5 rounded-2xl p-8 flex items-center justify-between">
//                 <div>
//                     <h4 className="text-lg font-bold uppercase tracking-tight">Custom Implementation</h4>
//                     <p className="text-white/50 text-xs mt-1">We build specialized roadmaps for enterprise digital business.</p>
//                 </div>
//                 <Terminal className="text-white/20" size={32} />
//             </div>
//         </div>
//     </div>
// </section>

//             {/* ================= 4. CALL TO ACTION ================= */}
//             {/* <section className="py-32 px-6 text-center bg-white">
//                 <div className="max-w-3xl mx-auto">
//                     <span className="inline-block bg-[#0A1116] text-white text-[9px] font-mono font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-md mb-6">
//                         Next Step
//                     </span>
//                     <h2 className="text-[#0A1116] text-4xl lg:text-6xl font-bold tracking-tighter uppercase mb-6 leading-none">
//                         Ready to Transform Your Operations?
//                     </h2>
//                     <p className="text-[#0A1116]/60 text-base max-w-xl mx-auto mb-10 leading-relaxed">
//                         Join the leading organizations that rely on Strings Technologies for their mission-critical digital infrastructure.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                         <Link href="/book" className="w-full sm:w-auto px-10 py-4 bg-[#E1702C] text-white text-center text-xs font-bold uppercase tracking-widest rounded-md hover:bg-[#E1702C]/90 shadow-xl shadow-orange-500/10 transition-colors">
//                             Schedule a Private Demo
//                         </Link>
//                         <Link href="/report" className="w-full sm:w-auto px-10 py-4 border-2 border-[#0A1116] text-[#0A1116] text-center text-xs font-bold uppercase tracking-widest rounded-md hover:bg-[#0A1116] hover:text-white transition-colors">
//                             Consultation Report
//                         </Link>
//                     </div>
//                 </div>
//             </section> */}

//         </main>
//     );
// }
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import EngineeringExcellence from '@/components/EngineeringExcellence';
import FinalCTA from '@/components/FinalCTA';

// 1. DATA ARRAY: Manage all your projects here
const portfolioProjects = [
    // --- ROW 1 ---
    {
        id: "erp-01",
        cardSize: "large", // 2/3 width
        category: "Core Enterprise",
        title: "Enterprise Resource Planning",
        description: "Unify corporate infrastructure under an automated, secure ecosystem.",
        imagePath: "/erphero.png",
        link: "/products/erp"
    },
    {
        id: "ecommerce-02",
        cardSize: "small", // 1/3 width
        category: "Retail & Sales",
        title: "E-Commerce Management System",
        description: "A complete digital solution to manage products, orders, customers, payments, inventory, and online sales.",
        imagePath: "/ecommerce.jpg",
        link: "/products/ecommerce"
    },

    // --- ROW 2 ---
    {
        id: "pms-03",
        cardSize: "small", // 1/3 width
        category: "Real Estate",
        title: "Property Management System",
        description: "Smart Real Estate Operations & Tenant Management Software.",
        imagePath: "/pms.png",
        link: "/products/pms"
    },
    {
        id: "hms-04",
        cardSize: "large", // 2/3 width
        category: "Healthcare",
        title: "Hospital Management System",
        description: "A complete digital platform to manage patients, appointments, billing, medical records, and hospital administration.",
        imagePath: "/hms.png",
        link: "/products/hms"
    },

    // --- ROW 3 ---
    {
        id: "cms-05",
        cardSize: "large", // 2/3 width
        category: "Education",
        title: "Campus Management System",
        description: "A centralized digital platform to manage students, faculty, admissions, attendance, and academic performance.",
        imagePath: "/cms.png",
        link: "/products/cms"
    },
    {
        id: "lms-06",
        cardSize: "small", // 1/3 width
        category: "E-Learning",
        title: "Learning Management System",
        description: "A complete cloud-based solution to create, manage, deliver, and track online learning programs and assessments.",
        imagePath: "/lms.png",
        link: "/products/lms"
    },

    // --- ROW 4 ---
    {
        id: "dms-07",
        cardSize: "small", // 1/3 width
        category: "Logistics",
        title: "Distribution Management System",
        description: "A centralized digital solution to manage inventory, distributors, order processing, and supply chain operations.",
        imagePath: "/dms.png",
        link: "/products/dms"
    },
    {
        id: "omr-08",
        cardSize: "large", // 2/3 width
        category: "Assessment",
        title: "Optical Mark Recognition System",
        description: "A powerful automated system for fast, accurate, and secure scanning, evaluation, and result processing.",
        imagePath: "/omr.png",
        link: "/products/omr"
    }
];

export default function FeaturedProjects() {
    return (
        <main className='bg-white'>
            {/* ================= 1. HERO SECTION ================= */}
            <section className="relative bg-black/60 py-32 px-6 lg:px-12 overflow-hidden border-b border-white/5">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                    <div className="lg:col-span-7 max-w-[680px]">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-[#E1702C] uppercase">
                                Global Reliability // Trusted For 6+ Years
                            </span>
                        </div>
                        <h1 className="text-white text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-8 uppercase">
                            Innovative Digital <br /> <span className="text-[#E1702C]">Ecosystem</span> For <br /> Global Enterprises
                        </h1>
                        <p className="text-white/60 text-lg leading-relaxed max-w-[540px]">
                            Unify your operations with our suite of premium software solutions. Engineered for precision, scaled for the world, and designed to propel modern businesses into the future.
                        </p>
                    </div>
                    <div className="lg:col-span-5 relative h- [380px] lg:h-[420px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                        <Image src="/producthero.png" alt="Enterprise Architecture" fill className="object-cover border border-[#0F172A] border-15" priority />
                        <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-[260px] flex items-center gap-3">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shrink-0" />
                            <div>
                                <h4 className="text-[#0A1116] text-xs font-bold uppercase tracking-wider">Enterprise Ready</h4>
                                <p className="text-gray-400 text-[10px] font-mono mt-0.5">Tier-1 Security Standards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-24 px-6 md:px-8 max-w-[1440px] mx-auto w-full font-sans">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-24">
                    <h2 className="text-[#0A1116] text-4xl lg:text-5xl font-bold tracking-tighter uppercase mb-4">
                        Our Product Portfolio
                    </h2>
                    <p className="text-[#0A1116]/60 text-base leading-relaxed">
                        Discover specialized platforms designed to tackle the complexities of your industry. Seamlessly integrated, infinitely scalable.
                    </p>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-18 w-full">

                    {/* 2. DYNAMIC LOOP: Maps through the array and assigns the correct layout */}
                    {portfolioProjects.map((project) => {

                        // Render LARGE CARD Layout
                        if (project.cardSize === "large") {
                            return (
                                <div key={project.id} className="lg:col-span-2 bg-[#0A1116] border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 grid grid-cols-1 md:grid-cols-2 group min-h-[450px]">
                                    <div className="relative w-full h-full min-h-[300px] lg:min-h-full bg-gray-50 overflow-hidden">
                                        <Image
                                            src={project.imagePath}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-8 lg:p-12 bg-gray-800 flex flex-col justify-between">
                                        <div>
                                            <span className="text-[10px] font-mono text-white tracking-[0.25em] uppercase block mb-3 font-bold">
                                                {project.category}
                                            </span>
                                            <h3 className="text-[#E1702C] text-2xl lg:text-3xl font-bold tracking-tight mb-4 uppercase leading-snug">
                                                {project.title}
                                            </h3>
                                            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                                                {project.description}
                                            </p>
                                        </div>
                                        <Link
                                            href={project.link}
                                            className="text-white hover:text-[#E1702C] font-bold text-xs tracking-widest uppercase flex items-center gap-1 group-hover:text-[#E1702C] transition-colors w-fit mt-8"
                                        >
                                            Explore Platform <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        }

                        // Render SMALL CARD Layout
                        return (
                            <div key={project.id} className=" bg-[#0A1116] lg:col-span-1 border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group min-h-[450px]">
                                <div className="relative h-[280px] min-h-[280px] w-full shrink-0 bg-gray-50 overflow-hidden">
                                    <Image
                                        src={project.imagePath}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-8 lg:p-10 bg-black flex flex-col flex-1 justify-between">
                                    <div>
                                        <span className="text-[10px] font-mono text-white tracking-[0.25em] uppercase block mb-3 font-bold">
                                            {project.category}
                                        </span>
                                        <h3 className="text-[#E1702C] text-xl lg:text-2xl font-bold tracking-tight mb-3 uppercase leading-snug">
                                            {project.title}
                                        </h3>
                                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                                            {project.description}
                                        </p>
                                    </div>
                                    <Link
                                        href={project.link}
                                        className="text-white hover:text-[#E1702C] font-bold text-xs tracking-widest uppercase flex items-center gap-1 group-hover:text-[#E1702C] transition-colors w-fit mt-8"
                                    >
                                        Explore Platform <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </section>
            <EngineeringExcellence />
            <FinalCTA />
        </main>

    );
}