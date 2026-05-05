import Image from 'next/image';

interface SolutionCardProps {
    imageSrc: string;
    category: string;
    versionOrType: string;
    title: string;
    description: string;
}

const SolutionCard = ({
    imageSrc,
    category,
    versionOrType,
    title,
    description
}: SolutionCardProps) => {
    return (
        <div className="flex flex-col bg-[#1A1A1A] border border-white/5 overflow-hidden transition-all duration-300 hover:border-tech-orange/20 group">
            {/* Image Container */}
            <div className="relative h-[280px] w-full bg-[#111111]">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Content Area */}
            <div className="p-8 lg:p-10 flex flex-col items-start gap-6">
                <div className="flex items-center gap-4">
                    <span className="px-3 py-1 border border-tech-orange text-tech-orange text-[10px] font-bold tracking-widest uppercase">
                        {category}
                    </span>
                    <span className="text-white/30 text-[10px] font-bold tracking-widest uppercase">
                        {versionOrType}
                    </span>
                </div>

                <div className="space-y-4">
                    <h3 className="text-white text-3xl font-bold tracking-tight">
                        {title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed max-w-[400px]">
                        {description}
                    </p>
                </div>

                <button className="mt-4 px-8 py-3 bg-white text-[#0A1116] text-[11px] font-bold tracking-widest uppercase hover:bg-tech-orange hover:text-white transition-colors duration-300">
                    Request Demo
                </button>
            </div>
        </div>
    );
};

export default SolutionCard;