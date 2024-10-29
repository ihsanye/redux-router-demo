import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header'
import AboutEmployee from './pages/AboutEmployee'
import AboutCompany from './pages/AboutCompany'
import ProductDetails from './pages/ProductDetails'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product-detail/:id' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />}>
          <Route path='employee' element={<AboutEmployee />}></Route>
          <Route path='company' element={<AboutCompany />}></Route>
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
