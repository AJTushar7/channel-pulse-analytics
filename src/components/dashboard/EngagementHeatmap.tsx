import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Target } from "lucide-react";
import { engagementHeatmap } from "@/data/mockData";

const EngagementHeatmap = () => {
  const getEngagementColor = (engagement: number) => {
    if (engagement >= 90) return "bg-success";
    if (engagement >= 80) return "bg-warning";
    if (engagement >= 70) return "bg-chart-3";
    return "bg-muted";
  };

  const getEngagementIntensity = (engagement: number) => {
    if (engagement >= 90) return "opacity-100";
    if (engagement >= 80) return "opacity-80";
    if (engagement >= 70) return "opacity-60";
    return "opacity-40";
  };

  return (
    <Card className="bg-card border-border shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Clock className="h-5 w-5 mr-2 text-primary" />
            Peak Engagement Hours
          </CardTitle>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            AI Optimized
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Heatmap Grid */}
        <div className="space-y-3">
          <div className="grid grid-cols-7 gap-2 text-xs text-center text-muted-foreground mb-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <div key={day} className="font-medium">{day}</div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {engagementHeatmap.peakHours.map((data, index) => (
              <div key={index} className="text-center">
                <div className={`
                  h-12 rounded-lg flex flex-col justify-center items-center text-white text-xs font-medium
                  ${getEngagementColor(data.engagement)} ${getEngagementIntensity(data.engagement)}
                  transition-all duration-200 hover:scale-105 cursor-pointer
                `}>
                  <div className="font-bold">{data.hour}</div>
                  <div className="text-xs opacity-90">{data.engagement}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground">Engagement Rate:</span>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded bg-success"></div>
              <span>90%+</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded bg-warning"></div>
              <span>80-89%</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded bg-chart-3"></div>
              <span>70-79%</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded bg-muted"></div>
              <span>Below 70%</span>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <TrendingUp className="h-4 w-4 text-primary mr-2" />
            <h4 className="font-medium text-sm">AI Recommendations</h4>
          </div>
          <div className="space-y-2">
            {engagementHeatmap.insights.map((insight, index) => (
              <div key={index} className="flex items-start space-x-2 text-xs">
                <Target className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{insight}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EngagementHeatmap;