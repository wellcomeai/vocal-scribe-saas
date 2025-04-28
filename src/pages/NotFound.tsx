
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <div className="w-24 h-24 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-brand-purple/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-brand-purple/30 rounded-full animate-pulse animation-delay-300"></div>
            <div className="absolute inset-4 bg-brand-purple rounded-full animate-pulse animation-delay-600"></div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page not found</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button>Return to Home</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Contact Support</Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
