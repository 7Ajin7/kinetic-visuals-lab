
import React, { useRef, useEffect } from 'react';
import { ShoppingCart, Download } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
}

const ShopSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Sample products
  const products: Product[] = [
    {
      id: 1,
      name: "Futuristic UI Kit",
      description: "A complete set of motion graphics templates for futuristic UI design.",
      price: 49,
      thumbnail: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532",
      category: "Motion Graphics Templates"
    },
    {
      id: 2,
      name: "Sci-Fi Asset Pack",
      description: "High-quality 3D models for sci-fi environments and scenes.",
      price: 79,
      thumbnail: "https://images.unsplash.com/photo-1604871000636-074fa5117945",
      category: "3D Assets"
    },
    {
      id: 3,
      name: "Dynamic Transitions",
      description: "Smooth and professional After Effects transitions for videos and presentations.",
      price: 39,
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      category: "After Effects Templates"
    },
    {
      id: 4,
      name: "Abstract LUT Pack",
      description: "Color grading presets for cinematic and stylized looks.",
      price: 29,
      thumbnail: "https://images.unsplash.com/photo-1557682250-43c4e1e8365e",
      category: "LUTs"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="py-20 bg-black/30" ref={sectionRef}>
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Digital <span className="text-gradient-1">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto reveal" style={{ transitionDelay: '200ms' }}>
            Explore my collection of premium digital assets, templates and tools designed to enhance your creative workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal" style={{ transitionDelay: '400ms' }}>
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover-trigger transition-all duration-300 hover:shadow-lg hover:shadow-accent1/5 hover:translate-y-[-5px]"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={product.thumbnail} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-accent1 uppercase tracking-wider">{product.category}</span>
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 h-12 overflow-hidden">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-bold text-xl">${product.price}</span>
                  <button className="flex items-center space-x-1 px-3 py-1.5 bg-accent1 hover:bg-accent1/80 text-white rounded-full text-sm transition-colors">
                    <ShoppingCart size={16} />
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4 reveal" style={{ transitionDelay: '600ms' }}>
            Looking for custom assets or project files?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-5 py-2 border border-white/20 hover:border-accent1 rounded-full transition-all duration-300 hover-trigger reveal"
            style={{ transitionDelay: '800ms' }}
          >
            <Download size={18} className="mr-2" />
            Request Custom Assets
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
