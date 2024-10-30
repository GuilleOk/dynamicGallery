import React from 'react'

const PhotoGalleryToShow = ({ galleryName, actualTheme, url, about, indexTheme, indexPhoto, indexGalleryToShow, erasePhoto }) => {
  const handleErasePhoto = () => {
    erasePhoto(indexGalleryToShow, indexTheme, indexPhoto, galleryName, actualTheme)
  }
  return (
    <div className='actualPhotoContainer'>
      <img src={url} alt={about} className='photoGalleryCollage' />
      <button className='eliminarFoto' onClick={handleErasePhoto}>❌</button>
    </div>
  )
}

export default PhotoGalleryToShow
