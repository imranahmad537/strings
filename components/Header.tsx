"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
    {
        name: 'Home',
        href: '/',
        submenus: [
            { name: 'About', href: '/about' },
            { name: 'Our Team', href: '/team' },
            { name: 'Gallery', href: '/gallery' },
            { name: 'Learn To Earn', href: '/learn-to-earn' },
        ]
    },
    {
        name: 'Services',
        href: '/services',
        submenus: [
            { name: 'Digital Transformation', href: '/services/digital-transformation' },
            { name: 'Digital Marketing', href: '/services/digital-marketing' },
            { name: 'AI Consultancy', href: '/services/ai-consultancy' },
            { name: 'Vocational And Technical Training', href: '/services/vocational-training' },
            { name: 'End To End Business Consultancy', href: '/services/business-consultancy' },
            { name: 'Web Development', href: '/services/web-development' },
            { name: 'Mobile Apps Development', href: '/services/mobile-apps' },
            { name: 'Content Writing And Creation', href: '/services/content-writing' },
            { name: 'UI/UX Designing', href: '/services/ui-ux-design' },
            { name: 'User Acceptance Testing (UAT)', href: '/services/uat' },
            { name: 'System Integration', href: '/services/system-integration' },
            { name: 'Data Migration', href: '/services/data-migration' },
            { name: 'E-Book Translation', href: '/services/e-book-translation' },
            { name: 'E-Commerce', href: '/services/e-commerce' },
        ]
    },
    {
        name: 'Products',
        href: '/products',
        submenus: [
            { name: 'Property Management System', href: '/products/property-management' },
            { name: 'Campus Management System', href: '/products/campus-management' },
            { name: 'Learning Management System', href: '/products/lms' },
            { name: 'Enterprise Resource System', href: '/products/erp' },
            { name: 'Optical Mark Recognition', href: '/products/omr' },
            { name: 'Distribution Management System', href: '/products/distribution-management' },
            { name: 'Hospital Management System', href: '/products/hospital-management' },
            { name: 'E-Commerce', href: '/products/e-commerce' },
        ]
    },
    { name: 'Blog', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
];

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1116]/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-white text-xl font-bold tracking-tight">
                    <Image src="/logo.png" alt="Logo" width={250} height={100} />
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8 h-full">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

                        return (
                            <div key={item.name} className="relative group h-full flex items-center">
                                <Link
                                    href={item.href}
                                    className={`text-sm font-medium transition-colors relative py-2 ${
                                        isActive ? 'text-tech-orange' : 'text-white/70 group-hover:text-tech-orange'
                                    }`}
                                >
                                    {item.name}
                                    {isActive && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-tech-orange" />
                                    )}
                                </Link>

                                {item.submenus && (
                                    <div className="absolute top-[80px] left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                                        {/* Triangle pointer */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#F0F2F5] rotate-45 transform origin-center shadow-[-2px_-2px_2px_rgba(0,0,0,0.04)] z-0"></div>
                                        
                                        <div className="relative bg-[#F0F2F5] rounded-md shadow-xl py-3 min-w-[240px] whitespace-nowrap flex flex-col z-10 border border-white/40">
                                            {item.submenus.map((sub, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={sub.href}
                                                    className="px-5 py-2 text-[13px] text-[#444] font-medium hover:text-tech-orange hover:bg-black/5 transition-colors text-left"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
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