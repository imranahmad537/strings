import React from 'react';
import {
    Code2, Layers, Database, Monitor, ShoppingCart, Smartphone
} from 'lucide-react';

interface TechItem {
    name: string;
    iconClass: string;
}

interface TechCategory {
    title: string;
    categoryIcon: React.ReactNode;
    items: TechItem[];
}

const TechStack: React.FC = () => {
    const stack: TechCategory[] = [
        {
            title: "Languages",
            categoryIcon: <Code2 className="w-4 h-4" />,
            items: [
                { name: "Python", iconClass: "devicon-python-plain colored" },
                { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
                { name: "PHP", iconClass: "devicon-php-plain colored" }
            ]
        },
        {
            title: "Frameworks",
            categoryIcon: <Layers className="w-4 h-4" />,
            items: [
                { name: "Odoo", iconClass: "devicon-odoo-original colored" },
                { name: "Flask", iconClass: "devicon-flask-original colored" },
                { name: "Express.js", iconClass: "devicon-express-original colored" }
            ]
        },
        {
            title: "Databases",
            categoryIcon: <Database className="w-4 h-4" />,
            items: [
                { name: "MySQL", iconClass: "devicon-mysql-plain colored" },
                { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
                { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
                { name: "Oracle", iconClass: "devicon-oracle-original colored" }
            ]
        },
        {
            title: "Client Side",
            categoryIcon: <Monitor className="w-4 h-4" />,
            items: [
                { name: "React.js", iconClass: "devicon-react-original colored" },
                { name: "Angular", iconClass: "devicon-angular-plain colored" },
                { name: "Next.js", iconClass: "devicon-nextjs-plain colored" }
            ]
        },
        {
            title: "Ecommerce",
            categoryIcon: <ShoppingCart className="w-4 h-4" />,
            items: [
                { name: "Shopify", iconClass: "devicon-shopify-plain colored" },
                { name: "WordPress", iconClass: "devicon-wordpress-plain colored" },
                { name: "Wix", iconClass: "devicon-wix-original colored" }
            ]
        },
        {
            title: "Mobile",
            categoryIcon: <Smartphone className="w-4 h-4" />,
            items: [
                { name: "Swift", iconClass: "devicon-swift-plain colored" },
                { name: "Flutter", iconClass: "devicon-flutter-plain colored" },
                { name: "React Native", iconClass: "devicon-react-original colored" }
            ]
        },
    ];

    return (
        <section className="bg-white py-24 px-6 lg:px-12 relative font-sans">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* Sidebar Branding */}
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start border-l-[12px] border-black pl-8 py-2 h-fit">
                    <h2 className="text-5xl lg:text-7xl font-black uppercase leading-[0.85] tracking-tighter text-black flex flex-col mb-4">
                        <span>TECH</span><span>NOLO</span><span>GIES</span>
                    </h2>
                    <div className="flex flex-col leading-none">
                        <span className="text-tech-orange font-black text-3xl italic">WE</span>
                        <span className="text-black font-black text-3xl italic">USE</span>
                    </div>
                </div>

                {/* Tech Grid */}
                <div className="lg:col-span-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16">
                        {stack.map((cat) => (
                            <div key={cat.title}>
                                <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-3">
                                    <span className="text-tech-orange">{cat.categoryIcon}</span>
                                    <h3 className="text-[#0A1116] font-bold text-xs uppercase tracking-[0.4em]">
                                        {cat.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    {cat.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="bg-white border border-gray-100 px-4 py-3 rounded-md flex items-center gap-3 shadow-sm hover:border-tech-orange/30 transition-all duration-300 group"
                                        >
                                            {/* ICON INTEGRATION */}
                                            {item.name === "Odoo" ? <img src="/odoo.png" alt="Odoo" className="w-8 h-8" /> : <i className={`${item.iconClass} text-2xl text-[#0A1116] group-hover:text-tech-orange transition-colors`}></i>}

                                            <span className="text-[#0A1116] text-sm font-bold tracking-tight">
                                                {item.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
// import React from 'react';
// import {
//     Code2,
//     Layers,
//     Database,
//     Monitor,
//     Cpu,
//     ShoppingCart,
//     Smartphone,
//     Share2
// } from 'lucide-react';

// // --- Types ---
// interface TechItem {
//     name: string;
//     // You can replace these with actual paths to SVGs in your /public folder
//     iconColor: string;
// }

// interface TechCategory {
//     title: string;
//     icon: React.ReactNode;
//     items: TechItem[];
// }

// const TechStack: React.FC = () => {
//     const stack: TechCategory[] = [
//         {
//             title: "Languages",
//             icon: <Code2 className="w-4 h-4" />,
//             items: [
//                 { name: "Python", iconColor: "#3776AB" },
//                 { name: "JavaScript", iconColor: "#F7DF1E" },
//                 { name: "PHP", iconColor: "#777BB4" }
//             ]
//         },
//         {
//             title: "Frameworks",
//             icon: <Layers className="w-4 h-4" />,
//             items: [
//                 { name: "Odoo", iconColor: "#875A7B" },
//                 { name: "Flask", iconColor: "#000000" },
//                 { name: "Express.js", iconColor: "#000000" }
//             ]
//         },
//         {
//             title: "Databases",
//             icon: <Database className="w-4 h-4" />,
//             items: [
//                 { name: "MySQL", iconColor: "#4479A1" },
//                 { name: "PostgreSQL", iconColor: "#336791" },
//                 { name: "MongoDB", iconColor: "#47A248" },
//                 { name: "Oracle", iconColor: "#F80000" }
//             ]
//         },
//         {
//             title: "Client Side",
//             icon: <Monitor className="w-4 h-4" />,
//             items: [
//                 { name: "React.js", iconColor: "#61DAFB" },
//                 { name: "Angular", iconColor: "#DD0031" },
//                 { name: "Next.js", iconColor: "#000000" }
//             ]
//         },
//         {
//             title: "Ecommerce",
//             icon: <ShoppingCart className="w-4 h-4" />,
//             items: [
//                 { name: "Shopify", iconColor: "#7AB55C" },
//                 { name: "WordPress", iconColor: "#21759B" },
//                 { name: "Wix", iconColor: "#000000" }
//             ]
//         },
//         {
//             title: "Mobile",
//             icon: <Smartphone className="w-4 h-4" />,
//             items: [
//                 { name: "Swift", iconColor: "#F05138" },
//                 { name: "Flutter", iconColor: "#02569B" },
//                 { name: "React Native", iconColor: "#61DAFB" }
//             ]
//         },
//     ];

//     return (
//         <section className="bg-white py-24 px-6 lg:px-12 relative overflow-hidden font-sans">
//             <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

//                 {/* 1. Left Vertical Sidebar (As it is in Figma) */}
//                 <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start border-l-[12px] border-black pl-8 py-4">
//                     <h2 className="text-5xl lg:text-7xl font-black uppercase leading-[0.85] tracking-tighter text-black flex flex-col mb-4">
//                         <span>TECH</span>
//                         <span>NOLO</span>
//                         <span>GIES</span>
//                     </h2>
//                     <div className="flex flex-col leading-none">
//                         <span className="text-tech-orange font-black text-3xl italic">WE</span>
//                         <span className="text-black font-black text-3xl italic">USE</span>
//                     </div>
//                 </div>

//                 {/* 2. Right Content Grid */}
//                 <div className="lg:col-span-10">
//                     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16">
//                         {stack.map((cat) => (
//                             <div key={cat.title} className="group">
//                                 {/* Aligned Heading at the Top */}
//                                 <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-3 group-hover:border-tech-orange transition-all duration-500">
//                                     <span className="text-tech-orange">{cat.icon}</span>
//                                     <h3 className="text-[#0A1116] font-bold text-xs uppercase tracking-[0.4em]">
//                                         {cat.title}
//                                     </h3>
//                                 </div>

//                                 {/* Tech Chips with "Icons" */}
//                                 <div className="flex flex-wrap gap-4">
//                                     {cat.items.map((item) => (
//                                         <div
//                                             key={item.name}
//                                             className="bg-white border border-gray-100 px-5 py-3 rounded-lg flex items-center gap-3 shadow-sm hover:shadow-md hover:border-tech-orange/20 transition-all duration-300 cursor-default"
//                                         >
//                                             {/* Logo Circle/Placeholder */}
//                                             <div
//                                                 className="w-3 h-3 rounded-full shrink-0"
//                                                 style={{ backgroundColor: item.iconColor }}
//                                             />
//                                             <span className="text-[#0A1116] text-sm font-bold tracking-tight">
//                                                 {item.name}
//                                             </span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TechStack;
// const TechEcosystem = () => {
//     const categories = [
//         {
//             title: "Frontend",
//             techs: ["React Next.js", "Vue 3", "Tailwind", "TypeScript"],
//         },
//         {
//             title: "Backend",
//             techs: ["Python Django", "Node.js", "Rust", "Go-Lang", "Python"],
//         },
//         {
//             title: "AI & Data",
//             techs: ["PyTorch", "TensorFlow", "PostgreSQL", "MongoDB"],
//         },
//         {
//             title: "Infrastructure",
//             techs: ["AWS", "Docker", "Kubernetes", "Terraform"],
//         },
//     ];

//     return (
//         <section className="bg-[#0A1116] py-24 px-6 lg:px-12 text-center">
//             <div className="max-w-[1440px] mx-auto">
//                 {/* Header Section */}
//                 <div className="mb-20">
//                     <h2 className="text-white text-5xl lg:text-6xl font-bold tracking-tight mb-6">
//                         The Technology Ecosystem
//                     </h2>
//                     <p className="text-white/60 text-lg max-w-[700px] mx-auto leading-relaxed">
//                         A visual map of the modern tech stack we deploy to solve your complex challenges.
//                     </p>
//                 </div>

//                 {/* Categories Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
//                     {categories.map((category) => (
//                         <div key={category.title} className="space-y-8">
//                             {/* Category Title with Orange Square */}
//                             <div className="flex items-center gap-3">
//                                 <div className="w-2.5 h-2.5 bg-tech-orange shrink-0" />
//                                 <h3 className="text-tech-orange text-sm font-bold tracking-[0.2em] uppercase">
//                                     {category.title}
//                                 </h3>
//                             </div>

//                             {/* Tech Chips Grid */}
//                             <div className="flex flex-wrap gap-3">
//                                 {category.techs.map((tech) => (
//                                     <div
//                                         key={tech}
//                                         className="bg-[#1A1A1A] border border-white/5 px-5 py-3 text-white/80 text-sm font-medium hover:border-tech-orange/40 hover:text-white transition-all cursor-default"
//                                     >
//                                         {tech}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TechEcosystem;