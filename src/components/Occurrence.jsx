import React, { useState } from "react";
import toast from "react-hot-toast";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Occurrence = () => {
  const [form, setForm] = useState({
    gate: "",
    endTime: "",
    premise: "",
    disarmedBy: "",
    disarmTime: "",
    // parkingOpeningTime: '',
    // parkingClosingTime: '',
    phonesLeftWith: "",
    armedBy: "",
    armTime: "",
    unusualOccurrence: "No",
    unusualDescription: "",
    remarks: "",
    submittedBy: JSON.parse(localStorage.getItem("user"))?.id || null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.submittedBy) return toast.error("Please log in first.");

    try {
      setLoading(true);
      const res = await fetch(`${SERVER_URL}/api/occurrences`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to submit");

      toast.success("Occurrence submitted successfully");
      setForm((prev) => ({
        ...prev,
        unusualDescription: "",
        remarks: "",
      }));
    } catch (err) {
      toast.error(err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen from-indigo-200 via-purple-100 to-yellow-50 text-gray-900 font-sans flex items-center justify-center p-4 mt-12 md:mt-36">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 space-y-6"
      >
        <h2 className="text-3xl font-semibold text-purple-800">
          Occurrence Report
        </h2>

        {/* Gate */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            I am reporting the occurrences from:
          </label>
          <select
            name="gate"
            value={form.gate}
            onChange={handleChange}
            required
            className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="" disabled>
              Select gate
            </option>
            <option value="Gate One">Gate 1</option>
            <option value="Gate Two">Gate 2</option>
            <option value="Godown 14">Godown 14</option>
          </select>
        </div>

        {/* End Time */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            End Time of Shift
          </label>
          <input
            type="datetime-local"
            name="endTime"
            value={form.endTime}
            onChange={handleChange}
            required
            className="w-full p-2 border border-purple-300 rounded-md"
          />
        </div>

        {/* Condition of the Premise */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Select the Premise
          </label>
          <select
            name="premise"
            value={form.premise}
            onChange={handleChange}
            required
            className="w-full p-2 border border-purple-300 rounded-md"
          >
            <option value="">-- Select Area --</option>
            <option value="administration">ADMISTRATION WING</option>
            <option value="factorywing">FACTORY WING</option>
            <option value="godown14">GODOWN 14</option>
          </select>
        </div>

        {/* Disarm Time */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            What Time Was the Premise Disarmed?
          </label>
          <input
            name="disarmTime"
            value={form.disarmTime}
            onChange={handleChange}
            type="time"
            className="w-full p-2 border border-purple-300 rounded-md"
          />
        </div>

        {/* Disarmed By */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Who Disarmed the Premises?
          </label>
          <input
            name="disarmedBy"
            value={form.disarmedBy}
            onChange={handleChange}
            type="text"
            className="w-full p-2 border border-purple-300 rounded-md"
            placeholder="Enter name or N/A"
          />
        </div>

        {/* Arm Time */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            What Time Was the Premise Armed?
          </label>
          <input
            name="armTime"
            value={form.armTime}
            onChange={handleChange}
            type="time"
            className="w-full p-2 border border-purple-300 rounded-md"
          />
        </div>

        {/* Armed By */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Who Armed the Premise?
          </label>
          <input
            name="armedBy"
            value={form.armedBy}
            onChange={handleChange}
            type="text"
            className="w-full p-2 border border-purple-300 rounded-md"
            placeholder="Enter name or N/A"
          />
        </div>
        {/* Unusual Occurrence */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Was There Any Unusual Occurrence?
          </label>
          <select
            name="unusualOccurrence"
            value={form.unusualOccurrence}
            onChange={handleChange}
            className="w-full p-2 border border-purple-300 rounded-md"
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        {/* If Yes, Description */}
        {form.unusualOccurrence === "Yes" && (
          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">
              Describe the Occurrence
            </label>
            <textarea
              name="unusualDescription"
              value={form.unusualDescription}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border border-purple-300 rounded-md"
              placeholder="Provide details here..."
            />
          </div>
        )}
        {/* Parking Opening Time */}
        {/* <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">Parking Opening Time</label>
          <input name="parkingOpeningTime" value={form.parkingOpeningTime} onChange={handleChange} type="time" className="w-full p-2 border border-purple-300 rounded-md" />
        </div> */}

        {/* Phones Left With */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Who Was Left with Phone 1 and 2 and Their Chargers?
          </label>
          <input
            name="phonesLeftWith"
            value={form.phonesLeftWith}
            onChange={handleChange}
            type="text"
            className="w-full p-2 border border-purple-300 rounded-md"
          />
        </div>

        {/* Parking Closing Time */}
        {/* <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">Parking Closing Time</label>
          <input name="parkingClosingTime" value={form.parkingClosingTime} onChange={handleChange} type="time" className="w-full p-2 border border-purple-300 rounded-md" />
        </div> */}

        {/* Remarks */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Additional Remarks
          </label>
          <textarea
            name="remarks"
            value={form.remarks}
            onChange={handleChange}
            rows={3}
            className="w-full p-2 border border-purple-300 rounded-md"
            placeholder="Any other comments..."
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            disabled={loading}
            type="submit"
            className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Occurrence;

// import React, { useState, useEffect } from "react";
// import toast from "react-hot-toast";
// import axios from "axios";

// const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// function Occurrence() {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [form, setForm] = useState({
//     reportingFrom: "",
//     endTime: "",
//     premiseCondition: "",
//     disarmedTime: "evening",
//     disarmedBy: "N/A",
//     armedTime: "morning",
//     armedBy: "N/A",
//     unusualOccurrence: "No",
//     unusualRemarks: "",
//     phoneChargeHolder: "",
//     submittedBy: user?._id || null,
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (loading) return;

//     if (!form.submittedBy) {
//       toast.error("User not logged in.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await axios.post(`${SERVER_URL}/api/occurrences`, form);
//       toast.success("Occurrence submitted successfully!");
//       setForm({
//         reportingFrom: "",
//         endTime: "",
//         premiseCondition: "",
//         disarmedTime: "evening",
//         disarmedBy: "N/A",
//         armedTime: "morning",
//         armedBy: "N/A",
//         unusualOccurrence: "No",
//         unusualRemarks: "",
//         phoneChargeHolder: "",
//         submittedBy: user?._id || null,
//       });
//     } catch (error) {
//       toast.error("Error submitting occurrence.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 p-6 pt-32 md:mt-12">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white shadow-xl rounded-xl p-8">
//           <h1 className="text-3xl font-bold text-purple-800 mb-2 text-center">
//             Shift Occurrence Report
//           </h1>
//           <p className="text-center text-gray-600 mb-6">
//             Kindly fill the form accurately before handing over the shift.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-6">

//             {/* 1. Reporting From */}
//             <div>
//               <label className="block text-black font-medium mb-1">
//                 Am reporting from:
//               </label>
//               <select
//                 name="reportingFrom"
//                 value={form.reportingFrom}
//                 onChange={handleChange}
//                 required
//                 className="w-full border-2 border-purple-400 rounded-lg px-4 py-2 bg-white"
//               >
//                 <option value="">-- Select Location --</option>
//                 <option value="GATE A">GATE A</option>
//                 <option value="GATE B">GATE B</option>
//                 <option value="GODOWN 14">GODOWN 14</option>
//               </select>
//             </div>

//             {/* 2. End Time */}
//             <div>
//               <label className="block text-black font-medium mb-1">
//                 End time of the shift:
//               </label>
//               <input
//                 type="time"
//                 name="endTime"
//                 value={form.endTime}
//                 onChange={handleChange}
//                 required
//                 className="w-full border-2 border-purple-400 rounded-lg px-4 py-2"
//               />
//             </div>

//             {/* 3. Premise Condition */}
//             <div>
//               <label className="block text-black font-medium mb-1">
//                 Condition of the premise:
//               </label>
//               <select
//                 name="premiseCondition"
//                 value={form.premiseCondition}
//                 onChange={handleChange}
//                 required
//                 className="w-full border-2 border-purple-400 rounded-lg px-4 py-2"
//               >
//                 <option value="">-- Select Area --</option>
//                 <option value="ADMISTRATION WING">ADMISTRATION WING</option>
//                 <option value="FACTORY WING">FACTORY WING</option>
//                 <option value="GODOWN 14">GODOWN 14</option>
//               </select>
//             </div>

//             {/* 4. Disarmed Time */}
//             <div>
//               <label className="block text-black font-medium mb-1">
//                 What time was the premise disarmed:
//               </label>
//               <input
//                 type="time"
//                 name="disarmedTime"
//                 value={form.disarmedTime}
//                 onChange={handleChange}
//                 className="w-full border-2 border-purple-400 rounded-lg px-4 py-2"
//               />
//             </div>

//             {/* 5. Disarmed By */}
//             <div>
//               <label className="block text-black font-medium mb-1">
//                 Who disarmed the premise:
//               </label>
//               <input
//                 type="text"
//                 name="disarmedBy"
//                 value={form.disarmedBy}
//                 onChange={handleChange}
//                 placeholder="N/A"
//                 className="w-full border-2 border-purple-400 rounded-lg px-4 py-2"
//               />
//             </div>

//             {/* 6. Armed Time */}
//             <div>
//               <label className="block text-black font-medium mb-1">
//                 What time was the premise armed:
//               </label>
//               <input
//                 type="time"
//                 name="armedTime"
//                 value={form.armedTime}
//                 onChange={handleChange}
//                 className="w-full border-2 border-purple-400 rounded-lg px-4 py-2"
//               />
//             </div>

//             {/* 7. Armed By */}
//             <div>
//               <label className="block text-black font-medium mb-1">
//                 Who armed the premise:
//               </label>
//               <input
//                 type="text"
//                 name="armedBy"
//                 value={form.armedBy}
//                 onChange={handleChange}
//                 placeholder="N/A"
//                 className="w-full border-2 border-purple-400 rounded-lg px-4 py-2"
//               />
//             </div>

//             {/* 8. Unusual Occurrence */}
//             <div>
//               <label className="block text-black font-medium mb-1">
//                 Was there any unusual occurrence?
//               </label>
//               <select
//                 name="unusualOccurrence"
//                 value={form.unusualOccurrence}
//                 onChange={handleChange}
//                 className="w-full border-2 border-purple-400 rounded-lg px-4 py-2"
//               >
//                 <option value="No">No</option>
//                 <option value="Yes">Yes</option>
//               </select>
//             </div>

//             {/* 8b. Additional Remarks if Yes */}
//             {form.unusualOccurrence === "Yes" && (
//               <div>
//                 <label className="block text-black font-medium mb-1">
//                   Please describe the unusual occurrence:
//                 </label>
//                 <textarea
//                   name="unusualRemarks"
//                   value={form.unusualRemarks}
//                   onChange={handleChange}
//                   rows="3"
//                   className="w-full border-2 border-purple-400 rounded-lg px-4 py-2 resize-none"
//                 ></textarea>
//               </div>
//             )}

//             {/* 9. Phone & Chargers */}
//             <div>
//               <label className="block text-black font-medium mb-1">
//                 Who was left with phones 1 and 2 and their chargers?
//               </label>
//               <input
//                 type="text"
//                 name="phoneChargeHolder"
//                 value={form.phoneChargeHolder}
//                 onChange={handleChange}
//                 className="w-full border-2 border-purple-400 rounded-lg px-4 py-2"
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="text-center">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`${
//                   loading
//                     ? "bg-purple-400 cursor-not-allowed"
//                     : "bg-purple-700 hover:bg-purple-800"
//                 } text-white font-semibold px-6 py-3 rounded-lg transition duration-300`}
//               >
//                 {loading ? "Submitting..." : "Submit Report"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Occurrence;
