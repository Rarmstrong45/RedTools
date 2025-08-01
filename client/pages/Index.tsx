import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, MapPin, Users, CheckCircle, ArrowRight, Home, Target, PieChart } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/assets/64496b1e452044d89561b3b5a5c1ff83/redtools-logo-257438?format=webp&width=800"
                alt="RedTools Logo"
                className="h-20 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-redtools-red transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-redtools-red transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-redtools-red transition-colors">Contact</a>
              <Button className="bg-redtools-red hover:bg-redtools-red-dark text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-6 border-redtools-red text-redtools-red">
              Real Estate Intelligence Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find clarity in the{" "}
              <span className="text-redtools-red">chaos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Real estate markets are noisy - we help you tune in to what actually matters. 
              We distill thousands of data points into actionable insights for buyers, investors, and agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-redtools-red hover:bg-redtools-red-dark text-white px-8 py-3">
                Start Your Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 hover:border-redtools-red hover:text-redtools-red px-8 py-3">
                View Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              <strong>No fluff. No hype. Just analytics.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Turn market chaos into high-confidence decisions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built by a team with 40+ years of experience in real estate and investment markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-redtools-red/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-redtools-red" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Neighborhood Analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  Zip-code level insights with granular market data
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-redtools-red/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-redtools-red" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Proprietary Modeling
                </h3>
                <p className="text-gray-600 text-sm">
                  Vacancy, community debt load, and income velocity analysis
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-redtools-red/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-redtools-red" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Investor Reports
                </h3>
                <p className="text-gray-600 text-sm">
                  Airbnb viability, risk scoring, and entertainment metrics
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-redtools-red/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-redtools-red" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Lifestyle Matching
                </h3>
                <p className="text-gray-600 text-sm">
                  Perfect for relocating buyers, renters, and remote workers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How we are <span className="text-redtools-red">different</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're buying a home, scaling a portfolio or advising clients, 
                we help you know where, when and why to move. Ensure you have the data 
                on your side for your next big decision.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-redtools-red mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">No sponsored cities</h3>
                    <p className="text-gray-600 text-sm">Unbiased results based purely on data</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-redtools-red mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">No outdated census-only data</h3>
                    <p className="text-gray-600 text-sm">Real-time market intelligence</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-redtools-red mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">No recycled "best places" lists</h3>
                    <p className="text-gray-600 text-sm">Customized insights that react to your specific needs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-redtools-red/10 to-redtools-red/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Home className="h-8 w-8 text-redtools-red mb-2" />
                    <div className="text-2xl font-bold text-gray-900">40+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Target className="h-8 w-8 text-redtools-red mb-2" />
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Data Driven</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <PieChart className="h-8 w-8 text-redtools-red mb-2" />
                    <div className="text-2xl font-bold text-gray-900">1000s</div>
                    <div className="text-sm text-gray-600">Data Points</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <BarChart3 className="h-8 w-8 text-redtools-red mb-2" />
                    <div className="text-2xl font-bold text-gray-900">Real-time</div>
                    <div className="text-sm text-gray-600">Insights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-redtools-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to make your next move with confidence?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Just clean, current, real estate data - all overlaid with our proprietary 
            algorithms to give you the ultimate scores, ranks and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-redtools-red hover:bg-gray-100 px-8 py-3">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-redtools-red px-8 py-3">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img 
                src="https://cdn.builder.io/api/v1/assets/64496b1e452044d89561b3b5a5c1ff83/redtools-logo-257438?format=webp&width=800" 
                alt="RedTools Logo" 
                className="h-8 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 max-w-md">
                Real estate intelligence platform turning market chaos into 
                high-confidence decision-making data.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RedTools. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
