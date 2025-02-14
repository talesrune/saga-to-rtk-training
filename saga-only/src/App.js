import React from 'react'
import Header from './components/Header'
import Products from './components/Products'
import NewProduct from './components/NewProduct'
import EditProduct from './components/EditProduct'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Router>
      <Provider store={ store }>
        <Header />
        <div>
            <Routes>
            <Route exact path='/' element={<Products/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/products/new' element={<NewProduct/>} />
            <Route path='/products/edit/:id' element={<EditProduct/>} />
            </Routes>
        </div>
      </Provider>
    </Router>
  )
}

export default App