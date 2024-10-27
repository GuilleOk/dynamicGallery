export const verifyGalleryExistance = ({ gallerysNames, galeryToAdd }) => {
  return gallerysNames.filter(name => name === galeryToAdd).length
}
