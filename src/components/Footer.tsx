import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '../config';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-serif text-primary">{siteConfig.logo}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing top-tier construction and development services for over two decades. Quality craftsmanship and customer satisfaction are our top priorities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-gray-200">Quick Links</h3>
            <ul className="space-y-4">
              {siteConfig.navigation.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-gray-200">Our Services</h3>
            <ul className="space-y-4">
              {siteConfig.services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-gray-200">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors duration-300">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors duration-300">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
