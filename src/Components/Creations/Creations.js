import React from 'react'
import CreationImgGallery from './CreationImgGallery/CreationImgGallery'
import './Creations.css'

function Creations() {

    var creationsImgTexts = [
        "Deep earth",
        "Night arcade",
        "Make it fisheye",
        "The grid",
        "From up above VR",
        "Pocket borealis",
        "The curiosity",
        "Soccer team VR"
    ]

    return (
        <div className="creations">
            
            <div className="creations-title">
                <h2>Our creations</h2>
            </div>
            <div className="creations-btn">
                <button>See all</button>
            </div>
                
            <div className="creations-gallery">
                {
                    creationsImgTexts.map((creationsImgText, index) =>
                        <div key={creationsImgText}>
                            <CreationImgGallery
                                imgNumber={creationsImgText}
                                index={index}
                            />
                        </div>)
                }
            </div>
        </div>
    )
}

export default Creations
