"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1116]/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/home" className="text-white text-xl font-bold tracking-tight">
                    <Image src="/logo.png" alt="Logo" width={250} height={100} />
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Home', 'Services', 'Products', 'Blogs', 'Contact'].map((item) => {
                        const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                        const isActive = pathname === href;

                        return (
                            <Link
                                key={item}
                                href={href}
                                className={`text-sm font-medium transition-colors relative group ${isActive ? 'text-tech-orange' : 'text-white/70 hover:text-tech-orange'
                                    }`}
                            >
                                {item}
                                {isActive && (
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-tech-orange" />
                                )}
                            </Link>
                        );
                    })}
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