'use client';
import React from 'react';
import SubPage, { Gold } from '@/components/SubPage/SubPage';

export default function PixelsPage() {
  return (
    <SubPage
      kicker="Pixels — design & web"
      titleLines={[
        <React.Fragment key="l1">Interfaces</React.Fragment>,
        <React.Fragment key="l2">
          with <Gold>intent</Gold>.
        </React.Fragment>,
      ]}
      intro="Every screen is an argument for or against your product. We design and build web and mobile experiences where clarity wins — fast, precise, and made to convert."
      rowsKicker="What we craft"
      rows={[
        {
          no: '01',
          title: 'Web platforms',
          text: 'Full-stack web applications built for performance and scale — from marketing sites that load instantly to complex platforms that feel effortless.',
        },
        {
          no: '02',
          title: 'Mobile experiences',
          text: 'Native and cross-platform apps that feel at home on any device. Seamless, fast, and designed for the way people actually hold their phones.',
        },
        {
          no: '03',
          title: 'UI / UX design',
          text: "Interfaces that don't just look good — they work beautifully. Designed with intent, tested with real users, refined until the friction is gone.",
        },
      ]}
      chips={[
        'Next.js',
        'React Native',
        'TypeScript',
        'Design systems',
        'Motion & GSAP',
        'Accessibility',
        'Performance budgets',
      ]}
      marqueeText="Design with"
      marqueeAccent="intent"
      ctaTitle={[
        <React.Fragment key="c1">Have a screen</React.Fragment>,
        <React.Fragment key="c2">
          worth <Gold>shipping</Gold>?
        </React.Fragment>,
      ]}
      ctaSub="Tell us what your users are struggling with. In 20 minutes we'll show you what it looks like solved — live, not in a deck."
    />
  );
}
