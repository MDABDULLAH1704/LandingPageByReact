import React from 'react'
import Navbar from '../components/navbar/Navbar'
import RespNav from '../components/respNav/RespNav'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'

const Home = () => {
    return (
        <>
            <Navbar />
            <RespNav />
            <Hero />
            <About />
        </>
    )
}

export default Home
