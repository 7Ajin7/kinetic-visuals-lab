
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CustomCursor from "../components/shared/CustomCursor";
import AnimatedBackground from "../components/shared/AnimatedBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <div className="relative min-h-screen">
          <AnimatedBackground />
          <div className="relative z-10 flex items-center justify-center min-h-screen pt-24 pb-16">
            <div className="container px-4 text-center">
              <div className="max-w-md mx-auto reveal">
                <p className="text-lg font-mono text-accent1 mb-2">404</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
                <p className="text-muted-foreground mb-8">
                  The page you're looking for doesn't exist or has been moved.
                </p>
                <Link 
                  to="/" 
                  className="inline-flex items-center px-6 py-3 bg-accent1 hover:bg-accent1/80 text-white font-medium rounded-full transition-all duration-300 hover-trigger"
                >
                  <ArrowLeft size={18} className="mr-2" />
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
