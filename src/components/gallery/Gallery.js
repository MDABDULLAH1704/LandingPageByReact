import React, { useEffect } from 'react'
import './Gallery.css'
import gallery1 from '../../assets/gallery1.jpg'
import gallery2 from '../../assets/gallery2.jpg'
import gallery3 from '../../assets/gallery3.jpg'
import gallery4 from '../../assets/gallery4.jpeg'
import gallery5 from '../../assets/gallery5.jpg'
import gallery6 from '../../assets/gallery6.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css' 

const Gallery = () => {
    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);

    return (
        <div className='gallery' id='section-gallery'>
            <h2> Our Gallery </h2>

            <div className="gallery-div">
                <div><img src={gallery1} alt="Image" data-aos="fade-up" data-aos-delay="200" /></div>
                <div><img src={gallery4} alt="Image" data-aos="fade-up" data-aos-delay="200" /></div>
                <div><img src={gallery2} alt="Image" data-aos="fade-up" data-aos-delay="200" /></div>
                <div><img src={gallery5} alt="Image" data-aos="fade-up" data-aos-delay="200" /></div>
                <div><img src={gallery3} alt="Image" data-aos="fade-up" data-aos-delay="200" /></div>
                <div><img src={gallery6} alt="Image" data-aos="fade-up" data-aos-delay="200" /></div>
            </div>
        </div>
    )
}

export default Gallery
