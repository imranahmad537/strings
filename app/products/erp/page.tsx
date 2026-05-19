"use client"
import React from 'react';
import Image from 'next/image';
import {
    ArrowUpRight,
    BarChart3,
    Wallet,
    Users2,
    HeartHandshake,
    CheckCircle2,
    ShieldCheck,
    Clock,
    Headphones,
    GraduationCap
} from 'lucide-react';

// --- Type Interfaces ---
interface ModuleCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
    isDark?: boolean;
    image?: string;
}

interface BenefitItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

// --- Inner Reusable Sub-Components ---
const ModuleCard: React.FC<ModuleCardProps> = ({ icon, title, description, className = '', isDark = false, image }) => {
    return (
        <div className={`
      rounded-2xl p-8 border flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group
      ${isDark
                ? 'bg-[#0A1116] border-white/5 text-white col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6'
                : 'bg-white border-gray-100 text-[#0A1116] col-span-12 md:col-span-6 lg:col-span-4'
            }
      ${className}
    `}>
            {isDark ? (
                <>
                    <div className="md:col-span-7 flex flex-col justify-between h-full">
                        <div>
                            <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[#E1702C] w-fit mb-6">
                                {icon}
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight mb-3 uppercase">{title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed mb-6">{description}</p>
                        </div>
                        <button className="text-white text-xs font-bold tracking-widest uppercase flex items-center gap-1 group-hover:text-[#E1702C] transition-colors">
                            Explore Module <ArrowUpRight size={14} />
                        </button>
                    </div>
                    {image && (
                        <div className="md:col-span-5 relative h-[200px] md:h-full min-h-[180px] rounded-xl overflow-hidden border border-white/10">
                            <Image src={image} alt={title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                    )}
                </>
            ) : (
                <div className="flex flex-col justify-between h-full min-h-[220px]">
                    <div>
                        <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-[#E1702C] w-fit mb-6">
                            {icon}
                        </div>
                        <h3 className="text-xl font-bold tracking-tight mb-3 uppercase">{title}</h3>
                        <p className="text-[#0A1116]/60 text-sm leading-relaxed">{description}</p>
                    </div>
                    <button className="text-[#0A1116] text-xs font-bold tracking-widest uppercase flex items-center gap-1 group-hover:text-[#E1702C] transition-colors mt-6">
                        View Details <ArrowUpRight size={14} />
                    </button>
                </div>
            )}
        </div>
    );
};

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description }) => (
    <div className="flex gap-4">
        <div className="p-2.5 bg-white shadow-sm border border-gray-100 text-[#E1702C] rounded-xl shrink-0 h-fit">
            {icon}
        </div>
        <div>
            <h4 className="text-[#0A1116] font-bold text-base uppercase tracking-tight mb-1">{title}</h4>
            <p className="text-[#0A1116]/60 text-xs leading-relaxed max-w-[280px]">{description}</p>
        </div>
    </div>
);

// ========================================================
// ==================== MAIN PAGE COMPONENT ================
// ========================================================
export default function ERPProductPage() {

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Dynamic execution logic goes here
    };

    return (
        <main className="bg-white min-h-screen font-sans">

            {/* ================= 1. THE HERO SECTION ================= */}
            <section className="relative bg-[#000000] py-36 px-6 lg:px-12 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/erphero.png" // Abstract engineering matrix blueprint
                        alt="ERP System Matrix"
                        fill
                        className="object-fill opacity-20"
                        priority
                    />
                    {/* BLACK OVERLAY */}
                    <div className="absolute inset-0 bg-black/0 z-10 pointer-events-none" />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1116] via-transparent to-transparent" />
                </div>

                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                    <div className="lg:col-span-8 max-w-[760px]">
                        <div className="inline-flex items-center gap-2 mb-6 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                            <span className="w-1.5 h-1.5 bg-[#E1702C] rounded-full animate-pulse"></span>
                            <span className="text-[9px] font-mono font-black tracking-[0.3em] text-[#E1702C] uppercase">Next-Gen Architecture</span>
                        </div>
                        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-8 uppercase">
                            Enterprise <span className="text-[#E1702C]">Resource</span> <br /> Planning (ERP)
                        </h1>
                        <p className="text-white/70 text-lg leading-relaxed max-w-[580px]">
                            Unify every department under an automated, highly secure platform. Engineered for seamless database orchestration, structural scaling, and total centralized operational overview.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= KEY MODULES SECTION ================= */}
            <section className="py-32 px-6 lg:px-12 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
                    <div className="lg:col-span-6">
                        <span className="text-[10px] font-mono font-black tracking-[0.4em] text-gray-400 uppercase block mb-4">— Core Capabilities</span>
                        <h2 className="text-[#0A1116] text-4xl lg:text-5xl font-bold tracking-tighter uppercase leading-[1.05]">
                            Key Modules of Our <br /> ERP Solution
                        </h2>
                    </div>
                    <div className="lg:col-span-6 lg:text-right pt-4">
                        <p className="text-gray-500 text-sm leading-relaxed max-w-[420px] lg:ml-auto">
                            Our high-velocity system is engineered to eliminate internal bottlenecks while decentralizing efficiency across every active corporate department.
                        </p>
                    </div>
                </div>

                {/* Asymmetric Core Module Layout Grid - Exactly Matching Your Alignment */}
                <div className="grid grid-cols-12 gap-8">

                    {/* ROW 1: Card 1 (Wide - 8 Columns) */}
                    <div className="col-span-12 lg:col-span-8 bg-white border border-gray-100 rounded-2xl p-8 md:p-10 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 min-h-[260px] relative overflow-hidden group">
                        {/* Decorative vector icon path in background to match image */}
                        <div className="absolute right-6 top-6 w-32 h-32 opacity-[0.03] pointer-events-none text-[#E1702C]">
                            <svg viewBox="0 0 100 100" fill="currentColor">
                                <circle cx="50" cy="20" r="8" /> <circle cx="20" cy="50" r="8" /> <circle cx="80" cy="50" r="8" /> <circle cx="35" cy="80" r="8" /> <circle cx="65" cy="80" r="8" />
                                <line x1="50" y1="20" x2="20" y2="50" stroke="currentColor" strokeWidth="2" /> <line x1="50" y1="20" x2="80" y2="50" stroke="currentColor" strokeWidth="2" /> <line x1="20" y1="50" x2="35" y2="80" stroke="currentColor" strokeWidth="2" /> <line x1="80" y1="50" x2="65" y2="80" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </div>
                        <div>
                            <div className="p-3 bg-orange-50 border border-orange-100 rounded-xl text-[#E1702C] w-fit mb-6">
                                <GraduationCap size={22} />
                            </div>
                            <h3 className="text-[#0A1116] text-2xl font-bold tracking-tight mb-3 uppercase">Overview of ERP Modules</h3>
                            <p className="text-[#0A1116]/60 text-sm leading-relaxed max-w-[540px]">
                                A holistic view of your entire organization. Our integrated modules work in harmony to ensure data consistency and real-time visibility across all business layers.
                            </p>
                        </div>
                        <button className="text-[#0A1116] font-bold text-xs tracking-widest uppercase flex items-center gap-1 group-hover:text-[#E1702C] transition-colors mt-6 w-fit">
                            Explore Matrix <ArrowUpRight size={14} />
                        </button>
                    </div>

                    {/* ROW 1: Card 2 (Narrow - 4 Columns) */}
                    <div className="col-span-12 lg:col-span-4 bg-white border border-gray-100 rounded-2xl p-8 md:p-10 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 min-h-[260px] group">
                        <div>
                            <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-blue-600 w-fit mb-6">
                                <Wallet size={22} />
                            </div>
                            <h3 className="text-[#0A1116] text-2xl font-bold tracking-tight mb-3 uppercase">Financial Management</h3>
                            <p className="text-[#0A1116]/60 text-sm leading-relaxed">
                                Streamline accounting, budgeting, and financial reporting with automated workflows that ensure precision.
                            </p>
                        </div>
                        <button className="text-[#0A1116] font-bold text-xs tracking-widest uppercase flex items-center gap-1 group-hover:text-[#E1702C] transition-colors mt-6 w-fit">
                            Explore Ledger <ArrowUpRight size={14} />
                        </button>
                    </div>

                    {/* ROW 2: Card 3 (Narrow - 4 Columns) */}
                    <div className="col-span-12 lg:col-span-4 bg-white border border-gray-100 rounded-2xl p-8 md:p-10 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 min-h-[260px] group">
                        <div>
                            <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-600 w-fit mb-6">
                                <Users2 size={22} />
                            </div>
                            <h3 className="text-[#0A1116] text-2xl font-bold tracking-tight mb-3 uppercase">Human Resource Management</h3>
                            <p className="text-[#0A1116]/60 text-sm leading-relaxed">
                                Manage payroll, attendance, and employee performance in one centralized, high-performance hub.
                            </p>
                        </div>
                        <button className="text-[#0A1116] font-bold text-xs tracking-widest uppercase flex items-center gap-1 group-hover:text-[#E1702C] transition-colors mt-6 w-fit">
                            Explore HR <ArrowUpRight size={14} />
                        </button>
                    </div>

                    {/* ROW 2: Card 4 (Wide - 8 Columns & Dark Mode Match) */}
                    <div className="col-span-12 lg:col-span-8 bg-[#0A1116] border border-white/5 rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 justify-between shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 min-h-[260px] group">
                        <div className="md:col-span-7 flex flex-col justify-between h-full">
                            <div>
                                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[#E1702C] w-fit mb-6">
                                    <HeartHandshake size={22} />
                                </div>
                                <h3 className="text-white text-2xl font-bold tracking-tight mb-3 uppercase">Customer Relationship Management (CRM)</h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Drive sales growth and customer loyalty through intelligent lead tracking and personalized engagement tools designed for high-velocity teams.
                                </p>
                            </div>
                            <button className="text-white font-bold text-xs tracking-widest uppercase flex items-center gap-1 group-hover:text-[#E1702C] transition-colors mt-6 w-fit">
                                Explore CRM <ArrowUpRight size={14} />
                            </button>
                        </div>
                        <div className="md:col-span-5 relative h-[200px] md:h-full min-h-[180px] rounded-xl overflow-hidden border border-white/10">
                            <Image
                                src="/images/crm-preview.jpg"
                                alt="CRM Meeting Presentation Room"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>

                </div>
            </section>
            {/* ================= 3. BENEFITS LAYOUT ================= */}
         // Updated Section with better padding for Ubuntu optimization
            <section className="bg-[#FAFBFB] py-32 px-6 lg:px-16 border-y border-gray-100 font-sans">
                {/* Shifted to gap-6 to maximize space for the structural layers */}
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

                    {/* Reduced text width allocation from 5 columns to 4 columns */}
                    <div className="lg:col-span-5 space-y-10">
                        <div>
                            <span className="text-[10px] font-mono font-black tracking-[0.4em] text-[#E1702C] uppercase block mb-4">Strategic Acceleration</span>
                            <h2 className="text-[#0A1116] text-4xl lg:text-5xl font-bold tracking-tighter uppercase leading-tight">
                                Benefits of ERP for <br /> Businesses
                            </h2>
                            <p className="text-gray-500 text-sm mt-6 leading-relaxed">
                                Deploying an advanced ERP setup allows management frameworks to transition from reactive monitoring metrics to assertive predictive scaling maneuvers.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
                            <BenefitItem icon={<CheckCircle2 size={16} />} title="Streamlined Operations" description="Replace scattered applications with a single source of operational truth." />
                            <BenefitItem icon={<ShieldCheck size={16} />} title="Data Accuracy" description="Minimize processing anomalies through automated validation layers." />
                            <BenefitItem icon={<Clock size={16} />} title="Reduced Costs" description="Optimize stock holding variables and eliminate administrative redundancies." />
                            <BenefitItem icon={<Headphones size={16} />} title="Customer Satisfaction" description="Boost turnaround speeds with unified customer visibility hooks." />
                        </div>
                    </div>

                    {/* Increased image container space from 7 columns to 8 columns */}
                    {/* Swapped heights: desktop raised to lg:h-[580px] to accommodate the scale change */}
                    <div className="lg:col-span-6 relative h-[400px] lg:h-[580px] w-full rounded-3xl overflow-hidden border border-gray-100">
                        <Image
                            src="/erpbenefit.png"
                            alt="Boardroom Analytics Dashboard"
                            fill
                            className="object-contain object-center scale-105 transition-transform duration-700"
                            priority
                        />
                    </div>

                </div>
            </section>
            {/* ================= 4. WHY CHOOSE OUR ERP ================= */}
            <section className="py-32 px-6 lg:px-12 max-w-[1440px] mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-[#0A1116] text-4xl lg:text-5xl font-bold tracking-tighter uppercase mb-4">Why Choose Our ERP Solution</h2>
                    <p className="text-gray-500 text-sm leading-relaxed">Modern modular logic tailored around multi-tenant microservices deployment strategies.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="border border-gray-100 p-8 rounded-2xl flex flex-col justify-between min-h-[220px]">
                        <h4 className="text-[#0A1116] font-bold text-lg uppercase tracking-tight">Our Expertise</h4>
                        <p className="text-gray-500 text-xs leading-relaxed mt-4">Deep domain proficiency crafting custom database pipelines, localized accounting structures, and custom workflow automations.</p>
                    </div>
                    <div className="bg-[#0A1116] border border-white/5 p-8 rounded-2xl flex flex-col justify-between min-h-[220px] text-white">
                        <h4 className="text-white font-bold text-lg uppercase tracking-tight text-[#E1702C]">Cloud Native</h4>
                        <p className="text-white/60 text-xs leading-relaxed mt-4">Engineered to scale securely across AWS or localized clouds with high-concurrency architecture and data encryption at rest.</p>
                    </div>
                    <div className="border border-gray-100 p-8 rounded-2xl flex flex-col justify-between min-h-[220px]">
                        <h4 className="text-[#0A1116] font-bold text-lg uppercase tracking-tight">Ongoing Support</h4>
                        <p className="text-gray-500 text-xs leading-relaxed mt-4">24/7 dedicated engineering support loops, seamless patch migration testing procedures, and data backup schemas.</p>
                    </div>
                </div>
            </section>

            {/* ================= 5. CONTACT FORM SECTION ================= */}
            <section className="bg-[#0A1116] py-28 px-6 lg:px-12 text-white relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

                    <div className="lg:col-span-6 space-y-8">
                        <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase leading-none">
                            Contact Us for <br /><span className="text-[#E1702C]">ERP Solutions</span>
                        </h2>
                        <p className="text-white/60 text-sm leading-relaxed max-w-[480px]">
                            Ready to construct a scalable digital framework for your operation? Connect with our systems architectures team to coordinate a technical mapping blueprint session.
                        </p>
                        <div className="pt-6 space-y-4 font-mono text-sm border-t border-white/10 max-w-[320px]">
                            <div className="flex flex-col"><span className="text-white/40 text-[10px] uppercase">Direct Call Line</span><span className="font-bold">+92 3109200007</span></div>
                            <div className="flex flex-col"><span className="text-white/40 text-[10px] uppercase">Corporate Desk</span><span className="font-bold text-[#E1702C]">solutions@strings.tech</span></div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 bg-white rounded-2xl p-8 lg:p-10 text-[#0A1116] shadow-2xl max-w-[540px] lg:ml-auto w-full">
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Full Name</label>
                                <input type="text" required className="w-full bg-gray-50 border border-gray-100 rounded-md p-3 text-sm focus:outline-none focus:border-[#E1702C]" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
                                <input type="email" required className="w-full bg-gray-50 border border-gray-100 rounded-md p-3 text-sm focus:outline-none focus:border-[#E1702C]" placeholder="name@company.com" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Message (Optional)</label>
                                <textarea rows={4} className="w-full bg-gray-50 border border-gray-100 rounded-md p-3 text-sm focus:outline-none focus:border-[#E1702C] resize-none" placeholder="Describe your operational scope..."></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-[#E1702C] hover:bg-[#E1702C]/90 text-white font-bold text-xs tracking-widest uppercase rounded-md transition-colors shadow-lg shadow-orange-500/10">
                                Submit Request
                            </button>
                        </form>
                    </div>

                </div>
            </section>

        </main>
    );
}