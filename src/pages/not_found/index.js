import React from 'react';
import Animated404 from './animation';

const NotFoundComponent = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/3 p-8 flex flex-col items-start justify-center">
        <h1 className="text-4xl font-bold mb-4">Not Found</h1>
        <p className="text-2xl mb-4">The page you are looking for could not found.</p>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">
          Go to Homepage
        </button>
      </div>

      {/* Right Section */}
      <div className="w-2/3 flex items-center justify-center bg-gradient-to-r from-purple-900 to-blue-900">
        <Animated404/>
      </div>
    </div>
  );
};

export default NotFoundComponent;
