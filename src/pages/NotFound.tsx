
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="mobile-container">
      <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <div className="p-6 bg-primary/10 rounded-full mb-6">
          <span className="text-6xl font-bold text-primary">404</span>
        </div>
        <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button onClick={() => navigate("/")} className="min-w-40">
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
