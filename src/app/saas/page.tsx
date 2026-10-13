import React from 'react';
import type { Metadata } from 'next';
import SubPage, { Gold } from '@/components/SubPage/SubPage';

export const metadata: Metadata = {
  title: 'Custom AI Products & SaaS Development',
  description:
    'Radiants builds AI-native SaaS products and AI features for existing software — architecture, design, build, billing, security, and monitoring — from idea to production in 4–6 weeks.',
  alternates: { canonical: '/saas' },
};

export default function SaaSPage() {
  return (
    <SubPage
      kicker="SaaS — custom AI products"
      titleLines={[
        <React.Fragment key="l1">From one workflow</React.Fragment>,
        <React.Fragment key="l2">
          to a <Gold>product</Gold>.
        </React.Fragment>,
      ]}
      intro="When an automation proves itself, it deserves to become a product. We build AI-native software end to end — architecture, design, build, deployment, and the parts most teams skip: billing, security, monitoring, and scale."
      rowsKicker="What we deliver"
      rows={[
        {
          no: '01',
          title: 'AI-native product builds',
          text: 'The entire lifecycle under one roof — no handoffs, no agencies-within-agencies. The people who scope your product are the people who ship it.',
        },
        {
          no: '02',
          title: 'AI features for your product',
          text: 'Assistants, copilots, smart search, document intelligence, and automated workflows — built into the software your customers already use, owned by you.',
        },
        {
          no: '03',
          title: 'Product strategy',
          text: "We help you decide what deserves to be built, and what to cut so version one actually ships — then put it in front of real users fast.",
        },
        {
          no: '04',
          title: 'Infrastructure that scales',
          text: 'Cloud-native architecture, CI/CD, and observability from day one — the same production standard we run MailMind on.',
        },
      ]}
      chips={[
        'Multi-tenant architecture',
        'Auth & authorization',
        'Subscriptions & billing',
        'LLM integration',
        'RAG & vector search',
        'Analytics dashboards',
        'API-first design',
        'Real-time features',
        'White-labeling',
        'Compliance & security',
      ]}
      cols={[
        {
          title: 'MVP',
          items: ['Fixed scope, fixed price', 'Idea to production in 4–6 weeks', 'Code and IP are yours'],
        },
        {
          title: 'AI feature',
          items: ['Scoped to one outcome', 'Built into your stack', 'Evaluation & monitoring included'],
        },
        {
          title: 'Scale',
          items: ['Ongoing product team', 'Roadmap & iteration', 'Uptime & cost control'],
        },
      ]}
      marqueeText="Idea to production in"
      marqueeAccent="weeks"
      ctaTitle={[
        <React.Fragment key="c1">Have a product</React.Fragment>,
        <React.Fragment key="c2">
          to <Gold>launch</Gold>?
        </React.Fragment>,
      ]}
      ctaSub="Fixed scope, fixed price, staging URL by week two. Tell us what you're building and we'll map version one together."
    />
  );
}
