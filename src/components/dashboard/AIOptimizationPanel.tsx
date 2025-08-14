import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, UserX, DollarSign, Clock, TrendingUp, 
  ArrowRight, Target, Settings, Zap
} from "lucide-react";
import { aiOptimizations } from "@/data/mockData";

const AIOptimizationPanel = () => {
  const getOptimizationIcon = (type: string) => {
    switch (type) {
      case 'inactive_customers': return UserX;
      case 'cost_optimization': return DollarSign;
      case 'timing_optimization': return Clock;
      default: return Target;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-danger/10 text-danger border-danger/20';
      case 'medium': return 'bg-warning/10 text-warning border-warning/20';
      case 'low': return 'bg-success/10 text-success border-success/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return '🔥';
      case 'medium': return '⚡';
      case 'low': return '💡';
      default: return '📋';
    }
  };

  return (
    <Card className="bg-card border-border shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Brain className="h-5 w-5 mr-2 text-primary" />
            AI Optimization & Enhancement
          </CardTitle>
          <Badge className="bg-primary/10 text-primary border-primary/20">
            <Zap className="h-3 w-3 mr-1" />
            Auto-Learning
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {aiOptimizations.map((optimization) => {
          const Icon = getOptimizationIcon(optimization.type);
          
          return (
            <Card key={optimization.id} className="border border-border">
              <CardContent className="p-4">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-medium text-sm">{optimization.title}</h3>
                        <span className="text-sm">{getPriorityIcon(optimization.priority)}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        {optimization.description}
                      </p>
                    </div>
                  </div>
                  
                  <Badge className={`text-xs ${getPriorityColor(optimization.priority)}`}>
                    {optimization.priority.toUpperCase()}
                  </Badge>
                </div>

                {/* Impact & Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-xs">
                      <TrendingUp className="h-3 w-3 text-success" />
                      <span className="font-medium text-success">{optimization.impact}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline" className="h-7 text-xs">
                      <Settings className="h-3 w-3 mr-1" />
                      Configure
                    </Button>
                    <Button size="sm" className="h-7 text-xs">
                      {optimization.action}
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>

                {/* Progress Bar for Implementation */}
                {optimization.type === 'inactive_customers' && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span>Implementation Progress</span>
                      <span>23% Complete</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '23%' }}></div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}

        {/* Summary Card */}
        <Card className="bg-gradient-to-r from-primary/5 to-success/5 border-primary/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-sm mb-1">Total Potential Savings</h3>
                <p className="text-2xl font-bold text-primary">₹2.8L</p>
                <p className="text-xs text-muted-foreground">per month with AI optimizations</p>
              </div>
              
              <div className="text-right">
                <Button className="mb-2">
                  <Target className="h-4 w-4 mr-2" />
                  Apply All
                </Button>
                <div className="text-xs text-muted-foreground">
                  3 optimizations pending
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default AIOptimizationPanel;