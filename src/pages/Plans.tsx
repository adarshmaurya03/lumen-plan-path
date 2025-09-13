import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlanCard from "@/components/subscription/PlanCard";
import { 
  Wifi, 
  Zap, 
  Building, 
  Home,
  CheckCircle,
  Star
} from "lucide-react";

const Plans = () => {
  const [planType, setPlanType] = useState("residential");

  const residentialPlans = [
    {
      name: "Basic Fibernet",
      price: 39,
      dataQuota: "100 GB",
      speed: "50 Mbps",
      features: [
        "24/7 Customer Support",
        "Wi-Fi Router Included",
        "Basic Security Package",
        "Mobile App Access",
        "Email Support"
      ]
    },
    {
      name: "Pro Fibernet",
      price: 79,
      dataQuota: "500 GB", 
      speed: "100 Mbps",
      features: [
        "24/7 Priority Support",
        "Premium Wi-Fi Router",
        "Advanced Security Suite", 
        "Mobile App Access",
        "Phone & Email Support",
        "Free Installation"
      ],
      isPopular: true
    },
    {
      name: "Ultra Fibernet",
      price: 129,
      dataQuota: "Unlimited",
      speed: "200 Mbps",
      features: [
        "24/7 VIP Support",
        "Premium Wi-Fi 6 Router",
        "Enterprise Security",
        "Mobile App Access", 
        "Dedicated Support Line",
        "Free Installation & Setup",
        "Static IP Address"
      ]
    }
  ];

  const businessPlans = [
    {
      name: "Business Starter",
      price: 149,
      dataQuota: "1 TB",
      speed: "300 Mbps",
      features: [
        "Business-grade Support",
        "Enterprise Router",
        "Advanced Firewall",
        "SLA Guarantee 99.9%",
        "Dedicated Account Manager",
        "Professional Installation"
      ]
    },
    {
      name: "Business Pro",
      price: 299,
      dataQuota: "5 TB", 
      speed: "500 Mbps",
      features: [
        "24/7 Business Support",
        "Enterprise Infrastructure",
        "DDoS Protection",
        "SLA Guarantee 99.95%",
        "Priority Dedicated Manager",
        "On-site Technical Support",
        "Backup Internet Line"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: 599,
      dataQuota: "Unlimited",
      speed: "1 Gbps",
      features: [
        "Enterprise-grade Support",
        "Dedicated Infrastructure",
        "Multi-layer Security",
        "SLA Guarantee 99.99%",
        "Executive Account Team",
        "24/7 On-site Support",
        "Redundant Connections",
        "Custom Solutions"
      ]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Industry-leading speeds with fiber-optic technology"
    },
    {
      icon: CheckCircle,
      title: "99.9% Uptime",
      description: "Reliable connection you can count on"
    },
    {
      icon: Star,
      title: "Award Winning",
      description: "Recognized for excellence in customer service"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Choose Your Perfect Plan
        </h1>
        <p className="text-xl text-muted-foreground">
          From basic connectivity to enterprise solutions, we have the right plan for every need
        </p>
      </div>

      {/* Plan Type Selector */}
      <Tabs value={planType} onValueChange={setPlanType} className="space-y-8">
        <div className="flex justify-center">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="residential" className="flex items-center space-x-2">
              <Home className="w-4 h-4" />
              <span>Residential</span>
            </TabsTrigger>
            <TabsTrigger value="business" className="flex items-center space-x-2">
              <Building className="w-4 h-4" />
              <span>Business</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="residential" className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Residential Plans</h2>
            <p className="text-muted-foreground">Perfect for homes and personal use</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {residentialPlans.map((plan, index) => (
              <PlanCard key={index} {...plan} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="business" className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Business Plans</h2>
            <p className="text-muted-foreground">Enterprise-grade solutions for your business</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {businessPlans.map((plan, index) => (
              <PlanCard key={index} {...plan} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Features Section */}
      <div className="bg-accent/30 rounded-2xl p-8 md:p-12">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl font-bold">Why Choose LUMEN?</h2>
          <p className="text-muted-foreground">Experience the difference with our premium service features</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Plan Comparison</CardTitle>
          <CardDescription className="text-center">
            Compare features across all our plans
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Feature</th>
                  <th className="text-center p-4">Basic</th>
                  <th className="text-center p-4">Pro</th>
                  <th className="text-center p-4">Ultra</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4 font-medium">Speed</td>
                  <td className="p-4 text-center">50 Mbps</td>
                  <td className="p-4 text-center">100 Mbps</td>
                  <td className="p-4 text-center">200 Mbps</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Data Quota</td>
                  <td className="p-4 text-center">100 GB</td>
                  <td className="p-4 text-center">500 GB</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Support</td>
                  <td className="p-4 text-center">Email</td>
                  <td className="p-4 text-center">Phone + Email</td>
                  <td className="p-4 text-center">24/7 VIP</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Installation</td>
                  <td className="p-4 text-center">Standard</td>
                  <td className="p-4 text-center">Free</td>
                  <td className="p-4 text-center">Free + Setup</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <div className="text-center space-y-6 bg-gradient-hero text-white rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-xl text-white/90">
          Join thousands of satisfied customers enjoying reliable, high-speed internet
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
            Start Your Subscription
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Plans;