import React from 'react';

const STEPS = [
    {
        id: "01",
        title: "Discover",
        description: "Auditing your current ecosystem and defining the business goals.",
        rotate: "-rotate-6",
        x: 250,
        y: 150,
    },
    {
        id: "02",
        title: "Define",
        description: "Mapping technical architecture and creating a precision roadmap.",
        rotate: "rotate-6",
        x: 750,
        y: 200,
    },
    {
        id: "03",
        title: "Design",
        description: "Building high-fidelity prototypes and user-centric interfaces.",
        rotate: "-rotate-6",
        x: 250,
        y: 500,
    },
    {
        id: "04",
        title: "Develop",
        description: "Sprints of clean, scalable engineering with continuous CI/CD.",
        rotate: "rotate-6",
        x: 750,
        y: 600,
    },
    {
        id: "05",
        title: "Launch",
        description: "Deployment, monitoring, and long-term evolutionary scaling.",
        rotate: "-rotate-6",
        x: 450,
        y: 850,
    },
];

const Card = ({ step, className = "" }: { step: any, className?: string }) => (
    <div className={`relative w-[260px] lg:w-[280px] h-[260px] lg:h-[280px] bg-[#E8E9EA] rounded-xl shadow-[6px_8px_16px_rgba(0,0,0,0.15)] flex flex-col items-center pt-3 lg:pt-4 pb-4 lg:pb-5 px-4 lg:px-5 transition-transform duration-300 hover:scale-105 z-10 ${step.rotate || ''} ${className}`}>
        <div className="w-4 h-4 bg-[#111] rounded-full mb-3 lg:mb-4 shadow-inner drop-shadow-sm z-20 relative">
             <div className="absolute inset-0 rounded-full shadow-[inset_0px_2px_4px_rgba(0,0,0,0.8)]"></div>
        </div>
        <div className="flex-1 w-full bg-white border-[3px] border-tech-orange rounded-xl p-4 lg:p-6 flex flex-col justify-center items-center text-center shadow-sm">
            <h3 className="text-tech-orange font-bold text-xl lg:text-2xl mb-2 lg:mb-3">{step.title}</h3>
            <p className="text-[#333] text-xs lg:text-sm leading-relaxed font-medium">{step.description}</p>
        </div>
    </div>
);

const ExecutionFlow = () => {
    return (
        <section className="bg-white py-24 md:py-32 px-6 lg:px-12 overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16 relative z-20">
                    <h2 className="text-[#0A1116] text-5xl lg:text-6xl font-bold tracking-tighter">
                        Engineered <span className="text-tech-orange">Execution</span>
                    </h2>
                </div>

                {/* Desktop Layout - SVG Path and Absolute Positioned Cards */}
                <div className="relative w-full max-w-[1000px] mx-auto hidden md:block mt-8" style={{ aspectRatio: '1000 / 1050' }}>
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1050" fill="none">
                        <path 
                            d="M 250 150 C 450 100, 600 100, 750 200 C 950 350, 600 400, 250 500 C 50 600, 500 550, 750 600 C 950 650, 650 800, 450 850 C 500 900, 650 900, 750 900" 
                            stroke="#9CA3AF" 
                            strokeWidth="2" 
                            strokeDasharray="8 8" 
                        />
                    </svg>
                    
                    {STEPS.map((step) => (
                        <div 
                            key={step.id} 
                            className="absolute" 
                            style={{ 
                                left: `${(step.x / 1000) * 100}%`, 
                                top: `${(step.y / 1050) * 100}%`, 
                                transform: 'translate(-50%, -50%)' 
                            }}
                        >
                            <Card step={step} />
                        </div>
                    ))}
                    
                    <div 
                        className="absolute font-semibold text-gray-600 text-lg whitespace-nowrap"
                        style={{
                            left: `${(750 / 1000) * 100}%`,
                            top: `${(900 / 1050) * 100}%`,
                            transform: 'translate(15px, -50%)'
                        }}
                    >
                        - Ready to share
                    </div>
                </div>

                {/* Mobile Layout - Vertical Stack */}
                <div className="flex flex-col items-center gap-12 md:hidden mt-8 relative">
                    {/* Vertical dashed line connecting cards on mobile */}
                    <div className="absolute top-0 bottom-16 left-1/2 -translate-x-1/2 w-[2px] bg-[repeating-linear-gradient(to_bottom,transparent,transparent_8px,#9CA3AF_8px,#9CA3AF_16px)] z-0"></div>
                    
                    {STEPS.map((step, index) => {
                        // Alternate rotation for mobile
                        const mobileRotate = index % 2 === 0 ? '-rotate-3' : 'rotate-3';
                        return (
                            <div key={step.id} className="relative w-full flex justify-center z-10">
                                <Card step={{ ...step, rotate: mobileRotate }} />
                            </div>
                        );
                    })}
                    
                    <div className="font-semibold text-gray-600 text-lg mt-4 text-center z-10 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                        Ready to share
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExecutionFlow;