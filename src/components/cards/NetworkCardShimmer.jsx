const NetworkCardShimmer = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64 h-80 animate-pulse">
      <div className="w-full h-32 bg-gray-300 rounded-md mb-4"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
      <div className="h-10 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

export default NetworkCardShimmer;
