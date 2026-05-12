import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type FloatingCardProps = {
    icon: React.ReactNode
    stage: string
    title: string
    description: string
    className?: string
}

// Fixed: Added the type definition to the function arguments
const FloatingCard = ({
    icon,
    stage,
    title,
    description,
    className = '',
}: FloatingCardProps) => {
    return (
        <div
            className={`
        bg-white/5 backdrop-blur-sm
        p-5 rounded-lg border border-white/10
        w-[300px]
        flex flex-col gap-3
        ${className}
      `}
        >
            <div className="flex items-start justify-between">
                {icon}
                <span className="text-white/40 text-[11px] font-medium tracking-widest uppercase mt-1">
                    {stage}
                </span>
            </div>

            <div className="space-y-1">
                <h4 className="text-white text-lg font-semibold tracking-tight">
                    {title}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}

const services = [
    { name: 'AI CONSULTANCY', icon: '✦' },
    { name: 'CUSTOM SOFTWARE', icon: '</>' },
    { name: 'WEB PLATFORMS', icon: '🌐' },
    { name: 'ENTERPRISE SYSTEMS', icon: '⚙︎' },
]

export default function HeroSection() {
    return (
        <section className="relative w-full h-screen bg-tech-dark overflow-hidden font-body">
            {/* Background */}
            {/* <div className="absolute inset-0 z-0">
                <Image
                    src="/herobg.jpeg"
                    alt="Digital Engineering Wave"
                    fill
                    priority
                    quality={100}
                    className="object-cover object-center"
                    sizes="100vw"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-[1]" />
                <div className="absolute inset-0 bg-black/40 z-[0]" />
            </div> */}
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover object-center"
                >
                    <source src="/herovid.mp4" type="video/mp4" />
                    {/* Optional: Add a fallback image if the video fails to load */}
                    <img src="/herobg.jpeg" alt="Fallback" className="w-full h-full object-cover" />
                </video>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-[1]" />
                <div className="absolute inset-0 bg-black/40 z-[0]" />
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-[1440px] mx-auto h-full grid grid-cols-12 px-6 lg:px-12 items-center">
                <div className="col-span-12 lg:col-span-7 pr-0 lg:pr-10">
                    <h1 className="text-white text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] font-heading font-medium tracking-tighter mb-8 max-w-[700px]">
                        We <span className="text-tech-orange">Engineer</span> digital
                        systems that move businesses forward.
                    </h1>

                    <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-10 max-w-[640px]">
                        Strings Technologies builds scalable software, AI-powered
                        solutions, and high-performance digital ecosystems for global
                        enterprises and ambitious startups.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/book"
                            className="px-10 py-4 bg-tech-orange rounded-md text-tech-dark text-center font-semibold hover:bg-tech-orange-light transition duration-300"
                        >
                            BOOK A STRATEGY CALL
                        </Link>

                        <Link
                            href="/solutions"
                            className="px-10 py-4 border-2 border-white/50 rounded-md text-white text-center font-semibold hover:border-white hover:bg-white/5 transition duration-300"
                        >
                            EXPLORE SOLUTIONS
                        </Link>
                    </div>
                </div>

                {/* Floating cards */}
                <div className="hidden lg:block col-span-5 relative h-[500px]">
                    <FloatingCard
                        icon={<div className="w-6 h-6 border-2 border-tech-orange rounded" />}
                        stage="STAGE 01"
                        title="Product Strategy"
                        description="Defining the roadmap for market dominance."
                        className="absolute top-10 right-10 rotate-[-2deg]"
                    />

                    <FloatingCard
                        icon={<div className="w-6 h-6 border-2 border-tech-orange rounded" />}
                        stage="STAGE 02"
                        title="Development"
                        description="Clean code architecture for limitless scale."
                        className="absolute top-[180px] left-[50px] rotate-[1deg]"
                    />

                    <FloatingCard
                        icon={<div className="w-6 h-6 border-2 border-tech-orange rounded" />}
                        stage="STAGE 03"
                        title="Infrastructure"
                        description="Reliable, automated cloud deployment."
                        className="absolute bottom-10 right-20 rotate-[-1deg]"
                    />
                </div>
            </div>

            {/* Bottom nav */}
            <div className="absolute bottom-6 left-0 right-0 z-20 w-full hidden md:flex justify-center border-t border-white/5 pt-4">
                <nav className="flex gap-10">
                    {services.map((item) => (
                        <Link
                            key={item.name}
                            href={`/${item.name.toLowerCase().replaceAll(' ', '-')}`}
                            className="flex items-center gap-2 group text-white/60 hover:text-tech-orange transition duration-200"
                        >
                            <span className="text-white/40 group-hover:text-tech-orange">
                                {item.icon}
                            </span>
                            <span className="text-xs font-semibold tracking-widest uppercase">
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>
        </section>
    )
}
// import Image from 'next/image';
// import Link from 'next/link';

// // Helper component for the floating glassmorphism cards
// const FloatingCard = ({ icon, stage, title, description, className = '' }) => (
//     <div className={`
//     bg-white/5 backdrop-blur-sm 
//     p-5 rounded-lg border border-white/10 
//     w-[300px] // Matches Figma card width
//     flex flex-col gap-3
//     ${className}
//   `}>
//         <div className="flex items-start justify-between">
//             {icon}
//             <span className="text-white/40 text-[11px] font-medium tracking-widest uppercase mt-1">
//                 {stage}
//             </span>
//         </div>
//         <div className="space-y-1">
//             <h4 className="text-white text-lg font-semibold tracking-tight">{title}</h4>
//             <p className="text-white/70 text-sm leading-relaxed">{description}</p>
//         </div>
//     </div>
// );

// const HeroSection = () => {
//     return (
//         <section className="relative w-full h-screen bg-tech-dark overflow-hidden font-body">
//             {/* 1. Background Layer - Optimized for Ubuntu/Large Scale */}
//             <div className="absolute inset-0 z-0">
//                 <Image
//                     src="/herobg.jpeg"
//                     alt="Digital Engineering Wave"
//                     fill
//                     priority
//                     quality={100}
//                     unoptimized
//                     className="object-cover object-center crisp-image"
//                     sizes="100vw"
//                 />
//                 {/* Premium dark shade overlay (gradient provides more depth than a solid block) */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-[1]" />
//                 <div className="absolute inset-0 bg-black/40 z-[0]" />
//             </div>

//             {/* 2. Main Content Layer (Text & Buttons) */}
//             <div className="relative z-10 max-w-[1440px] mx-auto h-full grid grid-cols-12 px-6 lg:px-12 items-center">
//                 <div className="col-span-12 lg:col-span-7 pr-10">
//                     <h1 className="text-white text-[56px] leading-[1.1] font-heading font-medium tracking-tighter mb-8 max-w-[700px]">
//                         We <span className="text-tech-orange">Engineer</span> digital systems that move businesses forward.
//                     </h1>
//                     <p className="text-white/80 text-xl leading-relaxed mb-10 max-w-[640px]">
//                         Strings Technologies builds scalable software, AI-powered solutions, and high-performance digital ecosystems for global enterprises and ambitious startups.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4">
//                         <Link href="/book" className="
//               px-10 py-4 bg-tech-orange rounded-md 
//               text-tech-dark text-center font-semibold 
//               hover:bg-tech-orange-light transition duration-300
//             ">
//                             BOOK A STRATEGY CALL
//                         </Link>
//                         <Link href="/solutions" className="
//               px-10 py-4 border-2 border-white/50 rounded-md 
//               text-white text-center font-semibold 
//               hover:border-white hover:bg-white/5 transition duration-300
//             ">
//                             EXPLORE SOLUTIONS
//                         </Link>
//                     </div>
//                 </div>

//                 {/* 3. Floating Cards Layer (Positioned absolutely for floating effect) */}
//                 <div className="col-span-12 lg:col-span-5 relative h-[500px]">
//                     {/* Card 1 - Top right */}
//                     <FloatingCard
//                         icon={<div className="w-6 h-6 border-2 border-tech-orange rounded" />} // Placeholder icon
//                         stage="STAGE 01"
//                         title="Product Strategy"
//                         description="Defining the roadmap for market dominance."
//                         className="absolute top-10 right-0 lg:right-10 rotate-[-2deg]" // Slight angle
//                     />
//                     {/* Card 2 - Center left */}
//                     <FloatingCard
//                         icon={<div className="w-6 h-6 border-2 border-tech-orange rounded" />}
//                         stage="STAGE 02"
//                         title="Development"
//                         description="Clean code architecture for limitless scale."
//                         className="absolute top-[180px] left-[-30px] lg:left-[50px] rotate-[1deg]"
//                     />
//                     {/* Card 3 - Bottom right */}
//                     <FloatingCard
//                         icon={<div className="w-6 h-6 border-2 border-tech-orange rounded" />}
//                         stage="STAGE 03"
//                         title="Infrastructure"
//                         description="Reliable, automated cloud deployment."
//                         className="absolute bottom-10 right-0 lg:right-20 rotate-[-1deg]"
//                     />
//                 </div>
//             </div>

//             {/* 4. Bottom Services Nav (Desktop only) */}
//             <div className="absolute bottom-6 left-0 right-0 z-20 w-full hidden md:flex justify-center border-t border-white/5 pt-4">
//                 <nav className="flex gap-10">
//                     {[
//                         { name: 'AI CONSULTANCY', icon: '✦' },
//                         { name: 'CUSTOM SOFTWARE', icon: '</>' },
//                         { name: 'WEB PLATFORMS', icon: '🌐' },
//                         { name: 'ENTERPRISE SYSTEMS', icon: '⚙︎' }
//                     ].map((item) => (
//                         <Link key={item.name} href={`/${item.name.toLowerCase().replace(' ', '-')}`} className="
//               flex items-center gap-2 group
//               text-white/60 hover:text-tech-orange transition duration-200
//             ">
//                             <span className="text-white/40 group-hover:text-tech-orange">{item.icon}</span>
//                             <span className="text-xs font-semibold tracking-widest uppercase">{item.name}</span>
//                         </Link>
//                     ))}
//                 </nav>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;