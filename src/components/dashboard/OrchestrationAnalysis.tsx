import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  GitBranch, TrendingUp, Users, Clock, ArrowRight, 
  Target, CheckCircle, AlertCircle, BarChart3
} from "lucide-react";
import { orchestrationData } from "@/data/mockData";

const OrchestrationAnalysis = () => {
  const getStrategyColor = (successRate: number) => {
    if (successRate >= 80) return "border-success/20 bg-success/5";
    if (successRate >= 70) return "border-warning/20 bg-warning/5";
    return "border-danger/20 bg-danger/5";
  };

  const getSuccessRateColor = (rate: number) => {
    if (rate >= 80) return "text-success";
    if (rate >= 70) return "text-warning";
    return "text-danger";
  };

  return (
    <Card className="bg-card border-border shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center">
            <GitBranch className="h-5 w-5 mr-2 text-primary" />
            Orchestration Analysis
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Badge className="bg-success/10 text-success border-success/20">
              {orchestrationData.fallbackSuccess}% Success Rate
            </Badge>
            <Button variant="outline" size="sm">
              <BarChart3 className="h-4 w-4 mr-1" />
              View Journey Map
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Overview Metrics */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="border border-border">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="h-5 w-5 text-success" />
              </div>
              <div className="text-2xl font-bold text-success">{orchestrationData.fallbackSuccess}%</div>
              <div className="text-xs text-muted-foreground">Fallback Success Rate</div>
            </CardContent>
          </Card>

          <Card className="border border-border">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <GitBranch className="h-5 w-5 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">{orchestrationData.avgChannelsUsed}</div>
              <div className="text-xs text-muted-foreground">Avg Channels Used</div>
            </CardContent>
          </Card>

          <Card className="border border-border">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-5 w-5 text-chart-3" />
              </div>
              <div className="text-2xl font-bold text-chart-3">89%</div>
              <div className="text-xs text-muted-foreground">Journey Completion</div>
            </CardContent>
          </Card>
        </div>

        {/* Fallback Strategies */}
        <div>
          <h3 className="font-medium text-sm mb-3 flex items-center">
            <ArrowRight className="h-4 w-4 mr-2 text-primary" />
            Top Performing Fallback Strategies
          </h3>
          
          <div className="space-y-3">
            {orchestrationData.fallbackStrategies.map((strategy, index) => (
              <Card key={index} className={`border ${getStrategyColor(strategy.successRate)}`}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <GitBranch className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{strategy.strategy}</h4>
                        <p className="text-xs text-muted-foreground">
                          {strategy.usage}% of fallback usage
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`text-lg font-bold ${getSuccessRateColor(strategy.successRate)}`}>
                        {strategy.successRate}%
                      </div>
                      <div className="text-xs text-muted-foreground">Success Rate</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>Success Rate</span>
                      <span className={getSuccessRateColor(strategy.successRate)}>
                        {strategy.successRate}%
                      </span>
                    </div>
                    <Progress value={strategy.successRate} className="h-1.5" />
                    
                    <div className="flex items-center justify-between text-xs">
                      <span>Usage Volume</span>
                      <span>{strategy.usage}%</span>
                    </div>
                    <Progress value={strategy.usage} className="h-1.5" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Recommendations */}
        <Card className="bg-primary/5 border-primary/10">
          <CardContent className="p-4">
            <div className="flex items-center mb-3">
              <Target className="h-4 w-4 text-primary mr-2" />
              <h4 className="font-medium text-sm">AI Orchestration Recommendations</h4>
            </div>
            
            <div className="space-y-3">
              {orchestrationData.recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="p-1 rounded-full bg-primary/20 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">{recommendation}</p>
                  </div>
                  <Button size="sm" variant="ghost" className="h-6 text-xs">
                    Apply
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Journey Flow Visualization */}
        <Card className="border border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-sm">Customer Journey Flow</h4>
              <Button variant="outline" size="sm" className="h-7 text-xs">
                View Details
              </Button>
            </div>
            
            <div className="flex items-center justify-between text-xs">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="font-medium">100K</div>
                <div className="text-muted-foreground">Started</div>
              </div>
              
              <ArrowRight className="h-4 w-4 text-muted-foreground mx-2" />
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center mb-2">
                  <AlertCircle className="h-5 w-5 text-warning" />
                </div>
                <div className="font-medium">24K</div>
                <div className="text-muted-foreground">Fallback</div>
              </div>
              
              <ArrowRight className="h-4 w-4 text-muted-foreground mx-2" />
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mb-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                </div>
                <div className="font-medium">89K</div>
                <div className="text-muted-foreground">Completed</div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <Badge variant="secondary" className="text-xs">
                89% Journey Completion Rate
              </Badge>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default OrchestrationAnalysis;