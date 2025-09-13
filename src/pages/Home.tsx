import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  BarChart3, 
  Shield, 
  Zap, 
  Target, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";
import heroImage from "@/assets/hero-subscription.jpg";

const Home = () => {
  const features = [
    {
      icon: Users,
      title: "User Self-Service Portal",
      description: "Seamless subscription management for end users with upgrade, downgrade, and cancellation options."
    },
    {
      icon: BarChart3,
      title: "Admin Analytics Dashboard",
      description: "Comprehensive insights into subscription trends, popular plans, and user engagement metrics."
    },
    {
      icon: Shield,
      title: "Role-Based Access Control",
      description: "Secure authentication and authorization system with distinct admin and user roles."
    },
    {
      icon: Zap,
      title: "Real-time Plan Management",
      description: "Dynamic plan creation, pricing updates, and discount management for administrators."
    },
    {
      icon: Target,
      title: "AI-Powered Recommendations",
      description: "Personalized plan suggestions based on usage patterns and customer behavior analysis."
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Predictive insights for churn prevention and subscription optimization strategies."
    }
  ];

  const benefits = [
    "Increase customer satisfaction with self-service capabilities",
    "Reduce operational costs through automation",
    "Improve revenue with data-driven pricing strategies",
    "Enhanced customer retention through personalized recommendations"
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  <Sparkles className="w-4 h-4 mr-2" />
                  LUMEN Quest 2.0
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Subscription Management
                  <span className="block text-primary-glow">Reimagined</span>
                </h1>
                <p className="text-xl text-white/90 max-w-lg">
                  Empower your customers with seamless subscription management while gaining powerful insights to drive your business forward.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/user">
                    <Users className="w-5 h-5 mr-2" />
                    User Portal
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/admin">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Admin Dashboard
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Subscription Management Dashboard"
                className="rounded-2xl shadow-2xl animate-float"
              />
              <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-sm text-white/80">Active Subscriptions</div>
                <div className="text-2xl font-bold text-white">12,847</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for telecommunications providers who demand excellence in customer experience and business intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Transform Your Subscription Business
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our comprehensive platform delivers measurable results that impact your bottom line.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button asChild variant="hero" size="lg">
                <Link to="/plans">
                  View All Plans
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Customer Satisfaction</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-muted-foreground">Cost Reduction</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <div className="text-muted-foreground">Revenue Increase</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Uptime Guarantee</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-hero text-white text-center p-12">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Revolutionize Your Subscription Management?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of businesses already using LUMEN Quest to optimize their subscription operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/user">Start Free Trial</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/admin">Request Demo</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Home;