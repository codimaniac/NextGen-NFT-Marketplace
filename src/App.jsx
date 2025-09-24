import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Homepage } from './pages'
import { Layout } from './containers'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Homepage />} />
      </Route>
    </Routes>
  )
}

export default App
