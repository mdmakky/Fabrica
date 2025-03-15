function UnAuth() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-gray-900">Access Denied!</h1>
                <p className="text-gray-700 mb-6">You do not have permission to view this page.</p>
                <button 
                    className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
                    onClick={() => window.location.href = '/'}
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
}

export default UnAuth;