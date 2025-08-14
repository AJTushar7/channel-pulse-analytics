import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  Target, 
  DollarSign,
  Users,
  BarChart3,
  MoreVertical,
  Play,
  Pause,
  Eye
} from "lucide-react";
import { campaignList, monthlyTrends } from "@/data/mockData";

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Active":
      return <Badge className="bg-success/10 text-success border-success/20">Active</Badge>;
    case "Scheduled":
      return <Badge className="bg-warning/10 text-warning border-warning/20">Scheduled</Badge>;
    case "Completed":
      return <Badge className="bg-muted/10 text-muted-foreground border-muted/20">Completed</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getChannelBadge = (channels: string[]) => {
  const colors = ["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4"];
  return (
    <div className="flex space-x-1">
      {channels.slice(0, 3).map((channel, index) => (
        <Badge key={channel} variant="outline" className="text-xs">
          {channel}
        </Badge>
      ))}
      {channels.length > 3 && (
        <Badge variant="outline" className="text-xs">
          +{channels.length - 3}
        </Badge>
      )}
    </div>
  );
};

const CampaignCard = ({ campaign }: { campaign: any }) => {
  const budgetUsed = campaign.budget > 0 ? (campaign.spent / campaign.budget * 100) : 0;
  const isActive = campaign.status === "Active";

  return (
    <Card className="bg-card border-border hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-semibold mb-1">{campaign.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{campaign.type}</p>
          </div>
          <div className="flex items-center space-x-2">
            {getStatusBadge(campaign.status)}
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <MoreVertical className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Campaign Details */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Duration</span>
            <span className="font-medium">
              {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Channels</span>
            {getChannelBadge(campaign.channels)}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-2 bg-muted/30 rounded-lg">
            <div className="text-lg font-bold text-foreground">{(campaign.reach / 1000).toFixed(0)}K</div>
            <div className="text-xs text-muted-foreground">Reach</div>
          </div>
          <div className="text-center p-2 bg-muted/30 rounded-lg">
            <div className="text-lg font-bold text-foreground">{campaign.conversions.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">Conversions</div>
          </div>
        </div>

        {/* Budget Progress */}
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Budget Used</span>
            <span className="font-medium">{budgetUsed.toFixed(1)}%</span>
          </div>
          <Progress value={budgetUsed} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>₹{campaign.spent.toLocaleString()}</span>
            <span>₹{campaign.budget.toLocaleString()}</span>
          </div>
        </div>

        {/* ROI */}
        <div className="flex items-center justify-between p-3 bg-success/10 border border-success/20 rounded-lg">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-success" />
            <span className="text-sm font-medium text-success">ROI</span>
          </div>
          <span className="text-lg font-bold text-success">{campaign.roi}x</span>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          {isActive ? (
            <Button variant="outline" size="sm" className="flex-1">
              <Pause className="h-3 w-3 mr-1" />
              Pause
            </Button>
          ) : (
            <Button variant="outline" size="sm" className="flex-1">
              <Eye className="h-3 w-3 mr-1" />
              View
            </Button>
          )}
          <Button variant="ghost" size="sm">
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const MonthlyTrendsChart = () => {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Monthly Performance Trends</CardTitle>
        <p className="text-muted-foreground">Track campaign performance over time</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {monthlyTrends.map((month, index) => {
            const prevMonth = index > 0 ? monthlyTrends[index - 1] : null;
            const roiChange = prevMonth ? ((month.roi - prevMonth.roi) / prevMonth.roi * 100) : 0;
            const reachChange = prevMonth ? ((month.reach - prevMonth.reach) / prevMonth.reach * 100) : 0;
            
            return (
              <div key={month.month} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-sm font-bold text-foreground">{month.month}</div>
                    <div className="text-xs text-muted-foreground">2024</div>
                  </div>
                  
                  <div className="flex space-x-6">
                    <div>
                      <div className="text-sm font-semibold text-foreground">{month.campaigns}</div>
                      <div className="text-xs text-muted-foreground">Campaigns</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{(month.reach / 1000000).toFixed(1)}M</div>
                      <div className="text-xs text-muted-foreground">Reach</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">₹{(month.spend / 1000).toFixed(0)}K</div>
                      <div className="text-xs text-muted-foreground">Spend</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">{month.roi}x</div>
                    <div className="flex items-center justify-center space-x-1">
                      {roiChange > 0 ? (
                        <TrendingUp className="h-3 w-3 text-success" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-danger" />
                      )}
                      <span className={`text-xs ${roiChange > 0 ? 'text-success' : 'text-danger'}`}>
                        {Math.abs(roiChange).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

const CampaignAnalytics = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Campaign Analytics</h2>
          <p className="text-muted-foreground">Detailed performance analysis of your campaigns</p>
        </div>
        <Button variant="outline">
          <Calendar className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          {campaignList.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
        
        <MonthlyTrendsChart />
      </div>
    </div>
  );
};

export default CampaignAnalytics;