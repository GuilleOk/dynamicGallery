/* eslint-disable indent */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react'
import ContentGalleryToShow from './contentGalleryToShow'

const Gallerys = ({ galerys, erasePhoto, eraseGallery }) => {
  const [showHide, setShowHide] = useState(true)
  const [indexGalleryToShow, setIndexGalleryToShow] = useState(null)
  const [prueba, setPrueba] = useState(null)

  const handleShow = (index) => {
    setShowHide(!showHide)
    setIndexGalleryToShow(index)
  }

  const handleHideGallery = () => {
    setShowHide(!showHide)
    setIndexGalleryToShow(null)
  }

  const handleEraseGallery = (index, { name }) => {
    eraseGallery(index, name)
  }

  return (
    <div>
      {galerys.length === 0
        ? ''
        : <div className='w-100'>
            <div className='Gallerys'>
            {
              galerys.map((gallery, index) => {
                return (
                  <div key={gallery.galleryName}>
                    {
                      gallery.newGalleryContent.length !== 0 &&
                      <div className={showHide ? 'galleryToShow' : 'd-none'}>
                          <div className='galleryHeader'>
                            <h2>{gallery.galleryName.toUpperCase()}</h2>
                            <button className='eliminarGaleria' onClick={() => handleEraseGallery(index, { name: gallery.galleryName })}>❌</button>
                            <button className='buttonToShow' onClick={() => handleShow(index)}>Show Gallery</button>
                          </div>
                          <img src={gallery.newGalleryContent[0].galeryContent[0]?.url} alt={gallery.galleryName} className='photoGalleryCollage' />
                      </div>
                    }
                  </div>
                )
              })
            }
            </div>
            <div className='Gallerys'>
            {indexGalleryToShow === null
              ? ''
              : <div className={!showHide && 'actualGalleryToShow'}>
                  <div className='actualGalleryHeader'>
                    <h2>{galerys[indexGalleryToShow]?.galleryName.toUpperCase()}</h2>
                    <button className='buttonToShow' onClick={handleHideGallery}>Hide Gallery</button>
                </div>
              {galerys[indexGalleryToShow] !== undefined && <ContentGalleryToShow galleryName={galerys[indexGalleryToShow].galleryName} actualGalleryContent={galerys[indexGalleryToShow]} setPrueba={setPrueba} indexGalleryToShow={indexGalleryToShow} erasePhoto={erasePhoto} prueba={prueba} />}
                </div>
            }
            </div>
          </div>
      }
    </div>
  )
}

export default Gallerys
