import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Placeholder images - replace with actual paths or imports
const heroImages = {
  slide1: '/assets/ai-hero-integrated-solutions.jpg', // Make sure these paths are correct
  slide2: '/assets/ai-hero-organic-sources.jpg',
  slide3: '/assets/ai-hero-diverse-products.jpg',
};

interface SlideContent {
  h1Key: string;
  ctaKey: string;
  ctaLink: string;
  bgImage: string;
}

const slideData: SlideContent[] = [
  {
    h1Key: 'hero1_h1',
    ctaKey: 'hero1_cta',
    ctaLink: '#products',
    bgImage: heroImages.slide1,
  },
  {
    h1Key: 'hero2_h1',
    ctaKey: 'hero2_cta',
    ctaLink: '#about',
    bgImage: heroImages.slide2,
  },
  {
    h1Key: 'hero3_h1',
    ctaKey: 'hero3_cta',
    ctaLink: '#contact',
    bgImage: heroImages.slide3,
  },
];

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <section id="hero" className="relative w-full h-[85vh] md:h-[70vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          // Custom classes for pagination bullets are handled in global CSS (src/index.css)
        }}
        className="w-full h-full"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4 md:items-start md:text-left md:pl-20 lg:pl-32">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-xl">
                {/* Conditional rendering for H1 based on language */}
                {currentLanguage.startsWith('zh') ? t(slide.h1Key) : t(slide.h1Key, { lng: 'en' })}
              </h1>
              <a
                href={slide.ctaLink}
                className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-soft"
              >
                {currentLanguage.startsWith('zh') ? t(slide.ctaKey) : t(slide.ctaKey, { lng: 'en' })}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;