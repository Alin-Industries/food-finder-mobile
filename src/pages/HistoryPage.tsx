
import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DayEntry {
  date: string;
  caloriesConsumed: number;
  caloriesGoal: number;
  progress: number;
}

const HistoryPage = () => {
  // Mock history data
  const [recentDays] = useState<DayEntry[]>([
    { 
      date: "Today", 
      caloriesConsumed: 1245, 
      caloriesGoal: 2000,
      progress: 62
    },
    { 
      date: "Yesterday", 
      caloriesConsumed: 1890, 
      caloriesGoal: 2000,
      progress: 94
    },
    { 
      date: "Apr 7", 
      caloriesConsumed: 2150, 
      caloriesGoal: 2000,
      progress: 107
    },
    { 
      date: "Apr 6", 
      caloriesConsumed: 1760, 
      caloriesGoal: 2000,
      progress: 88
    },
    { 
      date: "Apr 5", 
      caloriesConsumed: 1580, 
      caloriesGoal: 2000,
      progress: 79
    },
  ]);

  return (
    <div className="mobile-container">
      <PageHeader 
        title="History" 
        rightContent={
          <Button variant="ghost" size="icon">
            <CalendarIcon className="h-5 w-5" />
          </Button>
        }
      />
      <div className="page-container p-4">
        <Tabs defaultValue="days" className="w-full">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="days">Days</TabsTrigger>
            <TabsTrigger value="weeks">Weeks</TabsTrigger>
            <TabsTrigger value="months">Months</TabsTrigger>
          </TabsList>
          
          <TabsContent value="days" className="mt-4 space-y-4">
            {recentDays.map((day, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="py-3">
                  <CardTitle className="text-md flex justify-between items-center">
                    <span>{day.date}</span>
                    <span className="text-sm font-normal text-muted-foreground">
                      {day.caloriesConsumed} / {day.caloriesGoal} kcal
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div 
                    className="h-2 bg-secondary"
                    style={{ 
                      position: "relative", 
                      overflow: "hidden" 
                    }}
                  >
                    <div 
                      className="h-full bg-primary absolute left-0 top-0"
                      style={{ 
                        width: `${Math.min(day.progress, 100)}%`,
                        backgroundColor: day.progress > 100 ? "rgb(239 68 68)" : undefined 
                      }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="weeks">
            <div className="py-12 text-center text-muted-foreground">
              Weekly statistics will appear here
            </div>
          </TabsContent>
          
          <TabsContent value="months">
            <div className="py-12 text-center text-muted-foreground">
              Monthly statistics will appear here
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HistoryPage;
