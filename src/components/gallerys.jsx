/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react'

const Gallerys = ({ galerys }) => {
  const [showHide, setShowHide] = useState(true)

  const handleShow = () => {
    setShowHide(!showHide)
  }
  return (
    <div>
      {galerys.length === 0
        ? ''
        : <div className='Gallerys'>
            {
              galerys.map((gallery, index) => {
                return (
                  // <div key={gallery.galleryName} className='galleryContainer'>
                  <div key={gallery.galleryName} className='galleryToShow'>
                    <div className='galleryHeader'>
                      <h2>{gallery.galleryName.toUpperCase()}</h2>
                      <button className='buttonToShow' onClick={handleShow}>{showHide ? 'Show Gallery' : 'Hide Gallery'}</button>
                    </div>
                    <img src={gallery.newGalleryContent[0].galeryContent[0].url} alt={gallery.galleryName} className='photoGalleryCollage' />
                    {/* {gallery.newGalleryContent.map(research => {
                      return (
                        <div key={research.about}>
                          <h3> {research.about.toUpperCase()}</h3>
                          <div className='photosContainer'>
                          {research.galeryContent.map((photo, i) => {
                            return (
                              <div key={photo.id}>
                                <img src={photo.url} alt={`photo about ${research.about}`} />
                              </div>
                            )
                          })}
                          </div>
                        </div>
                      )
                    }
                    )} */}
                  </div>
                )
              })
            }
          </div>
      }
    </div>
  )
}

export default Gallerys
