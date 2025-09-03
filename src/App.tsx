import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [userType, setUserType] = useState<'customer' | 'courier' | 'host'>('customer');

  const handleViewChange = (view: string, type?: 'customer' | 'courier' | 'host') => {
    setCurrentView(view);
    if (type) setUserType(type);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {currentView === 'landing' && <LandingPage onViewChange={handleViewChange} />}
      {currentView === 'dashboard' && <Dashboard userType={userType} onBack={() => setCurrentView('landing')} />}
    </div>
  );
}

export default App;