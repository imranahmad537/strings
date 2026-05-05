import {
    LayoutGrid,
    Cpu,
    Globe,
    BarChart3,
    ShoppingBag,
    GraduationCap
} from 'lucide-react';
import ServiceCard from '../../components/ServiceCard';

const Competencies = () => {
    const services = [
        {
            icon: LayoutGrid,
            title: "Business Platforms",
            description: "Centralized ecosystems that orchestrate your entire operational workflow from end-to-end.",
            linkText: "EXPLORE PLATFORM",
            href: "/services/business-platforms"
        },
        {
            icon: Cpu,
            title: "AI-Powered Solutions",
            description: "Injecting intelligent automation and predictive analytics into legacy business processes.",
            linkText: "EXPLORE AI",
            href: "/services/ai"
        },
        {
            icon: Globe,
            title: "Web Applications",
            description: "High-performance, secure, and responsive web experiences built for modern browser standards.",
            linkText: "EXPLORE WEB",
            href: "/services/web-apps"
        },
        {
            icon: BarChart3,
            title: "Management Systems",
            description: "Robust tools for tracking assets, resources, and performance metrics across departments.",
            linkText: "EXPLORE SYSTEMS",
            href: "/services/management"
        },
        {
            icon: ShoppingBag,
            title: "Ecommerce Experiences",
            description: "Frictionless digital storefronts optimized for conversion and massive transactional scale.",
            linkText: "EXPLORE COMMERCE",
            href: "/services/ecommerce"
        },
        {
            icon: GraduationCap,
            title: "Digital Enablement",
            description: "Custom training tools and LMS platforms designed to empower teams through knowledge.",
            linkText: "EXPLORE TRAINING",
            href: "/services/enablement"
        }
    ];

    return (
        <section className="bg-white py-24 px-6 lg:px-12">
            <div className="max-w-[1440px] mx-auto">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-8">
                    <div>
                        <h4 className="text-tech-orange font-bold tracking-[0.3em] uppercase text-sm mb-6">
                            Core Competencies
                        </h4>
                        <h2 className="text-[#0A1116] text-5xl lg:text-7xl font-bold tracking-tighter">
                            What we <span className="text-tech-orange">build</span>
                        </h2>
                    </div>
                    <p className="text-[#0A1116]/60 max-w-[340px] text-sm leading-relaxed lg:mt-12">
                        Engineering high-impact products that bridge the gap between human needs and technical excellence.
                    </p>
                </div>

                {/* Staggered Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-8">
                        <ServiceCard {...services[0]} />
                        <ServiceCard {...services[3]} />
                    </div>

                    {/* Column 2 - Pushed Down (Offset) */}
                    <div className="flex flex-col gap-8 lg:mt-12">
                        <ServiceCard {...services[1]} />
                        <ServiceCard {...services[4]} />
                    </div>

                    {/* Column 3 - Pushed even further or different offset */}
                    <div className="flex flex-col gap-8 lg:mt-24">
                        <ServiceCard {...services[2]} />
                        <ServiceCard {...services[5]} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Competencies;