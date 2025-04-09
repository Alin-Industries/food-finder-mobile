
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User, Goal, Settings, Bell, Info, HelpCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ProfilePage = () => {
  return (
    <div className="mobile-container">
      <PageHeader title="Profile" />
      <div className="page-container p-4 space-y-6">
        <Card className="border-none shadow-sm">
          <CardHeader className="space-y-1 pb-2">
            <CardTitle className="text-lg">Your Profile</CardTitle>
            <CardDescription>Manage your personal details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <User className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-1">Test User</h2>
              <p className="text-muted-foreground mb-4">testuser@example.com</p>
              <Button variant="outline" size="sm">
                Edit Profile
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              <div className="p-3 bg-secondary/50 rounded-md">
                <p className="text-xl font-bold">2000</p>
                <p className="text-xs text-muted-foreground">Daily Goal</p>
              </div>
              <div className="p-3 bg-secondary/50 rounded-md">
                <p className="text-xl font-bold">165</p>
                <p className="text-xs text-muted-foreground">Height (cm)</p>
              </div>
              <div className="p-3 bg-secondary/50 rounded-md">
                <p className="text-xl font-bold">70</p>
                <p className="text-xs text-muted-foreground">Weight (kg)</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-3">
          <h3 className="text-lg font-semibold px-1">Settings</h3>
          
          <div className="rounded-lg overflow-hidden border divide-y">
            <div className="flex items-center justify-between p-4 bg-card">
              <div className="flex items-center">
                <Goal className="h-5 w-5 mr-3 text-primary" />
                <span>Goals & Plans</span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-card">
              <div className="flex items-center">
                <Bell className="h-5 w-5 mr-3 text-primary" />
                <span>Notifications</span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-card">
              <div className="flex items-center">
                <Settings className="h-5 w-5 mr-3 text-primary" />
                <span>App Settings</span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold px-1 mt-6">Help & Support</h3>
          
          <div className="rounded-lg overflow-hidden border divide-y">
            <div className="flex items-center justify-between p-4 bg-card">
              <div className="flex items-center">
                <HelpCircle className="h-5 w-5 mr-3 text-primary" />
                <span>Help Center</span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-card">
              <div className="flex items-center">
                <Info className="h-5 w-5 mr-3 text-primary" />
                <span>About</span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          </div>
          
          <div className="pt-4 pb-8 text-center">
            <Button variant="outline" className="text-muted-foreground">
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
