import styles from './routerApp.module.css'
import appData from './data/apps'
import ScrollToTop from './ScrollToTop'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Home from './pages/Home'
import Explore from './pages/Explore'
import AppPage from './pages/AppPage'
import CategoryPage from './pages/CategoryPage'
import Erro404 from './pages/Erro404'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function App() {
  const [apps, setApps] = useState(appData)

  const [asideShow, setAsideShow] = useState(true)

  function toggleAside() {
    setAsideShow(!asideShow)
  }

  return (
    <>
      <BrowserRouter>
        
        <Aside asideShow={asideShow} />
        
        <button className={styles.btnSwitcher} onClick={toggleAside}>
          <FontAwesomeIcon icon={faBars} className={`svg ${styles.botoes}`} />
        </button>
        
        <div className={styles.appCorpo}>
          <Header />
          
          <main>
            <ScrollToTop>
              <Routes>
                <Route path='/'>
                  <Route index element={<Home apps={apps} />} />
                  <Route path='/explore' element={<Explore apps={apps} />} />
                  <Route path='/app/:id' element={<AppPage apps={apps} />} />
                  <Route path='/category/:category' element={<CategoryPage apps={apps} />} />
                  <Route path='*' element={<Erro404 />} />
                </Route>
              </Routes>
            </ScrollToTop>
          </main>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
