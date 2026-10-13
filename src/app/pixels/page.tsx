import React from 'react';
import type { Metadata } from 'next';
import SubPage, { Gold } from '@/components/SubPage/SubPage';

export const metadata: Metadata = {
  title: 'Websites & Apps with AI Built In',
  description:
    'Radiants designs and builds fast, conversion-focused websites and web and mobile apps — with AI chat, smart search, and lead capture built in, and SEO foundations from day one.',
  alternates: { canonical: '/pixels' },
};

export default function PixelsPage() {
  return (
    <SubPage
      kicker="Pixels — websites & apps"
      titleLines={[
        <React.Fragment key="l1">Interfaces</React.Fragment>,
        <React.Fragment key="l2">
          with <Gold>intent</Gold>.
        </React.Fragment>,
      ]}
      intro="Your website is often the first employee a customer meets. We design and build websites and apps that load fast, explain clearly, and do real work — answering questions, capturing leads, and booking calls with AI built in."
      rowsKicker="What we craft"
      rows={[
        {
          no: '01',
          title: 'Websites that convert',
          text: 'Marketing sites and landing pages that load instantly, rank well, and turn visitors into conversations — with an AI assistant that answers questions while you sleep.',
        },
        {
          no: '02',
          title: 'Web & mobile apps',
          text: 'Customer portals, booking flows, dashboards, and internal tools — full-stack, cross-platform, and designed for the way people actually use them.',
        },
        {
          no: '03',
          title: 'UI / UX design',
          text: "Interfaces that don't just look good — they work. Designed with intent, tested with real users, refined until the friction is gone.",
        },
      ]}
      chips={[
        'Next.js',
        'React Native',
        'TypeScript',
        'AI chat & search',
        'Lead capture',
        'SEO foundations',
        'Design systems',
        'Motion & GSAP',
        'Accessibility',
        'Performance budgets',
      ]}
      cols={[
        {
          title: 'Website',
          items: ['Fixed scope, fixed price', 'Design → build → launch', 'SEO & analytics set up'],
        },
        {
          title: 'App',
          items: ['Clickable prototype first', 'Staging from week two', 'Launched and documented'],
        },
        {
          title: 'Care',
          items: ['Monthly updates', 'Hosting & monitoring', 'Content & AI tuning'],
        },
      ]}
      marqueeText="Design with"
      marqueeAccent="intent"
      ctaTitle={[
        <React.Fragment key="c1">Have a screen</React.Fragment>,
        <React.Fragment key="c2">
          worth <Gold>shipping</Gold>?
        </React.Fragment>,
      ]}
      ctaSub="Tell us what your customers are struggling with. In 30 minutes we'll show you what it looks like solved — live, not in a deck."
    />
  );
}
