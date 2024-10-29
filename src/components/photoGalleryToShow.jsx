import React from 'react'

const PhotoGalleryToShow = ({ galleryName, actualTheme, url, about, indexTheme, indexPhoto, indexGalleryToShow, setPrueba, erasePhoto }) => {
  const handleErasePhoto = () => {
    erasePhoto(indexGalleryToShow, indexTheme, indexPhoto, galleryName, actualTheme)
    // setIndexGalleryToShow(null)
    // console.log('foto a borrar', galerys[indexGalleryToShow].newGalleryContent[indexTheme].galeryContent[indexPhoto])
  }
  return (
    <div className='actualPhotoContainer'>
      <img src={url} alt={about} className='photoGalleryCollage' />
      <button className='eliminarFoto' onClick={handleErasePhoto}>❌</button>
    </div>
  )
}

export default PhotoGalleryToShow
