/* eslint-disable array-callback-return */
export const addContentToGallery = ({ galerys, galeryToAdd, newGaleryItem }) => {
  const galleryIndex = galerys.findIndex(gallery => gallery.galleryName === galeryToAdd)
  const upDatedGallery = [...galerys]
  const content = upDatedGallery[galleryIndex].newGalleryContent
  const actualContent = [...content, newGaleryItem]
  upDatedGallery[galleryIndex].newGalleryContent = actualContent
  return { upDatedGallery }
}
