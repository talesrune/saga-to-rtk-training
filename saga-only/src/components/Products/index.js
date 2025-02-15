import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { downloadProductsAction } from '../../actions/products-actions'
// import Product from '../Product'
import './index.css'
// import ProductsBody from './ProductsBody'
import {ProductsBody} from "products-library"
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deleteProductAction, retrieveProductEditAction } from '../../actions/products-actions'


const Products = () => {
  const navigate = useNavigate()

  const [accountNum, setAccountNum] = useState('')
  const [count, setCount] = useState(0)

  let products = useSelector(state => state.products.products)
  const error = useSelector(state => state.products.error)
  const loading = useSelector(state => state.products.loading)

  const latestProducts = useRef(products)
  latestProducts.current = products

  // const prevProductsRef = useRef()
  // useEffect(() => {
  //   prevProductsRef.current = products
  // },[])
  // const prevProducts = prevProductsRef.current

  
  useEffect(() => {
    if (count === 0) {
      console.log('test')
      console.log(products)
      setCount(1)
    } else {
      // (async () => await downloadProductsAction())()
      downloadProductsAction()
       console.log('test2')
       console.log(products)
       setTimeout(() => {
        console.log('test3')
        console.log(latestProducts.current)
       }, 10)
    }
  }, [accountNum]) //,products])

  useEffect(() => {
    if (!loading && products.length > 0) {
      console.log('Data retrieval complete')
      console.log(products)
    } else if (error) {
      alert('An error ocurred')
    } else if (accountNum !== '' && !loading && products.length === 0) {
      alert('i got called but no items')
    }
  }, [loading, products, error])

  const confirmDeleteProduct = id => {
      // ask the user for confirmation
      Swal.fire({
        title: 'Are you sure you want to delete the product?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#62a086',
        cancelButtonColor: '#f66b61',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        result.value && deleteProductAction(id)
      })
    }
  
    // function that redirects automátically, is better than 'Link'
    const redirectionEdition = product => {
      retrieveProductEditAction(product)
      navigate(`products/edit/${product.id}`)
    }

 

  return (
    <div>
      <h2 className='table__title'>Products</h2>
      { error ? <p>An error ocurred</p> : null }
      { loading ? <p>Loading...</p> : null }
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th id='table__title-price'>Price</th>
            <th id='table__title-action'>Actions</th>
            <th ><button onClick={()=>setAccountNum('something')}>hi</button></th>
            <th ><button onClick={()=>setAccountNum('something2')}>hi2</button></th>
          </tr>
        </thead>
        <ProductsBody products={products} redirectionEdition={redirectionEdition} confirmDeleteProduct={confirmDeleteProduct}/>
        {/* <tbody>
          { products.length === 0 ? 'No products yet.' : (
            products.map(product =>
              <Product
                key={product.id}
                name={product.name}
                price={product.price}
                id={product.id}
              />
            )
          )}
        </tbody> */}
      </table>
    </div>
  )
}

export default Products
