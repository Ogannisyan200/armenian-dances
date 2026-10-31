import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Frame from './components/Frame.jsx';
import Home from './pages/Home.jsx';
import Theory from './pages/Theory.jsx';
import Dances from './pages/Dances.jsx';
import DancePage from './pages/DancePage.jsx';
import Learn from './pages/Learn.jsx';
import Lyrics from './pages/Lyrics.jsx';
import SongPage from './pages/SongPage.jsx';
import Songs from './pages/Songs.jsx';

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return (
    <>
      <Frame />
      <div className="wrap">
        <Nav />
        <main key={pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/dances" element={<Dances />} />
            <Route path="/dances/:id" element={<DancePage />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/lyrics" element={<Lyrics />} />
            <Route path="/lyrics/:id" element={<SongPage />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
      <Footer />
      <Frame />
    </>
  );
}
