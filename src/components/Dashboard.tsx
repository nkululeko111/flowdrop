import React, { useState } from 'react';
import { ArrowLeft, Package, MapPin, DollarSign, Star, Truck } from 'lucide-react';
import CustomerDashboard from './CustomerDashboard';
import CourierDashboard from './CourierDashboard';
import HostDashboard from './HostDashboard';

interface DashboardProps {
  userType: 'customer' | 'courier' | 'host';
  onBack: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ userType, onBack }) => {
  const getUserTypeInfo = () => {
    switch (userType) {
      case 'customer':
        return {
          title: 'Customer Portal',
          icon: Package,
          description: 'Track orders and manage deliveries',
          gradient: 'from-blue-500 to-teal-500'
        };
      case 'courier':
        return {
          title: 'Courier Hub',
          icon: Truck,
          description: 'Find delivery opportunities and track earnings',
          gradient: 'from-orange-500 to-red-500'
        };
      case 'host':
        return {
          title: 'Drop Zone Manager',
          icon: MapPin,
          description: 'Manage your location and view earnings',
          gradient: 'from-green-500 to-teal-500'
        };
    }
  };

  const info = getUserTypeInfo();
  const Icon = info.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${info.gradient} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <Icon className="w-8 h-8 text-white" />
            <div>
              <h1 className="text-2xl font-bold text-white">{info.title}</h1>
              <p className="text-white/80">{info.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {userType === 'customer' && <CustomerDashboard />}
        {userType === 'courier' && <CourierDashboard />}
        {userType === 'host' && <HostDashboard />}
      </div>
    </div>
  );
};

export default Dashboard;