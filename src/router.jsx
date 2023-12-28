import dadosApps from './data/apps.json'
import Header from './components/Header/Header'
import PaginaPadrao from './pages/PaginaPadrao/PaginaPadrao'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [apps, setApps] = useState(dadosApps)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/'element={<PaginaPadrao />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
