import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, TrendingUp, DollarSign, Users, 
  Clock, Star, Target, Plus, Sparkles,
  ArrowRight, BarChart3
} from "lucide-react";
import { festivalTimeline } from "@/data/mockData";

const FestivalTimeline = () => {
  const getFestivalIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'diwali': return '🪔';
      case 'christmas': return '🎄';
      case 'new year': return '🎊';
      case 'holi': return '🎨';
      default: return '🎉';
    }
  };

  const getTimelineColor = (daysLeft: number) => {
    if (daysLeft <= 30) return 'border-danger/20 bg-danger/5';
    if (daysLeft <= 60) return 'border-warning/20 bg-warning/5';
    return 'border-success/20 bg-success/5';
  };

  const getUrgencyBadge = (daysLeft: number) => {
    if (daysLeft <= 15) return <Badge className="bg-danger/10 text-danger border-danger/20">Urgent</Badge>;
    if (daysLeft <= 30) return <Badge className="bg-warning/10 text-warning border-warning/20">Soon</Badge>;
    if (daysLeft <= 60) return <Badge className="bg-primary/10 text-primary border-primary/20">Plan Ahead</Badge>;
    return <Badge variant="secondary">Future</Badge>;
  };

  const getPlanningButtons = () => [
    { days: 15, label: '15 Days', variant: 'outline' },
    { days: 30, label: '30 Days', variant: 'secondary' },
    { days: 45, label: '45 Days', variant: 'secondary' },
    { days: 60, label: '60 Days', variant: 'outline' }
  ];

  return (
    <Card className="bg-card border-border shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-primary" />
            Festival Timeline & Campaign Planning
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="h-3 w-3 mr-1" />
              AI Powered
            </Badge>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-1" />
              Add Festival
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Festival Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {festivalTimeline.map((festival) => (
            <Card key={festival.id} className={`border ${getTimelineColor(festival.upcomingIn)}`}>
              <CardContent className="p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getFestivalIcon(festival.name)}</span>
                    <div>
                      <h3 className="font-medium text-sm">{festival.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {new Date(festival.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    {getUrgencyBadge(festival.upcomingIn)}
                    <div className="text-xs text-muted-foreground mt-1">
                      {festival.upcomingIn} days left
                    </div>
                  </div>
                </div>

                {/* Past Performance */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-2 bg-background rounded-lg">
                    <div className="flex items-center justify-center mb-1">
                      <BarChart3 className="h-3 w-3 text-primary" />
                    </div>
                    <div className="text-sm font-semibold">{festival.pastCampaigns}</div>
                    <div className="text-xs text-muted-foreground">Campaigns</div>
                  </div>
                  
                  <div className="text-center p-2 bg-background rounded-lg">
                    <div className="flex items-center justify-center mb-1">
                      <DollarSign className="h-3 w-3 text-success" />
                    </div>
                    <div className="text-sm font-semibold">₹{(festival.pastRevenue / 100000).toFixed(1)}L</div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                  </div>
                  
                  <div className="text-center p-2 bg-background rounded-lg">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="h-3 w-3 text-chart-3" />
                    </div>
                    <div className="text-sm font-semibold">{festival.pastROI}x</div>
                    <div className="text-xs text-muted-foreground">ROI</div>
                  </div>
                </div>

                {/* AI Recommendation */}
                <div className="bg-primary/5 border border-primary/10 rounded-lg p-3 mb-3">
                  <div className="flex items-center mb-2">
                    <Target className="h-3 w-3 text-primary mr-2" />
                    <span className="text-xs font-medium">AI Recommendation</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{festival.recommended}</p>
                </div>

                {/* Campaign Planning Buttons */}
                <div className="space-y-2">
                  <div className="text-xs font-medium mb-2 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    Plan Campaign
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {getPlanningButtons().map((button) => (
                      <Button
                        key={button.days}
                        variant={button.variant as any}
                        size="sm"
                        className="h-7 text-xs"
                      >
                        {button.label} Before
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Quick Action */}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <Button variant="ghost" size="sm" className="h-6 text-xs">
                    View Past Campaigns
                  </Button>
                  
                  <Button size="sm" className="h-6 text-xs">
                    Create Campaign
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Festival Performance Summary */}
        <Card className="border border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-sm flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Festival Campaign Performance Summary
              </h3>
              <Button variant="outline" size="sm">
                View Full Report
              </Button>
            </div>
            
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-success/5 rounded-lg border border-success/10">
                <div className="text-lg font-bold text-success">
                  {festivalTimeline.reduce((sum, f) => sum + f.pastCampaigns, 0)}
                </div>
                <div className="text-xs text-muted-foreground">Total Campaigns</div>
              </div>
              
              <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-lg font-bold text-primary">
                  ₹{(festivalTimeline.reduce((sum, f) => sum + f.pastRevenue, 0) / 10000000).toFixed(1)}Cr
                </div>
                <div className="text-xs text-muted-foreground">Total Revenue</div>
              </div>
              
              <div className="p-3 bg-chart-3/5 rounded-lg border border-chart-3/10">
                <div className="text-lg font-bold text-chart-3">
                  {(festivalTimeline.reduce((sum, f) => sum + f.pastROI, 0) / festivalTimeline.length).toFixed(1)}x
                </div>
                <div className="text-xs text-muted-foreground">Avg ROI</div>
              </div>
              
              <div className="p-3 bg-warning/5 rounded-lg border border-warning/10">
                <div className="text-lg font-bold text-warning">
                  {festivalTimeline.filter(f => f.upcomingIn <= 60).length}
                </div>
                <div className="text-xs text-muted-foreground">Upcoming Soon</div>
              </div>
            </div>
            
            {/* Top Performing Festival */}
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <span className="text-sm font-medium">Best Performing: </span>
                    <span className="text-sm text-primary font-semibold">
                      {festivalTimeline.reduce((best, current) => 
                        current.pastROI > best.pastROI ? current : best
                      ).name}
                    </span>
                  </div>
                </div>
                
                <Badge className="bg-success/10 text-success border-success/20">
                  {Math.max(...festivalTimeline.map(f => f.pastROI))}x ROI
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default FestivalTimeline;