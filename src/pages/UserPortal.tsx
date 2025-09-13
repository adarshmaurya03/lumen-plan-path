import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlanCard from "@/components/subscription/PlanCard";
import { 
  User, 
  Wifi, 
  Calendar, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
  X
} from "lucide-react";

const UserPortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const currentPlan = {
    name: "Pro Fibernet",
    price: 79,
    dataQuota: "500 GB",
    speed: "100 Mbps",
    usage: 65,
    daysRemaining: 12,
    autoRenew: true
  };

  const availablePlans = [
    {
      name: "Basic Fibernet",
      price: 39,
      dataQuota: "100 GB",
      speed: "50 Mbps",
      features: ["24/7 Support", "Wi-Fi Router", "Basic Security"],
      isCurrentPlan: false
    },
    {
      name: "Pro Fibernet",
      price: 79,
      dataQuota: "500 GB",
      speed: "100 Mbps",
      features: ["24/7 Support", "Wi-Fi Router", "Advanced Security", "Priority Support"],
      isCurrentPlan: true,
      isPopular: true
    },
    {
      name: "Ultra Fibernet",
      price: 129,
      dataQuota: "Unlimited",
      speed: "200 Mbps",
      features: ["24/7 Support", "Premium Wi-Fi Router", "Enterprise Security", "Dedicated Support", "Static IP"],
      isCurrentPlan: false
    }
  ];

  const recommendations = [
    {
      type: "upgrade",
      title: "Upgrade to Ultra Fibernet",
      description: "Based on your usage patterns, you might benefit from unlimited data",
      savings: "Save $20/month with annual billing"
    },
    {
      type: "optimization",
      title: "Usage Optimization",
      description: "You're using 65% of your quota. Consider our Smart Data feature",
      savings: "Potential 15% data savings"
    }
  ];

  const recentActivities = [
    { date: "2024-01-15", action: "Monthly usage reset", type: "info" },
    { date: "2024-01-10", action: "Payment processed - $79.00", type: "success" },
    { date: "2024-01-05", action: "Speed boost activated", type: "upgrade" },
    { date: "2023-12-28", action: "Plan renewed for 1 month", type: "info" }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Sarah</h1>
          <p className="text-muted-foreground">Manage your subscriptions and track usage</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-success border-success">
            <CheckCircle className="w-4 h-4 mr-1" />
            Active
          </Badge>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="plans">Browse Plans</TabsTrigger>
          <TabsTrigger value="usage">Usage & Analytics</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          {/* Current Plan Overview */}
          <Card className="bg-gradient-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Current Plan: {currentPlan.name}</CardTitle>
                  <CardDescription>Active subscription with auto-renewal</CardDescription>
                </div>
                <Badge className="bg-gradient-primary">
                  ${currentPlan.price}/month
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Data Usage</span>
                    <span className="text-sm text-muted-foreground">{currentPlan.usage}%</span>
                  </div>
                  <Progress value={currentPlan.usage} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {Math.round((currentPlan.usage / 100) * 500)} GB of {currentPlan.dataQuota} used
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Wifi className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-medium">{currentPlan.speed}</div>
                    <div className="text-sm text-muted-foreground">Current Speed</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Calendar className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-medium">{currentPlan.daysRemaining} days</div>
                    <div className="text-sm text-muted-foreground">Until renewal</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="sm">
                  <ArrowUpRight className="w-4 h-4 mr-2" />
                  Upgrade Plan
                </Button>
                <Button variant="outline" size="sm">
                  <ArrowDownRight className="w-4 h-4 mr-2" />
                  Downgrade Plan
                </Button>
                <Button variant="destructive" size="sm">
                  <X className="w-4 h-4 mr-2" />
                  Cancel Subscription
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <div className="grid md:grid-cols-2 gap-6">
            {recommendations.map((rec, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg">{rec.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">{rec.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-success">{rec.savings}</Badge>
                    <Button variant="outline" size="sm">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest subscription activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent/30 transition-colors">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'success' ? 'bg-success' :
                      activity.type === 'upgrade' ? 'bg-primary' : 'bg-muted-foreground'
                    }`} />
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plans" className="space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Choose Your Perfect Plan</h2>
            <p className="text-muted-foreground">Upgrade, downgrade, or switch plans anytime</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {availablePlans.map((plan, index) => (
              <PlanCard key={index} {...plan} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="usage" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Usage Analytics</CardTitle>
              <CardDescription>Track your data consumption and patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <p>Usage analytics dashboard would be displayed here</p>
                  <p className="text-sm">Charts, graphs, and detailed consumption data</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your profile and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <User className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <p>Account management interface would be displayed here</p>
                  <p className="text-sm">Profile settings, billing info, and preferences</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserPortal;