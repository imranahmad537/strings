import React from 'react';

// Data-driven array for easy future updates
const STEPS = [
    {
        id: "01",
        title: "Discover",
        description: "Auditing your current ecosystem and defining the business goals.",
    },
    {
        id: "02",
        title: "Define",
        description: "Mapping technical architecture and creating a precision roadmap.",
    },
    {
        id: "03",
        title: "Design",
        description: "Building high-fidelity prototypes and user-centric interfaces.",
    },
    {
        id: "04",
        title: "Develop",
        description: "Sprints of clean, scalable engineering with continuous CI/CD.",
    },
    {
        id: "05",
        title: "Launch",
        description: "Deployment, monitoring, and long-term evolutionary scaling.",
    },
];

const ExecutionFlow = () => {
    return (
        <section className="bg-white py-32 px-6 lg:px-12">
            <div className="max-w-[1440px] mx-auto">
                {/* Section Title */}
                <h2 className="text-[#0A1116] text-5xl lg:text-6xl font-bold tracking-tighter mb-24">
                    Engineered <span className="text-tech-orange">Execution</span>
                </h2>

                {/* The Grid Logic */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start">
                    {STEPS.map((step, index) => {
                        // Logic: Even-indexed items (0, 2, 4) stay up, 
                        // Odd-indexed items (1, 3) shift down.
                        const isStaggered = index % 2 !== 0;

                        return (
                            <div
                                key={step.id}
                                className={`
                  bg-[#1A1A1A] p-8 lg:p-10 flex flex-col gap-6 
                  border border-white/5 min-h-[320px] w-full
                  transition-all duration-500 hover:-translate-y-2 group
                  ${isStaggered ? 'lg:mt-16' : 'lg:mb-16'}
                `}
                            >
                                {/* Index Number */}
                                <span className="text-tech-orange text-xs font-bold tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
                                    {step.id}
                                </span>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className="text-white text-2xl font-bold tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ExecutionFlow;