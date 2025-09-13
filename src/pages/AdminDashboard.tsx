import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import MetricCard from "@/components/dashboard/MetricCard";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Activity,
  Plus,
  Edit,
  Trash2,
  BarChart3,
  PieChart,
  Target,
  AlertTriangle
} from "lucide-react";
import analyticsIcon from "@/assets/analytics-icon.jpg";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const metrics = [
    {
      title: "Total Subscribers",
      value: "12,847",
      change: "+12.5%",
      trend: "up" as const,
      icon: Users
    },
    {
      title: "Monthly Revenue",
      value: "$847,239",
      change: "+8.2%",
      trend: "up" as const,
      icon: DollarSign
    },
    {
      title: "Churn Rate",
      value: "2.1%",
      change: "-0.5%",
      trend: "down" as const,
      icon: TrendingUp
    },
    {
      title: "Active Plans",
      value: "24",
      change: "+3",
      trend: "up" as const,
      icon: Activity
    }
  ];

  const topPlans = [
    { name: "Pro Fibernet", subscribers: 4532, revenue: "$358,528", growth: "+15%" },
    { name: "Ultra Fibernet", subscribers: 3241, revenue: "$417,893", growth: "+22%" },
    { name: "Basic Fibernet", subscribers: 2874, revenue: "$112,086", growth: "+8%" },
    { name: "Enterprise", subscribers: 1524, revenue: "$243,840", growth: "+31%" },
    { name: "Starter", subscribers: 676, revenue: "$20,280", growth: "+5%" }
  ];

  const managedPlans = [
    {
      id: 1,
      name: "Pro Fibernet",
      price: 79,
      dataQuota: "500 GB",
      speed: "100 Mbps",
      subscribers: 4532,
      status: "active"
    },
    {
      id: 2,
      name: "Ultra Fibernet", 
      price: 129,
      dataQuota: "Unlimited",
      speed: "200 Mbps",
      subscribers: 3241,
      status: "active"
    },
    {
      id: 3,
      name: "Basic Fibernet",
      price: 39,
      dataQuota: "100 GB", 
      speed: "50 Mbps",
      subscribers: 2874,
      status: "active"
    }
  ];

  const recentActivities = [
    { action: "New plan created: Enterprise Pro", user: "Admin", time: "2 hours ago", type: "create" },
    { action: "Plan updated: Pro Fibernet pricing", user: "Admin", time: "5 hours ago", type: "update" },
    { action: "Discount applied: Summer Sale 20%", user: "Marketing", time: "1 day ago", type: "discount" },
    { action: "Plan deactivated: Legacy Copper", user: "Admin", time: "2 days ago", type: "delete" }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage subscriptions, plans, and analyze performance</p>
        </div>
        <div className="flex items-center space-x-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="hero">
                <Plus className="w-4 h-4 mr-2" />
                Create Plan
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Plan</DialogTitle>
                <DialogDescription>Add a new subscription plan to your catalog</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="planName">Plan Name</Label>
                  <Input id="planName" placeholder="e.g., Premium Fibernet" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price ($)</Label>
                    <Input id="price" type="number" placeholder="99" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="speed">Speed</Label>
                    <Input id="speed" placeholder="e.g., 150 Mbps" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quota">Data Quota</Label>
                  <Input id="quota" placeholder="e.g., 1 TB" />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button variant="hero">Create Plan</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="plans">Plan Management</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          {/* Charts and Analytics */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                  Revenue Trends
                </CardTitle>
                <CardDescription>Monthly revenue over the past year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center">
                  <img 
                    src={analyticsIcon} 
                    alt="Analytics" 
                    className="w-24 h-24 opacity-50"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="w-5 h-5 mr-2 text-primary" />
                  Plan Distribution
                </CardTitle>
                <CardDescription>Subscriber distribution across plans</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center">
                  <img 
                    src={analyticsIcon} 
                    alt="Plan Distribution" 
                    className="w-24 h-24 opacity-50"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Performing Plans */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-primary" />
                Top Performing Plans
              </CardTitle>
              <CardDescription>Plans with highest subscriber growth and revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPlans.map((plan, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-accent/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium">{plan.name}</div>
                        <div className="text-sm text-muted-foreground">{plan.subscribers} subscribers</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{plan.revenue}</div>
                      <Badge variant="outline" className="text-success border-success">
                        {plan.growth}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Latest administrative actions and changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent/30 transition-colors">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'create' ? 'bg-success' :
                      activity.type === 'update' ? 'bg-primary' :
                      activity.type === 'discount' ? 'bg-warning' : 'bg-destructive'
                    }`} />
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">by {activity.user} • {activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plans" className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Plan Management</h2>
              <p className="text-muted-foreground">Create, edit, and manage subscription plans</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="hero">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Plan
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Plan</DialogTitle>
                  <DialogDescription>Add a new subscription plan to your catalog</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="planName">Plan Name</Label>
                    <Input id="planName" placeholder="e.g., Premium Fibernet" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Price ($)</Label>
                      <Input id="price" type="number" placeholder="99" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="speed">Speed</Label>
                      <Input id="speed" placeholder="e.g., 150 Mbps" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quota">Data Quota</Label>
                    <Input id="quota" placeholder="e.g., 1 TB" />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline">Cancel</Button>
                    <Button variant="hero">Create Plan</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-6">
            {managedPlans.map((plan) => (
              <Card key={plan.id} className="transition-all duration-300 hover:shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <Badge variant="outline" className="text-success border-success">
                          {plan.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-4 gap-6 text-sm">
                        <div>
                          <div className="text-muted-foreground">Price</div>
                          <div className="font-semibold">${plan.price}/month</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Data Quota</div>
                          <div className="font-semibold">{plan.dataQuota}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Speed</div>
                          <div className="font-semibold">{plan.speed}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Subscribers</div>
                          <div className="font-semibold">{plan.subscribers.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Advanced Analytics</h2>
            <p className="text-muted-foreground">Comprehensive insights and performance metrics</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="h-96">
              <CardHeader>
                <CardTitle>Subscription Trends</CardTitle>
                <CardDescription>Monthly subscription growth and churn analysis</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-64">
                <div className="text-center text-muted-foreground">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <p>Advanced analytics charts would be displayed here</p>
                </div>
              </CardContent>
            </Card>

            <Card className="h-96">
              <CardHeader>
                <CardTitle>Revenue Analytics</CardTitle>
                <CardDescription>Revenue breakdown and forecasting</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-64">
                <div className="text-center text-muted-foreground">
                  <TrendingUp className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <p>Revenue analytics dashboard would be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage subscribers and their accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Users className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <p>User management interface would be displayed here</p>
                  <p className="text-sm">Search, filter, and manage subscriber accounts</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;