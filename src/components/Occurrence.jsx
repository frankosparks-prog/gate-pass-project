import React, { useState } from "react";
import toast from "react-hot-toast";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Occurrence = () => {
  const [form, setForm] = useState({
    gate: "",
    endTime: "",
    conditionOfPremise: "",
    armedSection: "",
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
            Condition of the Premise
          </label>
          <select
            name="conditionOfPremise"
            value={form.conditionOfPremise}
            onChange={handleChange}
            className="w-full p-2 border border-purple-300 rounded-md"
          >
            <option value="" disabled>
              Select condition
            </option>
            <option value="good">In Good Condition</option>
            <option value="situation">There Was a Situation</option>
          </select>
        </div>

        {/* Armed section */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Armed Section
          </label>
          <select
            name="armedSection"
            value={form.armedSection}
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
            placeholder="Enter name"
          />
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

        {/* Parking Closing Time */}
        {/* <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">Parking Closing Time</label>
          <input name="parkingClosingTime" value={form.parkingClosingTime} onChange={handleChange} type="time" className="w-full p-2 border border-purple-300 rounded-md" />
        </div> */}

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

// import React, { useState } from 'react';
// import { Clock } from 'lucide-react';

// export default function Occurrence() {
//   const [form, setForm] = useState({
//     location: '',
//     endTime: '',
//     condition: '',
//     armedSection: '',
//     disarmedTime: 'ItsEvening',
//     disarmedBy: 'N/A',
//     armedTime: 'ItsMorning',
//     armedBy: 'N/A',
//     unusual: 'No',
//     remarks: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (field, value) => {
//     setForm((prev) => ({
//       ...prev,
//       [field]: ['condition'].includes(field) ? value.toUpperCase() : value,
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     Object.entries(form).forEach(([key, value]) => {
//       if (['remarks'].includes(key) && form.unusual === 'No') return;
//       if (!value) newErrors[key] = 'Required';
//     });
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     console.log('Form Submitted', form);
//   };

//   const defaultLocations = ['GATE A', 'GATE B', 'GODOWN 14'];

//   return (
//     <div className="mt-28">
//     <div style={{ maxWidth: '600px', margin: 'auto', padding: '50px', color: '#6B21A8' }}>
//       <h1 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '20px' }}>Occurrence Report</h1>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '15px' }}>
//           <label>I am reporting the Occurrence from</label>
//           <select onChange={(e) => handleChange('location', e.target.value)} defaultValue="">
//             <option value="" disabled>Select location</option>
//             {defaultLocations.map((loc) => (
//               <option key={loc} value={loc}>{loc}</option>
//             ))}
//           </select>
//           {errors.location && <p style={{ color: 'red' }}>{errors.location}</p>}
//         </div>

//         <div style={{ marginBottom: '15px' }}>
//           <label>End Time of the Shift</label><br />
//           <input type="time" onChange={(e) => handleChange('endTime', e.target.value)} />
//           <Clock style={{ marginLeft: '10px', display: 'inline-block', verticalAlign: 'middle' }} />
//           {errors.endTime && <p style={{ color: 'red' }}>{errors.endTime}</p>}
//         </div>

//         <div style={{ marginBottom: '15px' }}>
//           <label>Condition of the Premise</label><br />
//           <input type="text" onChange={(e) => handleChange('condition', e.target.value)} value={form.condition} />
//           {errors.condition && <p style={{ color: 'red' }}>{errors.condition}</p>}
//         </div>

//         <div style={{ marginBottom: '15px' }}>
//           <label>Armed Section</label>
//           <select onChange={(e) => handleChange('armedSection', e.target.value)} defaultValue="">
//             <option value="" disabled>Select section</option>
//             {defaultLocations.map((loc) => (
//               <option key={loc} value={loc}>{loc}</option>
//             ))}
//           </select>
//           {errors.armedSection && <p style={{ color: 'red' }}>{errors.armedSection}</p>}
//         </div>

//         <div style={{ marginBottom: '15px' }}>
//           <label>What time was the premise disarmed?</label><br />
//           <input type="time" onChange={(e) => handleChange('disarmedTime', e.target.value || 'ItsEvening')} />
//           <Clock style={{ marginLeft: '10px', display: 'inline-block', verticalAlign: 'middle' }} />
//         </div>

//         <div style={{ marginBottom: '15px' }}>
//           <label>Who disarmed the premise?</label><br />
//           <input type="text" onChange={(e) => handleChange('disarmedBy', e.target.value || 'N/A')} />
//         </div>

//         <div style={{ marginBottom: '15px' }}>
//           <label>What time was the premise armed?</label><br />
//           <input type="time" onChange={(e) => handleChange('armedTime', e.target.value || 'ItsMorning')} />
//           <Clock style={{ marginLeft: '10px', display: 'inline-block', verticalAlign: 'middle' }} />
//         </div>

//         <div style={{ marginBottom: '15px' }}>
//           <label>Who armed the premise?</label><br />
//           <input type="text" onChange={(e) => handleChange('armedBy', e.target.value || 'N/A')} />
//         </div>

//         <div style={{ marginBottom: '15px' }}>
//           <label>Was there any unusual occurrence?</label>
//           <select onChange={(e) => handleChange('unusual', e.target.value)} defaultValue="No">
//             <option value="Yes">Yes</option>
//             <option value="No">No</option>
//           </select>
//         </div>

//         {form.unusual === 'Yes' && (
//           <div style={{ marginBottom: '15px' }}>
//             <label>Additional Remarks</label><br />
//             <input type="text" onChange={(e) => handleChange('remarks', e.target.value)} />
//             {errors.remarks && <p style={{ color: 'red' }}>{errors.remarks}</p>}
//           </div>
//         )}

//         <button type="submit" style={{ backgroundColor: '#6B21A8', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px' }}>
//           Submit Report
//         </button>
//       </form>
//     </div>
//     </div>
//   );
// }
