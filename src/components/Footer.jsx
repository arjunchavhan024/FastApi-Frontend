import React from 'react';
import { HeartPulse, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <HeartPulse className="h-6 w-6 text-blue-400" />
                            <span className="text-xl font-bold">CareConnect</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Providing compassionate care and advanced medical solutions for our patients. Your health is our priority.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact Info</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-center gap-3">
                                <MapPin className="h-4 w-4 text-blue-400" />
                                <span>123 Health Avenue, Medical District</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-blue-400" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-blue-400" />
                                <span>info@careconnect.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="/patients" className="hover:text-blue-400 transition-colors">Patients</a></li>
                            <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                            <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} CareConnect. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
