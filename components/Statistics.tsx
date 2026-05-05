import { ShieldCheck, Users, LucideIcon } from 'lucide-react';

interface ItemProps {
    type: 'feature' | 'metric';
    icon?: LucideIcon;
    title?: string; // Used as the big number/metric
    label?: string; // Used as the sub-heading
    text: string;   // Used as the description
    className?: string;
}

// Single sub-component that handles both styles
const DifferentiatorItem = ({ type, icon: Icon, title, label, text, className = "" }: ItemProps) => {
    if (type === 'feature') {
        return (
            <div className="flex items-center gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-tech-orange/10 flex items-center justify-center rounded-sm">
                    {Icon && <Icon className="w-5 h-5 text-tech-orange" strokeWidth={1.5} />}
                </div>
                <p className="text-[#0A1116]/80 text-sm font-medium leading-relaxed">{text}</p>
            </div>
        );
    }

    return (
        <div className={`bg-[#1A1A1A] p-8 flex flex-col justify-center min-h-[220px] transition-all hover:bg-[#222] ${className}`}>
            <h3 className="text-tech-orange text-5xl font-bold mb-4">{title}</h3>
            <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-3">{label}</h4>
            <p className="text-white/50 text-[11px] leading-relaxed max-w-[180px]">{text}</p>
        </div>
    );
};

export default function Statistics() {
    return (
        <section className="bg-white py-24 px-6 lg:px-12">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                {/* Content Side */}
                <div className="lg:col-span-5 space-y-10">
                    <div>
                        <span className="text-tech-orange font-bold tracking-[0.3em] uppercase text-xs block mb-6">
                            The Differentiator
                        </span>
                        <h2 className="text-[#0A1116] text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-8">
                            Building for the <br /> next decade, not <br /> just next quarter.
                        </h2>
                        <p className="text-[#0A1116]/70 text-lg leading-relaxed max-w-[480px]">
                            We don’t just ship features; we engineer systems. Our approach combines the agility of a startup with the rigorous standards of enterprise engineering.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <DifferentiatorItem
                            type="feature"
                            icon={ShieldCheck}
                            text="Zero templates. Every line of code is tailored to your business logic."
                        />
                        <DifferentiatorItem
                            type="feature"
                            icon={Users}
                            text="Integrated squads of UX designers and engineers working in unison."
                        />
                    </div>
                </div>

                {/* Stats Side */}
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6 md:mt-12">
                        <DifferentiatorItem
                            type="metric"
                            title="99%"
                            label="System Reliability"
                            text="Fault-tolerant architectures designed for critical uptime."
                        />
                        <DifferentiatorItem
                            type="metric"
                            title="2.5X"
                            label="Faster Time-To-Market"
                            text="Accelerated delivery through our proprietary modular framework."
                        />
                    </div>

                    <div className="space-y-6">
                        <DifferentiatorItem
                            type="metric"
                            title="120+"
                            label="Success Stories"
                            text="Proven track record across 12 different industries."
                        />
                        <DifferentiatorItem
                            type="metric"
                            title="14"
                            label="AI IP Patents"
                            text="Pioneering in-house technologies for data intelligence."
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}