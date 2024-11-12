import React from 'react';
import { CheckCircle } from 'lucide-react';

export function BasicConfirmation() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Account Created Successfully!
        </h1>
        <p className="text-gray-600 mb-8">
          Your Angel One trading account is now ready to use.
        </p>
        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700">
          Start Trading
        </button>
      </div>
    </div>
  );
}