
import { useState } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "@/components/layout/PageHeader";
import FoodSearchBar from "@/components/food/FoodSearchBar";
import FoodList, { Food } from "@/components/food/FoodList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const SearchPage = () => {
  const location = useLocation();
  const mealType = location.state?.mealType || "Meal";
  
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [foods, setFoods] = useState<Food[]>([]);

  // Mock food search function
  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFoods([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Mock search results
      const mockResults: Food[] = [
        {
          id: "1",
          name: "Banana",
          brand: "Generic",
          calories: 105,
          protein: 1.3,
          carbs: 27,
          fat: 0.4,
        },
        {
          id: "2",
          name: "Greek Yogurt",
          brand: "Fage",
          calories: 150,
          protein: 15,
          carbs: 8,
          fat: 4,
        },
        {
          id: "3",
          name: "Chicken Breast",
          brand: "Organic",
          calories: 165,
          protein: 31,
          carbs: 0,
          fat: 3.6,
        },
        {
          id: "4",
          name: "Quinoa",
          brand: "Bob's Red Mill",
          calories: 222,
          protein: 8,
          carbs: 39,
          fat: 3.6,
        },
        {
          id: "5",
          name: "Avocado",
          brand: "Hass",
          calories: 240,
          protein: 3,
          carbs: 12,
          fat: 22,
        },
      ].filter(food => 
        food.name.toLowerCase().includes(query.toLowerCase()) || 
        (food.brand && food.brand.toLowerCase().includes(query.toLowerCase()))
      );
      
      setFoods(mockResults);
      setIsLoading(false);
    }, 800);
  };

  const handleAddFood = (food: Food) => {
    toast.success(`Added ${food.name} to your ${mealType}`);
  };

  return (
    <div className="mobile-container">
      <PageHeader title={`Add to ${mealType}`} showBackButton />
      <div className="page-container">
        <div className="p-4">
          <FoodSearchBar onSearch={handleSearch} />
          
          <Tabs defaultValue="search" className="mt-4">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="search">Search</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
            </TabsList>
            <TabsContent value="search">
              <FoodList 
                foods={foods} 
                onAddFood={handleAddFood} 
                isLoading={isLoading} 
              />
            </TabsContent>
            <TabsContent value="recent">
              <div className="py-8 text-center">
                <p className="text-muted-foreground">Your recent foods will appear here</p>
              </div>
            </TabsContent>
            <TabsContent value="favorites">
              <div className="py-8 text-center">
                <p className="text-muted-foreground">Your favorite foods will appear here</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
