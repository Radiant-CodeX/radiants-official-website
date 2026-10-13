import React from 'react';
import type { Metadata } from 'next';
import SubPage, { Gold } from '@/components/SubPage/SubPage';

export const metadata: Metadata = {
  title: 'About the Studio',
  description:
    'Radiants is an AI studio from Chennai, India, founded by three engineers who build AI agents, automations, and products that growing businesses can actually run.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <SubPage
      kicker="About — the studio"
      titleLines={[
        <React.Fragment key="l1">Small team.</React.Fragment>,
        <React.Fragment key="l2">
          Serious <Gold>AI</Gold>.
        </React.Fragment>,
      ]}
      intro="Radiants is an AI studio from Chennai, founded by Tarun, Rithish, and Ganesh — three engineers who believe every growing business deserves the kind of AI that used to be reserved for companies with research labs. We build it, ship it, and stay to run it."
      rowsKicker="How we work"
      rows={[
        {
          no: '01',
          title: 'Bottleneck first',
          text: "We don't start with a model; we start with where your team's time goes. If AI isn't the right answer, we'll tell you.",
        },
        {
          no: '02',
          title: 'Production, not prototypes',
          text: 'Tested, monitored, and secure by construction. Nothing ships unless we would proudly put our name behind it.',
        },
        {
          no: '03',
          title: 'Privacy by default',
          text: 'Personal data is masked before any model call, and a human keeps the approval key on anything that matters.',
        },
        {
          no: '04',
          title: 'Built once, built to grow',
          text: 'What we build for one business becomes a better product for the next — so every client benefits from the work before them.',
        },
      ]}
      cols={[
        {
          title: 'The team',
          items: ['Tarun — co-founder', 'Rithish — co-founder', 'Ganesh — co-founder'],
        },
        {
          title: 'The proof',
          items: [
            'MailMind — live in production',
            'PII-safe AI pipelines',
            'Full observability stack',
            'CI on every change',
          ],
        },
        {
          title: 'The base',
          items: ['Chennai, India', 'Working with clients globally', 'sparks@radiantsofficial.com'],
        },
      ]}
      marqueeText="Small team, serious"
      marqueeAccent="AI"
      ctaTitle={[
        <React.Fragment key="c1">Build</React.Fragment>,
        <React.Fragment key="c2">
          with <Gold>us</Gold>.
        </React.Fragment>,
      ]}
      ctaSub="Tell us what's slowing your business down. We'll tell you honestly whether AI can fix it."
    />
  );
}
