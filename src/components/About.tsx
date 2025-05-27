import React from 'react';
import { Check } from 'lucide-react';
import { aboutFeatures } from '../data/content';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Origreen GMP certified manufacturing facility"
              className="w-full h-auto rounded-default shadow-card"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary">关于欧瑞格林</span> | <span className="text-gray-800">About Origreen</span>
            </h2>
            
            <p className="text-gray-600 mb-8">
              宁波沂风生物科技有限公司（Origreen）专注于高品质营养原料研发与配方服务，为全球营养保健品牌提供一站式解决方案。
              <br /><br />
              Ningbo Origreen Biotechnology focuses on premium nutrition ingredients and formulation services, providing one-stop solutions for global wellness brands.
            </p>
            
            <ul className="space-y-4">
              {aboutFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light/20 flex items-center justify-center mr-3 mt-1">
                    <Check size={16} className="text-primary" />
                  </span>
                  <div>
                    <p className="font-medium text-gray-800">{feature.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;