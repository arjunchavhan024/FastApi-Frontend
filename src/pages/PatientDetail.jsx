import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPatient } from '../services/api';
import { ArrowLeft, User, MapPin, Activity, Ruler, Weight, Loader } from 'lucide-react';

const PatientDetail = () => {
    const { id } = useParams();
    const [patient, setPatient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const data = await getPatient(id);
                setPatient(data);
                setLoading(false);
            } catch (err) {
                setError('Patient not found or error fetching data.');
                setLoading(false);
            }
        };

        if (id) {
            fetchPatient();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Loader className="h-10 w-10 text-blue-600 animate-spin" />
            </div>
        );
    }

    if (error || !patient) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Not Found</h2>
                    <p className="text-gray-600 mb-8">The patient ID you are looking for does not exist or an error occurred.</p>
                    <Link to="/patients" className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center gap-2">
                        <ArrowLeft className="h-5 w-5" /> Back to Patients
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <Link to="/patients" className="text-gray-500 hover:text-blue-600 flex items-center gap-2 transition-colors w-fit">
                        <ArrowLeft className="h-4 w-4" /> Back to Patients List
                    </Link>
                </div>

                <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                    <div className="bg-blue-600 px-6 py-8 md:px-10 md:py-10 text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-bold flex items-center gap-3">
                                    <User className="h-8 w-8 text-blue-200" />
                                    {patient.name}
                                </h1>
                                <p className="mt-2 text-blue-100 flex items-center gap-2">
                                    ID: <span className="font-mono bg-blue-700 px-2 py-0.5 rounded text-sm">{id}</span>
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                                <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Health Verdict</p>
                                <p className="text-xl font-bold capitalize">{patient.verdict}</p>
                            </div>
                        </div>
                    </div>

                    <div className="px-6 py-8 md:px-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">

                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Information</h3>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Age</p>
                                        <p className="text-lg font-medium text-gray-900">{patient.age} years</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Gender</p>
                                        <p className="text-lg font-medium text-gray-900 capitalize">{patient.gender}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-sm text-gray-500 mb-1">City</p>
                                        <p className="text-lg font-medium text-gray-900 flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-gray-400" /> {patient.city}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Vitals & Metrics</h3>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                                        <Ruler className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                                        <p className="text-sm text-gray-500">Height</p>
                                        <p className="text-lg font-bold text-gray-900">{patient.height} m</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                                        <Weight className="h-6 w-6 text-green-500 mx-auto mb-2" />
                                        <p className="text-sm text-gray-500">Weight</p>
                                        <p className="text-lg font-bold text-gray-900">{patient.weight} kg</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                                        <Activity className="h-6 w-6 text-red-500 mx-auto mb-2" />
                                        <p className="text-sm text-gray-500">BMI</p>
                                        <p className="text-lg font-bold text-gray-900">{patient.bmi}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientDetail;
