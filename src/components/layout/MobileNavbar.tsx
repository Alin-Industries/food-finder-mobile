
import React from "react";
import { Home, Search, Scan, History, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const MobileNavbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems: NavItem[] = [
    {
      icon: <Home className="h-6 w-6" />,
      label: "Home",
      path: "/",
    },
    {
      icon: <Search className="h-6 w-6" />,
      label: "Search",
      path: "/search",
    },
    {
      icon: <Scan className="h-6 w-6" />,
      label: "Scan",
      path: "/scan",
    },
    {
      icon: <History className="h-6 w-6" />,
      label: "History",
      path: "/history",
    },
    {
      icon: <User className="h-6 w-6" />,
      label: "Profile",
      path: "/profile",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-10 safe-bottom">
      <nav className="max-w-md mx-auto flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center w-full py-1 px-2 ${
              currentPath === item.path
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            {React.cloneElement(item.icon as React.ReactElement, {
              className: `h-6 w-6 ${
                currentPath === item.path ? "text-primary" : "text-muted-foreground"
              }`,
            })}
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileNavbar;
