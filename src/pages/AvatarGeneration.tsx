import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, RotateCcw, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const AvatarGeneration = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasAvatar, setHasAvatar] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string>('');

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const generateAvatar = async () => {
    setIsGenerating(true);
    
    // Simulate avatar generation process
    setTimeout(() => {
      setAvatarUrl('https://images.unsplash.com/photo-1494790108755-2616b612b977?w=200&h=200&fit=crop&crop=face');
      setHasAvatar(true);
      setIsGenerating(false);
    }, 3000);
  };

  const proceedToMatching = () => {
    navigate('/match');
  };

  return (
    <div className="min-h-screen bg-gradient-soft relative overflow-hidden">
      <Navigation />
      
      {/* Background decorative elements */}
      <div className="absolute top-40 right-32 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse-soft" />
      <div className="absolute bottom-32 left-32 w-36 h-36 bg-accent/5 rounded-full blur-2xl animate-float" />
      
      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          
          {/* Header */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Create Your{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Avatar
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Let's capture your personality to find the perfect roommate match
            </p>
          </div>
          
          {/* Camera Preview */}
          <Card className="overflow-hidden bg-card/60 backdrop-blur-sm border-border/50 shadow-warm rounded-3xl animate-scale-in">
            <div className="p-8">
              {!hasAvatar ? (
                <div className="relative">
                  <div className="aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden bg-muted/20 border-2 border-dashed border-primary/30">
                    <video
                      ref={videoRef}
                      autoPlay
                      muted
                      className="w-full h-full object-cover"
                      onLoadedMetadata={startCamera}
                    />
                    {!videoRef.current?.srcObject && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <Camera className="h-16 w-16 text-muted-foreground mx-auto" />
                          <p className="text-muted-foreground">Camera preview will appear here</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Camera controls */}
                  <div className="flex justify-center space-x-4 mt-6">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={startCamera}
                      className="rounded-xl"
                    >
                      <Camera className="h-5 w-5 mr-2" />
                      Enable Camera
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-xl"
                    >
                      <RotateCcw className="h-5 w-5 mr-2" />
                      Flip
                    </Button>
                  </div>
                </div>
              ) : (
                /* Generated Avatar */
                <div className="text-center space-y-6">
                  <div className="relative inline-block">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                      <img
                        src={avatarUrl}
                        alt="Generated avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-soft animate-bounce">
                      <Sparkles className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-heading font-semibold text-foreground">
                      Perfect! ✨
                    </h3>
                    <p className="text-muted-foreground">
                      Your avatar is ready for matching
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>
          
          {/* Action Buttons */}
          <div className="space-y-4">
            {!hasAvatar ? (
              <Button
                size="lg"
                onClick={generateAvatar}
                disabled={isGenerating}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-xl w-full sm:w-auto"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Generating Avatar...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5 mr-2" />
                    Generate My Avatar
                  </>
                )}
              </Button>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={proceedToMatching}
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-xl"
                >
                  Find My Match
                  <span className="ml-2">💕</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setHasAvatar(false)}
                  className="border-primary/30 text-primary hover:bg-primary/5 text-lg px-8 py-6 rounded-xl"
                >
                  Retake Photo
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarGeneration;