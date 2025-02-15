import React from 'react'
import './Product.css'

const Product = (product) => {
  const { name, price, id, redirectionEdition, confirmDeleteProduct } = product

  return (
    <tr>
      <td>{name}</td>
      <td className='prices'>{price} $</td>
      <td className='button-container'>
        <button
          className='button button--edit'
          type='button'
          onClick={() => redirectionEdition(product)}
        >Edit link</button>
        <button
          className='button button--delete'
          type='button'
          onClick={() => confirmDeleteProduct(id)}
        >Delete</button>
      </td>
    </tr>
  )
}

export default Product