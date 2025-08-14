import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Server, Star, DollarSign, TrendingUp, Award,
  MessageSquare, Mail, Bell, MessageCircle, Smartphone,
  ChevronRight, Crown, Target
} from "lucide-react";
import { bspPerformance } from "@/data/mockData";

const BSPPerformanceComparison = () => {
  const getChannelIcon = (channel: string) => {
    switch (channel.toLowerCase()) {
      case 'sms': return MessageSquare;
      case 'whatsapp': return MessageCircle;
      case 'email': return Mail;
      case 'push': return Bell;
      case 'rcs': return Smartphone;
      default: return Server;
    }
  };

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'excellent': return 'text-success';
      case 'good': return 'text-warning';
      case 'average': return 'text-chart-3';
      default: return 'text-muted-foreground';
    }
  };

  const getRatingBg = (rating: string) => {
    switch (rating) {
      case 'excellent': return 'bg-success/10 border-success/20';
      case 'good': return 'bg-warning/10 border-warning/20';
      case 'average': return 'bg-chart-3/10 border-chart-3/20';
      default: return 'bg-muted/10 border-muted/20';
    }
  };

  const channels = Object.keys(bspPerformance) as Array<keyof typeof bspPerformance>;

  return (
    <Card className="bg-card border-border shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Server className="h-5 w-5 mr-2 text-primary" />
            BSP Performance Comparison
          </CardTitle>
          <Button variant="outline" size="sm">
            <Target className="h-4 w-4 mr-1" />
            Optimize Selection
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {channels.map((channel) => {
          const Icon = getChannelIcon(channel);
          const providers = bspPerformance[channel];
          const bestProvider = providers.find(p => p.recommended);
          
          return (
            <Card key={channel} className="border border-border">
              <CardContent className="p-4">
                {/* Channel Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm capitalize">{channel}</h3>
                      <p className="text-xs text-muted-foreground">
                        {providers.length} providers available
                      </p>
                    </div>
                  </div>
                  
                  {bestProvider && (
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      <Crown className="h-3 w-3 mr-1" />
                      Best: {bestProvider.name}
                    </Badge>
                  )}
                </div>

                {/* Provider Comparison */}
                <div className="grid grid-cols-1 gap-3">
                  {providers.map((provider, index) => (
                    <div key={index} className={`
                      border rounded-lg p-3 transition-all duration-200 hover:shadow-sm
                      ${provider.recommended ? 'border-primary/20 bg-primary/5' : 'border-border'}
                    `}>
                      <div className="flex items-center justify-between">
                        {/* Provider Info */}
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium text-sm">{provider.name}</h4>
                            {provider.recommended && (
                              <Award className="h-3 w-3 text-primary" />
                            )}
                          </div>
                          
                          <Badge className={`text-xs ${getRatingBg(provider.rating)}`}>
                            {provider.rating}
                          </Badge>
                        </div>

                        {/* Quick Metrics */}
                        <div className="flex items-center space-x-4 text-xs">
                          <div className="text-center">
                            <div className={`font-semibold ${getRatingColor(provider.rating)}`}>
                              {provider.deliveryRate}%
                            </div>
                            <div className="text-muted-foreground">Delivery</div>
                          </div>
                          
                          <div className="text-center">
                            <div className="font-semibold">₹{provider.cost}</div>
                            <div className="text-muted-foreground">Cost</div>
                          </div>
                          
                          <Button variant="ghost" size="sm" className="h-6">
                            <ChevronRight className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      {/* Detailed Metrics */}
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span>Delivery Rate</span>
                          <span className={getRatingColor(provider.rating)}>
                            {provider.deliveryRate}%
                          </span>
                        </div>
                        <Progress value={provider.deliveryRate} className="h-1" />
                      </div>

                      {/* Cost Efficiency Indicator */}
                      {provider.recommended && (
                        <div className="mt-3 pt-3 border-t border-border/50">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-1">
                              <TrendingUp className="h-3 w-3 text-success" />
                              <span className="text-success font-medium">Best ROI</span>
                            </div>
                            <span className="text-muted-foreground">
                              Optimal cost-performance ratio
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Channel Summary */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="grid grid-cols-3 gap-4 text-center text-xs">
                    <div>
                      <div className="font-semibold text-primary">
                        {Math.max(...providers.map(p => p.deliveryRate))}%
                      </div>
                      <div className="text-muted-foreground">Best Delivery</div>
                    </div>
                    <div>
                      <div className="font-semibold text-success">
                        ₹{Math.min(...providers.map(p => p.cost))}
                      </div>
                      <div className="text-muted-foreground">Lowest Cost</div>
                    </div>
                    <div>
                      <div className="font-semibold text-chart-3">
                        {providers.filter(p => p.rating === 'excellent').length}
                      </div>
                      <div className="text-muted-foreground">Excellent Rated</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* Global Recommendations */}
        <Card className="bg-gradient-to-r from-primary/5 to-success/5 border-primary/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-sm mb-1 flex items-center">
                  <Star className="h-4 w-4 text-primary mr-2" />
                  Optimization Recommendations
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Switch to recommended BSPs to save costs and improve delivery
                </p>
                
                <div className="space-y-1 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span>Potential monthly savings: <strong>₹45,000</strong></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Delivery rate improvement: <strong>+3.2%</strong></span>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <Button className="mb-2">
                  <Award className="h-4 w-4 mr-2" />
                  Apply Best BSPs
                </Button>
                <div className="text-xs text-muted-foreground">
                  Auto-optimize selection
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default BSPPerformanceComparison;