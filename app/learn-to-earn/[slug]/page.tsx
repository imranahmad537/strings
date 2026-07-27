import Link from 'next/link';
import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';

interface WeekItem {
  week: string;
  title: string;
  topics: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface CourseData {
  slug: string;
  title: string;
  titleHighlight: string;
  heroDescription: string;
  overviewTitle: string;
  overviewTitleHighlight: string;
  overviewText: string;
  curriculum: WeekItem[];
  whyTitle: string;
  whyTitleHighlight: string;
  whyText: string;
  faqs: FaqItem[];
}

async function getCourse(slug: string): Promise<CourseData | null> {
  try {
    const filePath = path.join(process.cwd(), 'config', 'coursesdata.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const courses: Record<string, CourseData> = JSON.parse(fileContents);
    return courses[slug] || null;
  } catch {
    return null;
  }
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = await getCourse(slug);

  if (!course) {
    notFound();
  }

  // Layout pattern for the 4 curriculum cards
  const cardPositions = [
    { side: 'left', rotate: '-rotate-6', translateY: 'translate-y-0' },
    { side: 'right', rotate: 'rotate-6', translateY: '-translate-y-8' },
    { side: 'left', rotate: '-rotate-6', translateY: 'translate-y-4' },
    { side: 'right', rotate: 'rotate-6', translateY: '-translate-y-4' },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">

      {/* ─── HERO ─── */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-16 lg:pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h1 className="text-[#0A1116] text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              {course.title}<span className="text-tech-orange">{course.titleHighlight}</span>
            </h1>
            <p className="text-[#444] text-base lg:text-[17px] leading-relaxed mb-10">
              {course.heroDescription}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-tech-orange text-white px-8 py-4 rounded-md font-bold text-base hover:bg-tech-orange-light transition-colors shadow-lg shadow-tech-orange/25 group"
            >
              Start Learning
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
          {/* Placeholder grey panel (right side) */}
          <div className="hidden lg:block w-full aspect-[4/3] bg-[#E8E9EA] rounded-2xl shadow-inner"></div>
        </div>
      </section>

      {/* ─── COURSE OVERVIEW ─── */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-16 py-14 lg:py-20">
        <h2 className="text-[#0A1116] text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
          {course.overviewTitle} <span className="text-tech-orange">{course.overviewTitleHighlight}</span>
        </h2>
        <p className="text-[#444] text-base lg:text-[17px] leading-relaxed max-w-4xl">
          {course.overviewText}
        </p>
      </section>

      {/* ─── CURRICULUM (Wave + Tilted Cards) ─── */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-20">
        {/* Wave SVG background */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 700"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-100 200 Q360 50 720 300 Q1080 550 1540 200" stroke="#E1702C" strokeWidth="180" strokeOpacity="0.07" fill="none"/>
          <path d="M-100 400 Q360 200 720 450 Q1080 700 1540 350" stroke="#E1702C" strokeWidth="120" strokeOpacity="0.05" fill="none"/>
          <path d="M-100 100 Q500 350 900 100 Q1200 -100 1540 300" stroke="#f4a35c" strokeWidth="80" strokeOpacity="0.06" fill="none"/>
        </svg>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16">
          {/* 2-column staggered layout for up to 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-3xl mx-auto">
            {course.curriculum.map((item, i) => {
              const pos = cardPositions[i % cardPositions.length];
              return (
                <div
                  key={i}
                  className={`
                    ${pos.rotate} ${pos.translateY}
                    bg-[#E8E9EA] rounded-2xl shadow-[4px_6px_20px_rgba(0,0,0,0.15)]
                    flex flex-col items-center pt-3 pb-5 px-4
                    transition-transform duration-300 hover:scale-105 hover:shadow-2xl
                    ${pos.side === 'right' ? 'md:mt-10' : 'md:mt-0'}
                  `}
                >
                  {/* Pin */}
                  <div className="w-4 h-4 bg-[#111] rounded-full mb-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] flex-shrink-0"></div>
                  {/* Inner card */}
                  <div className="w-full bg-white border-[2.5px] border-tech-orange rounded-xl p-5 lg:p-6 text-left shadow-sm">
                    <p className="text-tech-orange font-bold text-base mb-1">{item.week}</p>
                    <h3 className="text-[#0A1116] font-extrabold text-lg mb-2 leading-tight">{item.title}</h3>
                    <p className="text-[#555] text-sm leading-relaxed">{item.topics}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY THIS COURSE ─── */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-16 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="text-[#0A1116] text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
              {course.whyTitle} <span className="text-tech-orange">{course.whyTitleHighlight}</span>
            </h2>
            <p className="text-[#444] text-base lg:text-[17px] leading-relaxed">
              {course.whyText}
            </p>
          </div>
          {/* Grey panel placeholder (right side) */}
          <div className="hidden lg:block w-full aspect-[4/3] bg-[#E8E9EA] rounded-2xl shadow-inner"></div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-[#F4F5F6] py-16 lg:py-24 px-6 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[#0A1116] text-4xl lg:text-5xl font-extrabold tracking-tight text-center mb-12">
            Frequently Asked <span className="text-tech-orange">Questions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {course.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <p className="text-tech-orange font-bold text-sm mb-3">{faq.question}</p>
                <p className="text-[#444] text-sm lg:text-base leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#2C1E16] py-20 px-6 lg:px-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-white text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight mb-5 leading-tight">
            Ready to Start Your <span className="text-tech-orange">Journey?</span>
          </h2>
          <p className="text-white/80 mb-10 text-lg font-medium">
            Enroll now and take the first step towards transforming your skills into a sustainable income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-tech-orange text-white px-10 py-4 rounded-md font-bold hover:bg-tech-orange-light transition-colors text-lg shadow-lg"
            >
              Enroll Now
            </Link>
            <Link
              href="/learn-to-earn"
              className="inline-block bg-white/10 text-white border border-white/30 px-10 py-4 rounded-md font-bold hover:bg-white/20 transition-colors text-lg"
            >
              ← All Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
