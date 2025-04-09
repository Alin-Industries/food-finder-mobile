
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const QuickAddCard = () => {
  const navigate = useNavigate();
  
  const mealTypes = [
    { name: "Breakfast", time: "6:00 - 10:00 AM" },
    { name: "Lunch", time: "11:00 AM - 2:00 PM" },
    { name: "Dinner", time: "5:00 - 9:00 PM" },
    { name: "Snacks", time: "Any time" },
  ];

  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Quick Add</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {mealTypes.map((meal) => (
            <div
              key={meal.name}
              className="flex justify-between items-center p-3 bg-secondary/50 rounded-md"
              onClick={() => navigate("/search", { state: { mealType: meal.name } })}
            >
              <div>
                <p className="font-medium">{meal.name}</p>
                <p className="text-xs text-muted-foreground">{meal.time}</p>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickAddCard;
