import React from 'react'
import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { Features } from './Features';
import { Market } from './Market';
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar className='sticky top-0 z-50'/>
      <Header />
      <Features />
      <Market />
      <Footer />
    </div>
  )
}
