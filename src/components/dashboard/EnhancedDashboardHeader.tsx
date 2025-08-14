import React from "react";
import { Search, Bell, Settings, User, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { channels, weekCampaigns } from "@/data/mockData";

const EnhancedDashboardHeader = () => {
  return (
    <header className="bg-gradient-to-r from-background to-muted/30 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        {/* Top Row */}
        <div className="flex items-center justify-between mb-4">
          {/* Left: Title & Channel Selector */}
          <div className="flex items-center space-x-6">
            <div>
              <div className="flex items-center space-x-3">
                <h1 className="text-2xl font-bold text-foreground">Campaign Analytics</h1>
                <Badge variant="secondary" className="bg-success/10 text-success border-success/20 animate-pulse">
                  Live
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">Real-time marketing intelligence</p>
            </div>
            
            {/* Channel Selector */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-muted-foreground">Channel:</span>
              <Select defaultValue="all">
                <SelectTrigger className="w-40 h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {channels.map((channel) => (
                    <SelectItem key={channel.value} value={channel.value}>
                      {channel.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search campaigns..."
                className="pl-10 w-64 h-9"
              />
            </div>

            {/* Date Range */}
            <Button variant="outline" size="sm" className="h-9">
              <Calendar className="h-4 w-4 mr-2" />
              Last 30 Days
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>

            {/* Notifications */}
            <Button variant="outline" size="icon" className="relative h-9 w-9">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 text-xs bg-danger">
                3
              </Badge>
            </Button>

            {/* Settings */}
            <Button variant="outline" size="icon" className="h-9 w-9">
              <Settings className="h-4 w-4" />
            </Button>

            {/* User */}
            <Button variant="outline" size="icon" className="h-9 w-9">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Campaign Calendar Widget */}
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Calendar className="h-4 w-4 text-primary" />
                <h3 className="font-medium text-sm">This Week's Campaigns</h3>
              </div>
              
              <div className="flex items-center space-x-4">
                {weekCampaigns.map((campaign, index) => (
                  <div key={campaign.id} className="flex items-center space-x-2 text-xs">
                    <div className={`w-2 h-2 rounded-full ${
                      campaign.status === 'active' ? 'bg-success animate-pulse' : 'bg-warning'
                    }`} />
                    <span className="text-muted-foreground">{campaign.date}</span>
                    <span className="font-medium">{campaign.name}</span>
                    <span className="text-muted-foreground">{campaign.time}</span>
                  </div>
                ))}
                
                <Button variant="ghost" size="sm" className="h-6 text-xs text-primary">
                  View All
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </header>
  );
};

export default EnhancedDashboardHeader;