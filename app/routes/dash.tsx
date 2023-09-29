import React from "react";

function Dashboard() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-white p-4 shadow-lg w-full">
        <h1 className="text-2xl font-semibold text-gray-800">Navbar</h1>
      </div>

      {/* Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        

        {/* Main Content */}
        <div className="flex-1 p-10 text-2xl font-bold overflow-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-md shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Card 1</h3>
              <p className="mt-4 text-gray-600">{/* content */}</p>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Card 2</h3>
              <p className="mt-4 text-gray-600">{/* content */}</p>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Card 3</h3>
              <p className="mt-4 text-gray-600">{/* content */}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
