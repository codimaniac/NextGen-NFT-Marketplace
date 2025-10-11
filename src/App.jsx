import './App.css'
import { Routes, Route } from 'react-router-dom'
import { About, Blog, ContactUs, FAQ, Homepage, Login, NotFound, Signup, TopCreators } from './pages'
import { Layout } from './containers'
import Collectibles from './pages/Collectibles'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/support' element={<ContactUs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/top-creators' element={<TopCreators />} />
        <Route path='/collectibles' element={<Collectibles />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
