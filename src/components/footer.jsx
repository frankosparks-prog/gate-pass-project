import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-10 px-6 sm:px-8 rounded-t-[40px] mt-2">
      {/* Footer Content */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-10">

        {/* About Section */}
        <div className="text-center sm:text-left leading-relaxed">
          <h2 className="text-2xl font-bold mb-3 text-yellow-400">Ultravetis Visitors Pass</h2>
          <p className="text-white/90 max-w-xs mx-auto sm:mx-0 text-sm">
            Powered by community, built for access.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-yellow-300 hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300 hover:underline">About</Link></li>
            <li><Link to="/help" className="hover:text-yellow-300 hover:underline">Help</Link></li>
            <li><Link to="/faq" className="hover:text-yellow-300 hover:underline">FAQ</Link></li>
            <li><Link to="/fire" className="hover:text-yellow-300 hover:underline">Fire Action</Link></li>
          </ul>
        </div>

        {/* Social Icons Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Follow Us</h3>
          <div className="flex justify-center sm:justify-start gap-6 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <Facebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <Twitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <Instagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <Linkedin />
            </a>
            <a href="mailto:info@example.com" className="hover:text-yellow-300">
              <Mail />
            </a>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-10 text-center">
        <img 
          src="https://agroduka.ke/images/thumbnails/240/240/logos/8/6d0My9wH_400x400.jpg" 
          alt="Ultravetis Logo" 
          className="w-24 h-24 mx-auto rounded-full shadow-lg"
        />
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-xs text-white/70">
        © {new Date().getFullYear()} Ultravetis Visitors Pass. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
