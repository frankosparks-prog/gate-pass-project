import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer
      className="relative text-white bg-cover bg-center bg-no-repeat text-xs italic"
      style={{
        backgroundImage: `url('https://agroduka.ke/images/thumbnails/240/240/logos/8/6d0My9wH_400x400.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-4 sm:px-6 sm:py-5 md:py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start">

          {/* About */}
          <div className="text-center sm:text-left leading-snug">
            <h2 className="text-sm font-semibold mb-1">My App</h2>
            <p className="text-white/80 max-w-xs mx-auto sm:mx-0 text-[11px]">
              Powered by community, built for access.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left leading-snug">
            <h3 className="text-sm font-semibold mb-1">Quick Links</h3>
            <ul className="space-y-1 text-[11px]">
              <li><Link to="/" className="hover:underline hover:text-yellow-300">Home</Link></li>
              <li><Link to="/about" className="hover:underline hover:text-yellow-300">About</Link></li>
              <li><Link to="/help" className="hover:underline hover:text-yellow-300">Help</Link></li>
              <li><Link to="/faq" className="hover:underline hover:text-yellow-300">FAQ</Link></li>
              <li><Link to="/fire-action" className="hover:underline hover:text-yellow-300">Fire Action</Link></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold mb-1">Follow Us</h3>
            <div className="flex justify-center sm:justify-start gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
                <Facebook size={14} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
                <Twitter size={14} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
                <Instagram size={14} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
                <Linkedin size={14} />
              </a>
              <a href="mailto:info@example.com" className="hover:text-yellow-300">
                <Mail size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-3 text-center text-[10px] text-white/70">
          © {new Date().getFullYear()} My App. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
