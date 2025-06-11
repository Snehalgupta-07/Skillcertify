import React from 'react'

function Mission() {
  return (
    <section className="bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-6">
              Empowering individuals and organizations with verifiable and secure digital credentials.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:from-pink-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-500 rounded-full flex items-center justify-center p-4">
              <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z"/>
              </svg>
            </div>
          </div>
        </section>
  )
}

export default Mission