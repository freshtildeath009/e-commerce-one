import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './app.css'
import ProductContextProvider from './context/productContext'

// Components
import Header from './components/Header'
// Page routes
import ProductDetail from './components/ProductDetail'
import AllProducts from './pages/AllProducts'
import Home from './pages/Home'


function App() {
  return (
    <>
      <ProductContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/allproducts' element={<AllProducts />} />
            <Route path='/allproducts/:id' element={<ProductDetail />} />
          </Routes>
        </Router>
      </ProductContextProvider>
    </>
  )
}

export default App 