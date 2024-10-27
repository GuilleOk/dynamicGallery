export const verifyNewTheme = ({ themesReminder, itemToMakeResearch, newGaleryItem }) => {
  return themesReminder.filter(gallery => gallery.about === newGaleryItem.about).length
}
