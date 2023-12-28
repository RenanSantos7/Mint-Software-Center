import dadosApps from '.data/apps.json'
import { useState } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {
  const [apps, setApps] = useState(dadosApps)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<PaginaPadrao />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
