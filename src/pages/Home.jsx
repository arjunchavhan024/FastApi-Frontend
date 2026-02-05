import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Users, Calendar, ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                            Modern Patient Management
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Streamline your practice with our comprehensive digital health solution. Track, manage, and care for your patients with ease.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                to="/patients"
                                className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                            >
                                View Patients <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link
                                to="/contact"
                                className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                            <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-6">
                                <Users className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Patient Records</h3>
                            <p className="text-gray-600">
                                Securely store and access detailed patient histories, vitals, and reports in one centralized dashboard.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                            <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-6">
                                <Activity className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Health Analytics</h3>
                            <p className="text-gray-600">
                                Visualize BMI patterns, weight trends, and other vital metrics to provide better diagnosis.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                            <div className="inline-flex items-center justify-center p-4 bg-purple-100 rounded-full mb-6">
                                <Calendar className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Easy Scheduling</h3>
                            <p className="text-gray-600">
                                Efficiently manage appointments and follow-ups to ensure no patient is left behind.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
