
'use server';

import { generateFaqContent } from '@/ai/flows/frequently-asked-questions';

export async function getNewFaqs(existingFaqs: string) {
    const serviceDescription = `Apex Corporate Solutions offers premium corporate services including Strategic Growth Consulting, Operational Excellence, and Digital Transformation. We help businesses drive growth, optimize performance, and secure market leadership.`;

    try {
        const result = await generateFaqContent({
            serviceDescription,
            existingFaq: existingFaqs,
        });
        return { success: true, faqs: result.faqContent };
    } catch (error) {
        console.error("Error generating FAQ content:", error);
        return { success: false, error: "Failed to generate new FAQs." };
    }
}
