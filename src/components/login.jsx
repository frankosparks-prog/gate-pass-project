import React, { useState } from "react";
import Footer from "./footer";
import { LockKeyhole } from "lucide-react"; // Lucide for icon (optional)

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    // Dummy delay for effect
    setTimeout(() => {
      setLoading(false);
      if (username === "gate123" && password === "pass123") {
        console.log("Success");
        // Navigate to dashboard or next screen here
      } else {
        setErrorMsg("Invalid username or password.");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white mt-32">
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-10 animate-fade-in">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8">
          <div className="flex flex-col items-center mb-6">
            <LockKeyhole className="h-12 w-12 text-white mb-2" />
            <h2 className="text-3xl font-bold text-white">Gate Pass Login</h2>
            <p className="text-sm text-purple-200">Authorized personnel only</p>
          </div>

          {errorMsg && (
            <div className="mb-4 text-sm text-red-300 bg-red-800 bg-opacity-20 px-4 py-2 rounded-md">
              {errorMsg}
            </div>
          )}

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
              disabled={loading}
              className={`w-full transition duration-300 font-semibold py-2 rounded-lg ${
                loading
                  ? "bg-purple-500 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-purple-900 text-center text-white py-4">
        {/* <Footer /> */}
      </footer>
    </div>
  );
};

export default Login;
