import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/assets/64496b1e452044d89561b3b5a5c1ff83/redtools-logo-257438?format=webp&width=800"
              alt="RedTools Logo"
              className="h-20 w-auto brightness-0 invert"
            />
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#analytics"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Analytics
            </a>
            <a
              href="#insights"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Insights
            </a>
            <a
              href="#reports"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Reports
            </a>
            <a
              href="/Services-Provided"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Services
            </a>
            <span className="text-gray-500">|</span>
            <Button
              variant="ghost"
              className="text-white hover:bg-gray-800 border border-gray-700 rounded-full px-6"
            >
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
  );
}
