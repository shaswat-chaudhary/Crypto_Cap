import React from 'react'
import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { Features } from './Features';
import { Market } from './Market';
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div className='w-full'>
      <Navbar />

      <section id='header'>
        <Header />
      </section>

      <section id='features'>
        <Features />
      </section>

      <section id='market'>
        <Market />
      </section>

      <Footer />
    </div>
  )
}
