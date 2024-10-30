import React from 'react'
import Navbar from '../components/navbar/Navbar'
import RespNav from '../components/respNav/RespNav'
import Hero from '../components/hero/Hero'

const Home = () => {
    return (
        <>
            <Navbar />
            <RespNav />
            <Hero />
            <div style={{ textAlign: 'center' }}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/sWE-YQgf3WE?si=gl-gOgIl8H3PSd69"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </>
    )
}

export default Home
