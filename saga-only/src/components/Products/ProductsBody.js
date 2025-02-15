import Product from '../Product'

const ProductsBody = ({products, redirectionEdition, confirmDeleteProduct}) => {

  return (   
        <tbody>
          { products.length === 0 ? 'No products yet.' : (
            products.map(product =>
              <Product
                key={product.id}
                name={product.name}
                price={product.price}
                id={product.id}
                redirectionEdition={redirectionEdition}
                confirmDeleteProduct={confirmDeleteProduct}
              />
            )
          )}
        </tbody>
  )
}

export default ProductsBody
