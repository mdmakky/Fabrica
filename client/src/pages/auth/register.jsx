import React from "react";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://source.unsplash.com/featured/?pets')] bg-cover bg-center">
      <div className="backdrop-blur-lg bg-white/10 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Create an Account</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm text-white">Full Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm text-white">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm text-white">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Create a password"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block mb-2 text-sm text-white">Confirm Password</label>
            <input 
              type="password" 
              id="confirmPassword" 
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Confirm your password"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-white">
          Already have an account? <a href="#" className="text-indigo-400 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
