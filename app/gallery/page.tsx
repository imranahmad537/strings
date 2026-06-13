// pages/gallery.tsx
"use client";
import React, { useState } from 'react';

// Hero Section
const GalleryHero = () => (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <img
            src="/gallery_hero.png"
            alt="Our Office Gallery"
            className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay Layer */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative text-center px-4 z-10">
            <h1 className="text-5xl font-bold mb-4">
                Our Office <span className="text-[#32CD32]">Gallery</span>
            </h1>
            <p className="text-lg max-w-xl">
                Explore moments, creativity, teamwork and innovation at Strings Technologies.
                Discover the environment where ideas become reality.
            </p>
        </div>
    </section>
);

// Gallery Grid Section
const GalleryGrid = () => {
    const [active, setActive] = useState('All Photos');
    const categories = ['All Photos', 'Office Environment', 'Team Activities', 'Events & Meetings', 'Workstations', 'Achievements'];

    return (
        <section className="py-16 container mx-auto px-6">
            <div className="flex flex-wrap gap-4 justify-center mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`px-6 py-2 rounded-full transition ${active === cat ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className="h-64 bg-gray-300 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform">
                        <img src={`/gallery-item-${item}.jpg`} alt="Office Gallery" className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </section>
    );
};

// Life at Strings Section
const LifeAtStrings = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-4xl font-bold mb-6">Life at <span className="text-[#f97316]">Strings Technologies</span></h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    A workplace built on collaboration, innovation, learning and growth. Every desk, every meeting, every late-night build is part of the story we're writing together.
                </p>
                <p className="mb-2 font-medium">Continuous learning, mentorship and growth tracks</p>
                <p className="mb-2 font-medium">Celebrations big and small, every week</p>
                <p className="mb-2 font-medium">Cross-functional teams that ship together</p>
                <p className="font-medium">Cool, light-filled workspaces designed for focus</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <img src="/life-1.jpg" className="rounded-lg h-40 w-full object-cover" />
                <img src="/life-2.jpg" className="rounded-lg h-40 w-full object-cover" />
                <img src="/life-3.jpg" className="rounded-lg h-40 w-full object-cover" />
                <img src="/life-4.jpg" className="rounded-lg h-40 w-full object-cover" />
            </div>
        </div>
    </section>
);

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <GalleryHero />
            <GalleryGrid />
            <section className="bg-black py-16 px-6">
                <div className="max-w-6xl mx-auto flex items-center gap-8">

                    {/* Profile Image - Outside the shaded box */}
                    <img
                        src="blg1.png"
                        alt="Mr. Hammad Sabir"
                        className="w-58 h-58 rounded-full object-cover flex-shrink-0"
                    />

                    {/* Text Content Area */}
                    <div className="text-white flex-1 gap-10 bg-[#1A1A1A] p-10 rounded-3xl">
                        <p className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-1">
                            Founder Spotlight
                        </p>
                        <h3 className="text-3xl font-bold mb-1">Mr. Hammad Sabir</h3>
                        <p className="text-gray-400 mb-6">Founder & Visionary Leader</p>

                        <div className="flex items-start gap-3">
                            {/* Quote Icons */}
                            <span className="text-gray-600 text-3xl leading-none">❝</span>
                            <p className="text-xl italic">Together we can accomplish great things.</p>
                        </div>
                    </div>
                </div>
            </section>
            <LifeAtStrings />
            <section className="py-20 bg-gray-900 text-center text-white">
                <h2 className="text-3xl font-bold mb-8">Want to Visit Our Office?</h2>
                <div className="flex gap-4 justify-center">
                    <button className="px-8 py-3 bg-white text-black rounded-md font-semibold">Contact Us</button>
                    <button className="px-8 py-3 border border-white rounded-md">Book Meeting</button>
                </div>
            </section>
        </main>
    );
}