import './App.css'
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import Layout from "./components/Layout/Layout.jsx";
import CamperDetailsPage from "./pages/CamperDetailsPage.jsx";
import Features from "./components/Features/Features.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";

function App() {

  return (
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="catalog" element={<CatalogPage />} />
              <Route path="catalog/:id" element={<CamperDetailsPage />}>
                  <Route index element={<Features />} />
                  <Route path="features" element={<Features />} />
                  <Route path="reviews" element={<Reviews />} />
              </Route>
          </Route>
      </Routes>
  )
}

export default App
