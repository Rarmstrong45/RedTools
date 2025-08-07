import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  BarChart3,
  TrendingUp,
  MapPin,
  Users,
  Home,
  Target,
  PieChart,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";

export default function Index() {
  const featureData = [
    {
      icon: MapPin,
      title: "Neighborhood Analytics",
      description:
        "Zip-code level insights with granular market data that reveals hidden opportunities",
    },
    {
      icon: BarChart3,
      title: "Proprietary Modeling",
      description:
        "Advanced algorithms analyzing vacancy rates, debt loads, and income velocity",
    },
    {
      icon: TrendingUp,
      title: "Investor Intelligence",
      description:
        "Airbnb viability scoring, risk analysis, and entertainment district mapping",
    },
    {
      icon: Users,
      title: "Lifestyle Matching",
      description:
        "Perfect location discovery for buyers, renters, and remote workers",
    },
  ];

  const statsData = [
    { value: "40+", label: "Years Experience" },
    { value: "1000s", label: "Data Points" },
    { value: "0", label: "Sponsored Results" },
    { value: "100%", label: "Data Driven" },
  ];

  const differentiationData = [
    {
      title: "No Sponsored Cities",
      description: "Unbiased results based purely on market data and analytics",
    },
    {
      title: "Real-Time Data",
      description: "No outdated census information - live market intelligence",
    },
    {
      title: "Personalized Insights",
      description:
        "Custom analytics that adapt to your specific investment needs",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />

      {/* Features Section */}
      <section id="analytics" className="py-32 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Real estate intelligence,
              <br />
              <span className="text-redtools-red">simplified</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              40+ years of market experience distilled into powerful analytics
              tools
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {featureData.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="insights" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-redtools-red mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section id="reports" className="py-32 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              How we're <span className="text-redtools-red">different</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiationData.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                  <CheckCircle className="h-12 w-12 text-redtools-red mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-redtools-red to-redtools-red-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to make confident
            <br />
            real estate decisions?
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
            Join investors and agents who trust RedTools for market intelligence
          </p>
          <Button
            size="lg"
            className="bg-white text-redtools-red hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-semibold"
          >
            Coming soon
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
