import appData from './data/apps'
import Header from './components/Header/Header'
import DefaultPage from './pages/DefaultPage/DefaultPage'
import Home from './pages/Home'
import Explore from './pages/Explore'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [apps, setApps] = useState(appData)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route index element={<Home apps={apps} />} />
            <Route path='/explore' element={<Explore apps={apps} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
