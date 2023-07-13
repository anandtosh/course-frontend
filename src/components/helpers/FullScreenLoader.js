import React from 'react';

const FullScreenLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <svg className="animate-spin h-12 w-12 text-white" viewBox="0 0 24 24">
        <circle
          className="opacity-75"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-100"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647z"
        ></path>
      </svg>
    </div>
  );
};

export default FullScreenLoader;
