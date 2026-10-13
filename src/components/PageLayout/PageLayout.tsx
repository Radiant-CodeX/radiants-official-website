'use client';
import { ReactLenis, useLenis } from 'lenis/react';
import Menu from '@/components/Navbar/Navbar';
import React, { useEffect } from 'react';
import { menuItems, subItems } from '@/lib/site';

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
