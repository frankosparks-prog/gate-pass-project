// import React, { useState } from "react";
// import { UserPlus } from "lucide-react"; // Icon for sign-up

// const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     role: "user", // Default role set to user
//   });

//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");
//   const [successMsg, setSuccessMsg] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMsg("");
//     setSuccessMsg("");
//     setLoading(true);

//     try {
//       const res = await fetch(`${SERVER_URL}/api/auth/signup`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message);

//       setSuccessMsg("Signup successful! You can now login.");
//       setFormData({ username: "", email: "", password: "", role: "user" }); // Reset form after successful signup
//     } catch (err) {
//       setErrorMsg(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white">
//       <main className="flex-grow flex items-center justify-center px-4 py-10 animate-fade-in">
//         <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8">
//           <div className="flex flex-col items-center mb-6">
//             <UserPlus className="h-12 w-12 text-white mb-2" />
//             <h2 className="text-3xl font-bold text-white">Create an Account</h2>
//             <p className="text-sm text-purple-200">Fill in user's details to sign up</p>
//           </div>

//           {errorMsg && (
//             <div className="mb-4 text-sm text-red-300 bg-red-800 bg-opacity-20 px-4 py-2 rounded-md">
//               {errorMsg}
//             </div>
//           )}

//           {successMsg && (
//             <div className="mb-4 text-sm text-green-300 bg-green-800 bg-opacity-20 px-4 py-2 rounded-md">
//               {successMsg}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label className="block text-sm font-medium mb-1 text-white">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter username"
//                 className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1 text-white">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter email"
//                 className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1 text-white">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 placeholder="Enter password (min. 6 characters)"
//                 className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1 text-white">
//                 Role
//               </label>
//               <select
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
//               >
//                 <option value="user">User</option>
//                 <option value="admin">Admin</option>
//               </select>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full transition duration-300 font-semibold py-2 rounded-lg ${
//                 loading
//                   ? "bg-purple-500 cursor-not-allowed"
//                   : "bg-purple-600 hover:bg-purple-700"
//               }`}
//             >
//               {loading ? "Creating Account..." : "Sign Up"}
//             </button>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import { UserPlus } from "lucide-react";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setLoading(true);

    try {
      const res = await fetch(`${SERVER_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setSuccessMsg("✅ User account created successfully!");
      setFormData({ username: "", email: "", password: "", role: "user" });
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 flex items-center justify-center px-4 py-10 text-white rounded-lg">
      <div className="flex w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl bg-white bg-opacity-10 backdrop-blur-lg">
        {/* Left - Description */}
        <div className="hidden md:flex flex-col justify-center bg-white bg-opacity-20 px-8 py-10 w-1/2">
          <h2 className="text-4xl font-bold mb-4">Admin Access Only</h2>
          <p className="text-md text-purple-100">
            As an admin, you're responsible for registering new users into the system. 
            Please ensure you use valid credentials and assign the correct role (user/admin).
          </p>
          <UserPlus className="h-20 w-20 mt-10 text-white/90" />
        </div>

        {/* Right - Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-10">
          <h3 className="text-2xl font-semibold mb-6">Create a New User</h3>

          {errorMsg && (
            <div className="mb-4 bg-red-100 border border-red-400 text-red-800 px-4 py-2 rounded-md text-sm">
              {errorMsg}
            </div>
          )}

          {successMsg && (
            <div className="mb-4 bg-green-100 border border-green-400 text-green-800 px-4 py-2 rounded-md text-sm">
              {successMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="e.g. johndoe"
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="e.g. john@example.com"
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Minimum 6 characters"
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white text-white focus:outline-none focus:ring-2 focus:ring-purple-300"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-lg font-semibold transition duration-300 ${
                loading
                  ? "bg-purple-500 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              {loading ? "Creating..." : "Create User"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
