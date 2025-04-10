
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import DetailModal from '../shared/DetailModal';

interface Product {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  description: string;
  category: string;
  format: string;
  images: string[];
}

const ShopSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample products data
  const products: Product[] = [
    {
      id: 1,
      name: "Abstract Shapes Pack",
      price: 19.99,
      thumbnail: "https://images.unsplash.com/photo-1633985871666-93c457e221b0",
      description: "A collection of 50+ abstract 3D shapes and elements ready to use in your motion graphics projects. Perfect for creating modern, dynamic compositions.",
      category: "3D Assets",
      format: "OBJ, FBX, Blender",
      images: [
        "https://images.unsplash.com/photo-1633985871666-93c457e221b0",
        "https://images.unsplash.com/photo-1569396116180-210c182bedb8",
      ]
    },
    {
      id: 2,
      name: "Glitch Transitions",
      price: 24.99,
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      description: "10 customizable glitch transitions to add edgy effects between scenes in your videos and motion graphics projects.",
      category: "After Effects Template",
      format: "AEP (After Effects CC 2019+)",
      images: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      ]
    },
    {
      id: 3,
      name: "Sci-Fi UI Kit",
      price: 39.99,
      thumbnail: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41",
      description: "Complete UI kit for futuristic interfaces. Includes HUDs, graphs, data displays, and animated elements for film and game projects.",
      category: "UI Elements",
      format: "AEP, MOV with Alpha",
      images: [
        "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41",
        "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1",
      ]
    }
  ];

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="shop" className="py-20 bg-background relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 reveal">
            Digital <span className="text-gradient-1">Products</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
            {products.map(product => (
              <div 
                key={product.id}
                className="group bg-black/20 border border-white/5 overflow-hidden flex flex-col hover-trigger"
              >
                <div 
                  className="aspect-[4/3] overflow-hidden cursor-pointer"
                  onClick={() => openModal(product)}
                >
                  <img 
                    src={product.thumbnail} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-4 flex-grow flex flex-col">
                  <span className="text-xs text-accent1 font-medium mb-1">{product.category}</span>
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="text-xl font-bold">${product.price}</div>
                    <Button 
                      variant="default" 
                      className="flex items-center gap-1 bg-accent2 hover:bg-accent2/80"
                      onClick={() => window.open("https://gumroad.com", "_blank")}
                    >
                      <ShoppingCart size={16} />
                      Buy
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <DetailModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          title={selectedProduct.name}
          variant="product"
        >
          <div className="h-full overflow-y-auto p-6">
            {selectedProduct.images?.map((image, index) => (
              <div key={index} className="mb-6">
                <img 
                  src={image} 
                  alt={`${selectedProduct.name} - image ${index + 1}`}
                  className="w-full h-auto border border-white/10"
                />
              </div>
            ))}
          </div>
          <div className="h-full p-6 border-l border-accent1/20 flex flex-col">
            <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
            <span className="text-xs font-medium text-accent1 uppercase tracking-wider mb-4">
              {selectedProduct.category}
            </span>
            <p className="text-muted-foreground mb-6">
              {selectedProduct.description}
            </p>
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Format:</h3>
              <p className="text-sm text-muted-foreground">{selectedProduct.format}</p>
            </div>
            <div className="mt-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold">${selectedProduct.price}</span>
                <Button 
                  variant="default" 
                  className="flex items-center gap-1 bg-accent2 hover:bg-accent2/80"
                  onClick={() => window.open("https://gumroad.com", "_blank")}
                >
                  <ShoppingCart size={16} />
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </DetailModal>
      )}
    </section>
  );
};

export default ShopSection;
