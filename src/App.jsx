import { Routes, Route } from 'react-router-dom'
import { About, Blog, ContactUs, CreatorProfile, Marketplace, FAQ, Homepage, Login, NotFound, Signup, TopCreators, NFTDetail, Collectibles } from './pages'
import { Layout } from './containers'

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
        <Route path='/marketplace' element={<Marketplace />} />
        <Route path='/nft/:id/*' element={<NFTDetail />} />      
        <Route path='/creator-profile/:id' element={<CreatorProfile />} />
        <Route path='/faq' element={<FAQ />} />
        <Route element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
