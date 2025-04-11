import React, { useState, useEffect } from 'react';
import { ShoppingCart, Download, Search, Tag, Info, Package } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '../hooks/use-toast';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/shared/CustomCursor';
import AnimatedBackground from '../components/shared/AnimatedBackground';
import DetailModal from '../components/shared/DetailModal';
import SciFiElements from '../components/shared/SciFiElements';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  featured: boolean;
  format?: string;
  compatibility?: string[];
  images?: string[];
}

const Shop = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { toast } = useToast();
  
  const products: Product[] = [
    {
      id: 1,
      name: "Futuristic UI Kit",
      description: "A complete set of motion graphics templates for futuristic UI design. Perfect for sci-fi projects, game interfaces, and HUD elements. Includes over 50 pre-animated elements that can be easily customized.",
      price: 49,
      thumbnail: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532",
      category: "Motion Graphics",
      featured: true,
      format: "After Effects Project (.aep)",
      compatibility: ["After Effects CC 2020+", "Adobe Media Encoder"],
      images: [
        "https://images.unsplash.com/photo-1535303311164-664fc9ec6532",
        "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead"
      ]
    },
    {
      id: 2,
      name: "Sci-Fi Asset Pack",
      description: "High-quality 3D models for sci-fi environments and scenes. Includes modular architecture pieces, props, and atmospheric elements to build complete futuristic worlds.",
      price: 79,
      thumbnail: "https://images.unsplash.com/photo-1604871000636-074fa5117945",
      category: "3D Assets",
      featured: true,
      format: "FBX, OBJ, Blender (.blend)",
      compatibility: ["Blender 2.8+", "Cinema 4D", "Maya", "3ds Max"],
      images: [
        "https://images.unsplash.com/photo-1604871000636-074fa5117945",
        "https://images.unsplash.com/photo-1620121684840-edffcfc4b878"
      ]
    },
    {
      id: 3,
      name: "Dynamic Transitions",
      description: "Smooth and professional After Effects transitions for videos and presentations. From simple wipes to complex distortion effects, this pack has everything you need.",
      price: 39,
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      category: "After Effects",
      featured: false,
      format: "After Effects Project (.aep)",
      compatibility: ["After Effects CC 2019+"],
      images: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f"
      ]
    },
    {
      id: 4,
      name: "Abstract LUT Pack",
      description: "Color grading presets for cinematic and stylized looks. Transform your footage with one click using these professionally crafted color profiles.",
      price: 29,
      thumbnail: "https://images.unsplash.com/photo-1557682250-43c4e1e8365e",
      category: "LUTs",
      featured: false,
      format: ".cube, .3dl, .look",
      compatibility: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro"],
      images: [
        "https://images.unsplash.com/photo-1557682250-43c4e1e8365e"
      ]
    },
    {
      id: 5,
      name: "Particle Systems Bundle",
      description: "Ready-to-use particle effects for motion graphics and VFX. Create stunning atmospheres, energy fields, and abstract backgrounds with these customizable particle systems.",
      price: 59,
      thumbnail: "https://images.unsplash.com/photo-1520034475321-cbe63696469a",
      category: "Motion Graphics",
      featured: true,
      format: "After Effects Project (.aep)",
      compatibility: ["After Effects CC 2018+", "Trapcode Particular 5+"],
      images: [
        "https://images.unsplash.com/photo-1520034475321-cbe63696469a",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f"
      ]
    },
    {
      id: 6,
      name: "Material Library",
      description: "Collection of PBR materials for 3D modeling and rendering. Create realistic surfaces for any object with these high-quality materials.",
      price: 45,
      thumbnail: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead",
      category: "3D Assets",
      featured: false,
      format: ".blend, .sbsar, .c4d",
      compatibility: ["Blender", "Substance Painter", "Cinema 4D"],
      images: [
        "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead"
      ]
    },
    {
      id: 7,
      name: "Sound Design Pack",
      description: "Professionally designed sound effects for motion graphics and video. Add depth and impact to your animations with these high-quality audio elements.",
      price: 35,
      thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
      category: "Audio",
      featured: false,
      format: ".wav, .mp3 (48kHz, 24-bit)",
      compatibility: ["Any DAW or video editing software"],
      images: [
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81"
      ]
    },
    {
      id: 8,
      name: "Text Animation Presets",
      description: "Ready-made typography animations for After Effects. Make your text come alive with these professional animation presets designed for impact and readability.",
      price: 25,
      thumbnail: "https://images.unsplash.com/photo-1618004652321-13a63e576b80",
      category: "After Effects",
      featured: true,
      format: "After Effects Project (.aep)",
      compatibility: ["After Effects CC 2018+"],
      images: [
        "https://images.unsplash.com/photo-1618004652321-13a63e576b80"
      ]
    }
  ];

  const categories = [
    'all',
    'Motion Graphics',
    '3D Assets',
    'After Effects',
    'LUTs',
    'Audio'
  ];

  const filteredProducts = products
    .filter(product => filter === 'all' || product.category === filter)
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
  const featuredProducts = products.filter(product => product.featured);

  const handleAddToCart = (product: Product) => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
    
    // Prevent propagation so it doesn't open the modal
    event?.stopPropagation();
  };

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 50;
        
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <div className="relative">
          <AnimatedBackground />
          <div className="relative z-10 pt-32 pb-16">
            <div className="container px-4">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 reveal">
                  Digital <span className="text-gradient-1">Products</span>
                </h1>
              </div>
              
              <p className="text-muted-foreground max-w-2xl mb-12 reveal" style={{ transitionDelay: '200ms' }}>
                Explore my collection of premium digital assets, templates, and tools designed to enhance your creative workflow and save you valuable time.
              </p>
              
              {featuredProducts.length > 0 && (
                <div className="mb-16 reveal" style={{ transitionDelay: '300ms' }}>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="text-accent1 mr-2">[</span>
                    Featured Products
                    <span className="text-accent1 ml-2">]</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product) => (
                      <div 
                        key={product.id} 
                        className="bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover-trigger transition-all duration-300 hover:shadow-lg hover:shadow-accent1/5 hover:-translate-y-1 cursor-pointer"
                        onClick={() => setSelectedProduct(product)}
                      >
                        <div className="relative">
                          <div className="aspect-[3/2] overflow-hidden">
                            <img 
                              src={product.thumbnail} 
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <div className="absolute top-3 right-3 bg-accent1 text-white px-2 py-1 text-xs font-medium">
                            Featured
                          </div>
                          <div className="absolute top-3 left-3 flex space-x-1">
                            <div className="size-2 bg-accent1 animate-pulse-slow"></div>
                            <div className="size-2 bg-accent2 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                          </div>
                        </div>
                        <div className="p-5">
                          <span className="text-xs font-medium text-accent1 uppercase tracking-wider">{product.category}</span>
                          <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                          <p className="text-sm text-muted-foreground mt-2 h-12 overflow-hidden">
                            {product.description.substring(0, 80)}...
                          </p>
                          <div className="flex items-center justify-between mt-4">
                            <span className="font-bold text-xl">${product.price}</span>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAddToCart(product);
                              }}
                              className="flex items-center space-x-1 px-3 py-1.5 bg-accent1 hover:bg-accent1/80 text-white transition-colors"
                            >
                              <ShoppingCart size={16} />
                              <span>Buy Now</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 reveal" style={{ transitionDelay: '400ms' }}>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilter(category)}
                      className={cn(
                        "px-4 py-2 text-sm transition-all duration-300 border",
                        filter === category
                          ? "bg-accent1 text-white border-accent1"
                          : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white border-white/10"
                      )}
                    >
                      {category === 'all' ? 'All Products' : category}
                    </button>
                  ))}
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 w-full md:w-60 focus:ring-1 focus:ring-accent1 focus:border-accent1 outline-none transition-all"
                  />
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal" style={{ transitionDelay: '500ms' }}>
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover-trigger transition-all duration-300 hover:shadow-lg hover:shadow-accent1/5 hover:-translate-y-1 cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
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
                        {product.description.substring(0, 80)}...
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="font-bold text-xl">${product.price}</span>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                          className="flex items-center space-x-1 px-3 py-1.5 bg-accent1 hover:bg-accent1/80 text-white transition-colors"
                        >
                          <ShoppingCart size={16} />
                          <span>Buy Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12 border border-dashed border-white/10">
                  <p className="text-muted-foreground">No products found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      {/* Product Detail Modal */}
      {selectedProduct && (
        <DetailModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          title={selectedProduct.name}
          variant="product"
        >
          <div className="h-full overflow-auto scrollbar-none border-r border-accent1/10 p-6">
            <div className="space-y-4">
              {(selectedProduct.images || [selectedProduct.thumbnail]).map((image, idx) => (
                <div key={idx} className="relative group">
                  <img 
                    src={image} 
                    alt={`${selectedProduct.name} - Image ${idx + 1}`}
                    className="w-full border border-accent1/10"
                  />
                  <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm px-2 py-1 text-xs font-mono">
                    {idx + 1}/{(selectedProduct.images?.length || 1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-6 overflow-y-auto scrollbar-none">
            <div className="mb-1 flex items-center text-xs font-mono text-accent1">
              <div className="size-2 bg-accent1 mr-2"></div>
              <span>{selectedProduct.category}</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-3 font-display">
              {selectedProduct.name}
            </h2>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-accent1 mb-4">
                ${selectedProduct.price}
              </div>
              
              <button className="w-full mb-3 py-2.5 bg-accent1 hover:bg-accent1/90 transition-colors text-white flex items-center justify-center">
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </button>
              
              <button className="w-full py-2.5 border border-white/20 hover:border-accent1/50 transition-colors flex items-center justify-center">
                <Download size={18} className="mr-2" />
                Instant Download
              </button>
            </div>
            
            <div className="mb-6 space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <Info size={16} className="mr-2 text-accent1" />
                Product Details
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>
            
            <div className="mb-4 space-y-2">
              <div className="flex items-start gap-2">
                <Tag size={16} className="mt-1 text-accent1" />
                <div>
                  <h4 className="font-medium">Format</h4>
                  <p className="text-sm text-muted-foreground">{selectedProduct.format}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2">
                <Package size={16} className="mt-1 text-accent1" />
                <div>
                  <h4 className="font-medium">Compatibility</h4>
                  <ul className="text-sm text-muted-foreground">
                    {selectedProduct.compatibility?.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="block w-1 h-1 bg-accent1 mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center text-xs text-muted-foreground justify-between">
                <span>Product ID: {selectedProduct.id.toString().padStart(4, '0')}</span>
                <span className="text-accent3">Digital Download</span>
              </div>
            </div>
          </div>
        </DetailModal>
      )}
      
      <Footer />
    </div>
  );
};

export default Shop;
