import { useState } from 'react';
import { Menu, X, User, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: User, label: 'Sign In', href: '/signin' },
    { icon: Settings, label: 'Profile Settings', href: '/profile' },
    { icon: LogOut, label: 'Sign Out', href: '/signout' },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="fixed top-6 left-6 z-50 bg-card/80 backdrop-blur-sm shadow-soft hover:bg-primary/10 transition-smooth"
        >
          <Menu className="h-6 w-6 text-foreground" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="w-80 bg-gradient-soft border-border/50 shadow-warm"
      >
        <div className="flex flex-col space-y-6 mt-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-heading font-semibold text-foreground">
              RoomieMatch
            </h2>
            <p className="text-sm text-muted-foreground">
              Find your perfect roommate
            </p>
          </div>
          
          <div className="space-y-3">
            {menuItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start space-x-3 h-12 text-left hover:bg-primary/10 transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5 text-accent" />
                <span className="text-foreground">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Navigation;