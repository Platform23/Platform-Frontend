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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='reseaux' element={<Network />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
