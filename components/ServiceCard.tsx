import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    linkText: string;
    href: string;
}

const ServiceCard = ({ icon: Icon, title, description, linkText, href }: ServiceCardProps) => {
    return (
        <div className="group bg-[#1A1A1A] p-8 lg:p-10 flex flex-col justify-between h-full min-h-[380px] border border-white/5 hover:border-tech-orange/30 transition-all duration-300">
            <div>
                <div className="mb-8">
                    <Icon className="w-8 h-8 text-tech-orange" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">
                    {title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                    {description}
                </p>
            </div>

            <Link
                href={href}
                className="flex items-center gap-2 text-tech-orange text-[10px] font-bold tracking-[0.2em] uppercase group-hover:gap-4 transition-all"
            >
                {linkText}
                <ArrowRight className="w-3 h-3" />
            </Link>
        </div>
    );
};

export default ServiceCard;