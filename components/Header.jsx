import Link from 'next/link';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1116]/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-white text-xl font-bold tracking-tight">
                    Strings Technologies
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Home', 'Services', 'Products', 'Blog', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            className="text-sm font-medium text-white/70 hover:text-tech-orange transition-colors relative group"
                        >
                            {item}
                            {item === 'Home' && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-tech-orange" />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <Link
                    href="/contact"
                    className="bg-tech-orange text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-tech-orange-light transition-all"
                >
                    Start a Project
                </Link>
            </div>
        </header>
    );
};

export default Header;