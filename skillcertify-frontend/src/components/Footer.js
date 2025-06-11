import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-12 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-gray-400">
            {/* Column 1: CertifyHub Brand */}
            <div className="lg:col-span-2 text-center md:text-left">
              <a href="#" className="text-3xl font-extrabold mb-4 block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                CertifyHub
              </a>
              <p className="text-sm leading-relaxed">
                Empowering individuals and organizations with verifiable and secure digital credentials.
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-6">
                {/* Social Media Icons - Placeholder for actual SVG or icons */}
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 20.447a1.992 1.992 0 01-1.282-1.895A1.992 1.992 0 01.057 16.65c.01-.013.02-.026.03-.039a1.992 1.992 0 011.282-1.895A1.992 1.992 0 011.38 13.06a1.992 1.992 0 01-1.282-1.895A1.992 1.992 0 011.38 9.38a1.992 1.992 0 01-1.282-1.895A1.992 1.992 0 011.38 5.69a1.992 1.992 0 01-1.282-1.895A1.992 1.992 0 011.38 2C.674 1.761 0 1.258 0 .584V.55a.55.55 0 01.55-.55h22.9A.55.55 0 0124 .55v.034c0 .674-.674 1.177-1.38 1.416a1.992 1.992 0 011.282 1.895A1.992 1.992 0 0122.62 5.69a1.992 1.992 0 011.282 1.895A1.992 1.992 0 0122.62 9.38a1.992 1.992 0 011.282 1.895A1.992 1.992 0 0122.62 13.06a1.992 1.992 0 011.282 1.895A1.992 1.992 0 0122.62 16.65a1.992 1.992 0 011.282 1.895A1.992 1.992 0 0122.62 20.447a1.992 1.992 0 01-1.282 1.895c.706.239 1.38.742 1.38 1.416v.034a.55.55 0 01-.55.55H.55a.55.55 0 01-.55-.55v-.034c0-.674.674-1.177 1.38-1.416a1.992 1.992 0 01-1.282-1.895zM7.2 12c0 2.647 2.153 4.8 4.8 4.8s4.8-2.153 4.8-4.8-2.153-4.8-4.8-4.8S7.2 9.353 7.2 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.5 8.012c-.378-.168-.795-.282-1.229-.333.864-.52 1.503-1.34 1.815-2.316-.807.47-1.7.812-2.656.99-.762-.81-1.848-1.31-3.056-1.31-2.311 0-4.184 1.873-4.184 4.185 0 .327.037.644.108.948-3.486-.175-6.577-1.847-8.647-4.372-.36.621-.567 1.344-.567 2.115 0 1.45.74 2.736 1.867 3.488-.688-.02-1.334-.21-1.903-.526v.053c0 2.036 1.447 3.738 3.364 4.12-.353.097-.728.148-1.114.148-.273 0-.538-.026-.797-.076.533 1.666 2.083 2.88 3.924 2.913-1.436 1.127-3.257 1.799-5.234 1.799-.34 0-.676-.02-.998-.058 1.85 1.189 4.05 1.884 6.417 1.884 7.697 0 11.916-6.377 11.916-11.916 0-.182-.004-.363-.012-.544.821-.592 1.532-1.332 2.096-2.179z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Press</a></li>
              </ul>
            </div>

            {/* Column 3: Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Solutions</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors duration-300">For Businesses</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">For Educators</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">For Individuals</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Integrations</a></li>
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Support Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">API Documentation</a></li>
              </ul>
            </div>

            {/* Column 5: Legal & Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Legal & Contact</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CertifyHub. All rights reserved.
          </div>
        </footer>
  )
}

export default Footer