import React from 'react'
import './Gallery.css'
import gallery1 from '../../assets/gallery1.jpg'
import gallery2 from '../../assets/gallery2.jpg'
import gallery3 from '../../assets/gallery3.jpg'
import gallery4 from '../../assets/gallery4.jpeg'
import gallery5 from '../../assets/gallery5.jpg'
import gallery6 from '../../assets/gallery6.jpg'

const Gallery = () => {
    return (
        <section className='section-gallery' id='section-gallery'>
            <div className='gallery'>
                <h2> Our Gallery </h2>

                <div className="gallery-div">
                    <div><img src={gallery1} alt="Image" /></div>
                    <div><img src={gallery2} alt="Image" /></div>
                    <div><img src={gallery3} alt="Image" /></div>
                    <div><img src={gallery4} alt="Image" /></div>
                    <div><img src={gallery5} alt="Image" /></div>
                    <div><img src={gallery6} alt="Image" /></div>
                </div>
            </div>
        </section>
    )
}

export default Gallery
