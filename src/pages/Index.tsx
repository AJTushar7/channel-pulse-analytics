import EnhancedDashboardHeader from "@/components/dashboard/EnhancedDashboardHeader";
import KPIOverview from "@/components/dashboard/KPIOverview";
import CompactChannelPerformance from "@/components/dashboard/CompactChannelPerformance";
import EngagementHeatmap from "@/components/dashboard/EngagementHeatmap";
import RealTimeCampaignMonitor from "@/components/dashboard/RealTimeCampaignMonitor";
import AIOptimizationPanel from "@/components/dashboard/AIOptimizationPanel";
import OrchestrationAnalysis from "@/components/dashboard/OrchestrationAnalysis";
import BSPPerformanceComparison from "@/components/dashboard/BSPPerformanceComparison";
import FestivalTimeline from "@/components/dashboard/FestivalTimeline";
import BudgetPerformanceAnalysis from "@/components/dashboard/BudgetPerformanceAnalysis";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Enhanced Header with Channel Selector & Campaign Calendar */}
      <EnhancedDashboardHeader />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Row 1: KPI Overview */}
        <section>
          <KPIOverview />
        </section>

        {/* Row 2: Channel Performance + Engagement Heatmap */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <CompactChannelPerformance />
          <EngagementHeatmap />
        </section>

        {/* Row 3: Real-time Campaign Monitoring */}
        <section>
          <RealTimeCampaignMonitor />
        </section>

        {/* Row 4: AI Optimization & Enhancement */}
        <section>
          <AIOptimizationPanel />
        </section>

        {/* Row 5: Orchestration Analysis */}
        <section>
          <OrchestrationAnalysis />
        </section>

        {/* Row 6: BSP Performance Comparison */}
        <section>
          <BSPPerformanceComparison />
        </section>

        {/* Row 7: Festival Timeline & Campaign Planning */}
        <section>
          <FestivalTimeline />
        </section>

        {/* Row 8: Budget vs Performance Analysis */}
        <section>
          <BudgetPerformanceAnalysis />
        </section>

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