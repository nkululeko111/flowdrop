import React, { useState } from 'react';
import { 
  Package, 
  Clock, 
  MapPin, 
  Star, 
  Truck,
  CheckCircle,
  AlertCircle,
  Plus
} from 'lucide-react';

const CustomerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('active');

  const activeOrders = [
    {
      id: 'FD001',
      item: 'Wireless Headphones',
      store: 'TechWorld',
      status: 'In Transit',
      currentLocation: 'Coffee Corner Drop Zone',
      eta: '45 mins',
      hops: 2,
      totalHops: 4,
      courier: 'Sarah M.',
      rating: 4.9,
      price: 89.99
    },
    {
      id: 'FD002',
      item: 'Running Shoes',
      store: 'SportsCentral',
      status: 'At Drop Zone',
      currentLocation: 'Metro Station Hub',
      eta: '1.2 hrs',
      hops: 1,
      totalHops: 3,
      courier: 'Mike R.',
      rating: 5.0,
      price: 129.99
    }
  ];

  const recentOrders = [
    {
      id: 'FD099',
      item: 'Smart Watch',
      deliveredAt: '2 hours ago',
      rating: 5,
      courier: 'Emma L.',
      total: 249.99
    },
    {
      id: 'FD098',
      item: 'Coffee Beans',
      deliveredAt: 'Yesterday',
      rating: 4,
      courier: 'Alex K.',
      total: 24.99
    }
  ];

  return (
    <div className="space-y-8">
      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Quick Actions</h2>
          <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-teal-600 transition-all duration-300 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            New Order
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-4 rounded-xl border border-blue-200 hover:shadow-md transition-all duration-300 cursor-pointer">
            <Package className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Track Package</h3>
            <p className="text-sm text-gray-600">Real-time location updates</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 rounded-xl border border-green-200 hover:shadow-md transition-all duration-300 cursor-pointer">
            <MapPin className="w-8 h-8 text-green-500 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Find Drop Zones</h3>
            <p className="text-sm text-gray-600">Locate nearby pickup points</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200 hover:shadow-md transition-all duration-300 cursor-pointer">
            <Star className="w-8 h-8 text-purple-500 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Rate Delivery</h3>
            <p className="text-sm text-gray-600">Help improve our network</p>
          </div>
        </div>
      </div>

      {/* Order Tabs */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab('active')}
              className={`px-6 py-4 font-semibold text-sm transition-colors duration-200 ${
                activeTab === 'active' 
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Active Orders ({activeOrders.length})
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`px-6 py-4 font-semibold text-sm transition-colors duration-200 ${
                activeTab === 'recent' 
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Recent Orders
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'active' ? (
            <div className="space-y-6">
              {activeOrders.map((order) => (
                <div key={order.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{order.item}</h3>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                          {order.id}
                        </span>
                      </div>
                      <p className="text-gray-600">from {order.store}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">${order.price}</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="font-semibold text-gray-900">{order.status}</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{order.currentLocation}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        ETA: {order.eta}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Package className="w-4 h-4" />
                        Hop {order.hops}/{order.totalHops}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                        <Truck className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{order.courier}</div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{order.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Track Live
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{order.item}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>Delivered {order.deliveredAt}</span>
                        <span>•</span>
                        <span>by {order.courier}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-4 h-4 ${i < order.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="font-bold text-gray-900">${order.total}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;