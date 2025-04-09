
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Download, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '../hooks/use-toast';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/shared/CustomCursor';
import AnimatedBackground from '../components/shared/AnimatedBackground';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  featured: boolean;
}

const Shop = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  
  // Sample products
  const products: Product[] = [
    {
      id: 1,
      name: "Futuristic UI Kit",
      description: "A complete set of motion graphics templates for futuristic UI design.",
      price: 49,
      thumbnail: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532",
      category: "Motion Graphics",
      featured: true
    },
    {
      id: 2,
      name: "Sci-Fi Asset Pack",
      description: "High-quality 3D models for sci-fi environments and scenes.",
      price: 79,
      thumbnail: "https://images.unsplash.com/photo-1604871000636-074fa5117945",
      category: "3D Assets",
      featured: true
    },
    {
      id: 3,
      name: "Dynamic Transitions",
      description: "Smooth and professional After Effects transitions for videos and presentations.",
      price: 39,
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      category: "After Effects",
      featured: false
    },
    {
      id: 4,
      name: "Abstract LUT Pack",
      description: "Color grading presets for cinematic and stylized looks.",
      price: 29,
      thumbnail: "https://images.unsplash.com/photo-1557682250-43c4e1e8365e",
      category: "LUTs",
      featured: false
    },
    {
      id: 5,
      name: "Particle Systems Bundle",
      description: "Ready-to-use particle effects for motion graphics and VFX.",
      price: 59,
      thumbnail: "https://images.unsplash.com/photo-1520034475321-cbe63696469a",
      category: "Motion Graphics",
      featured: true
    },
    {
      id: 6,
      name: "Material Library",
      description: "Collection of PBR materials for 3D modeling and rendering.",
      price: 45,
      thumbnail: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead",
      category: "3D Assets",
      featured: false
    },
    {
      id: 7,
      name: "Sound Design Pack",
      description: "Professionally designed sound effects for motion graphics and video.",
      price: 35,
      thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
      category: "Audio",
      featured: false
    },
    {
      id: 8,
      name: "Text Animation Presets",
      description: "Ready-made typography animations for After Effects.",
      price: 25,
      thumbnail: "https://images.unsplash.com/photo-1618004652321-13a63e576b80",
      category: "After Effects",
      featured: true
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 reveal">
                Digital <span className="text-gradient-1">Products</span>
              </h1>
              
              <p className="text-muted-foreground max-w-2xl mb-12 reveal" style={{ transitionDelay: '200ms' }}>
                Explore my collection of premium digital assets, templates, and tools designed to enhance your creative workflow and save you valuable time.
              </p>
              
              {featuredProducts.length > 0 && (
                <div className="mb-16 reveal" style={{ transitionDelay: '300ms' }}>
                  <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product) => (
                      <div 
                        key={product.id} 
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover-trigger transition-all duration-300 hover:shadow-lg hover:shadow-accent1/5 hover:-translate-y-1"
                      >
                        <div className="relative">
                          <div className="aspect-[3/2] overflow-hidden">
                            <img 
                              src={product.thumbnail} 
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <div className="absolute top-3 right-3 bg-accent1 text-white px-2 py-1 text-xs font-medium rounded-full">
                            Featured
                          </div>
                        </div>
                        <div className="p-5">
                          <span className="text-xs font-medium text-accent1 uppercase tracking-wider">{product.category}</span>
                          <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                          <p className="text-sm text-muted-foreground mt-2 h-12 overflow-hidden">
                            {product.description}
                          </p>
                          <div className="flex items-center justify-between mt-4">
                            <span className="font-bold text-xl">${product.price}</span>
                            <button 
                              onClick={() => handleAddToCart(product)}
                              className="flex items-center space-x-1 px-3 py-1.5 bg-accent1 hover:bg-accent1/80 text-white rounded-full text-sm transition-colors"
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
                        "px-4 py-2 rounded-full text-sm transition-all duration-300",
                        filter === category
                          ? "bg-accent1 text-white"
                          : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
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
                    className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-full w-full md:w-60 focus:ring-1 focus:ring-accent1 focus:border-accent1 outline-none transition-all"
                  />
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal" style={{ transitionDelay: '500ms' }}>
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover-trigger transition-all duration-300 hover:shadow-lg hover:shadow-accent1/5 hover:-translate-y-1"
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
                        <button 
                          onClick={() => handleAddToCart(product)}
                          className="flex items-center space-x-1 px-3 py-1.5 bg-accent1 hover:bg-accent1/80 text-white rounded-full text-sm transition-colors"
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
                <div className="text-center py-12 border border-dashed border-white/10 rounded-lg">
                  <p className="text-muted-foreground">No products found matching your criteria.</p>
                </div>
              )}
              
              <div className="mt-16 text-center reveal" style={{ transitionDelay: '600ms' }}>
                <p className="text-muted-foreground mb-4">
                  Looking for custom assets or project files?
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-5 py-2 border border-white/20 hover:border-accent1 rounded-full transition-all duration-300 hover-trigger"
                >
                  <Download size={18} className="mr-2" />
                  Request Custom Assets
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
