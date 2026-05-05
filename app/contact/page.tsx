"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        companyName: '',
        phoneNumber: '',
        service: '',
        projectDetails: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic for backend integration will go here
        console.log("Form Submitted:", formData);
        alert("Message received! Backend integration coming soon.");
    };

    return (
        <div className="bg-white min-h-screen">
            {/* 1. Sub-Hero Section */}
            <section className="relative h-[400px] flex items-center px-6 lg:px-12 bg-black overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/contact-hero.jpg" // Use the handshake/graph image from your Figma
                        alt="Collaboration"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto w-full">
                    <span className="text-tech-orange font-bold tracking-[0.2em] uppercase text-sm block mb-4">
                        Contact Us
                    </span>
                    <h1 className="text-white text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
                        Let's build <br /> <span className="text-tech-orange">what's</span> next.
                    </h1>
                    <p className="text-white/70 text-lg max-w-[500px] leading-relaxed">
                        Have a project in mind or want to learn more about how we can help your business grow? We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* 2. Form & Info Section */}
            <section className="py-24 px-6 lg:px-12 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* Left Column: Form */}
                    <div className="lg:col-span-7">
                        <h2 className="text-[#0A1116] text-4xl font-bold mb-12">
                            Send Us a <span className="text-tech-orange">message</span>
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[#0A1116] font-bold text-sm">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-gray-50 border border-gray-100 p-4 outline-none focus:border-tech-orange transition-colors"
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#0A1116] font-bold text-sm">Email</label>
                                    <input
                                        type="email"
                                        placeholder="you@company.com"
                                        className="w-full bg-gray-50 border border-gray-100 p-4 outline-none focus:border-tech-orange transition-colors"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[#0A1116] font-bold text-sm">Company Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your company"
                                        className="w-full bg-gray-50 border border-gray-400 p-4 outline-none focus:border-tech-orange transition-colors"
                                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[#0A1116] font-bold text-sm">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+92 123456789"
                                        className="w-full bg-gray-50 border border-gray-100 p-4 outline-none focus:border-tech-orange transition-colors"
                                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[#0A1116] font-bold text-sm">What we can help you with?</label>
                                <select
                                    className="w-full bg-gray-50 border border-gray-100 p-4 outline-none focus:border-tech-orange transition-colors appearance-none cursor-pointer"
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                >
                                    <option value="">Select a service</option>
                                    <option value="web">Web Platform</option>
                                    <option value="ai">AI Solutions</option>
                                    <option value="software">Custom Software</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[#0A1116] font-bold text-sm">Project Details</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project or idea..."
                                    className="w-full bg-gray-50 border border-gray-100 p-4 outline-none focus:border-tech-orange transition-colors resize-none"
                                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                                />
                            </div>

                            <div className="space-y-4">
                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-12 py-4 bg-tech-orange text-white font-bold flex items-center justify-center gap-3 hover:bg-black transition-colors"
                                >
                                    Send Message <Send className="w-4 h-4" />
                                </button>
                                <p className="flex items-center gap-2 text-gray-400 text-[10px] uppercase font-bold tracking-widest">
                                    <ShieldCheck className="w-3 h-3" /> We respect your privacy, your information will never be shared.
                                </p>
                            </div>
                        </form>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="lg:col-span-5 lg:border-l border-gray-100 lg:pl-20 py-4">
                        <h2 className="text-[#0A1116] text-4xl font-bold mb-12">
                            Get in <span className="text-tech-orange">touch</span>
                        </h2>

                        <div className="space-y-12">
                            <div className="flex items-start gap-6">
                                <div className="p-3 bg-gray-50 border border-gray-100 text-tech-orange">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Email</h4>
                                    <p className="text-[#0A1116] font-medium">info@strings.com.pk</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-3 bg-gray-50 border border-gray-100 text-tech-orange">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Phone</h4>
                                    <p className="text-[#0A1116] font-medium">+92 3139306607</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-3 bg-gray-50 border border-gray-100 text-tech-orange">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Office</h4>
                                    <p className="text-[#0A1116] font-medium">Board bazar peshawar</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-3 bg-gray-50 border border-gray-100 text-tech-orange">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Business Hours</h4>
                                    <p className="text-[#0A1116] font-medium">Monday - Friday</p>
                                    <p className="text-[#0A1116]/60 text-sm">9:00 AM - 5:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Location Bar */}
            <section className="bg-black py-16 px-6 lg:px-12 text-center lg:text-left">
                <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-white text-3xl font-bold mb-2">Our <span className="text-tech-orange">Location</span></h2>
                        <p className="text-white/60">We're located at Board bazar peshawar</p>
                    </div>
                    <button className="border border-tech-orange text-tech-orange px-8 py-3 font-bold hover:bg-tech-orange hover:text-white transition-all uppercase text-xs tracking-widest">
                        View on map →
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;