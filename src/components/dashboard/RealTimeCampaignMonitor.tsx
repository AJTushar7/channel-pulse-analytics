import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Play, Pause, RotateCcw, Clock, Users, Target, DollarSign, 
  TrendingUp, ChevronLeft, ChevronRight, LayoutGrid, List,
  MessageSquare, Mail, Bell, MessageCircle, Smartphone
} from "lucide-react";
import { realTimeCampaigns } from "@/data/mockData";

const RealTimeCampaignMonitor = () => {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('7days');
  const [currentPage, setCurrentPage] = useState(0);
  
  const filteredCampaigns = realTimeCampaigns.filter(campaign => 
    statusFilter === 'all' || campaign.status === statusFilter
  );
  
  const cardsPerPage = 3;
  const totalPages = Math.ceil(filteredCampaigns.length / cardsPerPage);
  const currentCampaigns = filteredCampaigns.slice(
    currentPage * cardsPerPage, 
    (currentPage + 1) * cardsPerPage
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'executing':
        return <Badge className="bg-success/10 text-success border-success/20 animate-pulse">Executing</Badge>;
      case 'scheduled':
        return <Badge className="bg-warning/10 text-warning border-warning/20">Scheduled</Badge>;
      case 'paused':
        return <Badge className="bg-muted text-muted-foreground">Paused</Badge>;
      case 'failed':
        return <Badge className="bg-danger/10 text-danger border-danger/20">Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getActionButton = (status: string) => {
    switch (status) {
      case 'executing':
        return <Button size="sm" variant="outline"><Pause className="h-4 w-4 mr-1" />Pause</Button>;
      case 'scheduled':
        return <Button size="sm" variant="outline"><Play className="h-4 w-4 mr-1" />Run Now</Button>;
      case 'paused':
        return <Button size="sm" variant="outline"><Play className="h-4 w-4 mr-1" />Resume</Button>;
      case 'failed':
        return <Button size="sm" variant="outline"><RotateCcw className="h-4 w-4 mr-1" />Retry</Button>;
      default:
        return <Button size="sm" variant="outline">Action</Button>;
    }
  };

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

  return (
    <Card className="bg-card border-border shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Real-time Campaign Monitor</CardTitle>
          
          {/* View Toggle & Filters */}
          <div className="flex items-center space-x-3">
            {/* View Mode Toggle */}
            <div className="flex bg-muted rounded-lg p-1">
              <Button
                variant={viewMode === 'cards' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('cards')}
                className="h-7 px-2"
              >
                <LayoutGrid className="h-3 w-3" />
              </Button>
              <Button
                variant={viewMode === 'table' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('table')}
                className="h-7 px-2"
              >
                <List className="h-3 w-3" />
              </Button>
            </div>

            {/* Status Filter */}
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-32 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="executing">Executing</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>

            {/* Date Filter */}
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="w-28 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 Days</SelectItem>
                <SelectItem value="15days">Last 15 Days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="text-center p-3 bg-success/5 rounded-lg border border-success/10">
            <div className="text-lg font-bold text-success">
              {realTimeCampaigns.filter(c => c.status === 'executing').length}
            </div>
            <div className="text-xs text-muted-foreground">Executing</div>
          </div>
          <div className="text-center p-3 bg-warning/5 rounded-lg border border-warning/10">
            <div className="text-lg font-bold text-warning">
              {realTimeCampaigns.filter(c => c.status === 'scheduled').length}
            </div>
            <div className="text-xs text-muted-foreground">Scheduled</div>
          </div>
          <div className="text-center p-3 bg-muted/5 rounded-lg border border-muted/10">
            <div className="text-lg font-bold text-muted-foreground">
              {realTimeCampaigns.filter(c => c.status === 'paused').length}
            </div>
            <div className="text-xs text-muted-foreground">Paused</div>
          </div>
          <div className="text-center p-3 bg-danger/5 rounded-lg border border-danger/10">
            <div className="text-lg font-bold text-danger">
              {realTimeCampaigns.filter(c => c.status === 'failed').length}
            </div>
            <div className="text-xs text-muted-foreground">Failed</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {viewMode === 'cards' ? (
          <>
            {/* Card View */}
            <div className="grid grid-cols-1 gap-4 mb-4">
              {currentCampaigns.map((campaign) => {
                const Icon = getChannelIcon(campaign.channel);
                const budgetProgress = (campaign.spent / campaign.budget) * 100;
                
                return (
                  <Card key={campaign.id} className="border border-border">
                    <CardContent className="p-4">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium text-sm">{campaign.name}</h3>
                            <p className="text-xs text-muted-foreground">{campaign.channel} Campaign</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(campaign.status)}
                          {getActionButton(campaign.status)}
                        </div>
                      </div>

                      {/* Progress */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>{campaign.progress}%</span>
                        </div>
                        <Progress value={campaign.progress} className="h-2" />
                      </div>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-4 gap-4 mb-3">
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Users className="h-3 w-3 text-muted-foreground mr-1" />
                          </div>
                          <div className="text-sm font-semibold">{(campaign.sent / 1000).toFixed(0)}K</div>
                          <div className="text-xs text-muted-foreground">Sent</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Target className="h-3 w-3 text-muted-foreground mr-1" />
                          </div>
                          <div className="text-sm font-semibold">{(campaign.target / 1000).toFixed(0)}K</div>
                          <div className="text-xs text-muted-foreground">Target</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <DollarSign className="h-3 w-3 text-muted-foreground mr-1" />
                          </div>
                          <div className="text-sm font-semibold">₹{(campaign.spent / 1000).toFixed(0)}K</div>
                          <div className="text-xs text-muted-foreground">Spent</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <TrendingUp className="h-3 w-3 text-muted-foreground mr-1" />
                          </div>
                          <div className="text-sm font-semibold">{campaign.conversions}</div>
                          <div className="text-xs text-muted-foreground">Conversions</div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div className="flex items-center space-x-3 text-xs">
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                            <span>{campaign.startTime}</span>
                          </div>
                          <div className="text-muted-foreground">
                            ETA: {campaign.estimatedCompletion}
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="h-6 text-xs">
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Pagination for Cards */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                  disabled={currentPage === 0}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <span className="text-sm text-muted-foreground">
                  {currentPage + 1} of {totalPages}
                </span>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                  disabled={currentPage === totalPages - 1}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </>
        ) : (
          /* Table View */
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-border">
                <tr>
                  <th className="text-left p-3 text-muted-foreground font-medium">Campaign</th>
                  <th className="text-left p-3 text-muted-foreground font-medium">Status</th>
                  <th className="text-left p-3 text-muted-foreground font-medium">Progress</th>
                  <th className="text-left p-3 text-muted-foreground font-medium">Sent/Target</th>
                  <th className="text-left p-3 text-muted-foreground font-medium">Budget</th>
                  <th className="text-left p-3 text-muted-foreground font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCampaigns.map((campaign) => {
                  const Icon = getChannelIcon(campaign.channel);
                  
                  return (
                    <tr key={campaign.id} className="border-b border-border">
                      <td className="p-3">
                        <div className="flex items-center space-x-3">
                          <Icon className="h-4 w-4 text-primary" />
                          <div>
                            <div className="font-medium">{campaign.name}</div>
                            <div className="text-xs text-muted-foreground">{campaign.channel}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        {getStatusBadge(campaign.status)}
                      </td>
                      <td className="p-3">
                        <div className="w-24">
                          <Progress value={campaign.progress} className="h-2" />
                          <div className="text-xs text-muted-foreground mt-1">{campaign.progress}%</div>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">
                          {(campaign.sent / 1000).toFixed(0)}K / {(campaign.target / 1000).toFixed(0)}K
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="text-sm">
                          ₹{(campaign.spent / 1000).toFixed(0)}K / ₹{(campaign.budget / 1000).toFixed(0)}K
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          {getActionButton(campaign.status)}
                          <Button variant="ghost" size="sm">Details</Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RealTimeCampaignMonitor;