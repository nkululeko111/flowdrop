import React, { useState, useEffect } from 'react';
import { Package, MapPin, Truck, Home, Store } from 'lucide-react';

const NetworkVisualization: React.FC = () => {
  const [activePackage, setActivePackage] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);

  const nodes = [
    { id: 'store', type: 'store', x: 10, y: 50, label: 'E-Commerce Store' },
    { id: 'hub1', type: 'hub', x: 30, y: 30, label: 'Mini-Hub' },
    { id: 'drop1', type: 'dropzone', x: 50, y: 20, label: 'Café Drop Zone' },
    { id: 'drop2', type: 'dropzone', x: 70, y: 40, label: 'Home Drop Zone' },
    { id: 'customer', type: 'home', x: 90, y: 60, label: 'Customer' }
  ];

  const packages = [
    { id: 1, path: ['store', 'hub1', 'drop1', 'drop2', 'customer'], color: 'blue' },
    { id: 2, path: ['store', 'hub1', 'drop2', 'customer'], color: 'green' },
    { id: 3, path: ['store', 'hub1', 'drop1', 'customer'], color: 'purple' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 5);
      if (animationStep === 4) {
        setActivePackage(prev => (prev + 1) % packages.length);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [animationStep]);

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'store': return Store;
      case 'hub': return Package;
      case 'dropzone': return MapPin;
      case 'home': return Home;
      default: return Package;
    }
  };

  const getNodeColor = (type: string) => {
    switch (type) {
      case 'store': return 'bg-orange-500';
      case 'hub': return 'bg-blue-500';
      case 'dropzone': return 'bg-teal-500';
      case 'home': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const currentPackage = packages[activePackage];
  const currentNode = currentPackage.path[animationStep] || currentPackage.path[0];
  const currentNodeData = nodes.find(n => n.id === currentNode);

  return (
    <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-8 text-white">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
          <Package className="w-4 h-4 text-teal-400" />
          <span className="text-sm">Live Network Simulation</span>
        </div>
        <h3 className="text-2xl font-bold mb-2">Package Flow Visualization</h3>
        <p className="text-blue-200">
          Package #{currentPackage.id} • Step {animationStep + 1} of {currentPackage.path.length} • 
          At: {currentNodeData?.label}
        </p>
      </div>

      {/* Network Map */}
      <div className="relative h-80 mb-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {nodes.slice(0, -1).map((node, index) => {
            const nextNode = nodes[index + 1];
            return (
              <line
                key={`line-${index}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${nextNode.x}%`}
                y2={`${nextNode.y}%`}
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node, index) => {
          const Icon = getNodeIcon(node.type);
          const isActive = node.id === currentNode;
          
          return (
            <div
              key={node.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                isActive ? 'scale-125 z-20' : 'scale-100 z-10'
              }`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div className={`
                ${getNodeColor(node.type)} 
                ${isActive ? 'ring-4 ring-white shadow-2xl' : 'shadow-lg'}
                w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500
              `}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 text-xs whitespace-nowrap">
                  {node.label}
                </div>
              </div>

              {/* Package indicator */}
              {isActive && (
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
                  {currentPackage.id}
                </div>
              )}
            </div>
          );
        })}

        {/* Moving package animation */}
        <div className={`absolute w-3 h-3 bg-${currentPackage.color}-400 rounded-full shadow-lg transition-all duration-1000 z-30`}
             style={{ 
               left: `${currentNodeData?.x}%`, 
               top: `${currentNodeData?.y}%`,
               transform: 'translate(-50%, -50%)'
             }}>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-between items-center bg-white/5 rounded-xl p-6">
        {currentPackage.path.map((nodeId, index) => {
          const node = nodes.find(n => n.id === nodeId);
          const Icon = getNodeIcon(node?.type || 'hub');
          const isCompleted = index < animationStep;
          const isCurrent = index === animationStep;
          
          return (
            <div key={nodeId} className="flex flex-col items-center">
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300
                ${isCurrent ? 'bg-yellow-400 text-black scale-110' : 
                  isCompleted ? 'bg-green-400 text-white' : 'bg-white/20 text-white/60'}
              `}>
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-sm text-center">{node?.label}</span>
              {index < currentPackage.path.length - 1 && (
                <div className={`w-16 h-0.5 mt-4 ${isCompleted ? 'bg-green-400' : 'bg-white/20'} transition-all duration-300`}></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NetworkVisualization;