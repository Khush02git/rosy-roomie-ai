import { useState, useEffect } from 'react';
import { MessageCircle, Home, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const MatchResult = () => {
  const [matchScore, setMatchScore] = useState(0);
  const [showHandshake, setShowHandshake] = useState(false);

  const userAvatar = 'https://images.unsplash.com/photo-1494790108755-2616b612b977?w=200&h=200&fit=crop&crop=face';
  const matchAvatar = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face';

  useEffect(() => {
    // Animate match score
    const timer = setTimeout(() => {
      setMatchScore(92);
      setTimeout(() => setShowHandshake(true), 500);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-peach-sky relative overflow-hidden">
      <Navigation />
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" />
      
      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Header */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-foreground">
              Perfect{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Match Found!
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              We found someone who shares your lifestyle and preferences
            </p>
          </div>
          
          {/* Match Display */}
          <div className="relative animate-scale-in">
            
            {/* Avatar Display */}
            <div className="flex items-center justify-center gap-8 lg:gap-16">
              
              {/* User Avatar */}
              <div className="relative transform rotate-6 hover:rotate-3 transition-transform duration-300">
                <Card className="overflow-hidden bg-card/60 backdrop-blur-sm border-border/50 shadow-warm rounded-3xl p-6">
                  <div className="text-center space-y-4">
                    <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden border-4 border-primary/20">
                      <img
                        src={userAvatar}
                        alt="Your avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">You</h3>
                      <p className="text-sm text-muted-foreground">Creative & Organized</p>
                    </div>
                  </div>
                </Card>
                
                {/* Decorative element */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-soft animate-pulse-soft">
                  <span className="text-accent-foreground text-sm">✨</span>
                </div>
              </div>
              
              {/* Handshake Animation */}
              <div className={`transform transition-all duration-500 ${showHandshake ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow animate-pulse-soft">
                  <span className="text-2xl">🤝</span>
                </div>
              </div>
              
              {/* Match Avatar */}
              <div className="relative transform -rotate-6 hover:-rotate-3 transition-transform duration-300">
                <Card className="overflow-hidden bg-card/60 backdrop-blur-sm border-border/50 shadow-warm rounded-3xl p-6">
                  <div className="text-center space-y-4">
                    <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden border-4 border-primary/20">
                      <img
                        src={matchAvatar}
                        alt="Match avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">Sarah</h3>
                      <p className="text-sm text-muted-foreground">Artistic & Neat</p>
                    </div>
                  </div>
                </Card>
                
                {/* Decorative element */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shadow-soft animate-float">
                  <span className="text-primary text-sm">💕</span>
                </div>
              </div>
            </div>
            
            {/* Match Score - Moved below handshake */}
            <div className="flex justify-center mt-8">
              <Card className="bg-gradient-primary shadow-glow rounded-full p-6 border-4 border-background">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary-foreground">
                    {matchScore}%
                  </div>
                  <div className="text-lg text-primary-foreground/80">
                    Match
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Compatibility Details */}
          <Card className="bg-card/60 backdrop-blur-sm border-border/50 shadow-warm rounded-3xl p-8 animate-fade-in">
            <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-8">
              Why you're compatible
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Lifestyle</h4>
                  <p className="text-sm text-muted-foreground">Both prefer quiet evenings and clean spaces</p>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Interests</h4>
                  <p className="text-sm text-muted-foreground">Shared love for art and creative projects</p>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Living Style</h4>
                  <p className="text-sm text-muted-foreground">Similar sleep schedules and cleanliness habits</p>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-xl"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Start Chatting
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-accent/30 text-accent hover:bg-accent/5 text-lg px-8 py-6 rounded-xl"
            >
              <Home className="h-5 w-5 mr-2" />
              View Room Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchResult;