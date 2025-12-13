import React from 'react';
import FadeIn from './FadeIn';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    buttonText: string;
    onButtonClick: () => void;
}

export default function SuccessModal({
    isOpen,
    onClose,
    title,
    message,
    buttonText,
    onButtonClick
}: SuccessModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}>
            <FadeIn direction="up" className="w-full max-w-sm">
                <div className="bg-white rounded-xl shadow-2xl p-6 text-center border border-gray-100" onClick={(e) => e.stopPropagation()}>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 mb-6">{message}</p>

                    <button
                        onClick={onButtonClick}
                        className="w-full py-3 px-4 bg-[#002147] hover:bg-[#003366] text-white font-bold rounded-lg transition transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#002147]"
                    >
                        {buttonText}
                    </button>
                </div>
            </FadeIn>
        </div>
    );
}
