'use client';
import { ReactLenis, useLenis } from 'lenis/react';
import Menu from '@/components/Navbar/Navbar';
import React, { useEffect } from 'react';

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pixels", href: "/pixels" },
  { label: "Cores", href: "/cores" },
  { label: "Agents", href: "/agents" },
  { label: "SaaS", href: "/saas" },
];

const subItems = [
  { title: "Connect", content: "Instagram" },
  { title: "Email", content: "sparks@radiantsofficial.com" },
  { title: "GLOBAL", content: "2026" },
];

function ScrollReset() {
  const lenis = useLenis();
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [lenis]);
  return null;
}

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      <ScrollReset />
      <Menu menuItems={menuItems} subItems={subItems} withMask={false} />
      {children}
    </ReactLenis>
  );
}
