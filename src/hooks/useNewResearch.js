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
    if (itemToSearch.current === itemToMakeResearch) return
    itemToSearch.current = itemToMakeResearch
    if (galeryToAdd === '') {
      galeryToAdd = 'OTHER THINGS'
    }
    api.search
      .getPhotos({ query: itemToMakeResearch, orientation: 'landscape' })
      .then(result => {
        const arrayResult = result.response.results
        const newPhotos = arrayResult.map(({ id, urls }) => ({ id, url: urls.small }))
        if (newPhotos.length === 0) return
        // Nuevo contenido
        let newGaleryItem = { about: '', galeryContent: [] }
        newGaleryItem = { about: itemToMakeResearch, galeryContent: newPhotos }
        // Verifico si no se repite la búsqueda
        console.log('newGaleryItem: ', newGaleryItem)
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
          console.log('galerysName === 0')
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
    // console.log('galerys: ', galerys)
  }
  return { galerys, getItemToSearch }
}
