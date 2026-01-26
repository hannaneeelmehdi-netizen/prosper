'use server';
/**
 * @fileOverview A flow for generating and updating a FAQ section for a landing page.
 *
 * - generateFaqContent - A function that generates the FAQ content.
 * - FrequentlyAskedQuestionsInput - The input type for the generateFaqContent function.
 * - FrequentlyAskedQuestionsOutput - The return type for the generateFaqContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FrequentlyAskedQuestionsInputSchema = z.object({
  serviceDescription: z.string().describe('The description of the service.'),
  existingFaq: z.string().optional().describe('The current FAQ content, if any.'),
});
export type FrequentlyAskedQuestionsInput = z.infer<typeof FrequentlyAskedQuestionsInputSchema>;

const FrequentlyAskedQuestionsOutputSchema = z.object({
  faqContent: z.string().describe('The generated FAQ content.'),
});
export type FrequentlyAskedQuestionsOutput = z.infer<typeof FrequentlyAskedQuestionsOutputSchema>;

export async function generateFaqContent(input: FrequentlyAskedQuestionsInput): Promise<FrequentlyAskedQuestionsOutput> {
  return generateFaqContentFlow(input);
}

const generateFaqContentPrompt = ai.definePrompt({
  name: 'generateFaqContentPrompt',
  input: {schema: FrequentlyAskedQuestionsInputSchema},
  output: {schema: FrequentlyAskedQuestionsOutputSchema},
  prompt: `You are an expert at creating frequently asked questions (FAQ) sections for landing pages.

  Your goal is to anticipate the questions that potential customers might have about the service and provide clear and concise answers.

  Service Description: {{{serviceDescription}}}

  {{#if existingFaq}}
  Here is the existing FAQ content.  Consider this when generating new content, and don't repeat questions already asked:
  {{{existingFaq}}}
  {{/if}}

  Generate an FAQ section with at least 5 questions. Format the questions as a list using markdown.
  `,
});

const generateFaqContentFlow = ai.defineFlow(
  {
    name: 'generateFaqContentFlow',
    inputSchema: FrequentlyAskedQuestionsInputSchema,
    outputSchema: FrequentlyAskedQuestionsOutputSchema,
  },
  async input => {
    const {output} = await generateFaqContentPrompt(input);
    return output!;
  }
);
