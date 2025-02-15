import React from 'react'
import './index.css'

const Product = (product) => {
  // const navigate = useNavigate()
  const { name, price, id, redirectionEdition, confirmDeleteProduct } = product

  // const confirmDeleteProduct = id => {
  //   // ask the user for confirmation
  //   Swal.fire({
  //     title: 'Are you sure you want to delete the product?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#62a086',
  //     cancelButtonColor: '#f66b61',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     result.value && deleteProductAction(id)
  //   })
  // }

  // // function that redirects automátically, is better than 'Link'
  // const redirectionEdition = product => {
  //   retrieveProductEditAction(product)
  //   navigate(`products/edit/${id}`)
  // }

  return (
    <tr>
      <td>{name}</td>
      <td className='prices'>{price} $</td>
      <td className='button-container'>
        <button
          className='button button--edit'
          type='button'
          onClick={() => redirectionEdition(product)}
        >Edit</button>
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