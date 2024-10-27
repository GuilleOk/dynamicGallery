/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react'

const Gallerys = ({ galerys }) => {
  const [showHide, setShowHide] = useState(true)
  const [indexGalleryToShow, setIndexGalleryToShow] = useState(null)

  const handleShow = (index) => {
    setShowHide(!showHide)
    setIndexGalleryToShow(index)
  }

  const handleHideGallery = () => {
    setShowHide(!showHide)
    setIndexGalleryToShow(null)
  }

  return (
    <div>
      {galerys.length === 0
        ? ''
        : <div className='Gallerys'>
            {
              galerys.map((gallery, index) => {
                return (
                  <div key={gallery.galleryName} className={showHide ? 'galleryToShow' : 'd-none'}>
                    <div className='galleryHeader'>
                      <h2>{gallery.galleryName.toUpperCase()}</h2>
                      <button className='buttonToShow' onClick={() => handleShow(index)}>Show Gallery</button>
                    </div>
                    <img src={gallery.newGalleryContent[0].galeryContent[0].url} alt={gallery.galleryName} className='photoGalleryCollage' />
                  </div>
                )
              })
            }
            {indexGalleryToShow === null
              ? ''
              : <div className={!showHide && 'actualGalleryToShow'}>
                  <div className='actualGalleryHeader'>
                    <h2>{galerys[indexGalleryToShow].galleryName.toUpperCase()}</h2>
                    <button className='buttonToShow' onClick={handleHideGallery}>Hide Gallery</button>
                  </div>
                  {/* <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='What do you wanna see of this gallery?' onChange={handleChange} />
                  </form> */}
                  {galerys[indexGalleryToShow].newGalleryContent.map(galleryItem => {
                    return (
                      <div key={galleryItem.about}>
                        <h3>{galleryItem.about.toUpperCase()}</h3>
                        <div className='Gallerys'>
                        {galleryItem.galeryContent.map(photo => {
                          return (
                            <div key={photo.id} className='actualPhotoContainer'>
                              <img src={photo.url} alt={galleryItem.about} className='photoGalleryCollage' />
                            </div>
                          )
                        })}
                        </div>
                      </div>
                    )
                  })}
                </div>
            }
          </div>
      }
    </div>
  )
}

export default Gallerys
