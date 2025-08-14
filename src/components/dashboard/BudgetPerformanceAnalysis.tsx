import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, TrendingUp, Target, BarChart3, 
  Calculator, Brain, PieChart, Users,
  ArrowUp, ArrowDown, AlertTriangle
} from "lucide-react";
import { campaignList } from "@/data/mockData";

const BudgetPerformanceAnalysis = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(campaignList[0].id);
  
  const selectedCampaignData = campaignList.find(c => c.id === selectedCampaign) || campaignList[0];
  
  // Mock future campaign prediction data
  const futureAnalysis = {
    predictedCost: 125000,
    predictedReach: 180000,
    predictedConversions: 3600,
    predictedROI: 4.8,
    confidence: 87
  };

  const costMetrics = [
    { 
      label: "Cost Per Lead (CPL)", 
      current: Math.round(selectedCampaignData.spent / (selectedCampaignData.conversions || 1)),
      target: 180,
      trend: "down"
    },
    { 
      label: "Cost Per Click (CPC)", 
      current: 12,
      target: 10,
      trend: "up"
    },
    { 
      label: "Cost Per Mille (CPM)", 
      current: Math.round((selectedCampaignData.spent / selectedCampaignData.reach) * 1000),
      target: 25,
      trend: "down"
    }
  ];

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? 
      <ArrowUp className="h-3 w-3 text-danger" /> : 
      <ArrowDown className="h-3 w-3 text-success" />;
  };

  const getTrendColor = (trend: string) => {
    return trend === "up" ? "text-danger" : "text-success";
  };

  return (
    <Card className="bg-card border-border shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Calculator className="h-5 w-5 mr-2 text-primary" />
            Budget vs Performance Analysis
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Brain className="h-3 w-3 mr-1" />
              AI Predictions
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Campaign Selector */}
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium">Select Campaign:</label>
          <Select value={selectedCampaign} onValueChange={setSelectedCampaign}>
            <SelectTrigger className="w-64">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {campaignList.map((campaign) => (
                <SelectItem key={campaign.id} value={campaign.id}>
                  {campaign.name} ({campaign.status})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Current Campaign Analysis */}
        <Card className="border border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center">
              <BarChart3 className="h-4 w-4 mr-2 text-primary" />
              Current Campaign Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Budget Overview */}
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                </div>
                <div className="text-lg font-bold">₹{(selectedCampaignData.budget / 1000).toFixed(0)}K</div>
                <div className="text-xs text-muted-foreground">Total Budget</div>
              </div>
              
              <div className="text-center p-3 bg-warning/5 rounded-lg border border-warning/10">
                <div className="flex items-center justify-center mb-2">
                  <Target className="h-4 w-4 text-warning" />
                </div>
                <div className="text-lg font-bold">₹{(selectedCampaignData.spent / 1000).toFixed(0)}K</div>
                <div className="text-xs text-muted-foreground">Spent</div>
              </div>
              
              <div className="text-center p-3 bg-success/5 rounded-lg border border-success/10">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-4 w-4 text-success" />
                </div>
                <div className="text-lg font-bold">{selectedCampaignData.conversions}</div>
                <div className="text-xs text-muted-foreground">Conversions</div>
              </div>
              
              <div className="text-center p-3 bg-chart-3/5 rounded-lg border border-chart-3/10">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-4 w-4 text-chart-3" />
                </div>
                <div className="text-lg font-bold">{selectedCampaignData.roi}x</div>
                <div className="text-xs text-muted-foreground">ROI</div>
              </div>
            </div>

            {/* Budget Progress */}
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span>Budget Utilization</span>
                <span>{Math.round((selectedCampaignData.spent / selectedCampaignData.budget) * 100)}%</span>
              </div>
              <Progress 
                value={(selectedCampaignData.spent / selectedCampaignData.budget) * 100} 
                className="h-3"
              />
              <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
                <span>₹{(selectedCampaignData.spent / 1000).toFixed(0)}K Spent</span>
                <span>₹{((selectedCampaignData.budget - selectedCampaignData.spent) / 1000).toFixed(0)}K Remaining</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cost Outcome Metrics */}
        <Card className="border border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center">
              <PieChart className="h-4 w-4 mr-2 text-primary" />
              Cost Per Outcome Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {costMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                  <div>
                    <h4 className="font-medium text-sm">{metric.label}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-lg font-bold">₹{metric.current}</span>
                      <div className="flex items-center space-x-1">
                        {getTrendIcon(metric.trend)}
                        <span className={`text-xs ${getTrendColor(metric.trend)}`}>
                          vs ₹{metric.target} target
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <Badge variant={metric.current <= metric.target ? "secondary" : "destructive"}>
                      {metric.current <= metric.target ? "On Target" : "Above Target"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Future Campaign Prediction */}
        <Card className="bg-gradient-to-r from-primary/5 to-success/5 border-primary/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center">
              <Brain className="h-4 w-4 mr-2 text-primary" />
              AI Cost Prediction for Future Campaigns
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Predicted Cost:</span>
                  <span className="font-semibold">₹{(futureAnalysis.predictedCost / 1000).toFixed(0)}K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Expected Reach:</span>
                  <span className="font-semibold">{(futureAnalysis.predictedReach / 1000).toFixed(0)}K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Predicted Conversions:</span>
                  <span className="font-semibold">{futureAnalysis.predictedConversions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Expected ROI:</span>
                  <span className="font-semibold text-success">{futureAnalysis.predictedROI}x</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="text-center p-3 bg-background/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{futureAnalysis.confidence}%</div>
                  <div className="text-xs text-muted-foreground">Prediction Confidence</div>
                </div>
                
                <div className="text-center">
                  <Button className="w-full">
                    <Calculator className="h-4 w-4 mr-2" />
                    Create Optimized Campaign
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Budget Suggestions */}
        <Card className="border border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center">
              <Brain className="h-4 w-4 mr-2 text-primary" />
              AI Budget Optimization Suggestions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-success/5 rounded-lg border border-success/10">
                <div className="p-1 rounded-full bg-success/20 mt-0.5">
                  <TrendingUp className="h-3 w-3 text-success" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm text-success mb-1">Increase WhatsApp Budget</h4>
                  <p className="text-xs text-muted-foreground">
                    WhatsApp shows 34% better conversion rate. Reallocating ₹25K could improve ROI by 18%.
                  </p>
                </div>
                <Button size="sm" variant="outline" className="h-7 text-xs">
                  Apply
                </Button>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-warning/5 rounded-lg border border-warning/10">
                <div className="p-1 rounded-full bg-warning/20 mt-0.5">
                  <AlertTriangle className="h-3 w-3 text-warning" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm text-warning mb-1">Optimize Send Times</h4>
                  <p className="text-xs text-muted-foreground">
                    Campaigns sent at 8 PM get 45% more engagement. This could reduce your CPL by ₹67.
                  </p>
                </div>
                <Button size="sm" variant="outline" className="h-7 text-xs">
                  Configure
                </Button>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                <div className="p-1 rounded-full bg-primary/20 mt-0.5">
                  <Target className="h-3 w-3 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm text-primary mb-1">Segment Optimization</h4>
                  <p className="text-xs text-muted-foreground">
                    VIP customers show 3x higher conversion. Focus budget on high-value segments.
                  </p>
                </div>
                <Button size="sm" variant="outline" className="h-7 text-xs">
                  Implement
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default BudgetPerformanceAnalysis;