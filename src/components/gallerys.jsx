/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'

const Gallerys = ({ galerys }) => {
  return (
    <div>
      {galerys.length === 0
        ? ''
        : <div className='Gallerys'>
            {
              galerys.map((gallery, index) => {
                return (
                  <div key={gallery.galleryName} className='galleryContainer'>
                    <h2>{gallery.galleryName.toUpperCase()}</h2>
                    {gallery.newGalleryContent.map(research => {
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
                    )}
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
