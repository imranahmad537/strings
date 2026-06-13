import ServiceTemplate from '@/components/ServiceDetails';
import { servicesContent } from '@/config/serviceContent';
import { notFound } from 'next/navigation';

export default async function DynamicServicePage({ params }: { params: { slug: string } }) {

    const resolvedParams = await params;

    // 1. Grab the specific data based on the URL slug
    const pageData = servicesContent[resolvedParams.slug as keyof typeof servicesContent];

    // 2. If the user types a random URL that doesn't exist, show 404
    if (!pageData) {
        notFound();
    }

    // 3. Render the perfect layout with the correct text!
    return <ServiceTemplate data={pageData} />;
}