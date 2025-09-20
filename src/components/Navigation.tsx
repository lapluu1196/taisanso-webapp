import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavigationProps {
  vertical?: boolean;
  onItemClick?: () => void;
}

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/learn", label: "Learn" },
  { href: "/exchanges", label: "Exchanges" },
  { href: "/airdrops", label: "Airdrops" },
  { href: "/events", label: "Events" },
];

export function Navigation({ vertical = false, onItemClick }: NavigationProps) {
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className={cn(
      "flex",
      vertical ? "flex-col space-y-2" : "flex-row items-center space-x-1"
    )}>
      {navigationItems.map((item) => (
        <Button
          key={item.href}
          variant={isActive(item.href) ? "secondary" : "ghost"}
          size={vertical ? "default" : "sm"}
          asChild
          className={cn(
            "transition-smooth",
            vertical ? "w-full justify-start" : "",
            isActive(item.href) 
              ? "bg-secondary text-secondary-foreground font-medium" 
              : "hover:bg-muted/50"
          )}
          onClick={onItemClick}
        >
          <a href={item.href}>
            {item.label}
          </a>
        </Button>
      ))}
    </nav>
  );
}