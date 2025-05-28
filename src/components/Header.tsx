import React, { useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, GlobeIcon, MenuIcon, XIcon } from 'lucide-react';

interface NavItemProps {
  labelKey: string;
  children: Array<{ key: string; href: string }>;
}

const NavItem: React.FC<NavItemProps> = ({ labelKey, children }) => {
  const { t } = useTranslation();
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {t(labelKey)}
            <ChevronDownIcon className={`w-5 h-5 ml-2 -mr-1 transform transition-transform duration-150 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
          </Menu.Button>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right bg-white rounded-lg shadow-soft ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
                {children.map((child: { key: string; href: string }) => (
                  <Menu.Item key={child.key}>
                    {({ active }) => (
                      <a
                        href={child.href}
                        className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} group flex rounded-md items-center w-full px-4 py-2 text-sm`}
                      >
                        {t(child.key)}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language.startsWith('zh') ? '中文' : 'EN');

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLang(lng.startsWith('zh') ? '中文' : 'EN');
      document.documentElement.lang = lng; // Update html lang attribute
    };
    i18n.on('languageChanged', handleLanguageChange);
    // Set initial lang attribute
    document.documentElement.lang = i18n.language;

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('zh') ? 'en-US' : 'zh-CN';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 text-gray-700 hover:text-primary rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary flex items-center"
      aria-label="Switch language"
    >
      <GlobeIcon className="w-6 h-6" />
      <span className="ml-1 text-sm font-medium">{currentLang}</span>
    </button>
  );
};

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      labelKey: 'products',
      children: [
        { key: 'minerals', href: '#products' },
        { key: 'plantExtracts', href: '#products' },
        { key: 'vitamins', href: '#products' },
        { key: 'aminoAcid', href: '#products' },
      ],
    },
    {
      labelKey: 'services',
      children: [
        { key: 'oem', href: '#services' }, 
        { key: 'rd', href: '#services' },
        { key: 'packaging', href: '#services' },
        { key: 'logistics', href: '#services' },
      ],
    },
    {
      labelKey: 'about',
      children: [
        { key: 'company', href: '#about' },
        { key: 'team', href: '#about' }, 
        { key: 'certificates', href: '#about' },
      ],
    },
    {
      labelKey: 'cases',
      children: [
        { key: 'beauty', href: '#cases' }, 
        { key: 'probiotics', href: '#cases' },
        { key: 'cardio', href: '#cases' },
        { key: 'joint', href: '#cases' },
      ],
    },
  ];

  interface AccordionItemProps {
    labelKey: string;
    children: Array<{ key: string; href: string }>;
    closeMobileMenu: () => void;
  }

  // Mobile Accordion Item
  const AccordionItem: React.FC<AccordionItemProps> = ({ labelKey, children, closeMobileMenu }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    return (
      <div className="py-2 border-b border-gray-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center w-full py-2 text-left text-gray-700 hover:text-primary"
        >
          <span>{t(labelKey)}</span>
          <ChevronDownIcon className={`w-5 h-5 transform transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="pl-4 mt-2 space-y-1">
            {children.map((child: { key: string; href: string }) => (
              <a key={child.key} href={child.href} className="block py-1 text-gray-600 hover:text-primary" onClick={closeMobileMenu}>
                {t(child.key)}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${isScrolled ? 'shadow-md bg-white/95 backdrop-blur-sm' : 'bg-white' }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary">
              {/* Replace with actual SVG logo if available */}
              Origreen
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-3">
            {navLinks.map((item) => (
              <NavItem key={item.labelKey} labelKey={item.labelKey} children={item.children} />
            ))}
          </nav>

          {/* Right side: Language Switcher & Mobile Menu Button */}
          <div className="flex items-center">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            <div className="md:hidden ml-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              >
                {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <Transition
        show={mobileMenuOpen}
        as={React.Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="md:hidden fixed inset-0 z-40 bg-white h-screen overflow-y-auto">
          <div className="pt-5 pb-6 px-4 sm:px-6">
            <div className="flex items-center justify-between mb-4">
              <a href="/" className="text-2xl font-bold text-primary" onClick={() => setMobileMenuOpen(false)}>
                Origreen
              </a>
              <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-700 hover:text-primary rounded-md focus:outline-none"
              >
                  <XIcon className="w-6 h-6" />
              </button>
            </div>
            <nav className="mt-6 space-y-1">
              {navLinks.map((item) => (
                <AccordionItem key={item.labelKey} labelKey={item.labelKey} children={item.children} closeMobileMenu={() => setMobileMenuOpen(false)} />
              ))}
            </nav>
            <div className="mt-8 border-t pt-6">
                <LanguageSwitcher />
            </div>
          </div>
        </div>
      </Transition>
    </header>
  );
};

export default Header;