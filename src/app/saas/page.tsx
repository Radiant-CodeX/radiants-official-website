'use client';
import React from 'react';
import SubPage, { Gold } from '@/components/SubPage/SubPage';

export default function SaaSPage() {
  return (
    <SubPage
      kicker="SaaS — product engineering"
      titleLines={[
        <React.Fragment key="l1">Products built to</React.Fragment>,
        <React.Fragment key="l2">
          become <Gold>companies</Gold>.
        </React.Fragment>,
      ]}
      intro="We take products from idea to production in 4–6 weeks — architecture, design, build, deployment, and the boring-but-vital parts most teams skip: billing, security, monitoring, and scale."
      rowsKicker="What we deliver"
      rows={[
        {
          no: '01',
          title: 'End-to-end builds',
          text: 'The entire lifecycle under one roof — no handoffs, no agencies-within-agencies. The people who scope your product are the people who ship it.',
        },
        {
          no: '02',
          title: 'Product strategy',
          text: "We don't just build what you ask for — we help you decide what deserves to be built, and what to cut so version one actually ships.",
        },
        {
          no: '03',
          title: 'Infrastructure that scales',
          text: 'Cloud-native architecture, CI/CD, and monitoring from day one. The same production standard we run our own products on.',
        },
      ]}
      chips={[
        'Multi-tenant architecture',
        'Auth & authorization',
        'Subscriptions & billing',
        'Analytics dashboards',
        'API-first design',
        'Real-time features',
        'White-labeling',
        'Compliance & security',
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
