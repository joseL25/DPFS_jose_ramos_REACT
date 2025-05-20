// import React from 'react'

export const Product = ({model}) => {
  return (
  <div key={model.id} className='model'>
    <h4>{model.name}</h4>
    <div className="image-model">
      <img src={model.imageUrl} alt="imagen del producto" />
    </div>
    <p>${model.price}</p>
  </div>
  )
}
