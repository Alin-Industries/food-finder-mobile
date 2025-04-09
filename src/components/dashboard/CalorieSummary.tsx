
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface CalorieSummaryProps {
  consumed: number;
  goal: number;
  breakfast: number;
  lunch: number;
  dinner: number;
  snacks: number;
}

const CalorieSummary = ({
  consumed,
  goal,
  breakfast,
  lunch,
  dinner,
  snacks,
}: CalorieSummaryProps) => {
  const percentage = Math.min(Math.round((consumed / goal) * 100), 100);
  const remaining = Math.max(goal - consumed, 0);

  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex justify-between items-center">
          <span>Today's Calories</span>
          <span className="text-sm font-normal text-muted-foreground">
            {remaining} kcal remaining
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{consumed} kcal</span>
              <span>{goal} kcal</span>
            </div>
            <Progress value={percentage} className="h-2" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Breakfast", value: breakfast, color: "bg-blue-100" },
              { name: "Lunch", value: lunch, color: "bg-green-100" },
              { name: "Dinner", value: dinner, color: "bg-orange-100" },
              { name: "Snacks", value: snacks, color: "bg-purple-100" },
            ].map((meal) => (
              <div
                key={meal.name}
                className="flex items-center space-x-2 p-2 rounded-md"
                style={{ backgroundColor: meal.color }}
              >
                <div className="flex-1">
                  <p className="text-xs text-gray-600">{meal.name}</p>
                  <p className="font-medium">{meal.value} kcal</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalorieSummary;
