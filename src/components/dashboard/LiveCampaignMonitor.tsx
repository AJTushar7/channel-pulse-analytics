import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Play, 
  Pause, 
  Clock, 
  Send, 
  Users, 
  Activity,
  MessageSquare,
  Smartphone
} from "lucide-react";
import { liveCampaigns } from "@/data/mockData";

const getStatusBadge = (status: string) => {
  switch (status) {
    case "executing":
      return (
        <Badge className="bg-success/10 text-success border-success/20 animate-pulse">
          <Activity className="h-3 w-3 mr-1" />
          Executing
        </Badge>
      );
    case "scheduled":
      return (
        <Badge className="bg-warning/10 text-warning border-warning/20">
          <Clock className="h-3 w-3 mr-1" />
          Scheduled
        </Badge>
      );
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getChannelIcon = (channel: string) => {
  switch (channel) {
    case "SMS": return Smartphone;
    case "WhatsApp": return MessageSquare;
    default: return Send;
  }
};

const LiveCampaignCard = ({ campaign }: { campaign: any }) => {
  const Icon = getChannelIcon(campaign.channel);
  const isExecuting = campaign.status === "executing";

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon className="h-4 w-4 text-primary" />
            <CardTitle className="text-base font-semibold">{campaign.name}</CardTitle>
          </div>
          {getStatusBadge(campaign.status)}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Progress */}
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{campaign.progress}%</span>
          </div>
          <Progress value={campaign.progress} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>{campaign.sent.toLocaleString()} sent</span>
            <span>{campaign.target.toLocaleString()} total</span>
          </div>
        </div>

        {/* Timing */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {isExecuting ? "Started" : "Starts"} at {campaign.startTime}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            ETA: {campaign.estimatedCompletion}
          </span>
        </div>

        {/* Channel */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Channel</span>
          <Badge variant="outline">{campaign.channel}</Badge>
        </div>

        {/* Actions */}
        <div className="flex space-x-2 pt-2">
          {isExecuting ? (
            <Button variant="outline" size="sm" className="flex-1">
              <Pause className="h-3 w-3 mr-1" />
              Pause
            </Button>
          ) : (
            <Button variant="outline" size="sm" className="flex-1">
              <Play className="h-3 w-3 mr-1" />
              Start Now
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

const LiveCampaignMonitor = () => {
  const executingCount = liveCampaigns.filter(c => c.status === "executing").length;
  const scheduledCount = liveCampaigns.filter(c => c.status === "scheduled").length;

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold">Live Campaign Monitor</CardTitle>
            <p className="text-muted-foreground">Real-time campaign execution status</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-sm font-semibold text-success">{executingCount}</div>
              <div className="text-xs text-muted-foreground">Executing</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-warning">{scheduledCount}</div>
              <div className="text-xs text-muted-foreground">Scheduled</div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {liveCampaigns.map((campaign) => (
            <LiveCampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">System Status</span>
          </div>
          <div className="text-xs text-muted-foreground">
            All systems operational • API response time: 120ms • Queue processing: Normal
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveCampaignMonitor;