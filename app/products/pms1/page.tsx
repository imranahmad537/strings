"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Building2,
    Users,
    CreditCard,
    Wrench,
    ShieldCheck,
    Zap,
    Clock,
    CheckCircle2
} from 'lucide-react';

// --- Interfaces for Type Safety ---
interface HighlightBarItemProps {
    icon: React.ReactNode;
    label: string;
    subtext: string;
}

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

// --- Reusable Sub-Components ---
const HighlightItem: React.FC<HighlightBarItemProps> = ({ icon, label, subtext }) => (
    <div className="flex items-center gap-3">
        <div className="p-2.5 bg-[#FFF7ED] rounded-xl text-[#E1702C] shrink-0">
            {icon}
        </div>
        <div className="flex flex-col">
            <span className="text-[#0A1116] font-bold text-xs uppercase tracking-tight leading-none mb-1">{label}</span>
            <span className="text-gray-400 text-[10px] font-mono tracking-tight leading-none">{subtext}</span>
        </div>
    </div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-white border border-gray-100 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
        <div>
            <div className="p-3 bg-[#0A1116] rounded-xl text-[#D4FF59] w-fit mb-6 transition-transform duration-500 group-hover:scale-110">
                {icon}
            </div>
            <h3 className="text-[#0A1116] text-lg font-bold tracking-tight mb-3 uppercase leading-snug">{title}</h3>
            <p className="text-[#0A1116]/60 text-xs leading-relaxed">{description}</p>
        </div>
    </div>
);

// ========================================================
// ==================== MAIN PAGE COMPONENT ================
// ========================================================
export default function PropertyManagementPage() {
    return (
        <main className="bg-white min-h-screen font-sans">

            {/* ================= 1. HERO SECTION ================= */}
            <section className="relative bg-[#0A1116] py-36 px-6 lg:px-12 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/pms.png" // High-end real estate background matrix
                        alt="Real Estate Infrastructure Matrix"
                        fill
                        className="object-cover opacity-25"
                        priority
                    />
                    {/* BLACK OVERLAY to isolate text layer */}
                    <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1116] via-transparent to-transparent z-15" />
                </div>

                <div className="max-w-[1440px] mx-auto relative z-20">
                    <div className="max-w-[820px]">
                        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-8 uppercase">
                            Property <span className="text-[#E1702C]">Management</span> <br /> System
                        </h1>
                        <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-[580px] font-light">
                            Smart Real Estate Operations & Tenant Management Software.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= 2. HIGHLIGHT METRICS BAR ================= */}
            <section className="border-b border-gray-100 py-6 px-6 lg:px-12 bg-white">
                <div className="max-w-[1440px] mx-auto flex flex-wrap gap-8 justify-between items-center">
                    <HighlightItem icon={<CheckCircle2 size={16} />} label="Premium Quality" subtext="Industry certified" />
                    <HighlightItem icon={<Zap size={16} />} label="High Performance" subtext="Optimized results" />
                    <HighlightItem icon={<Building2 size={16} />} label="Easy to Use" subtext="Simple setup" />
                    <HighlightItem icon={<Clock size={16} />} label="24/7 Support" subtext="Always available" />
                </div>
            </section>

            {/* ================= 3. OVERVIEW SECTION ================= */}
            <section className="py-32 px-6 lg:px-12 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Block: Narrative content */}
                    <div className="lg:col-span-6 space-y-6">
                        <h2 className="text-[#0A1116] text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-4">
                            Overview
                        </h2>
                        <p className="text-[#0A1116]/70 text-sm leading-[1.75] max-w-[560px]">
                            Our Property Management System is designed to simplify property operations for real estate agencies, builders, landlords, and housing societies. From tenant onboarding to lease renewals, automated rent collection, maintenance tracking, and financial reporting—everything is managed through one centralized platform. Built with security, automation, and scalability in mind, it helps businesses reduce manual workload, improve tenant satisfaction, and maximize operational performance.
                        </p>
                    </div>

                    {/* Right Block: Image Placeholder Box with contain properties to handle custom graphics properly */}
                    <div className="lg:col-span-6 relative h-[360px] lg:h-[480px] w-full rounded-2xl overflow-hidden border border-gray-100 shadow-md">
                        <Image
                            src="/property-overview.png" // Interface graphic matching the layout asset
                            alt="Property Platform Overview Dashboard"
                            fill
                            className="object-contain object-center scale-105"
                        />
                    </div>

                </div>
            </section>

            {/* ================= 4. FEATURES & BENEFITS ================= */}
            <section className="bg-[#FAFBFB] py-32 px-6 lg:px-12 border-t border-b border-gray-100">
                <div className="max-w-[1440px] mx-auto">

                    <div className="text-center max-w-xl mx-auto mb-20">
                        <span className="text-[10px] font-mono font-black tracking-[0.4em] text-[#E1702C] uppercase block mb-3">Key Features</span>
                        <h2 className="text-[#0A1116] text-4xl font-bold tracking-tighter uppercase">Features & Benefits</h2>
                    </div>

                    <div className="grid grid-cols-12 gap-6 md:gap-8">
                        <FeatureCard
                            icon={<Building2 size={18} />}
                            title="Property & Unit Management"
                            description="Easily manage multiple properties, unit details, occupancy status, and ownership records from a unified dashboard."
                        />
                        <FeatureCard
                            icon={<Users size={18} />}
                            title="Tenant Management"
                            description="Maintain tenant profiles, contracts, payment records, notices, and communication history in one secure system."
                        />
                        <FeatureCard
                            icon={<CreditCard size={18} />}
                            title="Payment & Billing"
                            description="Generate invoices, track rent collection, send payment reminders, and automate recurring billing processes."
                        />
                        <FeatureCard
                            icon={<Wrench size={18} />}
                            title="Maintenance Tracking"
                            description="Create maintenance tickets, assign tasks, monitor repair progress, and notify tenants instantly."
                        />
                    </div>

                </div>
            </section>



        </main>
    );
}