/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'

const Gallerys = ({ galerys }) => {
  
  return (
    <div>
      {galerys.length === 0
        ? ''
        : <div className='Gallerys'>
            {
              galerys.map((gallery, index) => {
                return (
                  <div key={'' + gallery.galeryName + '' + index}>
                    <h2>{gallery.galeryName}</h2>
                    <h3>{gallery.about}</h3>
                    {/* {JSON.stringify(gallery.galeryContent)} */}
                    {gallery.galeryContent.map(photo => {
                      return <div key={photo.id}><img src={photo.url} /></div>
                    //   return <div key={photo.id}>{JSON.stringify(photo.url)}</div>
                    })}
                  </div>
                )
              })
            }
          </div>
      }
      {/* {JSON.stringify(galerys)}
      hola */}
    </div>
  )
}

export default Gallerys
