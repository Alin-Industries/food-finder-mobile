
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export interface Food {
  id: string;
  name: string;
  brand?: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  image?: string;
}

interface FoodListProps {
  foods: Food[];
  onAddFood: (food: Food) => void;
  isLoading?: boolean;
}

const FoodList = ({ foods, onAddFood, isLoading = false }: FoodListProps) => {
  if (isLoading) {
    return (
      <div className="space-y-4 py-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex justify-between items-center p-4 bg-muted/40 rounded-lg animate-pulse">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-md bg-muted"></div>
              <div className="space-y-2">
                <div className="h-4 w-32 bg-muted rounded"></div>
                <div className="h-3 w-20 bg-muted rounded"></div>
              </div>
            </div>
            <div className="h-8 w-8 rounded-full bg-muted"></div>
          </div>
        ))}
      </div>
    );
  }

  if (foods.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No foods found. Try a different search.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 py-4">
      {foods.map((food) => (
        <div key={food.id} className="flex justify-between items-center p-4 bg-secondary/20 rounded-lg">
          <div className="flex items-center gap-3">
            {food.image ? (
              <div className="h-12 w-12 rounded-md bg-muted overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-medium">
                  {food.name.substring(0, 1).toUpperCase()}
                </span>
              </div>
            )}
            <div>
              <h3 className="font-medium">{food.name}</h3>
              <p className="text-xs text-muted-foreground">
                {food.brand ? `${food.brand} • ` : ''}
                {food.calories} kcal | {food.protein}p | {food.carbs}c | {food.fat}f
              </p>
            </div>
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
            onClick={() => onAddFood(food)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default FoodList;
