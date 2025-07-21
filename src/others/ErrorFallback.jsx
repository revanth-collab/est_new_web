import React from 'react';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-zinc-900 px-4">
        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-8 max-w-md w-full text-center">
            <svg
                className="mx-auto mb-4 w-16 h-16 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 48 48"
            >
                <circle cx="24" cy="24" r="22" strokeWidth="4" className="text-red-200" />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M16 16l16 16M32 16L16 32"
                />
            </svg>
            <h2 className="text-2xl font-bold mb-2 text-red-500">Something went wrong</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
                Sorry, an unexpected error has occurred.
            </p>
            {error && (
                <pre className="mb-4 text-xs text-red-400 bg-red-50 dark:bg-zinc-900 rounded p-2 overflow-x-auto">
                    {error.message}
                </pre>
            )}
            <button
                onClick={resetErrorBoundary}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
            >
                Try Again
            </button>
        </div>
    </div>
);

export default ErrorFallback;