import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'; // react-icons ব্যবহার করা হয়েছে

const Footer = () => {
  return (
    <footer className="bg-[#0b0e1a] text-white py-12 px-6 md:px-16 font-sans mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">DigiTools</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition">Features</li>
              <li className="hover:text-white cursor-pointer transition">Pricing</li>
              <li className="hover:text-white cursor-pointer transition">Templates</li>
              <li className="hover:text-white cursor-pointer transition">Integrations</li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition">About</li>
              <li className="hover:text-white cursor-pointer transition">Blog</li>
              <li className="hover:text-white cursor-pointer transition">Careers</li>
              <li className="hover:text-white cursor-pointer transition">Press</li>
            </ul>
          </div>

          {/* Resources Column & Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm mb-6">
              <li className="hover:text-white cursor-pointer transition">Documentation</li>
              <li className="hover:text-white cursor-pointer transition">Help Center</li>
              <li className="hover:text-white cursor-pointer transition">Community</li>
              <li className="hover:text-white cursor-pointer transition">Contact</li>
            </ul>
            
            <h3 className="font-semibold mb-4">Social Links</h3>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                <FaTwitter size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:row items-center justify-between text-gray-500 text-xs">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;