import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold flex items-center">
              <span className="text-primary-light">Ori</span>
              <span className="text-white">green</span>
            </a>
          </div>
          
          <nav className="flex flex-wrap justify-center space-x-8">
            <a href="#products" className="text-gray-300 hover:text-white mb-2 md:mb-0">Products</a>
            <a href="#about" className="text-gray-300 hover:text-white mb-2 md:mb-0">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white mb-2 md:mb-0">Contact</a>
          </nav>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Origreen. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              浙ICP备XXXXXXXX号
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;