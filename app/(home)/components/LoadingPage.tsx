import React from 'react';

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <img src="/images/loader_small.gif" alt="Loading..."/>
    </div>
  );
};

export default LoadingPage;