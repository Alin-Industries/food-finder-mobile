
import { Camera, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface BarcodeScannerProps {
  onScanSuccess: (barcode: string) => void;
  onClose: () => void;
}

const BarcodeScanner = ({ onScanSuccess, onClose }: BarcodeScannerProps) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanning, setScanning] = useState(true);
  
  useEffect(() => {
    // In a real app, this would be implemented with a barcode scanning library
    // For this demo, we'll simulate a scan after a delay
    if (scanning) {
      const timer = setTimeout(() => {
        // Simulate finding a barcode
        const mockBarcode = "5449000000996"; // Example barcode for demonstration
        toast.success("Barcode detected!");
        setScanning(false);
        onScanSuccess(mockBarcode);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [scanning, onScanSuccess]);

  // Mock requesting camera permission
  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        // In a real app, we would use the browser's getUserMedia API
        // navigator.mediaDevices.getUserMedia({ video: true })
        setHasPermission(true);
      } catch (err) {
        console.error("Failed to get camera permission:", err);
        setHasPermission(false);
        toast.error("Camera permission denied");
      }
    };
    
    requestCameraPermission();
  }, []);

  if (hasPermission === null) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="animate-pulse-slow">
          <Camera className="h-16 w-16 text-primary" />
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Requesting camera permission...
        </p>
      </div>
    );
  }

  if (hasPermission === false) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="p-4 bg-destructive/10 rounded-full">
          <Camera className="h-16 w-16 text-destructive" />
        </div>
        <p className="mt-4 text-center text-sm">
          Camera permission denied. Please allow camera access to scan barcodes.
        </p>
        <Button onClick={onClose} className="mt-4">
          Go back
        </Button>
      </div>
    );
  }
  
  return (
    <div className="relative flex flex-col items-center h-full bg-black">
      {/* Mock camera view */}
      <div className="flex-1 w-full relative flex justify-center items-center">
        {/* This would be a video element in a real barcode scanner */}
        <div className="relative w-full h-full bg-black">
          {/* Scan line animation */}
          <div 
            className="absolute left-0 right-0 h-0.5 bg-primary" 
            style={{ 
              top: "50%", 
              animation: "scan 2s infinite",
              boxShadow: "0 0 8px 2px rgba(0, 216, 183, 0.5)" 
            }}
          ></div>
          
          {/* Scan area frame */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-primary w-3/4 h-64 rounded-lg"></div>
          
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Instruction text */}
      <div className="w-full p-6 bg-black text-white text-center">
        <p className="mb-2">Position barcode within the frame</p>
        {scanning ? (
          <p className="text-sm text-primary animate-pulse">Scanning...</p>
        ) : (
          <Button onClick={() => setScanning(true)} className="mt-2">
            Scan again
          </Button>
        )}
      </div>
      
      <style jsx>{`
        @keyframes scan {
          0% { top: 35%; }
          50% { top: 65%; }
          100% { top: 35%; }
        }
      `}</style>
    </div>
  );
};

export default BarcodeScanner;
