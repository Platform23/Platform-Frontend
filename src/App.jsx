import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Network from './pages/Network';
import NetworkDetail from './pages/NetworkDetail';
import Layout from './Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='reseaux' element={<Network />} />
          <Route path='reseaux/:name' element={<NetworkDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
