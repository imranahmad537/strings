import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- Types ---
interface BlogArticle {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean; // Determines if image is on left or right
}

// --- Reusable Row Component ---
const BlogRow: React.FC<BlogArticle> = ({ category, title, description, image, reverse }) => {
  return (
    <section className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-full min-h-[600px]`}>
      {/* Image Half */}
      <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Text Half */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-10 lg:px-24 py-16 lg:py-0 border-b border-gray-100">
        <div className="max-w-[480px] relative">
          {/* Vertical Accent Line */}
          <div className="absolute -left-8 top-0 bottom-0 w-[2px] bg-tech-orange hidden lg:block" />

          <h4 className="text-tech-orange font-bold tracking-[0.3em] uppercase text-xs mb-4">
            {category}
          </h4>
          <h2 className="text-[#0A1116] text-4xl lg:text-5xl font-bold tracking-tighter mb-6 leading-tight uppercase">
            {title}
          </h2>
          <p className="text-[#0A1116]/70 text-lg leading-relaxed mb-8">
            {description}
          </p>
          <Link href={`/blog/${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#0A1116] font-bold text-[10px] tracking-widest uppercase border-b-2 border-tech-orange pb-1 hover:text-tech-orange transition-colors">
            Read Story
          </Link>
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---
export default function BlogPage() {
  const blogs: BlogArticle[] = [
    {
      id: "1",
      category: "Finance",
      title: "Bitcoin",
      description: "Since the first block of the Bitcoin blockchain was mined, the digital world has seen a massive surge in the interest of crypto currencies.",
      image: "/bitcoin.jpg",
      reverse: false
    },
    {
      id: "2",
      category: "Business",
      title: "Entrepreneur",
      description: "Building high-performance businesses in the digital age requires a shift from traditional models to agile, scalable systems.",
      image: "/images/blog-entrepreneur.jpg",
      reverse: true
    },
    {
      id: "3",
      category: "Tech",
      title: "Web 3.0",
      description: "The decentralization of the web is here. Explore how Web 3.0 is changing user ownership and digital transparency.",
      image: "/images/blog-web3.jpg",
      reverse: false
    },
    {
      id: "4",
      category: "Infrastructure",
      title: "Cloud Computing",
      description: "Scaling your business infrastructure to the cloud is no longer an option, it's a necessity for global growth.",
      image: "/images/blog-cloud.jpg",
      reverse: true
    }
  ];

  return (
    <main className="bg-black">
      {/* 1. Blog Hero Section */}
      <section className="relative h-[90vh] flex items-center px-6 lg:px-12 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bloghero.png"
            alt="Blog Hero"
            fill
            className="object-cover object-center scale-100 opacity-60 grayscale"
            priority
          />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto w-full flex items-center">
          {/* Vertical "BLOGS" Text */}
          <div className="mr-10 hidden md:block">
            <h1 className="text-tech-orange text-9xl font-black rotate-180 [writing-mode:vertical-lr] tracking-tighter opacity-80">
              BLOGS
            </h1>
          </div>
          <div>
            <h2 className="text-white text-xl lg:text-6xl font-bold tracking-tighter mb-6 leading-none">
              READY TO <br /> TAKE YOUR <br /> BUSINESS <br /> TO THE <br /> NEXT LEVEL?
            </h2>
          </div>
        </div>
      </section>

      {/* 2. Alternating Blog Rows */}
      <div className="flex flex-col">
        {blogs.map((blog) => (
          <BlogRow key={blog.id} {...blog} />
        ))}
      </div>
    </main>
  );
}