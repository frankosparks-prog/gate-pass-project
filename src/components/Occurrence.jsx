// import React, { useState } from "react";
// import toast from "react-hot-toast";

// function Occurrence() {
//   const [form, setForm] = useState({
//     endTime: "",
//     description: "",
//     remarks: "",
//   });

//   const [submissions, setSubmissions] = useState([]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newSubmission = {
//       ...form,
//       submittedAt: new Date().toLocaleString(),
//     };

//     setSubmissions([newSubmission, ...submissions]); // newest first
//     toast.success("Occurrence submitted successfully!");
//     setForm({ endTime: "", description: "", remarks: "" });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 p-6 pt-32 md:mt-12">
//       <div className="max-w-4xl mx-auto">
//         {/* Form Card */}
//         <div className="bg-white shadow-xl rounded-xl p-8">
//           <h1 className="text-3xl font-bold text-purple-800 mb-2 text-center">
//             Shift Occurrence Report
//           </h1>
//           <p className="text-center text-gray-600 mb-6">
//             Please fill this form at the end of your shift to record your
//             observations.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label
//                 htmlFor="endTime"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Shift End Time
//               </label>
//               <input
//                 type="datetime-local"
//                 id="endTime"
//                 name="endTime"
//                 value={form.endTime}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="description"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Occurrence Description
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 rows="4"
//                 value={form.description}
//                 onChange={handleChange}
//                 required
//                 placeholder="Describe what happened during your shift..."
//                 className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="remarks"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Additional Remarks (Optional)
//               </label>
//               <textarea
//                 id="remarks"
//                 name="remarks"
//                 rows="2"
//                 value={form.remarks}
//                 onChange={handleChange}
//                 placeholder="Any extra notes or concerns..."
//                 className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
//               />
//             </div>

//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
//               >
//                 Submit Occurrence
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Table for Past Submissions */}
//         {submissions.length > 0 && (
//           <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
//             <h2 className="text-xl font-semibold text-purple-700 mb-4">
//               Past Submissions
//             </h2>
//             <div className="overflow-x-auto">
//               <table className="min-w-full border border-gray-300">
//                 <thead className="bg-purple-100">
//                   <tr>
//                     <th className="text-left px-4 py-2 border-b">
//                       Submitted At
//                     </th>
//                     <th className="text-left px-4 py-2 border-b">
//                       Shift End Time
//                     </th>
//                     <th className="text-left px-4 py-2 border-b">
//                       Description
//                     </th>
//                     <th className="text-left px-4 py-2 border-b">Remarks</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {submissions.map((entry, index) => (
//                     <tr key={index} className="hover:bg-gray-50">
//                       <td className="px-4 py-2 border-b">
//                         {entry.submittedAt}
//                       </td>
//                       <td className="px-4 py-2 border-b">
//                         {new Date(entry.endTime).toLocaleString()}
//                       </td>
//                       <td className="px-4 py-2 border-b">
//                         {entry.description}
//                       </td>
//                       <td className="px-4 py-2 border-b">
//                         {entry.remarks || "—"}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Occurrence;

// // User login awareness (show who submitted it)

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Occurrence() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [form, setForm] = useState({
    endTime: "",
    description: "",
    remarks: "",
    gate: "",
    submittedBy: user._id,
  });
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false); // NEW

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const user = JSON.parse(localStorage.getItem("user")); // Make sure user exists

    const newSubmission = {
      endTime: form.endTime,
      description: form.description,
      remarks: form.remarks,
      gate: form.gate,
      submittedBy: user?.id || null, // <-- crucial
    };

    if (!newSubmission.submittedBy) {
      toast.error("User not logged in. Please log in to submit.");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        `${SERVER_URL}/api/occurrences`,
        newSubmission
      );
      setSubmissions([res.data, ...submissions]); // Add the response, not the sent data
      toast.success("Occurrence submitted successfully!");
      setForm({ endTime: "", description: "", remarks: "", gate: "" });
    } catch (error) {
      toast.error("Error submitting occurrence.");
      console.error(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/api/occurrences`);
        setSubmissions(response.data);
      } catch (error) {
        toast.error("Error fetching submissions.");
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 p-6 pt-32 md:mt-12">
      <div className="max-w-4xl mx-auto">
        {/* Form Card */}
        <div className="bg-white shadow-xl rounded-xl p-8">
          <h1 className="text-3xl font-bold text-purple-800 mb-2 text-center">
            Shift Occurrence Report
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Please fill this form at the end of your shift to record your
            observations.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="gate"
                className="block text-sm font-medium text-gray-700"
              >
                Gate
              </label>
              <select
                id="gate"
                name="gate"
                value={form.gate}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              >
                <option value="">Select Gate</option>
                <option value="Gate 1">Gate 1</option>
                <option value="Gate 2">Gate 2</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="endTime"
                className="block text-sm font-medium text-gray-700"
              >
                Shift End Time
              </label>
              <input
                type="datetime-local"
                id="endTime"
                name="endTime"
                value={form.endTime}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Occurrence Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                value={form.description}
                onChange={handleChange}
                required
                placeholder="Describe what happened during your shift..."
                className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
              />
            </div>

            <div>
              <label
                htmlFor="remarks"
                className="block text-sm font-medium text-gray-700"
              >
                Additional Remarks (Optional)
              </label>
              <textarea
                id="remarks"
                name="remarks"
                rows="2"
                value={form.remarks}
                onChange={handleChange}
                placeholder="Any extra notes or concerns..."
                className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading
                    ? "bg-purple-400 cursor-not-allowed"
                    : "bg-purple-700 hover:bg-purple-800"
                } text-white font-semibold px-6 py-3 rounded-lg transition duration-300`}
              >
                {loading ? "Submitting..." : "Submit Occurrence"}
              </button>
            </div>
          </form>
        </div>

        {/* Table for Past Submissions */}
        {submissions.length > 0 && (
          <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">
              Past Submissions
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-purple-100">
                  <tr>
                    <th className="text-left px-4 py-2 border-b">
                      Submitted At
                    </th>
                    <th className="text-left px-4 py-2 border-b">Gate</th>

                    <th className="text-left px-4 py-2 border-b">
                      Shift End Time
                    </th>
                    <th className="text-left px-4 py-2 border-b">
                      Description
                    </th>
                    <th className="text-left px-4 py-2 border-b">Remarks</th>
                    <th className="text-left px-4 py-2 border-b">
                      Submitted By
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((entry, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">
                        {entry.submittedAt}
                      </td>
                      <td className="px-4 py-2 border-b">{entry.gate}</td>

                      <td className="px-4 py-2 border-b">
                        {new Date(entry.endTime).toLocaleString()}
                      </td>
                      <td className="px-4 py-2 border-b">
                        {entry.description}
                      </td>
                      <td className="px-4 py-2 border-b">
                        {entry.remarks || "—"}
                      </td>

                      <td className="px-4 py-2 border-b">
                        {typeof entry.submittedBy === "object"
                          ? entry.submittedBy.username
                          : entry.submittedBy || "Unknown"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Occurrence;
