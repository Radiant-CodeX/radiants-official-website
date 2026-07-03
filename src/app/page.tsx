'use client'
import HeroWithPreloader from '@/components/Sections/Hero/Hero'
import React from 'react'
import { ReactLenis } from 'lenis/react'
import Story from '@/components/Sections/Story/Story'
import Menu from '@/components/Navbar/Navbar'
import Footer from '@/components/Sections/Footer/Footer'

const menuItems = [
  { label: "Home", href: "/", active: false },
  { label: "About", href: "/about", active: false },
  { label: "Pixels", href: "/pixels", active: false },
  { label: "Cores", href: "/cores", active: false },
  { label: "Agents", href: "/agents", active: false },
  { label: "SaaS", href: "/saas", active: false },
];

const subItems = [
  { title: "Connect", content: "Instagram" },
  { title: "Email", content: "sparks@radiantsofficial.com" },
  { title: "GLOBAL", content: "2026" },
];

const Home = () => {
  return (
    <ReactLenis root>
      <HeroWithPreloader />
      <Menu menuItems={menuItems} subItems={subItems} />
      <Story />
      <Footer />
    </ReactLenis>
  )
}

export default Home
