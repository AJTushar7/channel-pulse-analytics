import DashboardHeader from "@/components/dashboard/DashboardHeader";
import KPIOverview from "@/components/dashboard/KPIOverview";
import ChannelPerformance from "@/components/dashboard/ChannelPerformance";
import CampaignAnalytics from "@/components/dashboard/CampaignAnalytics";
import BudgetDashboard from "@/components/dashboard/BudgetDashboard";
import LiveCampaignMonitor from "@/components/dashboard/LiveCampaignMonitor";
import AIInsightsPanel from "@/components/dashboard/AIInsightsPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        {/* KPI Overview Section */}
        <section className="mb-12">
          <KPIOverview />
        </section>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mb-8">
          {/* Left Column - Main Analytics */}
          <div className="xl:col-span-3 space-y-8">
            <ChannelPerformance />
            <CampaignAnalytics />
            <BudgetDashboard />
          </div>
          
          {/* Right Column - Live Monitoring & AI Insights */}
          <div className="xl:col-span-1 space-y-8">
            <LiveCampaignMonitor />
            <AIInsightsPanel />
          </div>
        </div>

        {/* Footer Section */}
        <footer className="mt-16 py-8 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleString()} • Data refreshed every 5 minutes
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>System Status: ✅ Operational</span>
              <span>API Latency: 120ms</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;