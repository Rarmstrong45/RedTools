import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-gray-900 border-gray-800 p-8 hover:bg-gray-850 transition-colors">
      <CardContent className="p-0">
        <div className="flex items-center mb-6">
          <div className="bg-redtools-red/20 p-3 rounded-lg mr-4">
            <Icon className="h-8 w-8 text-redtools-red" />
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 text-lg leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
