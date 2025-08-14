import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Smartphone, Bell, MessageCircle, ArrowUpRight, Eye } from "lucide-react";
import { channelPerformance } from "@/data/mockData";

const CompactChannelPerformance = () => {
  const getChannelIcon = (channel: string) => {
    switch (channel.toLowerCase()) {
      case 'sms': return MessageSquare;
      case 'whatsapp': return MessageCircle;
      case 'email': return Mail;
      case 'push': return Bell;
      case 'rcs': return Smartphone;
      default: return MessageSquare;
    }
  };

  const getChannelColor = (channel: string) => {
    switch (channel.toLowerCase()) {
      case 'sms': return 'text-chart-1';
      case 'whatsapp': return 'text-chart-2';
      case 'email': return 'text-chart-3';
      case 'push': return 'text-chart-4';
      case 'rcs': return 'text-chart-5';
      default: return 'text-chart-1';
    }
  };

  const getPerformanceColor = (rate: number) => {
    if (rate >= 85) return 'text-success';
    if (rate >= 70) return 'text-warning';
    return 'text-danger';
  };

  return (
    <Card className="bg-card border-border shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Channel Performance</CardTitle>
          <Button variant="outline" size="sm" className="h-8">
            <Eye className="h-4 w-4 mr-1" />
            View All
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {channelPerformance.map((channel) => {
          const Icon = getChannelIcon(channel.channel);
          const deliveryRate = Math.round((channel.delivered / channel.reach) * 100);
          const openRate = Math.round((channel.opened / channel.delivered) * 100);
          
          return (
            <div key={channel.channel} className="border border-border rounded-lg p-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-primary/10 ${getChannelColor(channel.channel)}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{channel.channel}</h3>
                    <p className="text-xs text-muted-foreground">via {channel.bsp}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-lg font-bold">{channel.campaigns}</div>
                  <div className="text-xs text-muted-foreground">Campaigns</div>
                </div>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div className="text-center">
                  <div className="text-sm font-semibold">{(channel.reach / 1000).toFixed(0)}K</div>
                  <div className="text-xs text-muted-foreground">Reach</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold">{(channel.converted / 1000).toFixed(1)}K</div>
                  <div className="text-xs text-muted-foreground">Conversions</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold">₹{channel.costPerLead}</div>
                  <div className="text-xs text-muted-foreground">Cost/Lead</div>
                </div>
              </div>

              {/* Performance Bars */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span>Delivery Rate</span>
                  <span className={`font-medium ${getPerformanceColor(deliveryRate)}`}>
                    {deliveryRate}%
                  </span>
                </div>
                <Progress value={deliveryRate} className="h-1.5" />
                
                <div className="flex items-center justify-between text-xs">
                  <span>Open Rate</span>
                  <span className={`font-medium ${getPerformanceColor(openRate)}`}>
                    {openRate}%
                  </span>
                </div>
                <Progress value={openRate} className="h-1.5" />
                
                <div className="flex items-center justify-between text-xs">
                  <span>CTR</span>
                  <span className={`font-medium ${getPerformanceColor(channel.ctr)}`}>
                    {channel.ctr}%
                  </span>
                </div>
                <Progress value={channel.ctr * 10} className="h-1.5" />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    {channel.conversionRate}% Conv.
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    ₹{(channel.spend / 1000).toFixed(0)}K Spent
                  </Badge>
                </div>
                
                <Button variant="ghost" size="sm" className="h-6 text-xs">
                  Details
                  <ArrowUpRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default CompactChannelPerformance;