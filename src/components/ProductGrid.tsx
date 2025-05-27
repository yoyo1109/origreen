import React from 'react';
import { products } from '../data/content';
import ProductCard from './ui/ProductCard';

const ProductGrid: React.FC = () => {
  return (
    <section id="products" className="py-20 px-6 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">产品系列</span> | <span className="text-gray-800">Product Lines</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            高品质营养原料与配方解决方案，助力您的产品脱颖而出
            <br />
            Premium nutrition ingredients and formula solutions to help your products stand out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;