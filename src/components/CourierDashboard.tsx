import React, { useState } from 'react';
import { 
  DollarSign, 
  MapPin, 
  Clock, 
  Star, 
  TrendingUp,
  Package,
  Navigation,
  Award,
  Target,
  Zap
} from 'lucide-react';

const CourierDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('available');

  const availableJobs = [
    {
      id: 'JB001',
      pickup: 'Downtown Hub',
      dropoff: 'Riverside Café',
      distance: '2.3 km',
      reward: 8.50,
      urgency: 'high',
      packages: 3,
      eta: '25 mins',
      rating: 4.8
    },
    {
      id: 'JB002',
      pickup: 'Mall Station',
      dropoff: 'Green Park Drop Zone',
      distance: '1.8 km',
      reward: 6.25,
      urgency: 'medium',
      packages: 2,
      eta: '18 mins',
      rating: 4.9
    },
    {
      id: 'JB003',
      pickup: 'Tech District',
      dropoff: 'University Campus',
      distance: '3.1 km',
      reward: 12.00,
      urgency: 'urgent',
      packages: 1,
      eta: '35 mins',
      rating: 5.0
    }
  ];

  const stats = {
    todayEarnings: 47.25,
    weeklyEarnings: 312.80,
    totalDeliveries: 156,
    rating: 4.85,
    flowPoints: 2340
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-2xl p-6 shadow-lg">
          <DollarSign className="w-8 h-8 mb-3" />
          <div className="text-2xl font-bold mb-1">${stats.todayEarnings}</div>
          <div className="text-green-100 text-sm">Today's Earnings</div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-2xl p-6 shadow-lg">
          <TrendingUp className="w-8 h-8 mb-3" />
          <div className="text-2xl font-bold mb-1">${stats.weeklyEarnings}</div>
          <div className="text-blue-100 text-sm">This Week</div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-6 shadow-lg">
          <Package className="w-8 h-8 mb-3" />
          <div className="text-2xl font-bold mb-1">{stats.totalDeliveries}</div>
          <div className="text-purple-100 text-sm">Total Deliveries</div>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-2xl p-6 shadow-lg">
          <Star className="w-8 h-8 mb-3" />
          <div className="text-2xl font-bold mb-1">{stats.rating}</div>
          <div className="text-yellow-100 text-sm">Average Rating</div>
        </div>
        
        <div className="bg-gradient-to-br from-teal-500 to-green-500 text-white rounded-2xl p-6 shadow-lg">
          <Award className="w-8 h-8 mb-3" />
          <div className="text-2xl font-bold mb-1">{stats.flowPoints}</div>
          <div className="text-teal-100 text-sm">FlowPoints</div>
        </div>
      </div>

      {/* Available Jobs */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Available Jobs</h2>
            <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              {availableJobs.length} jobs nearby
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {availableJobs.map((job) => (
            <div key={job.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">Route {job.id}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(job.urgency)}`}>
                      {job.urgency}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Pickup: {job.pickup}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Navigation className="w-4 h-4" />
                        <span className="text-sm">Drop-off: {job.dropoff}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Package className="w-4 h-4" />
                        <span className="text-sm">{job.packages} packages • {job.distance}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">Estimated: {job.eta}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-600 mb-1">${job.reward}</div>
                  <div className="text-sm text-gray-600">+ FlowPoints</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{job.rating} route rating</span>
                </div>
                
                <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-300">
                  Accept Job
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Weekly Performance</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Deliveries Completed</span>
              <span className="font-bold text-gray-900">23</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">On-Time Rate</span>
              <span className="font-bold text-green-600">96%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Customer Satisfaction</span>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-bold text-gray-900">4.85</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">FlowPoints Status</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-purple-500" />
              <div>
                <div className="font-bold text-gray-900">Gold Courier</div>
                <div className="text-sm text-gray-600">Next: Platinum (500 pts away)</div>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: '78%' }}></div>
            </div>
            
            <div className="text-sm text-gray-600">
              2,340 / 3,000 FlowPoints
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourierDashboard;