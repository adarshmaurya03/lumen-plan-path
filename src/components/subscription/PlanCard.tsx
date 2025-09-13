import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Wifi, Zap, Shield } from "lucide-react";

interface PlanCardProps {
  name: string;
  price: number;
  dataQuota: string;
  speed: string;
  features: string[];
  isPopular?: boolean;
  isCurrentPlan?: boolean;
}

const PlanCard = ({ name, price, dataQuota, speed, features, isPopular, isCurrentPlan }: PlanCardProps) => {
  return (
    <Card className={`relative transition-all duration-300 hover:shadow-elegant ${
      isPopular ? "border-primary shadow-glow" : ""
    }`}>
      {isPopular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary">
          Most Popular
        </Badge>
      )}
      
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <CardDescription className="text-muted-foreground">
          Perfect for {name.toLowerCase()} users
        </CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-bold text-primary">${price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
          <div className="flex items-center space-x-2">
            <Wifi className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Data Quota</span>
          </div>
          <span className="font-semibold">{dataQuota}</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Speed</span>
          </div>
          <span className="font-semibold">{speed}</span>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium flex items-center">
            <Shield className="w-4 h-4 mr-2 text-primary" />
            Features included:
          </h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <Check className="w-4 h-4 mr-2 text-success" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter>
        <Button 
          className="w-full" 
          variant={isCurrentPlan ? "secondary" : isPopular ? "hero" : "default"}
          disabled={isCurrentPlan}
        >
          {isCurrentPlan ? "Current Plan" : "Subscribe Now"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlanCard;