import React from 'react'
import Navbar from '../components/navbar/Navbar'
import RespNav from '../components/respNav/RespNav'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Training from '../components/training/Training'
import Gallery from '../components/gallery/Gallery'
import Testimonials from '../components/testimonials/Testimonials'
import Contact from '../components/contact/Contact'

const Home = () => {
    return (
        <>
            <Navbar />
            <RespNav />
            <Hero />
            <About />
            <Training />
            <Gallery />
            <Testimonials /> 
            <Contact />
        </>
    )
}

export default Home
