import Link from 'next/link';

const FinalCTA = () => {
    return (
        <section className="bg-white py-32 px-6 lg:px-12 text-center border-t border-gray-100">
            <div className="max-w-[1440px] mx-auto flex flex-col items-center">

                {/* Main Heading */}
                <h2 className="text-[#2D1B0D] text-6xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-10 max-w-[900px]">
                    Ready to build something <br className="hidden md:block" /> future-ready?
                </h2>

                {/* Subtext */}
                <p className="text-[#2D1B0D]/70 text-lg lg:text-xl max-w-[600px] mb-14 leading-relaxed">
                    Join the ranks of leading enterprises and startups who trust Strings Technologies for their most ambitious digital challenges.
                </p>

                {/* Action Button */}
                <Link
                    href="/contact"
                    className="bg-black text-white px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase hover:bg-tech-orange transition-colors duration-300 min-w-[240px]"
                >
                    Let's Talk
                </Link>

            </div>
        </section>
    );
};

export default FinalCTA;