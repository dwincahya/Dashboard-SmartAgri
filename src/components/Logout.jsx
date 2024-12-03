import React, { useState } from 'react';
import { Transition } from '@headlessui/react'; // Menggunakan Transition dari Headless UI

function Logout() {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };

    const handleLogout = () => {
        alert("Anda keluar!");
        setShowModal(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            {/* <button 
                onClick={openModal}
                className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
                Logout
            </button> */}

            {/* Modal */}
            <Transition show={true}>
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <Transition.Child
                        enter="transition ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6 transform transition-all">
                            {/* Icon */}
                            <div className="text-center">
                                <svg
                                    className="w-12 h-12 text-green mx-auto mb-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5 4a3 3 0 013-3h4a3 3 0 013 3v12a3 3 0 01-3 3H8a3 3 0 01-3-3V4zm3.707 5.293a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L8 11.414l4.293 4.293a1 1 0 001.414-1.414l-5-5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <h2 className="text-xl font-semibold text-gray-800">Konfirmasi Logout</h2>
                                <p className="text-gray-500 mt-2">
                                    Apakah kamu yakin ingin keluar?
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="mt-6 flex justify-center space-x-4">
                                <button
                                    onClick={closeModal}
                                    className="bg-green text-whitecard py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300">
                                    Batal
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="bg-whitecard text-green py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
                                    Logout
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Transition>
        </div>
    );
}

export default Logout;
