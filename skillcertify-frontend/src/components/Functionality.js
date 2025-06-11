import React from 'react'

function Functionality() {
  return (
     <section className="bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Our Core Functionalities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-gray-850 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-white">Create & Issue Certificates</h3>
              <p className="text-gray-300">Easily design, generate, and issue digital certificates to your recipients. Streamline your credentialing process.</p>
            </div>
            <div className="p-6 bg-gray-850 rounded-xl shadow-jsonp-md">
              <h3 className="text-xl font-semibold mb-3 text-white">Manage & Track Issued Certificates</h3>
              <p className="text-gray-300">Keep a comprehensive record of all certificates you've issued, track their status, and revoke them if necessary.</p>
            </div>
            <div className="p-6 bg-gray-850 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-white">Receive & View Digital Credentials</h3>
              <p className="text-gray-300">Recipients can securely access and view all their received certificates from a centralized dashboard.</p>
            </div>
            <div className="p-6 bg-gray-850 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-white">Secure Sharing & Verification</h3>
              <p className="text-gray-300">Share your certificates easily and securely. Anyone can verify the authenticity of a certificate using a unique QR code or link.</p>
            </div>
            <div className="p-6 bg-gray-850 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-white">Customizable Templates</h3>
              <p className="text-gray-300">Utilize our pre-designed templates or create your own custom designs for a professional look.</p>
            </div>
            <div className="p-6 bg-gray-850 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-white">Blockchain Integration (Future)</h3>
              <p className="text-gray-300">Explore future possibilities for enhanced security and immutability with blockchain-backed certificates.</p>
            </div>
          </div>
        </section>
  )
}

export default Functionality