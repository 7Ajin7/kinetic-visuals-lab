import React, { useState, useEffect } from "react";
import { ShoppingBag, Search, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CustomCursor from "../components/shared/CustomCursor";
import DetailModal from "../components/shared/DetailModal";
import SciFiElements from "../components/shared/SciFiElements";
import AnimatedBackground from "../components/shared/AnimatedBackground";
import { toast } from "../hooks/use-toast";

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

interface Category {
  id: number;
  name: string;
}

const categories: Category[] = [
  { id: 1, name: "All" },
  { id: 2, name: "3D Models" },
  { id: 3, name: "Motion Templates" },
  { id: 4, name: "Textures" },
  { id: 5, name: "Sound Effects" },
];

const products: ProductItem[] = [
  {
    id: 101,
    title: "Abstract 3D Model Pack",
    category: "3D Models",
    thumbnail: "https://images.unsplash.com/photo-1633293928675-841273025782",
    price: 29.99,
    description: "A set of 20 abstract 3D models perfect for motion graphics.",
    features: ["Optimized for real-time", "PBR textures"],
    formats: ["FBX", "OBJ"],
  },
  {
    id: 102,
    title: "Dynamic Transition Templates",
    category: "Motion Templates",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    price: 39.99,
    description: "10 dynamic transition templates for After Effects.",
    features: ["Customizable colors", "Easy to use"],
    formats: ["AEP"],
  },
  {
    id: 103,
    title: "High-Res Texture Pack",
    category: "Textures",
    thumbnail: "https://images.unsplash.com/photo-1542272604-6256ed4c8df6",
    price: 19.99,
    description: "A collection of high-resolution textures for 3D rendering.",
    features: ["4K resolution", "Seamless tiling"],
    formats: ["JPG", "PNG"],
  },
  {
    id: 104,
    title: "Cinematic Sound Effects",
    category: "Sound Effects",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    price: 14.99,
    description: "A set of cinematic sound effects for video production.",
    features: ["High quality audio", "Royalty-free"],
    formats: ["WAV"],
  },
  {
    id: 105,
    title: "Futuristic UI Kit",
    category: "Motion Templates",
    thumbnail: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608",
    price: 49.99,
    description: "A comprehensive UI kit featuring futuristic interface elements.",
    features: ["Animated screens", "Modular design"],
    formats: ["AEP", "PNG"],
  },
  {
    id: 106,
    title: "Organic 3D Model Set",
    category: "3D Models",
    thumbnail: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    price: 34.99,
    description: "A set of organic 3D models for nature scenes.",
    features: ["Detailed meshes", "Realistic textures"],
    formats: ["FBX", "Blend"],
  },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === 1 ||
      product.category === categories.find((cat) => cat.id === selectedCategory)?.name;
    const searchMatch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: "Your product has been added to the cart.",
    });
  };
  
  return (
    <div className="min-h-screen overflow-hidden">
      <CustomCursor />
      <Navbar />
      <main className="pt-24 pb-32">
        <div className="relative">
          <AnimatedBackground />
          
          <div className="container relative z-10 px-4">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 reveal active">
                Digital <span className="text-gradient-1">Shop</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl reveal active">
                Browse and purchase digital assets, 3D models, motion templates, and more to enhance your creative projects.
              </p>
            </div>
            
            {/* Shop filters */}
            <div className="flex flex-col md:flex-row justify-between mb-8 gap-4 md:gap-0 reveal active">
              <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
                {/* Category filters */}
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 whitespace-nowrap border ${
                      selectedCategory === category.id
                        ? "border-accent1 bg-accent1/10 text-accent1"
                        : "border-white/10 hover:border-white/30"
                    } transition-colors`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              {/* Search bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full md:w-64 px-4 py-2 bg-black/20 border border-white/10 pr-10 focus:outline-none focus:border-accent1/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-3 top-2.5 text-muted-foreground" size={18} />
              </div>
            </div>
            
            {/* Products grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-black/20 border border-white/10 overflow-hidden hover-trigger cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-accent2 uppercase tracking-wider">{product.category}</span>
                        <div className="flex space-x-1">
                          <div className="size-2 bg-accent2 animate-pulse-slow"></div>
                          <div className="size-2 bg-accent1 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-white">${product.price}</span>
                        <button className="text-xs border border-accent2/50 bg-black/50 px-2 py-1 flex items-center text-white hover:bg-accent2/20 transition-colors">
                          <Tag size={12} className="mr-1" /> Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-3 py-20 text-center">
                  <p className="text-muted-foreground">No products found matching your criteria.</p>
                </div>
              )}
            </div>
            
            {/* Pagination - if needed in the future */}
            {filteredProducts.length > 0 && (
              <div className="flex justify-center">
                {/* Pagination controls would go here */}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <DetailModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          title={selectedProduct.title}
          variant="product"
        >
          {/* Modal content */}
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
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
                <button 
                  className="px-4 py-2 bg-accent2 text-black hover:bg-accent2/80 transition-colors flex items-center gap-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag size={16} />
                  Add to Cart
                </button>
              </div>
              
              {/* Product description and features */}
              <div className="mb-6 space-y-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 text-accent2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.793 2.232a.75.75 0 01-.025 1.06l-4.25 4.5a.75.75 0 011.085.978l4.25-4.5a.75.75 0 011.06.025l4.25 4.5a.75.75 0 011.06-.025l4.25-4.5a.75.75 0 011.085-.978l-4.25 4.5a.75.75 0 01-.025 1.06l-4.25-4.5a.75.75 0 01-1.06-.025l-4.25 4.5a.75.75 0 01-.025 1.06l4.25 4.5a.75.75 0 011.085.978l-4.25-4.5a.75.75 0 01-1.06-.025l-4.25 4.5a.75.75 0 01-.025 1.06l4.25 4.5a.75.75 0 011.085.978l-4.25-4.5a.75.75 0 01-1.06-.025z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Description
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 text-accent2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.793 2.232a.75.75 0 01-.025 1.06l-4.25 4.5a.75.75 0 011.085.978l4.25-4.5a.75.75 0 011.06.025l4.25 4.5a.75.75 0 011.06-.025l4.25-4.5a.75.75 0 011.085-.978l-4.25 4.5a.75.75 0 01-.025 1.06l-4.25-4.5a.75.75 0 01-1.06-.025l-4.25 4.5a.75.75 0 01-.025 1.06l4.25 4.5a.75.75 0 011.085.978l-4.25-4.5a.75.75 0 01-1.06-.025l-4.25 4.5a.75.75 0 01-.025 1.06l4.25 4.5a.75.75 0 011.085.978l-4.25-4.5a.75.75 0 01-1.06-.025z"
                      clipRule="evenodd"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 text-accent2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.793 2.232a.75.75 0 01-.025 1.06l-4.25 4.5a.75.75 0 011.085.978l4.25-4.5a.75.75 0 011.06.025l4.25 4.5a.75.75 0 011.06-.025l4.25-4.5a.75.75 0 011.085-.978l-4.25 4.5a.75.75 0 01-.025 1.06l-4.25-4.5a.75.75 0 01-1.06-.025l-4.25 4.5a.75.75 0 01-.025 1.06l4.25 4.5a.75.75 0 011.085.978l-4.25-4.5a.75.75 0 01-1.06-.025l-4.25 4.5a.75.75 0 01-.025 1.06l4.25 4.5a.75.75 0 011.085.978l-4.25-4.5a.75.75 0 01-1.06-.025z"
                      clipRule="evenodd"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-3 h-3 flex-shrink-0 mt-0.5 text-accent2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-1 1v4a1 1 0 001 1h.01a1 1 0 100-2V8a1 1 0 00-1-1H9.99a1 1 0 000 2v4a1 1 0 001 1h.01a1 1 0 100-2V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Products are delivered via email after purchase. Please allow up to 24 hours for delivery.</span>
                </div>
              </div>
            </div>
          </div>
        </DetailModal>
      )}
    </div>
  );
};

export default Shop;
