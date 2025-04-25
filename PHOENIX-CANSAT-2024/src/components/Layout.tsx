import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-space-darker/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-space-glow animate-pulse" />
              <span className="font-display font-bold text-xl">PHOENIX-2024</span>
            </NavLink>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
              <NavLink to="/gallery" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Gallery
              </NavLink>
              <NavLink to="/innovation" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Innovation
              </NavLink>
              <NavLink to="/team" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Team
              </NavLink>
              <NavLink to="/highlights" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Highlights
              </NavLink>
              <NavLink to="/repository" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Repository
              </NavLink>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-space-dark border-t border-space-blue/20 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
              <NavLink to="/gallery" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Gallery
              </NavLink>
              <NavLink to="/innovation" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Innovation
              </NavLink>
              <NavLink to="/team" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Team
              </NavLink>
              <NavLink to="/highlights" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Highlights
              </NavLink>
              <NavLink to="/repository" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                Repository
              </NavLink>
            </div>
          </nav>
        )}
      </header>
      
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      
      <footer className="bg-space-dark py-8 border-t border-space-blue/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">© 2024 PHOENIX-2024 - CANSAT India</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/qbi777/ISRO---CANSAT" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;