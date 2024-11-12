import React, { useState } from 'react';
import { BasicConfirmation } from './components/BasicConfirmation';
import { OptimizedConfirmation } from './components/OptimizedConfirmation';

function App() {
  const [showOptimized, setShowOptimized] = useState(true);

  return (
    <div>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setShowOptimized(!showOptimized)}
          className="bg-white shadow-lg px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50"
        >
          {showOptimized ? 'Show Basic Version' : 'Show Optimized Version'}
        </button>
      </div>
      
      {showOptimized ? <OptimizedConfirmation /> : <BasicConfirmation />}
    </div>
  );
}

export default App;