import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  TrendingUp, 
  AlertTriangle, 
  DollarSign, 
  Lightbulb,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { aiInsights } from "@/data/mockData";

const getInsightIcon = (type: string) => {
  switch (type) {
    case "optimization": return TrendingUp;
    case "trend": return Lightbulb;
    case "cost": return DollarSign;
    default: return Brain;
  }
};

const getImpactColor = (impact: string) => {
  switch (impact) {
    case "high": return "bg-danger/10 text-danger border-danger/20";
    case "medium": return "bg-warning/10 text-warning border-warning/20";
    case "low": return "bg-success/10 text-success border-success/20";
    default: return "bg-muted/10 text-muted-foreground border-muted/20";
  }
};

const InsightCard = ({ insight }: { insight: any }) => {
  const Icon = getInsightIcon(insight.type);
  const impactClass = getImpactColor(insight.impact);

  return (
    <Card className="bg-card border-border hover:shadow-md transition-all duration-300">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold text-foreground">{insight.title}</h4>
              <Badge variant="secondary" className={impactClass}>
                {insight.impact}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              {insight.message}
            </p>
            <div className="bg-muted/30 p-3 rounded-lg mb-3">
              <div className="flex items-center space-x-2 mb-1">
                <Sparkles className="h-3 w-3 text-primary" />
                <span className="text-xs font-medium text-foreground">AI Suggestion</span>
              </div>
              <p className="text-xs text-muted-foreground">{insight.suggestion}</p>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Apply Suggestion
              <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const AIInsightsPanel = () => {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-br from-primary to-primary-light rounded-lg">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl font-bold">AI Insights</CardTitle>
              <p className="text-muted-foreground">Smart recommendations to optimize your campaigns</p>
            </div>
          </div>
          <Badge className="bg-primary/10 text-primary border-primary/20">
            <Sparkles className="h-3 w-3 mr-1" />
            3 New
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {aiInsights.map((insight, index) => (
            <InsightCard key={index} insight={insight} />
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-primary-light/5 border border-primary/10 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Performance Alert</span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Your campaign performance is 23% above industry average. Consider scaling successful strategies.
          </p>
          <Button variant="outline" size="sm">
            View Detailed Analysis
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsightsPanel;