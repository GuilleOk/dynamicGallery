import React from 'react'
import PhotoGalleryToShow from './photoGalleryToShow'

const ContentGalleryToShow = ({ actualGalleryContent, setPrueba, indexGalleryToShow, erasePhoto, prueba }) => {
  return (
    <div>
      {actualGalleryContent?.newGalleryContent.map((galleryItem, indexTheme) => {
        return (
          <div key={galleryItem.about}>
            <h3>{galleryItem.about.toUpperCase()}</h3>
            <div className='galleryContent'>
              {galleryItem.galeryContent.length !== 0 && galleryItem.galeryContent.map((photo, i) => {
                return (
                  <PhotoGalleryToShow key={photo.id} url={photo.url} about={galleryItem.about} indexTheme={indexTheme} indexPhoto={i} indexGalleryToShow={indexGalleryToShow} setPrueba={setPrueba} erasePhoto={erasePhoto} />
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ContentGalleryToShow
