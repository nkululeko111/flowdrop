import React from 'react';
import { 
  Zap, 
  Shield, 
  Globe, 
  Smartphone, 
  Brain, 
  Recycle,
  TrendingUp,
  Users
} from 'lucide-react';

const FeatureCards: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Routing',
      description: 'Smart algorithms find the fastest path through our community network, optimizing for speed and cost.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Instant Delivery',
      description: 'Receive online orders within hours, not days. Our network makes same-day delivery the new standard.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Community Jobs',
      description: 'Create flexible earning opportunities for neighbors as couriers and Drop Zone hosts.',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Shield,
      title: 'Secure & Insured',
      description: 'Every package is tracked, verified, and insured at each hop. Advanced security at every step.',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Globe,
      title: 'E-Commerce Ready',
      description: 'Seamlessly integrates with major platforms like Shopify, Amazon, and more via our API.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Recycle,
      title: 'Sustainable',
      description: 'Reduce carbon footprint by 68% compared to traditional delivery through optimized routing.',
      gradient: 'from-green-400 to-blue-500'
    },
    {
      icon: Smartphone,
      title: 'Real-Time Tracking',
      description: 'Live GPS tracking, photo confirmations, and instant notifications for complete transparency.',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Dynamic Pricing',
      description: 'AI adjusts rewards based on urgency and demand, ensuring packages always find their way.',
      gradient: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technology meets community power to reinvent delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden relative"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;