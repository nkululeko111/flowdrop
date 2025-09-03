import React, { useState, useEffect } from 'react';
import { 
  Package, 
  Users, 
  MapPin, 
  Zap, 
  ArrowRight,
  Globe,
  DollarSign,
  Truck,
  Star,
  Play
} from 'lucide-react';
import NetworkVisualization from './NetworkVisualization';
import StatsSection from './StatsSection';
import FeatureCards from './FeatureCards';

interface LandingPageProps {
  onViewChange: (view: string, type?: 'customer' | 'courier' | 'host') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onViewChange }) => {
  const [animatedText, setAnimatedText] = useState('');
  const fullText = 'Packages move like data, jobs grow like communities.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setAnimatedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-white text-sm font-medium">Revolutionary Delivery Network</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                FlowDrop
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              The Living Delivery Grid & Instant E-Commerce Network
            </p>

            <div className="h-16 flex items-center justify-center mb-12">
              <p className="text-lg text-white/90 font-medium italic">
                "{animatedText}<span className="animate-pulse">|</span>"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onViewChange('dashboard', 'customer')}
                className="group bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Network Visualization Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How the Network Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch packages move through our intelligent delivery mesh in real-time
            </p>
          </div>
          <NetworkVisualization />
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* Feature Cards */}
      <FeatureCards />

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Delivery?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands who are already part of the FlowDrop revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onViewChange('dashboard', 'customer')}
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              Start Ordering
            </button>
            <button 
              onClick={() => onViewChange('dashboard', 'courier')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Become a Courier
            </button>
            <button 
              onClick={() => onViewChange('dashboard', 'host')}
              className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-teal-600 hover:to-green-600 transition-all duration-300"
            >
              Host a Drop Zone
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;