import React, { useState } from "react";
import Footer from "./footer";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", username, password);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white">
      
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-2 sm:px-6 lg:px-6 py-11">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-2xl p-5 sm:p-8">
          <h2 className="text-3xl font-extrabold text-center text-white mb-6">
            Admin Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1 text-white">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition duration-300 text-white font-semibold py-2 rounded-lg"
            >
              Login
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-purple-900 text-center text-white py-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
