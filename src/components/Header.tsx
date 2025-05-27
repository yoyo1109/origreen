import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`sticky-header fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-8 transition-all duration-300 ${
        isScrolled
          ? 'bg-white text-primary shadow-md'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold flex items-center">
          <span className="text-primary">Ori</span>
          <span className={isScrolled ? 'text-accent' : 'text-white'}>green</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#products"
            className="hover:text-accent-light transition-colors font-medium"
          >
            产品 | Products
          </a>
          <a
            href="#about"
            className="hover:text-accent-light transition-colors font-medium"
          >
            关于我们 | About
          </a>
          <a
            href="#contact"
            className="hover:text-accent-light transition-colors font-medium"
          >
            联系 | Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <a
              href="#products"
              className="text-primary hover:text-accent transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              产品 | Products
            </a>
            <a
              href="#about"
              className="text-primary hover:text-accent transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              关于我们 | About
            </a>
            <a
              href="#contact"
              className="text-primary hover:text-accent transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              联系 | Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;