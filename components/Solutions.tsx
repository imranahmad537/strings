import SolutionCard from './SolutionCard';

const Solutions = () => {
    const solutionsData = [
        {
            imageSrc: '/project1.png', // Replace with your Figma export
            category: 'Prop-Tech',
            versionOrType: 'V4.2.0',
            title: 'Property Management System',
            description: 'A comprehensive suite for real estate giants to manage leasing, maintenance, and tenant relations.'
        },
        {
            imageSrc: '/project2.png', // Replace with your Figma export
            category: 'Enterprise',
            versionOrType: 'Enterprise Core',
            title: 'Strategic ERP Engine',
            description: 'Unifying finance, HR, and operations into a single source of truth for multinational organizations.'
        }
    ];

    return (
        <section className="bg-[#0A1116] py-24 px-6 lg:px-12">
            <div className="max-w-[1440px] mx-auto">
                {/* Header */}
                <h2 className="text-white text-5xl lg:text-6xl font-bold mb-16 tracking-tighter">
                    Proprietary <span className="text-tech-orange">Solutions</span>
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {solutionsData.map((item, index) => (
                        <SolutionCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;