import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Network from './pages/Network';
import Layout from './Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='connexion' element={<Sign_in />} />
        <Route path='inscription' element={<Sign_up />} />
        <Route path='mot_de_passe_oublie' element={<ForgotPassword />} />
        <Route path='mot_de_passe_oublie_confirmation' element={<ForgotPasswordConfirm />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='reseaux' element={<Network />} />
          <Route path='profil' element={<Profile />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
