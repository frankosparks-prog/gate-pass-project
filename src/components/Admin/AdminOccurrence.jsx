import React, { useEffect, useState } from "react";
import axios from "axios";
import { Edit, Trash, PlusCircle } from "lucide-react";
import { format } from "date-fns";
import { ClipLoader } from "react-spinners";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const gates = ["Gate 1", "Gate 2"];

const AdminOccurrence = () => {
  const [occurrences, setOccurrences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterGate, setFilterGate] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    gate: "Gate 1",
    endTime: "",
    conditionOfPremise: "",
    disarmedBy: "",
    disarmTime: "",
    parkingOpeningTime: "",
    parkingClosingTime: "",
    phonesLeftWith: "",
    armedBy: "",
    armTime: "",
    unusualOccurrence: "No",
    unusualDescription: "",
    remarks: "",
  });

  const fetchOccurrences = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${SERVER_URL}/api/occurrences`);
      setOccurrences(res.data);
    } catch (error) {
      console.error("Failed to fetch occurrences:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOccurrences();
  }, []);

  const filteredOccurrences = occurrences.filter((o) => {
    const gateMatch = filterGate ? o.gate === filterGate : true;
    const dateMatch = filterDate
      ? format(new Date(o.submittedAt), "yyyy-MM-dd") === filterDate
      : true;
    return gateMatch && dateMatch;
  });

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this occurrence?")) {
      try {
        await axios.delete(`${SERVER_URL}/api/occurrences/${id}`);
        setOccurrences((prev) => prev.filter((o) => o._id !== id));
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submittedBy = "64a9d8f2c9e7a4567abcd123"; // Replace with actual user ID
      const payload = { ...formData, submittedBy };
      await axios.post(`${SERVER_URL}/api/occurrences`, payload);
      setShowForm(false);
      setFormData({
        gate: "Gate 1",
        endTime: "",
        conditionOfPremise: "",
        disarmedBy: "",
        disarmTime: "",
        parkingOpeningTime: "",
        parkingClosingTime: "",
        phonesLeftWith: "",
        armedBy: "",
        armTime: "",
        unusualOccurrence: "No",
        unusualDescription: "",
        remarks: "",
      });
      fetchOccurrences();
    } catch (err) {
      console.error("Failed to submit occurrence:", err);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Occurrences Admin</h1>

      {/* Filters and Add Button */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <select
          className="border rounded px-3 py-2"
          value={filterGate}
          onChange={(e) => setFilterGate(e.target.value)}
        >
          <option value="">All Gates</option>
          {gates.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

        <input
          type="date"
          className="border rounded px-3 py-2"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />

        <button
          onClick={() => setShowForm(!showForm)}
          className="ml-auto flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          <PlusCircle size={20} />
          {showForm ? "Cancel" : "Add Occurrence"}
        </button>
      </div>

      {/* Add Occurrence Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 border p-4 rounded bg-white shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <label className="flex flex-col">
              Condition of Premise
              <select
                required
                name="conditionOfPremise"
                value={formData.conditionOfPremise}
                onChange={handleChange}
                className="border rounded px-2 py-1 mt-1"
              >
                <option value="">Select</option>
                <option value="good">In Good Condition</option>
                <option value="situation">There Was a Situation</option>
              </select>
            </label>

            <label className="flex flex-col">
              Disarmed By
              <input
                name="disarmedBy"
                type="text"
                value={formData.disarmedBy}
                onChange={handleChange}
                className="border rounded px-2 py-1 mt-1"
                placeholder="Enter name"
              />
            </label>

            <label className="flex flex-col">
              Disarm Time
              <input
                name="disarmTime"
                type="time"
                value={formData.disarmTime}
                onChange={handleChange}
                className="border rounded px-2 py-1 mt-1"
              />
            </label>

            <label className="flex flex-col">
              Parking Opening Time
              <input
                name="parkingOpeningTime"
                type="time"
                value={formData.parkingOpeningTime}
                onChange={handleChange}
                className="border rounded px-2 py-1 mt-1"
              />
            </label>

            <label className="flex flex-col">
              Parking Closing Time
              <input
                name="parkingClosingTime"
                type="time"
                value={formData.parkingClosingTime}
                onChange={handleChange}
                className="border rounded px-2 py-1 mt-1"
              />
            </label>

            <label className="flex flex-col md:col-span-2">
              Who Was Left with Phone 1 and 2 and Their Chargers
              <input
                name="phonesLeftWith"
                type="text"
                value={formData.phonesLeftWith}
                onChange={handleChange}
                className="border rounded px-2 py-1 mt-1"
                placeholder="Enter name(s)"
              />
            </label>

            <label className="flex flex-col">
              Armed By
              <input
                name="armedBy"
                type="text"
                value={formData.armedBy}
                onChange={handleChange}
                className="border rounded px-2 py-1 mt-1"
                placeholder="Enter name"
              />
            </label>

            <label className="flex flex-col">
              Arm Time
              <input
                name="armTime"
                type="time"
                value={formData.armTime}
                onChange={handleChange}
                className="border rounded px-2 py-1 mt-1"
              />
            </label>

            <label className="flex flex-col">
              Gate
              <select
                name="gate"
                value={formData.gate}
                onChange={handleChange}
                className="border rounded px-2 py-1 mt-1"
              >
                {gates.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col">
              End Time
              <input
                required
                type="datetime-local"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                className="border rounded px-2 py-1 mt-1"
              />
            </label>

            <label className="flex flex-col">
              Was There Any Unusual Occurrence?
              <select
                name="unusualOccurrence"
                value={formData.unusualOccurrence}
                onChange={handleChange}
                className="border rounded px-2 py-1 mt-1"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </label>

            {formData.unusualOccurrence === "Yes" && (
              <label className="flex flex-col md:col-span-2">
                Describe the Occurrence
                <textarea
                  name="unusualDescription"
                  value={formData.unusualDescription}
                  onChange={handleChange}
                  className="border rounded px-2 py-1 mt-1"
                  rows={3}
                />
              </label>
            )}

            <label className="flex flex-col md:col-span-2">
              Remarks
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                className="border rounded px-2 py-1 mt-1"
                rows={2}
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      )}

      {/* Occurrences Table */}
      {loading ? (
        <div className="p-6 flex justify-center items-center h-40">
          <ClipLoader color="#8b5cf6" size={50} />
        </div>
      ) : filteredOccurrences.length === 0 ? (
        <p>No occurrences found.</p>
      ) : (
        <div className="overflow-x-auto shadow rounded bg-white">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Gate</th>
                <th className="border px-4 py-2 text-left">End Time</th>
                <th className="border px-4 py-2 text-left">Condition</th>
                <th className="border px-4 py-2 text-left">Disarmed By</th>
                <th className="border px-4 py-2 text-left">Armed By</th>
                <th className="border px-4 py-2 text-left">Submitted</th>
                <th className="border px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOccurrences.map((occ) => (
                <tr key={occ._id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{occ.gate}</td>
                  <td className="border px-4 py-2">
                    {format(new Date(occ.endTime), "dd/MM/yyyy HH:mm")}
                  </td>
                  <td className="border px-4 py-2">{occ.conditionOfPremise}</td>
                  <td className="border px-4 py-2">{occ.disarmedBy || "-"}</td>
                  <td className="border px-4 py-2">{occ.armedBy || "-"}</td>
                  <td className="border px-4 py-2">
                    {format(new Date(occ.submittedAt), "dd/MM/yyyy HH:mm")}
                  </td>
                  <td className="border px-4 py-2 text-center space-x-2">
                    <button
                      onClick={() => alert("Edit functionality coming soon!")}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit Occurrence"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(occ._id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete Occurrence"
                    >
                      <Trash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminOccurrence;
