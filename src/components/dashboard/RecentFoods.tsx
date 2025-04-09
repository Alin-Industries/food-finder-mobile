
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface FoodItem {
  id: string;
  name: string;
  calories: number;
  image?: string;
}

interface RecentFoodsProps {
  foods: FoodItem[];
  onSelect: (food: FoodItem) => void;
}

const RecentFoods = ({ foods, onSelect }: RecentFoodsProps) => {
  if (foods.length === 0) {
    return null;
  }

  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>Recent Foods</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {foods.map((food) => (
            <div
              key={food.id}
              className="flex justify-between items-center p-3 bg-secondary/20 rounded-md cursor-pointer hover:bg-secondary/40 transition-colors"
              onClick={() => onSelect(food)}
            >
              <div className="flex items-center gap-3">
                {food.image ? (
                  <div className="h-10 w-10 rounded-full bg-muted overflow-hidden">
                    <img
                      src={food.image}
                      alt={food.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-xs font-medium">
                      {food.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
                <span className="font-medium">{food.name}</span>
              </div>
              <span className="text-sm">{food.calories} kcal</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentFoods;
