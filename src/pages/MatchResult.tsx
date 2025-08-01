import { useState, useEffect } from 'react';
import { MessageCircle, Home, Heart, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const MatchResult = () => {
  const [matchScore, setMatchScore] = useState(0);
  const [showHandshake, setShowHandshake] = useState(false);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  
  const userAvatar = 'https://images.unsplash.com/photo-1494790108755-2616b612b977?w=200&h=200&fit=crop&crop=face';
  
  const potentialMatches = [
    {
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      name: 'Sarah',
      description: 'Artistic & Neat',
      matchScore: 92,
      lifestyle: 'Both prefer quiet evenings and clean spaces',
      interests: 'Shared love for art and creative projects',
      livingStyle: 'Similar sleep schedules and cleanliness habits'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
      name: 'Emma',
      description: 'Outdoorsy & Social',
      matchScore: 87,
      lifestyle: 'Love for morning workouts and healthy living',
      interests: 'Hiking, yoga, and plant-based cooking',
      livingStyle: 'Early risers with organized living spaces'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face',
      name: 'Maya',
      description: 'Creative & Studious',
      matchScore: 85,
      lifestyle: 'Balanced work-life with creative hobbies',
      interests: 'Reading, writing, and indie music',
      livingStyle: 'Quiet study time and cozy living spaces'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face',
      name: 'Zoe',
      description: 'Minimalist & Zen',
      matchScore: 89,
      lifestyle: 'Mindful living and sustainable practices',
      interests: 'Meditation, minimalism, and eco-friendly living',
      livingStyle: 'Clean, organized, and peaceful environment'
    }
  ];

  const currentMatch = potentialMatches[currentMatchIndex];

  useEffect(() => {
    // Animate match score
    const timer = setTimeout(() => {
      setMatchScore(currentMatch.matchScore);
      setTimeout(() => setShowHandshake(true), 500);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentMatchIndex, currentMatch.matchScore]);

  const nextMatch = () => {
    setShowHandshake(false);
    setMatchScore(0);
    setCurrentMatchIndex((prev) => (prev + 1) % potentialMatches.length);
  };

  const prevMatch = () => {
    setShowHandshake(false);
    setMatchScore(0);
    setCurrentMatchIndex((prev) => (prev - 1 + potentialMatches.length) % potentialMatches.length);
  };

  return (
    <div className="min-h-screen bg-gradient-peach-sky relative overflow-hidden">
      <Navigation />
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" />
      
      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevMatch}
                className="rounded-full p-2 bg-background/80 backdrop-blur-sm"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="text-center">
                <h1 className="text-5xl lg:text-7xl font-heading font-bold text-foreground">
                  Perfect{' '}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Match Found!
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground mt-4">
                  We found someone who shares your lifestyle and preferences
                </p>
                <p className="text-lg text-muted-foreground/70 mt-2">
                  {currentMatchIndex + 1} of {potentialMatches.length} matches
                </p>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextMatch}
                className="rounded-full p-2 bg-background/80 backdrop-blur-sm"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
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
                        src={currentMatch.avatar}
                        alt="Match avatar"
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">{currentMatch.name}</h3>
                      <p className="text-sm text-muted-foreground">{currentMatch.description}</p>
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
                  <p className="text-sm text-muted-foreground">{currentMatch.lifestyle}</p>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Interests</h4>
                  <p className="text-sm text-muted-foreground">{currentMatch.interests}</p>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Living Style</h4>
                  <p className="text-sm text-muted-foreground">{currentMatch.livingStyle}</p>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Action Buttons */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-xl"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Start Chatting with {currentMatch.name}
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
            
            {/* Match Navigation Dots */}
            <div className="flex justify-center space-x-2">
              {potentialMatches.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setShowHandshake(false);
                    setMatchScore(0);
                    setCurrentMatchIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentMatchIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchResult;