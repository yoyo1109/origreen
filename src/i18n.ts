import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Placeholder for translations - you will need to create these files
// e.g., src/locales/en/translation.json and src/locales/zh/translation.json
const resources = {
  en: {
    translation: {
      // Top Nav
      "products": "Products",
      "minerals": "Minerals",
      "plantExtracts": "Plant Extracts",
      "vitamins": "Vitamins",
      "aminoAcid": "Amino Acid",
      "services": "Services",
      "oem": "OEM",
      "rd": "R&D",
      "packaging": "Packaging",
      "logistics": "Logistics",
      "about": "About Us",
      "company": "Company",
      "team": "Team",
      "certificates": "Certificates",
      "cases": "Cases",
      "beauty": "Beauty",
      "probiotics": "Probiotics",
      "cardio": "Cardio",
      "joint": "Joint",
      // Hero Slide 1
      "hero1_h1": "One-stop Nutritional Ingredients Supplier",
      "hero1_cta": "Explore Products",
      // Hero Slide 2
      "hero2_h1": "Premium & Traceable Organic Sources",
      "hero2_cta": "About Us",
      // Hero Slide 3
      "hero3_h1": "Diverse Dosage Forms & Competitive Formulas",
      "hero3_cta": "Contact Us",
      // Contact Form
      "contact_name": "Name",
      "contact_email": "Email",
      "contact_message": "Message",
      "contact_submit": "Submit",
      // Footer
      "copyright": "© 2025 Origreen. All rights reserved."
    }
  },
  zh: {
    translation: {
      // Top Nav
      "products": "产品",
      "minerals": "矿物质",
      "plantExtracts": "植物提取物",
      "vitamins": "维生素",
      "aminoAcid": "氨基酸",
      "services": "服务",
      "oem": "代工服务",
      "rd": "研发支持",
      "packaging": "包装方案",
      "logistics": "物流服务",
      "about": "关于我们",
      "company": "公司介绍",
      "team": "核心团队",
      "certificates": "资质认证",
      "cases": "成功案例",
      "beauty": "美容养颜",
      "probiotics": "益生菌",
      "cardio": "心血管健康",
      "joint": "关节养护",
      // Hero Slide 1
      "hero1_h1": "专注营养健康 · 一站式原料与配方解决方案",
      "hero1_cta": "探索产品",
      // Hero Slide 2
      "hero2_h1": "严选有机原料，安全可追溯",
      "hero2_cta": "了解我们",
      // Hero Slide 3
      "hero3_h1": "多剂型 · 多功能 · 差异化竞争",
      "hero3_cta": "联系我们",
      // Contact Form
      "contact_name": "姓名",
      "contact_email": "邮箱",
      "contact_message": "留言",
      "contact_submit": "提交",
      // Footer
      "copyright": "© 2025 Origreen 版权所有."
    }
  }
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'zh-CN', // Default language
    lng: 'zh-CN', // Explicitly set default language, LanguageDetector will override if different
    debug: true, // Set to false in production
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'], // Where to cache the language
    }
  });

export default i18n; 