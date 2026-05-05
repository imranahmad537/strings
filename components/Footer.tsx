import Link from 'next/link';
import { Mail, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0A1116] pt-20 pb-10 px-6 lg:px-12 border-t border-white/5">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Brand Info */}
                    <div className="space-y-6">
                        <h2 className="text-white text-2xl font-bold">Strings Technologies</h2>
                        <p className="text-white/50 text-sm leading-relaxed max-w-[280px]">
                            Engineering the future through scalable digital systems and intelligent software solutions.
                        </p>
                        <div className="flex gap-6 text-white/40 text-sm">
                            <Link href="#" className="hover:text-tech-orange transition-colors">LinkedIn</Link>
                            <Link href="#" className="hover:text-tech-orange transition-colors">GitHub</Link>
                            <Link href="#" className="hover:text-tech-orange transition-colors">Twitter</Link>
                        </div>
                    </div>

                    {/* Expertise */}
                    <div className="space-y-6">
                        <h4 className="text-white text-xs font-bold uppercase tracking-widest">Expertise</h4>
                        <ul className="space-y-4 text-white/50 text-sm">
                            <li><Link href="/services" className="hover:text-white transition-colors">Business Platforms</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">AI Solutions</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Management Systems</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Ecommerce Experiences</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-6">
                        <h4 className="text-white text-xs font-bold uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4 text-white/50 text-sm">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/process" className="hover:text-white transition-colors">Our Process</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h4 className="text-white text-xs font-bold uppercase tracking-widest">Contact</h4>
                        <div className="space-y-4 text-white/50 text-sm">
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-tech-orange" />
                                <span>hello@stringstech.io</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-tech-orange" />
                                <span>Global Operations Center</span>
                            </div>
                            <Link href="/contact" className="flex items-center gap-2 text-white font-bold pt-2 group hover:text-tech-orange transition-colors">
                                Ready to start? <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-10 border-t border-white/5">
                    <p className="text-white/20 text-[10px] font-bold tracking-[0.3em] uppercase">
                        © {currentYear} STRINGS TECHNOLOGIES — ENGINEERING THE FUTURE.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;