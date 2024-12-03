import React, { useState } from 'react';
import "./page.css";
import profileImg from "../images/abang.jpg";

function ProfilePage() {
    const [showModal, setShowModal] = useState(false);

    const handlePasswordReset = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className='main' id='main'>
            <div className="bg-white p-8 min-h-screen">
                <div className="max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-lg p-6">
                    {/* Profile Header */}
                    <div className="flex items-center space-x-6 mb-8">
                        <img
                            className="w-24 h-24 rounded-full border-4 border-green-600"
                            src={profileImg}
                            alt="Admin Avatar"
                        />
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-800">Admin Username</h1>
                            <p className="text-gray-500">admin@example.com</p>
                            <p className="text-gray-500">+62 812 3456 7890</p>
                        </div>
                    </div>

                    {/* Profile Details */}
                    <div className="grid grid-cols-1 gap-6 mb-8">
                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                value="admin@example.com"
                                className="bg-white border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                disabled
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1">Nomor Telepon</label>
                            <input
                                type="text"
                                value="+62 812 3456 7890"
                                className="bg-white border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                disabled
                            />
                        </div>

                        {/* Password */}
                        <div className='flex-1 justify-between'>
                            <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
                                value="**********"
                                className="bg-white border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                                disabled
                            />
                            <div>
                            <div className='group'>
                                <button
                                    onClick={handlePasswordReset}
                                    className="bg-green text-white mt-4 px-4 py-2 rounded-lg shadow-md group-hover:bg-whitecard transition duration-300">
                                    <p className='group-hover:text-green'></p>Reset Password
                                </button>
                            </div>
                            
                            {/* Simpan Perubahan */}
                            <div className="group">
                                <button className="bg-green text-white mt-4 px-4 py-2 rounded-lg shadow-md group-hover:bg-whitecard transition duration-300">
                                    <p className='group-hover:text-green'>Simpan Perubahan</p>
                                </button>
                            </div>
                            </div>
                        </div>
                        
                    </div>

                    {/* Password Reset Modal */}
                    {showModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="bg-white rounded-lg p-8 shadow-lg w-96">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">Reset Password</h2>
                                <p className="text-gray-600 mb-6">Pilih metode pengiriman untuk reset password:</p>
                                <div className="grid grid-cols-1 gap-4">
                                    <button
                                        onClick={closeModal}
                                        className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
                                        Kirim melalui Nomor HP
                                    </button>
                                    <button
                                        onClick={closeModal}
                                        className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
                                        Kirim melalui Email
                                    </button>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="mt-6 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300">
                                    Batal
                                </button>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
