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
                  <div key={gallery.galleryName}>
                    <h2>{gallery.galleryName}</h2>
                    {gallery.newGalleryContent.map(research => <h3 key={research.about}> {research.about}</h3>)}
                  </div>
                )
              })
            }
          </div>
      }
      {/* {JSON.stringify(galerys)} */}
    </div>
  )
}

export default Gallerys
