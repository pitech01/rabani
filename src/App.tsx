import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { BusinessUnitsOverview } from './pages/business-units/Overview'
import { LogisticsMarine } from './pages/business-units/LogisticsMarine'
import { MiningMinerals } from './pages/business-units/MiningMinerals'
import { Technology } from './pages/Technology'
import { Safety } from './pages/Safety'
import { Sustainability } from './pages/Sustainability'
import { Careers } from './pages/Careers'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'
import { Preloader } from './components/ui/Preloader'

function App() {
  return (
    <>
      <Preloader />
      <BrowserRouter>
        <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="business-units" element={<BusinessUnitsOverview />} />
          <Route path="business-units/logistics-marine" element={<LogisticsMarine />} />
          <Route path="business-units/solid-minerals-mining" element={<MiningMinerals />} />
          <Route path="technology" element={<Technology />} />
          <Route path="safety" element={<Safety />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
