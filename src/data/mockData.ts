// Mock data for Campaign Manager Dashboard

export const kpiData = {
  totalCampaigns: 156,
  activeCampaigns: 23,
  totalReach: 2847392,
  totalSpend: 984750,
  avgCTR: 3.2,
  avgConversion: 1.8,
  costPerLead: 245,
  roi: 3.4
};

export const channelPerformance = [
  {
    channel: "SMS",
    campaigns: 45,
    reach: 892340,
    delivered: 890120,
    opened: 534072,
    clicked: 28561,
    converted: 15709,
    spend: 178940,
    ctr: 5.3,
    conversionRate: 2.9,
    costPerLead: 189,
    bsp: "Airtel IQ"
  },
  {
    channel: "WhatsApp",
    campaigns: 38,
    reach: 456789,
    delivered: 453201,
    opened: 317241,
    clicked: 22608,
    converted: 11304,
    spend: 234560,
    ctr: 7.1,
    conversionRate: 3.6,
    costPerLead: 207,
    bsp: "Gupshup"
  },
  {
    channel: "Email",
    campaigns: 42,
    reach: 987654,
    delivered: 975432,
    opened: 292629,
    clicked: 17564,
    converted: 8782,
    spend: 156780,
    ctr: 6.0,
    conversionRate: 3.0,
    costPerLead: 178,
    bsp: "SendGrid"
  },
  {
    channel: "Push",
    campaigns: 31,
    reach: 510923,
    delivered: 498234,
    opened: 149470,
    clicked: 11954,
    converted: 5977,
    spend: 89456,
    ctr: 8.0,
    conversionRate: 4.0,
    costPerLead: 149,
    bsp: "Firebase"
  }
];

export const campaignList = [
  {
    id: "CM001",
    name: "Diwali Festival Offer",
    type: "Promotional",
    channels: ["SMS", "WhatsApp", "Email"],
    status: "Active",
    startDate: "2024-10-15",
    endDate: "2024-10-25",
    reach: 145000,
    budget: 89000,
    spent: 67500,
    conversions: 2890,
    roi: 4.2
  },
  {
    id: "CM002", 
    name: "New Model Launch",
    type: "Marketing",
    channels: ["Email", "Push"],
    status: "Scheduled",
    startDate: "2024-10-28",
    endDate: "2024-11-10",
    reach: 78000,
    budget: 125000,
    spent: 0,
    conversions: 0,
    roi: 0
  },
  {
    id: "CM003",
    name: "Service Reminder",
    type: "Transactional",
    channels: ["SMS", "WhatsApp"],
    status: "Completed",
    startDate: "2024-10-01",
    endDate: "2024-10-07",
    reach: 234000,
    budget: 45000,
    spent: 43200,
    conversions: 12400,
    roi: 6.8
  }
];

export const monthlyTrends = [
  { month: "Jun", campaigns: 12, reach: 890000, spend: 156000, conversions: 4560, roi: 2.8 },
  { month: "Jul", campaigns: 18, reach: 1200000, spend: 234000, conversions: 7890, roi: 3.2 },
  { month: "Aug", campaigns: 22, reach: 1450000, spend: 289000, conversions: 9234, roi: 3.6 },
  { month: "Sep", campaigns: 28, reach: 1890000, spend: 367000, conversions: 12890, roi: 4.1 },
  { month: "Oct", campaigns: 35, reach: 2340000, spend: 456000, conversions: 18940, roi: 4.8 }
];

export const customerSegments = [
  { segment: "New Customers", count: 89234, engagement: 78, conversionRate: 4.2 },
  { segment: "Existing Customers", count: 567890, engagement: 65, conversionRate: 2.8 },
  { segment: "VIP Customers", count: 12456, engagement: 89, conversionRate: 8.9 },
  { segment: "Churned Customers", count: 45678, engagement: 23, conversionRate: 0.8 }
];

export const liveCampaigns = [
  {
    id: "LC001",
    name: "Flash Sale Alert",
    status: "executing",
    progress: 67,
    startTime: "14:30",
    estimatedCompletion: "16:45",
    sent: 89234,
    target: 132000,
    channel: "SMS"
  },
  {
    id: "LC002",
    name: "Weekend Offer",
    status: "scheduled",
    progress: 0,
    startTime: "18:00",
    estimatedCompletion: "20:30",
    sent: 0,
    target: 87500,
    channel: "WhatsApp"
  }
];

export const aiInsights = [
  {
    type: "optimization",
    title: "Channel Performance Alert",
    message: "WhatsApp is outperforming SMS by 34% in conversion rates. Consider reallocating budget.",
    impact: "high",
    suggestion: "Increase WhatsApp budget by ₹50,000 for next campaign"
  },
  {
    type: "trend",
    title: "Seasonal Pattern Detected",
    message: "Festival campaigns show 2.3x higher engagement. Plan ahead for upcoming festivals.",
    impact: "medium",
    suggestion: "Schedule campaigns 1 week before major festivals"
  },
  {
    type: "cost",
    title: "Cost Optimization Opportunity",
    message: "SMS costs can be reduced by 15% by switching to bulk pricing tier.",
    impact: "medium",
    suggestion: "Contact BSP for enterprise pricing discussion"
  }
];

export const budgetBreakdown = {
  allocated: 1250000,
  spent: 847500,
  remaining: 402500,
  channels: [
    { channel: "SMS", allocated: 350000, spent: 178940, efficiency: 89 },
    { channel: "WhatsApp", allocated: 400000, spent: 234560, efficiency: 94 },
    { channel: "Email", allocated: 250000, spent: 156780, efficiency: 91 },
    { channel: "Push", allocated: 150000, spent: 89456, efficiency: 87 },
    { channel: "RCS", allocated: 100000, spent: 187764, efficiency: 82 }
  ]
};