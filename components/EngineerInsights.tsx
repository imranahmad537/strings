import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const ARTICLES = [
    {
        category: "Intelligence",
        title: "The Future of Generative AI in Enterprise ERP Systems.",
        description: "Exploring how Large Language Models are redefining operational efficiency in 2026.",
        image: "/blg1.png", // Replace with your Figma export
        href: "/insights/generative-ai-erp"
    },
    {
        category: "Engineering",
        title: "Scaling to 10M Users: Lessons from a Fintech Launch.",
        description: "A deep dive into serverless architectures and database partitioning strategies.",
        image: "/blg2.png",
        href: "/insights/scaling-fintech"
    },
    {
        category: "Product",
        title: "Why Product-First Thinking Trumps Code-First Delivery.",
        description: "Reframing the development process to prioritize business value and user outcomes.",
        image: "/blg3.png",
        href: "/insights/product-first-thinking"
    }
];

const EngineeringInsights = () => {
    return (
        <section className="bg-[#0A1116] py-24 px-6 lg:px-12">
            <div className="max-w-[1440px] mx-auto">

                {/* Header */}
                <div className="flex justify-between items-end mb-16">
                    <h2 className="text-white text-5xl lg:text-6xl font-bold tracking-tighter">
                        Engineering <span className="text-tech-orange">Insights</span>
                    </h2>
                    <Link
                        href="/insights"
                        className="hidden md:flex items-center gap-2 text-tech-orange text-[10px] font-bold tracking-[0.2em] uppercase hover:opacity-80 transition-opacity"
                    >
                        View All Articles <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Article Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {ARTICLES.map((article, index) => (
                        <div key={index} className="group cursor-pointer">
                            {/* Image Container */}
                            <div className="relative aspect-square mb-8 overflow-hidden bg-[#1A1A1A]">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="space-y-4">
                                <span className="text-tech-orange text-[10px] font-bold tracking-[0.2em] uppercase">
                                    {article.category}
                                </span>
                                <h3 className="text-white text-2xl font-bold leading-tight tracking-tight group-hover:text-tech-orange transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                                    {article.description}
                                </p>
                                <div className="pt-4">
                                    <span className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase border-b border-white/10 pb-1 group-hover:text-white group-hover:border-tech-orange transition-all">
                                        Read Article
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View All Link */}
                <div className="mt-12 md:hidden">
                    <Link href="/insights" className="flex items-center gap-2 text-tech-orange text-[10px] font-bold tracking-[0.2em] uppercase">
                        View All Articles <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default EngineeringInsights;