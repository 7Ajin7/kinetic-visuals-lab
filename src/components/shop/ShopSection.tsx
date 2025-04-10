
import React, { useState } from 'react';
import { ArrowRight, Tag, ShoppingBag, Info, CornerDownRight } from 'lucide-react';
import DetailModal from '../shared/DetailModal';

interface ProductItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  price: number;
  description: string;
  features: string[];
  formats: string[];
}

const ShopSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  
  // Featured products data
  const featuredProducts: ProductItem[] = [
    {
      id: 1,
      title: "Abstract Shapes Pack",
      category: "3D Models",
      thumbnail: "https://images.unsplash.com/photo-1633293928675-841273025782",
      price: 29.99,
      description: "A collection of 20 abstract 3D shapes perfect for motion graphics, scene composition, and visual effects. Each model is optimized for real-time rendering and includes PBR textures.",
      features: [
        "20 unique abstract shapes",
        "4K PBR textures included",
        "Low-poly and high-poly versions",
        "Fully rigged for animation"
      ],
      formats: ["FBX", "OBJ", "Blender", "Cinema 4D"]
    },
    {
      id: 2,
      title: "Dynamic Transitions",
      category: "Motion Templates",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      price: 39.99,
      description: "10 professionally designed transition templates for After Effects. Perfect for creating smooth scene changes, title animations, and dynamic effects in your video projects.",
      features: [
        "10 unique transitions",
        "Customizable duration and colors",
        "Includes tutorial video",
        "Easy to use with any footage"
      ],
      formats: ["After Effects"]
    },
    {
      id: 3,
      title: "Sci-Fi UI Kit",
      category: "Motion Graphics",
      thumbnail: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608",
      price: 49.99,
      description: "Comprehensive UI kit featuring futuristic interface elements, HUD components, and animated screens for sci-fi projects. Perfect for film, games, and interactive media.",
      features: [
        "50+ UI elements",
        "15 pre-animated screens",
        "Modular design for easy customization",
        "4K resolution"
      ],
      formats: ["After Effects", "Premiere Pro", "PNG Sequences"]
    }
  ];
  
  return (
    <section id="shop" className="py-20 relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold reveal">
              Digital <span className="text-gradient-1">Products</span>
            </h2>
            <a 
              href="/shop" 
              className="hidden md:flex items-center text-sm hover-trigger link-underline"
            >
              Browse All Products
              <ArrowRight size={14} className="ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-black/20 overflow-hidden border border-white/5 hover-trigger cursor-pointer reveal"
                style={{ transitionDelay: `${200 + index * 100}ms` }}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.thumbnail} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs font-medium text-accent2 uppercase tracking-wider mb-2">{product.category}</span>
                  <h3 className="text-xl font-bold">{product.title}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-mono text-white">${product.price}</span>
                    <button 
                      className="px-3 py-1.5 border border-accent2/50 bg-black/50 text-white flex items-center justify-center hover:bg-accent2/20 transition-colors"
                    >
                      <Tag size={14} className="mr-2" /> View Details
                    </button>
                  </div>
                </div>
                
                <div className="absolute top-4 left-4 flex space-x-1">
                  <div className="size-2 bg-accent2 animate-pulse-slow"></div>
                  <div className="size-2 bg-accent1 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center md:hidden">
            <a 
              href="/shop" 
              className="inline-flex items-center text-sm hover-trigger link-underline"
            >
              Browse All Products
              <ArrowRight size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <DetailModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          title={selectedProduct.title}
          variant="product"
        >
          {/* Left Side - Product Images */}
          <div className="h-full overflow-auto scrollbar-none border-r border-accent2/10 p-6">
            <div className="aspect-square overflow-hidden mb-6">
              <img 
                src={selectedProduct.thumbnail} 
                alt={selectedProduct.title}
                className="w-full h-full object-cover border border-accent2/10"
              />
            </div>
          </div>
          
          {/* Right Side - Product Info */}
          <div className="p-6 overflow-y-auto scrollbar-none">
            <div className="mb-1 flex items-center text-xs font-mono text-accent2">
              <div className="size-2 bg-accent2 mr-2"></div>
              <span>{selectedProduct.category}</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">
              {selectedProduct.title}
            </h2>
            
            <div className="mb-6 flex items-center justify-between">
              <span className="text-2xl font-mono">${selectedProduct.price}</span>
              <button className="px-4 py-2 bg-accent2 text-black hover:bg-accent2/80 transition-colors flex items-center gap-2">
                <ShoppingBag size={16} />
                Add to Cart
              </button>
            </div>
            
            <div className="mb-6 space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <CornerDownRight size={16} className="mr-2 text-accent2" />
                Description
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <CornerDownRight size={16} className="mr-2 text-accent2" />
                Features
              </h3>
              <ul className="space-y-2">
                {selectedProduct.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <div className="w-1.5 h-1.5 bg-accent2 mt-1.5 mr-2"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <CornerDownRight size={16} className="mr-2 text-accent2" />
                File Formats
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.formats.map((format) => (
                  <span 
                    key={format} 
                    className="px-3 py-1 bg-white/5 border border-accent2/20 text-sm"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <Info size={12} className="flex-shrink-0 mt-0.5 text-accent2" />
                <span>Products are delivered via email after purchase. Please allow up to 24 hours for delivery.</span>
              </div>
            </div>
          </div>
        </DetailModal>
      )}
    </section>
  );
};

export default ShopSection;
