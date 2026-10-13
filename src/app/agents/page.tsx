import React from 'react';
import type { Metadata } from 'next';
import SubPage, { Gold } from '@/components/SubPage/SubPage';

export const metadata: Metadata = {
  title: 'AI Agents, Receptionists & Workflow Automation',
  description:
    'Radiants builds AI agents for growing businesses — AI receptionists that answer and book 24/7, workflow automation for email, documents, and leads, and AI audits that show what is worth automating.',
  alternates: { canonical: '/agents' },
};

export default function AgentsPage() {
  return (
    <SubPage
      kicker="Agents — AI automation & consulting"
      titleLines={[
        <React.Fragment key="l1">AI that does</React.Fragment>,
        <React.Fragment key="l2">
          the <Gold>work</Gold>.
        </React.Fragment>,
      ]}
      intro="We find the work that eats your team's hours and hand it to AI agents — answering calls and chats, booking appointments, triaging email, processing documents, qualifying leads. A human stays in control, and personal data is masked before a model ever sees it."
      rowsKicker="What we build"
      rows={[
        {
          no: '01',
          title: 'AI automation audit',
          text: "We map how work actually moves through your business, find the bottlenecks, and tell you plainly which are worth automating — and which aren't. You keep the roadmap whether or not we build it.",
        },
        {
          no: '02',
          title: 'AI receptionists & assistants',
          text: 'Voice and chat agents trained on your business that answer questions, book appointments, capture leads, and hand off to your team when a person is needed — at any hour.',
        },
        {
          no: '03',
          title: 'Workflow automation',
          text: 'Pipelines for the repetitive work: email triage, document and data extraction, intake and routing, lead qualification — connected to the tools your team already uses.',
        },
        {
          no: '04',
          title: 'Custom AI agents',
          text: 'Agents that reason and act across your systems, from single-task bots to multi-agent workflows — shipped with evaluation, observability, and cost control from day one.',
        },
      ]}
      chips={[
        'AI receptionists',
        'Voice agents',
        'Chat assistants',
        'Appointment booking',
        'Lead qualification',
        'Email triage',
        'Document processing',
        'Data extraction',
        'RAG over your data',
        'CRM & tool integrations',
        'PII-safe pipelines',
        'LLM observability',
      ]}
      cols={[
        {
          title: 'Audit',
          items: ['Fixed price', 'Workflow map & bottlenecks', 'Prioritised automation roadmap'],
        },
        {
          title: 'Build',
          items: ['Fixed scope, fixed price', 'Staging from week two', 'Deployed and handed over'],
        },
        {
          title: 'Run',
          items: ['Monthly support', 'Monitoring & tuning', 'New workflows as you grow'],
        },
      ]}
      marqueeText="AI that ships, not"
      marqueeAccent="slideware"
      ctaTitle={[
        <React.Fragment key="c1">Have work AI</React.Fragment>,
        <React.Fragment key="c2">
          should be <Gold>doing</Gold>?
        </React.Fragment>,
      ]}
      ctaSub="Bring us the process that eats your team's hours. In 30 minutes we'll show you what it looks like automated — and whether it's worth doing."
    />
  );
}
