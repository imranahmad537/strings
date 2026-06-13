
// "use client"
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';
// import FinalCTA from './FinalCTA';

// export default function ServiceTemplate({ data }: { data: any }) {
//     if (!data) return <div>Service not found</div>;

//     return (
//         <main className="bg-white min-h-screen font-sans">

//             {/* ========================================== */}
//             {/* 1. HERO SECTION                            */}
//             {/* ========================================== */}
//             <section className="relative w-full min-h-[70vh] flex items-center justify-start text-left px-6 md:px-16 lg:px-24">
//                 <div className="absolute inset-0 z-0 bg-[#0A1116]">
//                     <Image
//                         src={data.hero.bgImage}
//                         alt={data.hero.titlePart1}
//                         fill
//                         className="object-cover opacity-50 mix-blend-overlay"
//                         priority
//                     />
//                 </div>
//                 <div className="relative z-10 max-w-3xl mt-20">
//                     <h1 className="text-white text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight leading-[1.1] mb-6">
//                         {data.hero.titlePart1} <br />
//                         <span className="text-[#E1702C]">{data.hero.titlePart2}</span>
//                     </h1>
//                     <p className="text-white/90 text-sm md:text-base max-w-2xl mb-10 leading-relaxed font-medium">
//                         {data.hero.description}
//                     </p>
//                     <Link
//                         href="/contact"
//                         className="bg-[#E1702C] hover:bg-[#c96225] text-white font-bold text-sm px-8 py-3.5 rounded flex items-center gap-2 w-fit transition-all"
//                     >
//                         Start Your Project <ArrowRight size={18} />
//                     </Link>
//                 </div>
//             </section>

//             {/* ========================================== */}
//             {/* 2. COMPETITIVE EXCELLENCE                  */}
//             {/* ========================================== */}
//             <section className="py-20 px-6 md:px-8 max-w-[1440px] mx-auto w-full">
//                 <h2 className="text-[#0A1116] text-3xl md:text-4xl font-bold mb-12">
//                     Competitive Excellence
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
//                     {data.competitiveExcellence.map((item: any, i: number) => (
//                         <div key={i} className="border border-[#E1702C]/30 rounded-xl p-8 bg-white hover:shadow-lg transition-shadow">
//                             <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center mb-6 text-gray-700">
//                                 <item.icon size={20} />
//                             </div>
//                             <h3 className="text-lg font-bold text-[#0A1116] mb-4">{item.title}</h3>
//                             <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* ========================================== */}
//             {/* 3. TECHNICAL EXCELLENCE                    */}
//             {/* ========================================== */}
//             <section className="py-10 px-6 md:px-8 max-w-[1440px] mx-auto w-full pb-24">
//                 <h2 className="text-[#0A1116] text-2xl md:text-3xl font-bold mb-10">
//                     Technical Excellence
//                 </h2>

//                 {/* Asymmetrical Grid: 3 Columns. Card 1&4 take 2 columns, Card 2&3 take 1 column */}
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
//                     {data.technicalExcellence.map((item: any, index: number) => {
//                         // The magic logic that handles the checkerboard layout:
//                         const isWide = index === 0 || index === 3;

//                         return (
//                             <div
//                                 key={index}
//                                 className={`bg-[#EBEBEB] rounded-xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-center min-h-[250px]
//                                 ${isWide ? 'lg:col-span-2' : 'lg:col-span-1'}`}
//                             >
//                                 {/* Faint Watermark Icon */}
//                                 <div className="absolute right-[-10%] bottom-[-10%] text-[#E1702C] opacity-10 pointer-events-none">
//                                     <item.icon size={isWide ? 200 : 150} strokeWidth={1} />
//                                 </div>

//                                 <div className="relative z-10 max-w-[85%]">
//                                     <h3 className="text-xl font-bold text-[#0A1116] mb-4">{item.title}</h3>
//                                     <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </section>

//             {/* ========================================== */}
//             {/* 4. CALL TO ACTION                          */}
//             <FinalCTA />

//         </main>
//     );
// }
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// IMPORT ALL ICONS YOU PLAN TO USE HERE
import { ArrowRight, Rocket, BarChart, Settings, Cloud, Cog, Network, Target, Award, Users, Wrench, Monitor, Layout, Briefcase, Brain, Database, ShieldCheck, Search, Share2, PenTool, MousePointer, ShoppingCart, Store, Code, CreditCard, Box, TrendingUp, Languages, FileCheck, Cpu, Layers, BookOpen, RefreshCw, Server, CheckCircle, } from 'lucide-react';

// CREATE THE ICON MAP
const iconMap: Record<string, React.ElementType> = {
    Rocket,
    BarChart,
    Settings,
    Target,
    Cloud,
    Cog,
    Network,
    Award,
    Users,
    Wrench,
    Monitor,
    Layout,
    Briefcase,
    Brain,
    Database,
    ShieldCheck,
    Search,
    Share2,
    PenTool,
    MousePointer,
    ShoppingCart,
    Store,
    Code,
    CreditCard,
    Box,
    TrendingUp,
    Languages,
    FileCheck,
    Cpu,
    Layers,
    BookOpen,
    RefreshCw,
    Server,
    CheckCircle,
};

// HELPER: Automatically makes the last word of a string Orange to match the design
const formatTitle = (title: string) => {
    const words = title.split(' ');
    if (words.length <= 1) return <>{title}</>;
    const lastWord = words.pop();
    return (
        <>
            {words.join(' ')} <span className="text-[#E1702C]">{lastWord}</span>
        </>
    );
};

