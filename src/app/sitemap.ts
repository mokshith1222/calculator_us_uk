import { MetadataRoute } from 'next';
import { calculatorConfigs } from '@/data/calculatorConfigs';
import { guidesData } from '@/data/guides';
import { glossaryData } from '@/data/glossary';
import { megaCalculatorConfigs } from '@/data/megaCalculatorConfigs';
import { US_STATES } from '@/data/states';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://financetoolshub-green.vercel.app';

  const calculators = Object.keys(calculatorConfigs).map((slug) => ({
    url: `${baseUrl}/calculators/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const categories = [
    'mortgage',
    'advanced-real-estate',
    'debt',
    'investing',
    'retirement',
    'crypto',
    'business',
    'taxes',
    'bonus'
  ].map((slug) => ({
    url: `${baseUrl}/calculators/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const guides = Object.keys(guidesData).map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const glossary = Object.keys(glossaryData).map((slug) => ({
    url: `${baseUrl}/glossary/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const megaCalculators = Object.keys(megaCalculatorConfigs).map((slug) => ({
    url: `${baseUrl}/calculators/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const localHubs = US_STATES.map((state) => ({
    url: `${baseUrl}/local/${state.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const corePages = [
    '',
    '/calculators',
    '/local',
    '/guides',
    '/glossary',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : 'monthly' as const,
    priority: route === '' ? 1.0 : 0.6,
  }));

  return [...corePages, ...categories, ...calculators, ...localHubs, ...guides, ...glossary];
}
