import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ShieldCheck, Terminal } from 'lucide-react'

const EngineeringExcellence = () => {
    return (
        <>
            <section className="bg-[#0A1116] py-28 px-6 lg:px-12 text-white">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-6 space-y-10">
                        <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter uppercase leading-none">
                            Engineering Excellence <br /> for the Global Enterprise
                        </h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <CheckCircle2 className="text-[#E1702C] shrink-0" size={24} />
                                <div>
                                    <h4 className="text-lg font-bold uppercase tracking-tight mb-1">3+ Years of Proven Impact</h4>
                                    <p className="text-white/60 text-sm leading-relaxed max-w-[440px]">A legacy of delivering premium software that powers daily operations for thousands of users globally.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <ShieldCheck className="text-[#E1702C] shrink-0" size={24} />
                                <div>
                                    <h4 className="text-lg font-bold uppercase tracking-tight mb-1">Global Reliability</h4>
                                    <p className="text-white/60 text-sm leading-relaxed max-w-[440px]">Distributed architecture and Tier-1 security standards ensure your data is always safe and available.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                        <div className="bg-white/5 border border-white/5 rounded-2xl p-8 flex flex-col justify-between min-h-[160px]">
                            <span className="text-white/40 text-xs font-mono font-bold uppercase tracking-widest block">Uptime Record</span>
                            <h3 className="text-5xl font-black tracking-tighter text-[#E1702C] mt-4">99.9%</h3>
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded-2xl p-8 flex flex-col justify-between min-h-[160px]">
                            <span className="text-white/40 text-xs font-mono font-bold uppercase tracking-widest block">Expert Support</span>
                            <h3 className="text-5xl font-black tracking-tighter text-[#E1702C] mt-4">24/7</h3>
                        </div>
                        <div className="col-span-2 bg-white/5 border border-white/5 rounded-2xl p-8 flex items-center justify-between">
                            <div>
                                <h4 className="text-lg font-bold uppercase tracking-tight">Custom Implementation</h4>
                                <p className="text-white/50 text-xs mt-1">We build specialized roadmaps for enterprise digital business.</p>
                            </div>
                            <Terminal className="text-white/20" size={32} />
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default EngineeringExcellence