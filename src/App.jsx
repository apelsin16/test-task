import './App.css'
import { Routes, Route } from 'react-router';
import {lazy} from "react";

const Layout = lazy(() => import("./components/Layout/Layout.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage.jsx"));
const CamperDetailsPage = lazy(() => import("./pages/CamperDetailsPage.jsx"));
const Features = lazy(() => import("./components/Features/Features.jsx"));
const Reviews = lazy(() => import("./components/Reviews/Reviews.jsx"));

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

export default App;
