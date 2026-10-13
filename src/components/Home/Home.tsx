'use client'
import HeroWithPreloader from '@/components/Sections/Hero/Hero'
import React from 'react'
import { ReactLenis } from 'lenis/react'
import Story from '@/components/Sections/Story/Story'
import Menu from '@/components/Navbar/Navbar'
import Footer from '@/components/Sections/Footer/Footer'
import { menuItems, subItems } from '@/lib/site'

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
