
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/layout/PageHeader";
import CalorieSummary from "@/components/dashboard/CalorieSummary";
import QuickAddCard from "@/components/dashboard/QuickAddCard";
import RecentFoods from "@/components/dashboard/RecentFoods";
import { toast } from "sonner";

const HomePage = () => {
  const navigate = useNavigate();
  
  // Mock data
  const calorieData = {
    consumed: 1245,
    goal: 2000,
    breakfast: 320,
    lunch: 480,
    dinner: 345,
    snacks: 100,
  };
  
  const [recentFoods] = useState([
    {
      id: "1",
      name: "Banana",
      calories: 105,
    },
    {
      id: "2",
      name: "Greek Yogurt",
      calories: 150,
    },
    {
      id: "3",
      name: "Chicken Salad",
      calories: 350,
    },
  ]);

  const handleSelectRecentFood = (food: any) => {
    toast.success(`Added ${food.name} to your diary`);
  };

  return (
    <div className="mobile-container">
      <PageHeader title="Dashboard" />
      <div className="page-container p-4 space-y-6">
        <h2 className="text-2xl font-bold">Welcome Back!</h2>
        <CalorieSummary {...calorieData} />
        <QuickAddCard />
        <RecentFoods foods={recentFoods} onSelect={handleSelectRecentFood} />
      </div>
    </div>
  );
};

export default HomePage;