export default function ServiceTemplate({ data }: { data: any }) {
    if (!data) return <div>Service not found</div>;


    // Dynamically format the service name for the final CTA (e.g. "DIGITAL", "TRANSFORMATION" -> "Digital Transformation")
    const dynamicServiceName = `${data.hero.titlePart1} ${data.hero.titlePart2}`
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <main className="bg-white min-h-screen font-sans">

            {/* ========================================== */}
            {/* 1. HERO SECTION                            */}
            {/* ========================================== */}
            <section className="relative bg-[#000000] py-36 px-6 lg:px-12 overflow-hidden border-b border-white/5">

                {/* Background Layers */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={data.hero.bgImage}
                        alt={data.hero.titlePart1}
                        fill
                        className="object-cover opacity-25"
                        priority
                    />
                    {/* Solid Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
                    {/* Bottom Gradient Fade */}
                    {/* Note: Used z-[15] to ensure it complies with standard Tailwind compiler safely */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1116] via-transparent to-transparent z-[11] pointer-events-none" />
                </div>

                {/* Content Container */}
                <div className="max-w-[1440px] mx-auto relative z-20">
                    <div className="max-w-[820px]">
                        <h1 className="text-white text-5xl md:text-7xl font-bold uppercase mb-6 leading-tight">
                            {data.hero.titlePart1}{" "}
                            <span className="text-[#E1702C]">{data.hero.titlePart2}</span>
                        </h1>
                        <p className="text-white/70 text-lg leading-relaxed max-w-[580px] font-light mb-10">
                            {data.hero.description}
                        </p>
                        <Link
                            href="/contact"
                            className="bg-[#E1702C] hover:bg-[#c96225] text-white font-bold text-sm px-8 py-7.5 rounded flex items-center gap-2 w-fit transition-all"
                        >
                            Start Your Project <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* 2. COMPETITIVE EXCELLENCE                  */}
            {/* ========================================== */}
            {/* ========================================== */}
            {/* 2. COMPETITIVE EXCELLENCE                  */}
            {/* ========================================== */}
            <section className="py-24 px-6 md:px-8 max-w-[1440px] mx-auto w-full">
                <h2 className="text-[#0A1116] text-3xl md:text-4xl font-bold mb-12">
                    Competitive <span className="text-[#E1702C]">Excellence</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {data.competitiveExcellence.map((item: any, i: number) => {
                        const IconComponent = iconMap[item.icon];

                        return (
                            <div
                                key={i}
                                className="group bg-white border border-[#E1702C]/30 hover:border-[#E1702C] rounded-[1.5rem] p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#E1702C]/10"
                            >
                                {/* Brand-Tinted Icon Container */}
                                <div className="w-12 h-12 bg-[#E1702C]/10 rounded-lg flex items-center justify-center mb-6 text-[#E1702C] transition-colors duration-300 group-hover:bg-[#E1702C] group-hover:text-white">
                                    {IconComponent && <IconComponent size={24} strokeWidth={1.5} />}
                                </div>

                                <h3 className="text-xl font-bold text-[#0A1116] mb-4">
                                    {formatTitle(item.title)}
                                </h3>

                                {/* Softer text color for better readability against the white card */}
                                <p className="text-black text-sm md:text-[15px] leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ========================================== */}
            {/* 3. TECHNICAL EXCELLENCE                    */}
            {/* ========================================== */}
            <section className="py-10 px-6 md:px-8 max-w-[1440px] mx-auto w-full pb-24">
                <h2 className="text-[#0A1116] text-3xl md:text-4xl font-bold mb-10">
                    Technical <span className="text-[#E1702C]">Excellence</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {data.technicalExcellence.map((item: any, index: number) => {
                        const isWide = index === 0 || index === 3;
                        const IconComponent = iconMap[item.icon];

                        return (
                            <div
                                key={index}
                                // 1. Changed background to a clean, standard gray
                                className={`bg-black/40 rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-center h-full
                                ${isWide ? 'lg:col-span-2' : 'lg:col-span-1'}`}
                            >
                                {/* 2. Placed icon in bottom-right corner and made it smaller */}
                                {/* 2. Placed icon in bottom-right corner and made it smaller and DIMMED it */}
                                <div className="absolute  right-6 bottom-6 md:right-8 md:bottom-8 text-[#E1702C] opacity-30 pointer-events-none">
                                    {IconComponent && <IconComponent size={64} strokeWidth={1.5} />}
                                </div>

                                <div className="relative z-10 max-w-[85%]">
                                    <h3 className="text-2xl font-bold text-[#0A1116] mb-10">
                                        {formatTitle(item.title)}
                                    </h3>
                                    <p className="text-black text-xl md:text-[15px] leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ========================================== */}
            {/* 4. DYNAMIC CALL TO ACTION                  */}
            {/* ========================================== */}
            <section className="bg-[#1C1212] py-24 px-6 text-center mt-30">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                        Ready to Optimize Your Business <br className="hidden md:block" />
                        Through <span className="text-[#E1702C]">{dynamicServiceName}</span>?
                    </h2>
                    <p className="text-white/80 text-sm md:text-base mb-10">
                        Join over 500 enterprise distributors who have scaled their operations with Strings Technologies.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-white text-[#E1702C] hover:bg-gray-100 font-bold text-sm px-10 py-4 rounded transition-colors"
                    >
                        Get Started Now
                    </Link>
                </div>
            </section>

        </main>
    );
}