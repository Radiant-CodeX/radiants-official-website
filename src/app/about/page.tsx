'use client';
import React from 'react';
import SubPage, { Gold } from '@/components/SubPage/SubPage';

export default function AboutPage() {
  return (
    <SubPage
      kicker="About — the studio"
      titleLines={[
        <React.Fragment key="l1">The studio behind</React.Fragment>,
        <React.Fragment key="l2">
          what&apos;s <Gold>next</Gold>.
        </React.Fragment>,
      ]}
      intro="Radiants is a venture studio from Chennai. We build products that become companies, and builders who become founders — starting with MailMind, our AI email co-pilot live in production."
      rowsKicker="The Radiant way"
      rows={[
        {
          no: '01',
          title: 'Ownership over assignment',
          text: 'Completing a task is not success — delivering value is. Every builder owns outcomes, not tickets.',
        },
        {
          no: '02',
          title: 'Product first',
          text: 'Every decision should improve the product. Not your code, not your module, not your metrics. The product.',
        },
        {
          no: '03',
          title: 'Speed through clarity',
          text: 'We move fast because everyone understands the mission — speed without direction is just waste with momentum.',
        },
        {
          no: '04',
          title: 'Build together',
          text: 'The best products are never built by individuals. Every success belongs to the team; every failure improves the system.',
        },
      ]}
      cols={[
        {
          title: 'The path',
          items: [
            'Builder — owns tasks',
            'Builder II — owns features',
            'Builder III — owns products',
            'Builder IV — owns businesses',
            'Founder — owns a venture',
          ],
        },
        {
          title: 'The proof',
          items: [
            'MailMind — live in production',
            'Enterprise-grade security',
            'Full observability stack',
            'CI on every change',
          ],
        },
        {
          title: 'The base',
          items: ['Chennai, India', 'Deployed globally', 'sparks@radiantsofficial.com'],
        },
      ]}
      marqueeText="Builders become"
      marqueeAccent="founders"
      ctaTitle={[
        <React.Fragment key="c1">Build</React.Fragment>,
        <React.Fragment key="c2">
          with <Gold>us</Gold>.
        </React.Fragment>,
      ]}
      ctaSub="Whether you have a product to ship or the ambition to build one — the door is the same."
    />
  );
}
