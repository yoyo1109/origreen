import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { Menu } from '@headlessui/react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'zh-CN', name: '中文' },
    { code: 'en-US', name: 'English' },
  ];

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center text-gray-600 hover:text-primary transition-colors">
        <Globe size={20} />
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-40 bg-white rounded-default shadow-card py-1">
        {languages.map((lang) => (
          <Menu.Item key={lang.code}>
            {({ active }) => (
              <button
                className={`${
                  active ? 'bg-gray-100' : ''
                } ${
                  i18n.language === lang.code ? 'text-primary' : 'text-gray-700'
                } group flex w-full items-center px-4 py-2 text-sm`}
                onClick={() => i18n.changeLanguage(lang.code)}
              >
                {lang.name}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default LanguageSwitcher;