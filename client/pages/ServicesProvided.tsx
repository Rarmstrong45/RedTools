import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, BarChart3, TrendingUp, MapPin, File, House, Wrench, Fence, Truck } from "lucide-react";

export default function ServicesProvided() {
  const services = [
    {
      icon: File,
      title: "Fair Value",
      description: "Give better description later.",
      link: "/Property-Tax"
    },
    {
      icon: Truck,
      title: "How's the Grass",
      description: "Advanced algorithmic property valuation using proprietary models and real-time market data for accurate pricing.",
      link: "/property-valuation"
    },
    {
      icon: Wrench,
      title: "RedTools",
      description: "Strategic investment guidance including risk analysis, ROI projections, and portfolio optimization recommendations.",
      link: "/investment-consulting"
    },
    {
      icon: CheckCircle,
      title: "Cash Grab 4",
      description: "Thorough property and market due diligence reporting with comprehensive risk assessment and opportunity identification.",
      link: "/due-diligence-reports"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Current <span className="text-redtools-red">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional real estate intelligence services backed by 40+ years of market experience and cutting-edge analytics
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <service.icon className="h-12 w-12 text-redtools-red mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button
                  className="bg-redtools-red hover:bg-redtools-red-dark text-white rounded-full px-6"
                  onClick={() => window.location.href = service.link}
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose <span className="text-redtools-red">RedTools</span>
            </h2>
            <p className="text-xl text-gray-400">
              Unbiased, data-driven insights you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <div className="text-3xl font-bold text-redtools-red mb-2">40+</div>
                <div className="text-gray-300 text-lg mb-4">Years Experience</div>
                <p className="text-gray-400">
                  Four decades of market expertise and proven track record
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <div className="text-3xl font-bold text-redtools-red mb-2">0</div>
                <div className="text-gray-300 text-lg mb-4">Sponsored Results</div>
                <p className="text-gray-400">
                  Completely unbiased analysis with no sponsored listings
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <div className="text-3xl font-bold text-redtools-red mb-2">100%</div>
                <div className="text-gray-300 text-lg mb-4">Data Driven</div>
                <p className="text-gray-400">
                  Every recommendation backed by comprehensive market data
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-redtools-red to-redtools-red-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
            Connect with our team to learn how RedTools can enhance your real estate decisions
          </p>
          <Button
            size="lg"
            className="bg-white text-redtools-red hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-semibold"
          >
            Contact Us Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
