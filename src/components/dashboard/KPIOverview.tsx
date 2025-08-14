import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Send, 
  DollarSign, 
  Target, 
  BarChart3,
  Zap
} from "lucide-react";
import { kpiData } from "@/data/mockData";

const KPICard = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon, 
  format = "number",
  subtitle 
}: {
  title: string;
  value: number;
  change: number;
  changeType: "increase" | "decrease";
  icon: any;
  format?: "number" | "currency" | "percentage";
  subtitle?: string;
}) => {
  const formatValue = (val: number) => {
    if (format === "currency") return `₹${val.toLocaleString()}`;
    if (format === "percentage") return `${val}%`;
    return val.toLocaleString();
  };

  const isPositive = changeType === "increase";

  return (
    <Card className="bg-kpi-bg border-border hover:shadow-md transition-all duration-300 group">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="flex items-center space-x-2">
          <Icon className="h-4 w-4 text-primary group-hover:text-primary-light transition-colors" />
          <Badge 
            variant="secondary" 
            className={`text-xs ${
              isPositive 
                ? "bg-metric-positive/10 text-metric-positive border-metric-positive/20" 
                : "bg-metric-negative/10 text-metric-negative border-metric-negative/20"
            }`}
          >
            {isPositive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
            {change}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">
          {formatValue(value)}
        </div>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

const KPIOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <KPICard
        title="Total Campaigns"
        value={kpiData.totalCampaigns}
        change={12.5}
        changeType="increase"
        icon={Send}
        subtitle="23 currently active"
      />
      <KPICard
        title="Total Reach"
        value={kpiData.totalReach}
        change={8.2}
        changeType="increase"
        icon={Users}
        subtitle="Across all channels"
      />
      <KPICard
        title="Total Spend"
        value={kpiData.totalSpend}
        change={15.3}
        changeType="increase"
        icon={DollarSign}
        format="currency"
        subtitle="This month"
      />
      <KPICard
        title="Average CTR"
        value={kpiData.avgCTR}
        change={5.7}
        changeType="increase"
        icon={Target}
        format="percentage"
        subtitle="Industry avg: 2.8%"
      />
      <KPICard
        title="Conversion Rate"
        value={kpiData.avgConversion}
        change={3.2}
        changeType="increase"
        icon={BarChart3}
        format="percentage"
        subtitle="Last 30 days"
      />
      <KPICard
        title="Cost per Lead"
        value={kpiData.costPerLead}
        change={7.8}
        changeType="decrease"
        icon={Zap}
        format="currency"
        subtitle="Optimized pricing"
      />
      <KPICard
        title="ROI"
        value={kpiData.roi}
        change={18.9}
        changeType="increase"
        icon={TrendingUp}
        subtitle="Return on investment"
      />
      <KPICard
        title="Active Campaigns"
        value={kpiData.activeCampaigns}
        change={25.0}
        changeType="increase"
        icon={Send}
        subtitle="Running now"
      />
    </div>
  );
};

export default KPIOverview;