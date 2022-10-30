import './App.scss'
import { Routes, Route } from 'react-router-dom'
import {
  Layout,
  Home,
  About,
  Contact,
  Portfolio,
  Dashboard,
} from './components'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
