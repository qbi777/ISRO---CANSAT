import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import InnovationPage from './pages/InnovationPage';
import TeamPage from './pages/TeamPage';
import HighlightsPage from './pages/HighlightsPage';
import RepositoryPage from './pages/RepositoryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="innovation" element={<InnovationPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="highlights" element={<HighlightsPage />} />
        <Route path="repository" element={<RepositoryPage />} />
      </Route>
    </Routes>
  );
}

export default App;