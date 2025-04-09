
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/layout/PageHeader";
import BarcodeScanner from "@/components/food/BarcodeScanner";
import { Button } from "@/components/ui/button";
import { Camera, Search } from "lucide-react";
import { Food } from "@/components/food/FoodList";
import { toast } from "sonner";

const ScanPage = () => {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);
  const [scannedFood, setScannedFood] = useState<Food | null>(null);

  const handleStartScan = () => {
    setScanning(true);
  };

  const handleScanSuccess = (barcode: string) => {
    console.log("Scanned barcode:", barcode);
    
    // Mock finding a product
    // In a real app, we would look up the barcode in a food database
    const mockFood: Food = {
      id: "123",
      name: "Cola Classic",
      brand: "Coca-Cola",
      calories: 140,
      protein: 0,
      carbs: 39,
      fat: 0,
    };
    
    setScannedFood(mockFood);
    setScanning(false);
  };

  const handleAddFood = () => {
    if (scannedFood) {
      toast.success(`Added ${scannedFood.name} to your diary`);
      setScannedFood(null);
    }
  };

  return (
    <div className="mobile-container">
      <PageHeader 
        title={scanning ? "Scan Barcode" : "Scan Food"} 
        showBackButton={scanning} 
      />
      <div className="page-container">
        {scanning ? (
          <BarcodeScanner 
            onScanSuccess={handleScanSuccess} 
            onClose={() => setScanning(false)} 
          />
        ) : scannedFood ? (
          <div className="p-6 flex flex-col items-center">
            <div className="w-32 h-32 bg-primary/10 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-4xl text-primary font-bold">
                {scannedFood.name.substring(0, 1).toUpperCase()}
              </span>
            </div>
            
            <h2 className="text-2xl font-bold">{scannedFood.name}</h2>
            <p className="text-muted-foreground mb-6">{scannedFood.brand}</p>
            
            <div className="grid grid-cols-4 gap-4 w-full mb-8">
              <div className="text-center">
                <p className="font-bold">{scannedFood.calories}</p>
                <p className="text-xs text-muted-foreground">kcal</p>
              </div>
              <div className="text-center">
                <p className="font-bold">{scannedFood.protein}g</p>
                <p className="text-xs text-muted-foreground">Protein</p>
              </div>
              <div className="text-center">
                <p className="font-bold">{scannedFood.carbs}g</p>
                <p className="text-xs text-muted-foreground">Carbs</p>
              </div>
              <div className="text-center">
                <p className="font-bold">{scannedFood.fat}g</p>
                <p className="text-xs text-muted-foreground">Fat</p>
              </div>
            </div>
            
            <div className="space-y-3 w-full">
              <Button 
                className="w-full" 
                size="lg"
                onClick={handleAddFood}
              >
                Add to Diary
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                size="lg"
                onClick={() => setScannedFood(null)}
              >
                Scan Another
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <div className="p-6 bg-primary/10 rounded-full mb-6">
              <Camera className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Scan Food Barcode</h2>
            <p className="text-muted-foreground mb-8">
              Quickly add foods to your diary by scanning the barcode on the package
            </p>
            <div className="space-y-3 w-full">
              <Button 
                className="w-full" 
                size="lg"
                onClick={handleStartScan}
              >
                <Camera className="mr-2 h-4 w-4" /> Start Scanning
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                size="lg"
                onClick={() => navigate("/search")}
              >
                <Search className="mr-2 h-4 w-4" /> Search Manually
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScanPage;
