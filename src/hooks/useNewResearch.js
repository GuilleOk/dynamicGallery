import { useRef, useState } from 'react'
import { createApi } from 'unsplash-js'

export const useNewResearch = () => {
  const itemToSearch = useRef('')
  const [galerys, setGalerys] = useState([])

  const api = createApi({
    // Don't forget to set your access token here!
    // See https://unsplash.com/developers
    accessKey: 'vhyahMS7HSy3Ru9HdyH-hGlVrq9WJoC0rY-0Xv6s86c'
  })

  const getItemToSearch = ({ itemToMakeResearch, galeryToAdd }) => {
    if (itemToSearch.current === itemToMakeResearch) return
    if (galeryToAdd === '') {
      galeryToAdd = 'Other Things'
    }
    api.search
      .getPhotos({ query: itemToMakeResearch, orientation: 'landscape' })
      .then(result => {
        const arrayResult = result.response.results
        const newPhotos = arrayResult.map(({ id, urls }) => ({ id, url: urls.small }))
        const newGalery = { galeryName: galeryToAdd, about: itemToMakeResearch, galeryContent: newPhotos }
        if (newPhotos.length !== 0) {
          setGalerys([...galerys, newGalery])
          itemToSearch.current = itemToMakeResearch
        }
      })
      .catch(() => {
        console.log('something went wrong!')
      })
    // console.log('galerys: ', galerys)
  }
  return { galerys, getItemToSearch }
}
