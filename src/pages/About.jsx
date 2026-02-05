import React from 'react';
import { Award, ShieldCheck, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        About CareConnect
                    </h2>
                    <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                        We are dedicated to revolutionizing healthcare management through innovative technology and compassionate service.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        {/* Using a placeholder div since I don't have a real image URL yet. Ideally this would be an image. */}
                        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center h-64 sm:h-80">
                            <span className="text-gray-400 font-medium text-lg">About Us Image</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            At CareConnect, our mission is to empower healthcare providers with the tools they need to deliver exceptional patient care. We believe that technology should handle the complexities of administration, allowing doctors and nurses to focus on what matters most—healing.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Founded in 2024, we serve clinics and hospitals across the region, helping them manage thousands of patient records securely and efficiently.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
                        <Award className="h-10 w-10 text-yellow-500 mb-4" />
                        <h4 className="text-lg font-bold text-gray-900">Excellence</h4>
                        <p className="text-gray-600 text-center mt-2">Committed to the highest standards.</p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
                        <ShieldCheck className="h-10 w-10 text-green-500 mb-4" />
                        <h4 className="text-lg font-bold text-gray-900">Security</h4>
                        <p className="text-gray-600 text-center mt-2">Your data is safe with us.</p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl">
                        <Heart className="h-10 w-10 text-red-500 mb-4" />
                        <h4 className="text-lg font-bold text-gray-900">Compassion</h4>
                        <p className="text-gray-600 text-center mt-2">Care at the center of everything.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
