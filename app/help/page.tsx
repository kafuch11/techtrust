import React from 'react';

const Page = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">Help Page</h1>
                <p className="text-gray-700 mb-4">
                    If you need assistance, please refer to the following resources:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li className="mb-2">
                        <a href="/faq" className="text-blue-500 hover:underline">
                            Frequently Asked Questions
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/support" className="text-blue-500 hover:underline">
                            Support Center
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="/contact" className="text-blue-500 hover:underline">
                            Contact Us
                        </a>
                    </li>
                </ul>
                <p className="text-gray-700">
                    For further assistance, please email us at{' '}
                    <a href="mailto:support@example.com" className="text-blue-500 hover:underline">
                        support@example.com
                    </a>.
                </p>
            </div>
        </div>
    );
};

export default Page;