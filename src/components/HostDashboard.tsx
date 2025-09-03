import React, { useState } from 'react';
import { 
  Home, 
  DollarSign, 
  Package, 
  Users, 
  TrendingUp,
  MapPin,
  Clock,
  Star,
  Settings,
  PlusCircle,
  Wifi
} from 'lucide-react';

const HostDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const dropZoneStats = {
    monthlyEarnings: 584.30,
    packagesHandled: 127,
    averageRating: 4.92,
    efficiency: 98,
    activeHours: 16
  };

  const currentPackages = [
    {
      id: 'PKG001',
      from: 'TechMart',
      to: 'Customer #4452',
      arrival: '2 mins ago',
      nextPickup: 'In 15 mins',
      courier: 'Alex R.',
      value: 3.25,
      priority: 'high'
    },
    {
      id: 'PKG002',
      from: 'BookStore',
      to: 'Customer #7891',
      arrival: '1 hour ago',
      nextPickup: 'In 30 mins',
      courier: 'Maria S.',
      value: 2.75,
      priority: 'normal'
    },
    {
      id: 'PKG003',
      from: 'FashionHub',
      to: 'Customer #2334',
      arrival: '5 mins ago',
      nextPickup: 'Pending courier',
      courier: null,
      value: 4.50,
      priority: 'urgent'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-2xl p-6 shadow-lg">
          <DollarSign className="w-8 h-8 mb-3" />
          <div className="text-2xl font-bold mb-1">${dropZoneStats.monthlyEarnings}</div>
          <div className="text-green-100 text-sm">Monthly Earnings</div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-2xl p-6 shadow-lg">
          <Package className="w-8 h-8 mb-3" />
          <div className="text-2xl font-bold mb-1">{dropZoneStats.packagesHandled}</div>
          <div className="text-blue-100 text-sm">Packages This Month</div>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-2xl p-6 shadow-lg">
          <Star className="w-8 h-8 mb-3" />
          <div className="text-2xl font-bold mb-1">{dropZoneStats.averageRating}</div>
          <div className="text-yellow-100 text-sm">Average Rating</div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-6 shadow-lg">
          <TrendingUp className="w-8 h-8 mb-3" />
          <div className="text-2xl font-bold mb-1">{dropZoneStats.efficiency}%</div>
          <div className="text-purple-100 text-sm">Efficiency Score</div>
        </div>
        
        <div className="bg-gradient-to-br from-teal-500 to-green-500 text-white rounded-2xl p-6 shadow-lg">
          <Clock className="w-8 h-8 mb-3" />
          <div className="text-2xl font-bold mb-1">{dropZoneStats.activeHours}h</div>
          <div className="text-teal-100 text-sm">Active Today</div>
        </div>
      </div>

      {/* Drop Zone Status */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Your Drop Zone</h2>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                <Wifi className="w-4 h-4" />
                Online
              </div>
              <button className="text-gray-600 hover:text-gray-900">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="mt-4 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span>Cozy Corner Café • 123 Main St</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Capacity: 15 packages</span>
            </div>
          </div>
        </div>

        {/* Current Packages */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Current Packages ({currentPackages.length})
            </h3>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2">
              <PlusCircle className="w-4 h-4" />
              Accept New Package
            </button>
          </div>

          <div className="space-y-4">
            {currentPackages.map((pkg) => (
              <div key={pkg.id} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-gray-900">{pkg.id}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(pkg.priority)}`}>
                        {pkg.priority}
                      </span>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>From: {pkg.from}</div>
                      <div>To: {pkg.to}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-600">${pkg.value}</div>
                    <div className="text-xs text-gray-600">Handling fee</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Arrived: {pkg.arrival}</span>
                    <span>•</span>
                    <span>{pkg.nextPickup}</span>
                  </div>
                  
                  {pkg.courier ? (
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{pkg.courier.charAt(0)}</span>
                      </div>
                      <span className="text-sm text-gray-700">{pkg.courier}</span>
                    </div>
                  ) : (
                    <span className="text-sm text-orange-600 font-medium">Waiting for courier</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Earnings Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Earnings Breakdown</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">Base hosting fee</span>
              <span className="font-semibold text-gray-900">$420.00</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">High-priority bonuses</span>
              <span className="font-semibold text-gray-900">$89.50</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">Peak hour multiplier</span>
              <span className="font-semibold text-gray-900">$74.80</span>
            </div>
            <div className="flex items-center justify-between py-3 pt-4 border-t border-gray-200">
              <span className="text-lg font-bold text-gray-900">Total This Month</span>
              <span className="text-xl font-bold text-green-600">${dropZoneStats.monthlyEarnings}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Package Handling Speed</span>
                <span className="font-semibold text-gray-900">Excellent</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Availability Score</span>
                <span className="font-semibold text-gray-900">Great</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Customer Ratings</span>
                <span className="font-semibold text-gray-900">Outstanding</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostDashboard;