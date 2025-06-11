import React from 'react'

function Navbar() {
  return (
    <>
      {/* Navbar Section */}
      <nav className="flex items-center justify-between p-4 lg:px-8 border-b border-gray-700">
        <div className="flex items-center space-x-6">
          <a href="#" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            CertifyHub
          </a>
          <div className="hidden md:flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-300">Dashboard</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Settings</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Support</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300 text-sm hidden sm:block">Welcome, {user.email}!</span>
          <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-red-600 text-white rounded-lg shadow-lg hover:from-pink-600 hover:to-red-700 transition-all duration-300 text-sm font-semibold">
            Get Started
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar