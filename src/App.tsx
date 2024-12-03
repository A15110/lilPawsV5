import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import LocalBranding from './components/LocalBranding';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import Blog from './pages/Blog';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './lib/AuthContext';
import Navigation from './components/Navigation';
import LOGO_URL from './logo.png';

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation user={user} logoUrl={LOGO_URL} />
        
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/admin" replace /> : <Login />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          } />
          <Route path="/blog/category/:category" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={
            <main>
              <Hero />
              <LocalBranding />
              <Services />
              <WhyChooseUs />
              <Reviews />
              <Contact />
            </main>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <footer className="bg-gradient-to-r from-primary-900 to-secondary-900 text-white py-12">
          {/* Footer content */}
        </footer>
      </div>
    </Router>
  );
}

export default App;