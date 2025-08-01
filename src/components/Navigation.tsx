import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, User, Settings, LogOut, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: User, label: 'Sign In', href: '/signin' },
    { icon: Settings, label: 'Profile Settings', href: '/profile' },
    { icon: LogOut, label: 'Sign Out', href: '/signout' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Home Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate('/')}
          className="bg-background/60 backdrop-blur-sm border-primary/20 hover:bg-primary/5 rounded-xl"
        >
          <Home className="h-4 w-4 mr-2" />
          Home
        </Button>
        
        {/* Logo/Brand */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent">
            RoomieMatch
          </h1>
        </div>

        {/* Hamburger Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon"
              className="bg-card/80 backdrop-blur-sm shadow-soft hover:bg-primary/10 transition-smooth"
            >
              <Menu className="h-6 w-6 text-foreground" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
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
      </div>
    </nav>
  );
};

export default Navigation;