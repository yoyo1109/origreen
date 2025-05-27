import React from 'react';

const JsonLdSchema: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Origreen',
    alternateName: '宁波沂风生物科技有限公司',
    url: 'https://origreen.com',
    logo: 'https://origreen.com/logo.png',
    description: 'Premium nutrition ingredients and turnkey OEM formulas supplier.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '88 Innovation Rd',
      addressLocality: 'Ningbo',
      addressRegion: 'Zhejiang',
      postalCode: '315000',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-574-12345678',
      contactType: 'customer service',
      email: 'info@origreen.com',
      availableLanguage: ['Chinese', 'English'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
};

export default JsonLdSchema;