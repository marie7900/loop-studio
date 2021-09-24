import React from 'react'
import './CreationImgGallery.css'

function CreationImgGallery({ imgNumber, index }) {
    var galleryImgNumber = `gallery-img-${index}`
    return (
        <div className="creations-container">
            <p className="gallery-img-text">{imgNumber}</p>
            <div className={galleryImgNumber}>
                <div className="gallery-img-black-overlay"></div>
                <div className="gallery-img-white-overlay">
                
            </div>
        </div>
        </div>
    )
}

export default CreationImgGallery
