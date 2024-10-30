/* eslint-disable indent */
import { useRef, useState } from 'react'
import { createApi } from 'unsplash-js'
import { verifyNewTheme } from '../helpers/verifyNewTheme'
import { verifyGalleryExistance } from '../helpers/verifyGalleryExistance'
import { addContentToGallery } from '../helpers/addContentToGallery'

export const useNewResearch = () => {
  const itemToSearch = useRef('')
  const themesReminder = useRef([])
  const gallerysNames = useRef([])
  const [galerys, setGalerys] = useState([])

  const api = createApi({
    // Don't forget to set your access token here!
    // See https://unsplash.com/developers
    accessKey: 'vhyahMS7HSy3Ru9HdyH-hGlVrq9WJoC0rY-0Xv6s86c'
  })

  const getItemToSearch = ({ itemToMakeResearch, galeryToAdd }) => {
    if (galerys.length === 0) {
      itemToSearch.current = ''
    } else if (itemToSearch.current === itemToMakeResearch) return
    itemToSearch.current = itemToMakeResearch
    if (galeryToAdd === '') {
      galeryToAdd = 'OTHER THINGS'
    }
    api.search
      .getPhotos({ query: itemToMakeResearch, orientation: 'landscape', per_page: 6 })
      .then(result => {
        const arrayResult = result.response.results
        const newPhotos = arrayResult.map(({ id, urls }) => ({ id, url: urls.small }))
        if (newPhotos.length === 0) return
        // Nuevo contenido
        let newGaleryItem = { about: '', galeryContent: [] }
        newGaleryItem = { about: itemToMakeResearch, galeryContent: newPhotos }
        // Verifico si no se repite la búsqueda
        if (themesReminder.current.length === 0 || !verifyNewTheme({ themesReminder: themesReminder.current, newGaleryItem })) {
          let themes = themesReminder.current
          themes = [...themes, newGaleryItem]
          themesReminder.current = themes
        } else return
        // Añado una galería si no había ninguna
        if (gallerysNames.current.length === 0) {
          let names = gallerysNames.current
          names = [...names, galeryToAdd]
          gallerysNames.current = names // si no hay ninguna galería la añado
          let itemToAdd = []
          itemToAdd = [...itemToAdd, newGaleryItem]
          const newGallery = { galleryName: galeryToAdd, newGalleryContent: itemToAdd }
          setGalerys([...galerys, newGallery])
        } else if (!verifyGalleryExistance({ gallerysNames: gallerysNames.current, galeryToAdd })) {
        // Añado una galería si esta no existía
        let names = gallerysNames.current
          names = [...names, galeryToAdd]
          gallerysNames.current = names // verifico si no se repitió la galería
          let itemToAdd = []
          itemToAdd = [...itemToAdd, newGaleryItem]
          const newGallery = { galleryName: galeryToAdd, newGalleryContent: itemToAdd }
          setGalerys([...galerys, newGallery])
        } else {
          // Añado contenido a una galería existente
          const { upDatedGallery } = addContentToGallery({ galerys, galeryToAdd, newGaleryItem })
          setGalerys(upDatedGallery)
        }
      })
      .catch((error) => {
        console.log('something went wrong!', error)
      })
  }

  const erasePhoto = (indexGalleryToShow, indexTheme, indexPhoto, galleryName, actualTheme) => {
    const updateGallerys = [...galerys]
    updateGallerys[indexGalleryToShow].newGalleryContent[indexTheme].galeryContent.splice(indexPhoto, 1)
    if (updateGallerys[indexGalleryToShow].newGalleryContent[indexTheme].galeryContent.length === 0) {
      updateGallerys[indexGalleryToShow].newGalleryContent.splice(indexTheme, 1)
      const auxthemeArray = [...themesReminder.current]
      themesReminder.current = [...auxthemeArray.filter(item => item.about !== actualTheme)]
    }
    if (updateGallerys[indexGalleryToShow].newGalleryContent.length === 0) {
      updateGallerys.splice(indexGalleryToShow, 1)
      const auxGalleryNames = [...gallerysNames.current]
      gallerysNames.current = [...auxGalleryNames.filter(item => item !== galleryName)]
    }
    setGalerys(updateGallerys)
  }

  const eraseGallery = (index, name) => {
    const updateGallerys = [...galerys]
    const temas = [...themesReminder.current]
    const temasDefinitivos = temas.filter(tema =>
      !updateGallerys[index].newGalleryContent.some(galleryItem => galleryItem.about === tema.about)
    )

    themesReminder.current = temasDefinitivos
    const names = [...gallerysNames.current]
    const auxNames = names.filter(Name => Name !== name)
    gallerysNames.current = auxNames
    updateGallerys.splice(index, 1)
    itemToSearch.current = ''
    setGalerys(updateGallerys)
  }

  const eraseTehme = ({ indexGalleryToShow, indexTheme, theme }) => {
    const updateGallery = [...galerys]
    itemToSearch.current = itemToSearch.current === theme ? '' : itemToSearch.current

    themesReminder.current = [...themesReminder.current.filter(item => item.about !== theme)]
    updateGallery[indexGalleryToShow].newGalleryContent.splice(indexTheme, 1)
    if (updateGallery[indexGalleryToShow].newGalleryContent.length === 0) {
      const nameGallery = updateGallery[indexGalleryToShow].galleryName
      gallerysNames.current = gallerysNames.current.filter(name => name !== nameGallery)
      updateGallery.splice(indexGalleryToShow, 1)
    }
    setGalerys(updateGallery)
  }

  return { galerys, getItemToSearch, erasePhoto, eraseGallery, eraseTehme }
}
