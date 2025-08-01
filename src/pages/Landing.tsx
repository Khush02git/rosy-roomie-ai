import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import heroImage from '@/assets/hero-illustration.jpg';

const Landing = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-warm relative overflow-hidden">
      <Navigation />
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" />
      
      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Your perfect roommate match,{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  powered by AI.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover compatible roommates for women's co-living spaces through intelligent matching. 
                Safe, friendly, and tailored to your lifestyle.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-xl"
                onClick={() => navigate('/avatar')}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Get Started
                <div className={`ml-2 transform transition-transform ${isHovered ? 'translate-x-1' : ''}`}>
                  →
                </div>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/5 text-lg px-8 py-6 rounded-xl transition-smooth"
              >
                Learn More
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2.5K+</div>
                <div className="text-sm text-muted-foreground">Happy Matches</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Safe</div>
                <div className="text-sm text-muted-foreground">Verified Only</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Hero illustration */}
          <div className="relative animate-scale-in">
            <Card className="overflow-hidden bg-card/60 backdrop-blur-sm border-border/50 shadow-warm hover:shadow-glow transition-all duration-500 rounded-3xl">
              <div className="p-8">
                <img
                  src={heroImage}
                  alt="Two women becoming roommates"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-soft animate-float">
              <span className="text-accent-foreground text-xl">✨</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shadow-soft animate-pulse-soft">
              <span className="text-primary text-2xl">💕</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;