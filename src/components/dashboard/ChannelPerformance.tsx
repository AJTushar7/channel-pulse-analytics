import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Mail, 
  Smartphone, 
  Send, 
  MoreVertical,
  TrendingUp,
  Eye,
  MousePointer,
  Target
} from "lucide-react";
import { channelPerformance } from "@/data/mockData";

const getChannelIcon = (channel: string) => {
  switch (channel) {
    case "SMS": return Smartphone;
    case "WhatsApp": return MessageSquare;
    case "Email": return Mail;
    case "Push": return Send;
    default: return Send;
  }
};

const getChannelColor = (channel: string) => {
  switch (channel) {
    case "SMS": return "bg-chart-1";
    case "WhatsApp": return "bg-chart-2";
    case "Email": return "bg-chart-3";
    case "Push": return "bg-chart-4";
    default: return "bg-chart-1";
  }
};

const ChannelCard = ({ channel }: { channel: any }) => {
  const Icon = getChannelIcon(channel.channel);
  const colorClass = getChannelColor(channel.channel);
  const deliveryRate = (channel.delivered / channel.reach * 100).toFixed(1);
  const openRate = (channel.opened / channel.delivered * 100).toFixed(1);

  return (
    <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 ${colorClass} rounded-lg`}>
            <Icon className="h-5 w-5 text-white" />
          </div>
          <div>
            <CardTitle className="text-lg font-semibold">{channel.channel}</CardTitle>
            <p className="text-sm text-muted-foreground">{channel.bsp}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Key Metrics Row */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-xl font-bold text-foreground">{channel.campaigns}</div>
            <div className="text-xs text-muted-foreground">Campaigns</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-foreground">{(channel.reach / 1000).toFixed(0)}K</div>
            <div className="text-xs text-muted-foreground">Reach</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-foreground">{channel.converted.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">Conversions</div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Delivery Rate</span>
            </div>
            <span className="text-sm font-medium">{deliveryRate}%</span>
          </div>
          <Progress value={parseFloat(deliveryRate)} className="h-2" />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MousePointer className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Open Rate</span>
            </div>
            <span className="text-sm font-medium">{openRate}%</span>
          </div>
          <Progress value={parseFloat(openRate)} className="h-2" />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Target className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">CTR</span>
            </div>
            <Badge 
              variant="secondary" 
              className="bg-success/10 text-success border-success/20"
            >
              {channel.ctr}%
            </Badge>
          </div>
        </div>

        {/* Cost Metrics */}
        <div className="pt-3 border-t border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Total Spend</span>
            <span className="text-sm font-medium">₹{channel.spend.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Cost per Lead</span>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium">₹{channel.costPerLead}</span>
              <TrendingUp className="h-3 w-3 text-success" />
            </div>
          </div>
        </div>

        <Button variant="outline" className="w-full mt-4" size="sm">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

const ChannelPerformance = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Channel Performance</h2>
          <p className="text-muted-foreground">Compare performance across all communication channels</p>
        </div>
        <Button variant="outline">
          View All Channels
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {channelPerformance.map((channel) => (
          <ChannelCard key={channel.channel} channel={channel} />
        ))}
      </div>
    </div>
  );
};

export default ChannelPerformance;