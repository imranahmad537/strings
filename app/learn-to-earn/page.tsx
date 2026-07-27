import Image from 'next/image';
import Link from 'next/link';

const COURSES = [
  {
    id: 1,
    slug: "graphic-designing",
    title1: "Graphic ",
    title2: "Designing",
    desc: "Learn creative design skills and master tools to create stunning visuals, branding, and impactful graphics."
  },
  {
    id: 2,
    slug: "wordpress",
    title1: "Word ",
    title2: "Press",
    desc: "Build professional websites with WordPress. Learn themes, plugins, customization and website management."
  },
  {
    id: 3,
    slug: "upwork-course",
    title1: "Upwork ",
    title2: "Course",
    desc: "Learn how to find clients, bid smartly, build your profile and grow a successful career on Upwork."
  },
  {
    id: 4,
    slug: "digital-marketing",
    title1: "Digital ",
    title2: "Marketing",
    desc: "Master SEO, social media, ads, and content strategies to promote brands and drive real results."
  },
  {
    id: 5,
    slug: "amazon",
    title1: "Ama",
    title2: "zon",
    desc: "Learn Amazon FBA, product research, listing optimization and scaling your eCommerce business."
  },
  {
    id: 6,
    slug: "video-editing",
    title1: "Video ",
    title2: "Editing",
    desc: "Edit like a pro! Learn cutting, transitions, effects and create engaging videos for any platform."
  },
  {
    id: 7,
    slug: "content-writing",
    title1: "Content ",
    title2: "Writing",
    desc: "Learn to write engaging, SEO friendly content that ranks, informs and converts readers into customers."
  },
  {
    id: 8,
    slug: "script-writing",
    title1: "Script ",
    title2: "Writing",
    desc: "Write powerful scripts for videos, ads, YouTube and more that capture attention and deliver strong messages."
  },
  {
    id: 9,
    slug: "copy-writing",
    title1: "Copy ",
    title2: "Writing",
    desc: "Craft persuasive copy that sells! Learn headlines, ads, landing pages and email writing that convert."
  }
];

export default function LearnToEarn() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl">
            <h1 className="text-[#0A1116] text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight mb-6">
              Transform Your <br className="hidden lg:block"/>
              Skills Into <span className="text-tech-orange">Income</span>
            </h1>
            <p className="text-[#333] text-lg mb-10 leading-relaxed font-medium">
              Acquire high-value digital skills through expert-led training and hands-on projects. Stand out from the competition and unlock new opportunities in the world of freelancing.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 bg-tech-orange text-white px-8 py-4 rounded-md font-bold hover:bg-tech-orange-light transition-colors text-lg shadow-lg shadow-tech-orange/20 group"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
          <div className="w-full h-full min-h-[400px] lg:min-h-[500px] bg-[#F0F2F5] rounded-xl flex items-center justify-center relative overflow-hidden shadow-sm">
             {/* Placeholder for video or image as seen in screenshot */}
          </div>
        </div>
      </section>

      {/* Courses Grid Section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {COURSES.map((course) => (
            <Link
              key={course.id}
              href={`/learn-to-earn/${course.slug}`}
              className="bg-[#F4F5F6] rounded-2xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1 block"
            >
              {/* Left orange border line */}
              <div className="absolute left-0 top-8 bottom-8 w-2 bg-tech-orange rounded-r-md"></div>
              
              <h3 className="text-2xl font-bold text-[#0A1116] mb-4 pl-4 tracking-tight">
                {course.title1}<span className="text-tech-orange">{course.title2}</span>
              </h3>
              <p className="text-[#555] leading-relaxed pl-4 font-medium text-sm lg:text-base">
                {course.desc}
              </p>
              <span className="mt-5 pl-4 inline-flex items-center gap-2 text-tech-orange font-bold text-sm group-hover:gap-3 transition-all">
                View Course
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/career-growth.png" 
              alt="Benefits of Our Courses" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="max-w-xl">
            <h2 className="text-[#0A1116] text-4xl lg:text-[44px] font-bold tracking-tight mb-8">
              Benefits of Our <span className="text-tech-orange">Courses</span>
            </h2>
            <p className="text-[#333] text-base lg:text-lg leading-relaxed font-medium">
              Investing in the right skills can unlock endless opportunities for personal and professional growth. Whether you're just starting your learning journey or looking to enhance your existing expertise, our industry-focused courses provide practical knowledge, hands-on experience, and the confidence to succeed in today's competitive digital world. Gain valuable skills, earn recognized certifications, and take the next step toward a brighter and more rewarding career.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section (Dark Theme) */}
      <section className="bg-[#2C1E16] py-20 px-6 lg:px-12 text-center">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          <h2 className="text-white text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight mb-5 max-w-3xl leading-tight">
            Ready to Optimize Your Business Through <span className="text-tech-orange">Learning?</span>
          </h2>
          <p className="text-white/80 mb-10 max-w-2xl font-medium text-lg">
            Join over 500 enterprise distributors who have scaled their operations with Strings Technologies.
          </p>
          <Link href="/contact" className="inline-block bg-white text-tech-orange px-10 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors text-lg shadow-lg">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
