import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Welcome/Landing'
import MainLayout from './components/layout/MainLayout'
import LivenessInfoPage from './pages/Aadhaar/LivenessInfoPage'
import LivenessCheck from './pages/Aadhaar/LivenessCheck'
import Contact from './pages/InformativePages/Contact'
import FAQ from './pages/InformativePages/FAQ'
import About from './pages/InformativePages/About'
import NotFound from './pages/InformativePages/NotFound'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />} >
          <Route path="/" element={<Landing/>} />
          <Route path="/liveness" element={<LivenessInfoPage />} />
          <Route path="/liveness/liveliness-check" element={<LivenessCheck />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/faq' element={<FAQ/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
