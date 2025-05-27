import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Product {
  image: string;
  title: string;
  titleEn: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card bg-white rounded-default shadow-card overflow-hidden">
      <div className="h-48 md:h-56 overflow-hidden">
        <img
          src={product.image}
          alt={`${product.titleEn} - ${product.title}`}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">
          <span className="text-primary">{product.title}</span> / <span className="text-gray-800">{product.titleEn}</span>
        </h3>
        <p className="text-gray-600 mb-4">
          {product.description}
        </p>
        <a 
          href="#" 
          className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
        >
          了解详情 | Details <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;