import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, TrendingUp, MapPin, Users, CheckCircle, ArrowRight, Home, Target, PieChart, Menu } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://cdn.builder.io/api/v1/assets/64496b1e452044d89561b3b5a5c1ff83/redtools-logo-257438?format=webp&width=800" 
                alt="RedTools Logo" 
                className="h-20 w-auto brightness-0 invert"
              />
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#analytics" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Analytics</a>
              <a href="#insights" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Insights</a>
              <a href="#reports" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Reports</a>
              <span className="text-gray-500">|</span>
              <Button variant="ghost" className="text-white hover:bg-gray-800 border border-gray-700 rounded-full px-6">
                Coming soon
              </Button>
              <Button className="bg-redtools-red hover:bg-redtools-red-dark text-white rounded-full px-6">
                Coming soon
              </Button>
            </div>
            <div className="lg:hidden">
              <Menu className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://cdn.builder.io/o/assets%2F64496b1e452044d89561b3b5a5c1ff83%2F9d069bfdece84749a0c47fc92a122dc2?alt=media&token=3ef0f015-e117-4b62-8381-f8e67dae45da&apiKey=64496b1e452044d89561b3b5a5c1ff83"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-black/50 to-redtools-red/30"></div>
          {/* Geometric pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 border border-redtools-red/30 rotate-12"></div>
            <div className="absolute top-40 right-20 w-24 h-24 border border-redtools-red/20 rotate-45"></div>
            <div className="absolute bottom-40 left-1/4 w-20 h-20 border border-redtools-red/25 -rotate-12"></div>
            <div className="absolute bottom-20 right-1/3 w-28 h-28 border border-redtools-red/15 rotate-30"></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8">
            Find Clarity
            <br />
            <span className="text-redtools-red">in the Chaos</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Turn real estate market noise into actionable insights with data-driven intelligence.
          </p>
          <Button
            size="lg"
            className="bg-redtools-red hover:bg-redtools-red-dark text-white text-lg px-12 py-4 rounded-full font-semibold"
          >
            Coming soon
          </Button>
        </div>
      </section>

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
              40+ years of market experience distilled into powerful analytics tools
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <Card className="bg-gray-900 border-gray-800 p-8 hover:bg-gray-850 transition-colors">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="bg-redtools-red/20 p-3 rounded-lg mr-4">
                    <MapPin className="h-8 w-8 text-redtools-red" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Neighborhood Analytics</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Zip-code level insights with granular market data that reveals hidden opportunities
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-8 hover:bg-gray-850 transition-colors">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="bg-redtools-red/20 p-3 rounded-lg mr-4">
                    <BarChart3 className="h-8 w-8 text-redtools-red" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Proprietary Modeling</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Advanced algorithms analyzing vacancy rates, debt loads, and income velocity
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-8 hover:bg-gray-850 transition-colors">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="bg-redtools-red/20 p-3 rounded-lg mr-4">
                    <TrendingUp className="h-8 w-8 text-redtools-red" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Investor Intelligence</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Airbnb viability scoring, risk analysis, and entertainment district mapping
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-8 hover:bg-gray-850 transition-colors">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="bg-redtools-red/20 p-3 rounded-lg mr-4">
                    <Users className="h-8 w-8 text-redtools-red" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Lifestyle Matching</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Perfect location discovery for buyers, renters, and remote workers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="insights" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-redtools-red mb-2">40+</div>
              <div className="text-gray-400 text-lg">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-redtools-red mb-2">1000s</div>
              <div className="text-gray-400 text-lg">Data Points</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-redtools-red mb-2">0</div>
              <div className="text-gray-400 text-lg">Sponsored Results</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-redtools-red mb-2">100%</div>
              <div className="text-gray-400 text-lg">Data Driven</div>
            </div>
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
            <div className="text-center">
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <CheckCircle className="h-12 w-12 text-redtools-red mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">No Sponsored Cities</h3>
                <p className="text-gray-400">
                  Unbiased results based purely on market data and analytics
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <CheckCircle className="h-12 w-12 text-redtools-red mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Real-Time Data</h3>
                <p className="text-gray-400">
                  No outdated census information - live market intelligence
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <CheckCircle className="h-12 w-12 text-redtools-red mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Personalized Insights</h3>
                <p className="text-gray-400">
                  Custom analytics that adapt to your specific investment needs
                </p>
              </div>
            </div>
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

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img 
                src="https://cdn.builder.io/api/v1/assets/64496b1e452044d89561b3b5a5c1ff83/redtools-logo-257438?format=webp&width=800" 
                alt="RedTools Logo" 
                className="h-20 w-auto brightness-0 invert mb-6"
              />
              <p className="text-gray-400 max-w-md text-lg">
                Real estate intelligence platform turning market chaos into 
                high-confidence decision-making data.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-6 text-lg">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-6 text-lg">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2024 RedTools. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
