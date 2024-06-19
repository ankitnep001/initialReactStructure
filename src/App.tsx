import '@assets/scss/main.scss'
import About from '@ui/pages/About'
import Analytics from '@ui/pages/Analytics'
import Help from '@ui/pages/Help'
import Landing from '@ui/pages/Landing'
import LoginPage from '@ui/pages/Login'
import ManageAdmin from '@ui/pages/ManageAdmin'
import PageNotFound from '@ui/pages/PageNotFound'
import DashboardTemplate from '@ui/templates/Dashboard.template'
import LandingPageTemplate from '@ui/templates/LandingPage.template'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='' element={<LandingPageTemplate />}>
            <Route path='' element={<Landing />} />
            <Route path='about' element={<About />} />
            <Route path='help' element={<Help />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='login' element={<LoginPage />} />
          </Route>

          <Route path='/dashboard' element={<DashboardTemplate />}>
            <Route path='' element={<Analytics />} />
            <Route path='admin' element={<ManageAdmin />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
