import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Network from './pages/Network';
import NetworkDetail from './pages/NetworkDetail';
import Layout from './Layout';
import Sign_in from './pages/Sign_in'
import Sign_up from './pages/Sign_up'
import ForgotPassword from './pages/ForgotPassword'
import ForgotPasswordConfirm from './pages/ForgotPassConfirm'
import Profile from './pages/Profile'
import Welcome from './pages/Welcome';


function App() {
  return (
    <>
      <Routes>
        <Route path='connexion' element={<Sign_in />} />
        <Route path='inscription' element={<Sign_up />} />
        <Route path='bienvenue' element={<Welcome />} />
        <Route path='mot_de_passe_oublie' element={<ForgotPassword />} />
        <Route path='mot_de_passe_oublie_confirmation' element={<ForgotPasswordConfirm />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='reseaux' element={<Network />} />
          <Route path='profil' element={<Profile />} />
          <Route path='reseaux/:name' element={<NetworkDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
