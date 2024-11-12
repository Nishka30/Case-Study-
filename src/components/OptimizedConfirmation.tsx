import React from 'react';
import { ArrowRight, BarChart2, BookOpen, Gift, Wallet2 } from 'lucide-react';

export function OptimizedConfirmation() {
  const features = [
    {
      icon: <Gift className="w-6 h-6 text-blue-500" />,
      title: "₹500 Welcome Bonus",
      description: "Make your first trade within 7 days",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-purple-500" />,
      title: "Free Learning Resources",
      description: "Access premium courses worth ₹2,999",
    },
    {
      icon: <Wallet2 className="w-6 h-6 text-green-500" />,
      title: "Zero Account Charges",
      description: "For the first month of trading",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-lg mx-auto p-6">
        {/* Success Message */}
        <div className="text-center mb-8 pt-8">
          <div className="relative">
            <div className="w-24 h-24 bg-green-100 rounded-full mx-auto flex items-center justify-center">
              <BarChart2 className="w-12 h-12 text-green-500" />
            </div>
            <div className="absolute -bottom-2 right-1/3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              Verified ✓
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mt-6 mb-2">
            Welcome to Angel One! 🎉
          </h1>
          <p className="text-gray-600">
            Your account is ready for the markets
          </p>
        </div>

        {/* Features Grid */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4">
          <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-medium hover:bg-blue-700 flex items-center justify-center space-x-2">
            <span>Start Your Trading Journey</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full bg-gray-50 text-gray-700 py-4 px-6 rounded-xl font-medium hover:bg-gray-100">
            Take Quick Tour
          </button>
        </div>

        {/* Market Status */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-green-700">Market is Open</span>
          </div>
        </div>
      </div>
    </div>
  );
}