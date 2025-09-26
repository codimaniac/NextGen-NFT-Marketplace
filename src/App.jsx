import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Homepage, Login, Signup } from './pages'
import { Layout } from './containers'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Route>
    </Routes>
  )
}

export default App
