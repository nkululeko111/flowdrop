import React from 'react';
import { Clock, DollarSign, Users, Leaf } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    { 
      icon: Clock, 
      value: '2.5 hrs', 
      label: 'Average delivery time', 
      subtitle: '75% faster than traditional',
      color: 'text-blue-500'
    },
    { 
      icon: DollarSign, 
      value: '$2.3M', 
      label: 'Earned by community', 
      subtitle: 'Last month alone',
      color: 'text-green-500'
    },
    { 
      icon: Users, 
      value: '45K+', 
      label: 'Active network members', 
      subtitle: 'Growing 25% monthly',
      color: 'text-purple-500'
    },
    { 
      icon: Leaf, 
      value: '68%', 
      label: 'Carbon reduction', 
      subtitle: 'vs traditional delivery',
      color: 'text-teal-500'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Network Impact
          </h2>
          <p className="text-xl text-gray-600">
            Real results from our growing community network
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gray-50 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
              <p className="text-gray-600 text-sm">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;