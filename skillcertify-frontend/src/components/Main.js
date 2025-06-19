import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Main({user, isIssuer, isRecipient}) {
  return (
     <main className="container mx-auto p-4 lg:p-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 rounded-2xl shadow-xl p-8 md:p-16 mb-12 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-white">
            Welcome to Your Certificate Dashboard
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
            Manage your certificates and empower your credentials.
          </p>
          <span className="text-lg md:text-xl text-gray-400 mb-8">
            Logged in as: <span className="font-semibold text-white">{user.email}</span>
          </span>

          {/* Conditional Rendering based on Role */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            {isIssuer && (
              <>
                <Link to="/issuance">
  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
    Create New Certificate
  </button>
</Link>     
                 <Link to="/template">
                <button className="px-8 py-4 bg-gray-700 text-gray-200 font-bold text-lg rounded-xl shadow-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
                  Create New Template
                </button>
                </Link>
              </>
            )}
            {isRecipient && (
              <Link to="/recipient-dashboard">
              <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold text-lg rounded-xl shadow-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                My Received Certificates
              </button>
              </Link>
            )}
          </div>
        </section>
      </main>
  )
}

export default Main