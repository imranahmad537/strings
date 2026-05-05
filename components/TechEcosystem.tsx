const TechEcosystem = () => {
    const categories = [
        {
            title: "Frontend",
            techs: ["React Next.js", "Vue 3", "Tailwind", "TypeScript"],
        },
        {
            title: "Backend",
            techs: ["Python Django", "Node.js", "Rust", "Go-Lang", "Python"],
        },
        {
            title: "AI & Data",
            techs: ["PyTorch", "TensorFlow", "PostgreSQL", "MongoDB"],
        },
        {
            title: "Infrastructure",
            techs: ["AWS", "Docker", "Kubernetes", "Terraform"],
        },
    ];

    return (
        <section className="bg-[#0A1116] py-24 px-6 lg:px-12 text-center">
            <div className="max-w-[1440px] mx-auto">
                {/* Header Section */}
                <div className="mb-20">
                    <h2 className="text-white text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        The Technology Ecosystem
                    </h2>
                    <p className="text-white/60 text-lg max-w-[700px] mx-auto leading-relaxed">
                        A visual map of the modern tech stack we deploy to solve your complex challenges.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
                    {categories.map((category) => (
                        <div key={category.title} className="space-y-8">
                            {/* Category Title with Orange Square */}
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 bg-tech-orange shrink-0" />
                                <h3 className="text-tech-orange text-sm font-bold tracking-[0.2em] uppercase">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Tech Chips Grid */}
                            <div className="flex flex-wrap gap-3">
                                {category.techs.map((tech) => (
                                    <div
                                        key={tech}
                                        className="bg-[#1A1A1A] border border-white/5 px-5 py-3 text-white/80 text-sm font-medium hover:border-tech-orange/40 hover:text-white transition-all cursor-default"
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechEcosystem;