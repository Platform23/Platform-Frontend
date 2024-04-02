import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Network from './pages/Network';
import Layout from './Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='reseaux' element={<Network />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
