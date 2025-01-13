import './App.css'
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import CamperDetailsPage from './pages/CamperDetailsPage.jsx';

function App() {

  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />} />
    </Routes>
  )
}

export default App
