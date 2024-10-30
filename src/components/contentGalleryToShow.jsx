import React from 'react'
import PhotoGalleryToShow from './photoGalleryToShow'

const ContentGalleryToShow = ({ galleryName, actualGalleryContent, indexGalleryToShow, erasePhoto, eraseTehme }) => {
  const handleEraseTheme = ({ indexTheme, theme }) => {
    console.log('theme: ', theme)
    eraseTehme({ indexGalleryToShow, indexTheme, theme })
  }
  return (
    <div>
      {actualGalleryContent?.newGalleryContent.map((galleryItem, indexTheme) => {
        return (
          <div key={galleryItem.about}>
            <div className='galleryHeader'>
              <h3>{galleryItem.about.toUpperCase()}</h3>
              <button className='buttonEraseTheme' onClick={() => handleEraseTheme({ indexTheme, theme: galleryItem.about })}>❌</button>
            </div>
            <div className='galleryContent'>
              {galleryItem.galeryContent.length !== 0 && galleryItem.galeryContent.map((photo, i) => {
                return (
                  <PhotoGalleryToShow key={photo.id} actualTheme={galleryItem.about} galleryName={galleryName} url={photo.url} about={galleryItem.about} indexTheme={indexTheme} indexPhoto={i} indexGalleryToShow={indexGalleryToShow} erasePhoto={erasePhoto} />
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
