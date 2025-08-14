import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  PieChart,
  AlertCircle,
  Target
} from "lucide-react";
import { budgetBreakdown } from "@/data/mockData";

const BudgetOverview = () => {
  const spentPercentage = (budgetBreakdown.spent / budgetBreakdown.allocated * 100);
  const remainingPercentage = 100 - spentPercentage;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card className="bg-gradient-to-br from-primary/5 to-primary-light/5 border-primary/20">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <DollarSign className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Total Budget</span>
          </div>
          <div className="text-2xl font-bold text-foreground">
            ₹{budgetBreakdown.allocated.toLocaleString()}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-warning/5 to-warning-light/5 border-warning/20">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="h-5 w-5 text-warning" />
            <span className="text-sm font-medium text-muted-foreground">Spent</span>
          </div>
          <div className="text-2xl font-bold text-foreground">
            ₹{budgetBreakdown.spent.toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground">
            {spentPercentage.toFixed(1)}% of budget
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-success/5 to-success-light/5 border-success/20">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Target className="h-5 w-5 text-success" />
            <span className="text-sm font-medium text-muted-foreground">Remaining</span>
          </div>
          <div className="text-2xl font-bold text-foreground">
            ₹{budgetBreakdown.remaining.toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground">
            {remainingPercentage.toFixed(1)}% available
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ChannelBudgetCard = ({ channel }: { channel: any }) => {
  const spentPercentage = (channel.spent / channel.allocated * 100);
  const isOverBudget = spentPercentage > 100;
  const efficiency = channel.efficiency;

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">{channel.channel}</CardTitle>
          <div className="flex items-center space-x-2">
            <Badge 
              variant="secondary" 
              className={`text-xs ${
                efficiency >= 90 
                  ? "bg-success/10 text-success border-success/20" 
                  : efficiency >= 80 
                    ? "bg-warning/10 text-warning border-warning/20"
                    : "bg-danger/10 text-danger border-danger/20"
              }`}
            >
              {efficiency}% efficient
            </Badge>
            {isOverBudget && (
              <AlertCircle className="h-4 w-4 text-danger" />
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Budget Usage</span>
            <span className={`font-medium ${isOverBudget ? 'text-danger' : 'text-foreground'}`}>
              {spentPercentage.toFixed(1)}%
            </span>
          </div>
          <Progress 
            value={Math.min(spentPercentage, 100)} 
            className={`h-2 ${isOverBudget ? 'bg-danger/20' : ''}`}
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>₹{channel.spent.toLocaleString()}</span>
            <span>₹{channel.allocated.toLocaleString()}</span>
          </div>
        </div>

        {isOverBudget && (
          <div className="p-3 bg-danger/10 border border-danger/20 rounded-lg">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-4 w-4 text-danger" />
              <span className="text-sm font-medium text-danger">Over Budget</span>
            </div>
            <p className="text-xs text-danger mt-1">
              Exceeded by ₹{(channel.spent - channel.allocated).toLocaleString()}
            </p>
          </div>
        )}

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Allocated</span>
            <span className="font-medium">₹{channel.allocated.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Spent</span>
            <span className="font-medium">₹{channel.spent.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Remaining</span>
            <span className={`font-medium ${(channel.allocated - channel.spent) < 0 ? 'text-danger' : 'text-success'}`}>
              ₹{Math.abs(channel.allocated - channel.spent).toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const BudgetDashboard = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Budget Dashboard</h2>
          <p className="text-muted-foreground">Monitor spend and optimize budget allocation</p>
        </div>
        <Badge className="bg-primary/10 text-primary border-primary/20">
          <PieChart className="h-3 w-3 mr-1" />
          Monthly View
        </Badge>
      </div>
      
      <BudgetOverview />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {budgetBreakdown.channels.map((channel) => (
          <ChannelBudgetCard key={channel.channel} channel={channel} />
        ))}
      </div>
    </div>
  );
};

export default BudgetDashboard;