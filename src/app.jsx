import React, { useState } from 'react'
import { useNewResearch } from './hooks/useNewResearch'
import Gallerys from './components/gallerys'

const NewResearch = () => {
  const { galerys, getItemToSearch } = useNewResearch()
  const [itemToSearch, setItemToSearch] = useState('')
  const [galeryToAdd, setGaleryToAdd] = useState('')
  const [typeMessage, setTypeMessage] = useState(true)

  const handleResearchChange = (e) => {
    const newResearch = e.target.value
    setItemToSearch(newResearch)
    console.log('newResearch: ', newResearch)
  }

  const handleGaleryChange = (e) => {
    const newGalery = e.target.value
    setGaleryToAdd(newGalery)
    console.log('first')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getItemToSearch({ itemToMakeResearch: itemToSearch, galeryToAdd })
  }

  const handleTypeMessage = () => {
    setTypeMessage(!typeMessage)
  }

  return (
    <div className='ContainerApp'>
      <div className='toogleButtonContainer'>
        <button className='btn btn-primary toogleButton' onClick={handleTypeMessage} type='button' data-bs-toggle='collapse' data-bs-target='#collapseform' aria-expanded='false' aria-controls='collapseform'>
          {typeMessage ? 'Click to search' : 'Click to hide form'}
        </button>
      </div>
      <div className='toogledContainer'>
        <div className='collapse collapse-horizontal' id='collapseform'>
          <div className='card card-body mx-auto' style={{ width: '90%' }}>
            <form onSubmit={handleSubmit}>
              <input type='text' value={itemToSearch} onChange={handleResearchChange} className='w-100 inputSearch my-1' placeholder='Type for new photos research' required />
              <input type='text' value={galeryToAdd} onChange={handleGaleryChange} className='w-100 inputSearch my-1' placeholder='Type the section where you want to add the images of the current research' />
              <div className='containerSearchButton'>
                <button className='btn btn-primary searchSubmit mt-3'>Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Gallerys galerys={galerys} />
    </div>
  )
}

export default NewResearch
