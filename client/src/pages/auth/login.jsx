import React from "react";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://source.unsplash.com/featured/?nature')] bg-cover bg-center">
      <div className="backdrop-blur-lg bg-white/10 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm text-white">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm text-white">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-white">
          Don't have an account? <a href="#" className="text-indigo-400 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
