// Enhanced Mock data for Campaign Manager Dashboard

export const kpiData = {
  totalCampaigns: 156,
  activeCampaigns: 23,
  totalReach: 2847392,
  totalSpend: 984750,
  avgCTR: 3.2,
  avgConversion: 1.8,
  costPerLead: 245,
  roi: 3.4,
  totalRevenue: 3347500,
  messagesSent: 4892340,
  avgConversionRate: 2.8
};

// Channel options for dropdown
export const channels = [
  { value: "all", label: "All Channels" },
  { value: "sms", label: "SMS" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "email", label: "Email" },
  { value: "push", label: "Push" },
  { value: "rcs", label: "RCS" }
];

// Campaign Calendar Data
export const weekCampaigns = [
  { id: "WC001", name: "Festival Sale", date: "Today", time: "14:30", status: "active" },
  { id: "WC002", name: "Product Launch", date: "Tomorrow", time: "10:00", status: "scheduled" },
  { id: "WC003", name: "Reminder SMS", date: "Wed", time: "16:00", status: "scheduled" }
];

// Engagement Heatmap Data
export const engagementHeatmap = {
  peakHours: [
    { hour: "9 AM", engagement: 78, day: "Mon" },
    { hour: "2 PM", engagement: 85, day: "Tue" },
    { hour: "7 PM", engagement: 92, day: "Wed" },
    { hour: "11 AM", engagement: 76, day: "Thu" },
    { hour: "6 PM", engagement: 88, day: "Fri" },
    { hour: "3 PM", engagement: 71, day: "Sat" },
    { hour: "8 PM", engagement: 95, day: "Sun" }
  ],
  insights: [
    "Sunday 8 PM shows highest engagement (95%)",
    "Weekdays 2-7 PM are optimal for campaigns",
    "Avoid sending before 9 AM on weekdays"
  ]
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

// AI Optimization Data
export const aiOptimizations = [
  {
    id: "OPT001",
    type: "inactive_customers",
    title: "Inactive Customer Management",
    description: "23,456 customers haven't engaged in 90+ days",
    impact: "Save ₹1.2L monthly",
    action: "Create Exclusion List",
    priority: "high"
  },
  {
    id: "OPT002", 
    type: "cost_optimization",
    title: "Channel Cost Optimization",
    description: "WhatsApp shows 34% better ROI than SMS",
    impact: "Increase ROI by 28%",
    action: "Reallocate Budget",
    priority: "medium"
  },
  {
    id: "OPT003",
    type: "timing_optimization", 
    title: "Send Time Optimization",
    description: "Campaigns sent at 8 PM get 45% more engagement",
    impact: "Boost engagement by 45%",
    action: "Schedule Optimizer",
    priority: "high"
  }
];

// Orchestration Analysis Data
export const orchestrationData = {
  fallbackSuccess: 76,
  avgChannelsUsed: 2.3,
  fallbackStrategies: [
    { strategy: "SMS → WhatsApp", successRate: 84, usage: 45 },
    { strategy: "Email → Push", successRate: 72, usage: 32 },
    { strategy: "WhatsApp → SMS", successRate: 78, usage: 28 },
    { strategy: "Push → Email", successRate: 69, usage: 18 }
  ],
  recommendations: [
    "Use SMS as primary fallback for WhatsApp (84% success)",
    "Implement 2-hour delay between fallback attempts",
    "Consider Push notifications for young demographics"
  ]
};

// BSP Performance Data
export const bspPerformance = {
  sms: [
    { name: "Airtel IQ", deliveryRate: 94, cost: 0.12, rating: "excellent", recommended: true },
    { name: "Jio Platform", deliveryRate: 91, cost: 0.14, rating: "good", recommended: false },
    { name: "BSNL", deliveryRate: 88, cost: 0.10, rating: "average", recommended: false }
  ],
  whatsapp: [
    { name: "Gupshup", deliveryRate: 96, cost: 0.25, rating: "excellent", recommended: true },
    { name: "Twilio", deliveryRate: 93, cost: 0.28, rating: "good", recommended: false },
    { name: "MSG91", deliveryRate: 90, cost: 0.22, rating: "good", recommended: false }
  ],
  email: [
    { name: "SendGrid", deliveryRate: 97, cost: 0.05, rating: "excellent", recommended: true },
    { name: "Mailgun", deliveryRate: 95, cost: 0.06, rating: "good", recommended: false }
  ],
  push: [
    { name: "Firebase", deliveryRate: 98, cost: 0.02, rating: "excellent", recommended: true },
    { name: "OneSignal", deliveryRate: 96, cost: 0.03, rating: "good", recommended: false }
  ],
  rcs: [
    { name: "Jio RCS", deliveryRate: 89, cost: 0.18, rating: "good", recommended: true },
    { name: "Airtel RCS", deliveryRate: 85, cost: 0.20, rating: "average", recommended: false }
  ]
};

// Festival Timeline Data
export const festivalTimeline = [
  {
    id: "F001",
    name: "Diwali",
    date: "2024-11-01",
    pastCampaigns: 12,
    pastRevenue: 2450000,
    pastROI: 4.2,
    upcomingIn: 18,
    recommended: "Start 30 days before"
  },
  {
    id: "F002", 
    name: "Christmas",
    date: "2024-12-25",
    pastCampaigns: 8,
    pastRevenue: 1890000,
    pastROI: 3.8,
    upcomingIn: 72,
    recommended: "Start 45 days before"
  },
  {
    id: "F003",
    name: "New Year",
    date: "2025-01-01",
    pastCampaigns: 15,
    pastRevenue: 3200000,
    pastROI: 5.1,
    upcomingIn: 79,
    recommended: "Start 60 days before"
  },
  {
    id: "F004",
    name: "Holi",
    date: "2025-03-14",
    pastCampaigns: 6,
    pastRevenue: 980000,
    pastROI: 2.9,
    upcomingIn: 151,
    recommended: "Start 15 days before"
  }
];

// Enhanced Real-time Campaign Data
export const realTimeCampaigns = [
  {
    id: "RTC001",
    name: "Flash Sale Alert",
    status: "executing",
    progress: 67,
    startTime: "14:30",
    estimatedCompletion: "16:45",
    sent: 89234,
    target: 132000,
    channel: "SMS",
    budget: 45000,
    spent: 28900,
    conversions: 1234,
    revenue: 345600
  },
  {
    id: "RTC002",
    name: "Weekend Offer",
    status: "scheduled", 
    progress: 0,
    startTime: "18:00",
    estimatedCompletion: "20:30",
    sent: 0,
    target: 87500,
    channel: "WhatsApp",
    budget: 67000,
    spent: 0,
    conversions: 0,
    revenue: 0
  },
  {
    id: "RTC003",
    name: "Service Reminder",
    status: "paused",
    progress: 23,
    startTime: "09:00",
    estimatedCompletion: "11:30",
    sent: 12450,
    target: 54000,
    channel: "Email",
    budget: 23000,
    spent: 8900,
    conversions: 89,
    revenue: 25600
  },
  {
    id: "RTC004",
    name: "Product Launch",
    status: "failed",
    progress: 12,
    startTime: "12:00",
    estimatedCompletion: "14:00", 
    sent: 3400,
    target: 28000,
    channel: "Push",
    budget: 15000,
    spent: 2300,
    conversions: 12,
    revenue: 1200
  },
  {
    id: "RTC005",
    name: "Festival Countdown",
    status: "scheduled",
    progress: 0,
    startTime: "Tomorrow 10:00",
    estimatedCompletion: "Tomorrow 12:00",
    sent: 0,
    target: 156000,
    channel: "RCS",
    budget: 89000,
    spent: 0,
    conversions: 0,
    revenue: 0
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