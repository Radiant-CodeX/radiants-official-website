'use client';
import React from 'react';
import SubPage, { Gold } from '@/components/SubPage/SubPage';

export default function AgentsPage() {
  return (
    <SubPage
      kicker="Agents — AI & automation"
      titleLines={[
        <React.Fragment key="l1">Intelligence</React.Fragment>,
        <React.Fragment key="l2">
          that <Gold>acts</Gold>.
        </React.Fragment>,
      ]}
      intro="We build AI that does real work — triaging, extracting, drafting, deciding — with every decision explainable and personal data masked before a model ever sees it. Proven in production with MailMind."
      rowsKicker="What we build"
      rows={[
        {
          no: '01',
          title: 'AI-powered workflows',
          text: 'Intelligent pipelines that replace repetitive work — classification, routing, extraction — with reasoning your team can inspect, correct, and trust.',
        },
        {
          no: '02',
          title: 'Autonomous agents',
          text: 'Software agents that perceive, reason, and act — from single-task bots to orchestrated multi-agent systems, always with a human holding the approval key.',
        },
        {
          no: '03',
          title: 'Production ML integration',
          text: 'Models are the easy part; production is the hard part. We ship AI with evaluation harnesses, observability, cost control, and privacy built in.',
        },
      ]}
      chips={[
        'Document processing',
        'Email triage',
        'CV & intake automation',
        'RAG over your data',
        'Data extraction',
        'Workflow orchestration',
        'PII-safe pipelines',
        'LLM observability',
      ]}
      marqueeText="AI that ships, not"
      marqueeAccent="slideware"
      ctaTitle={[
        <React.Fragment key="c1">Have work AI</React.Fragment>,
        <React.Fragment key="c2">
          should be <Gold>doing</Gold>?
        </React.Fragment>,
      ]}
      ctaSub="Bring us the process that eats your team's hours. We'll show you it running automated — live demo, real architecture, 20 minutes."
    />
  );
}
