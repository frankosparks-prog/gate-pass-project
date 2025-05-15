import React, { useEffect, useState } from "react";
import axios from "axios";
import { Edit, Trash, PlusCircle, Filter } from "lucide-react";
import { format } from "date-fns";
import { ClipLoader } from 'react-spinners';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const gates = ["Gate 1", "Gate 2"];

const AdminOccurrence = () => {
  const [occurrences, setOccurrences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterGate, setFilterGate] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    endTime: "",
    description: "",
    remarks: "",
    gate: "Gate 1",
  });

  // Fetch occurrences on mount
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

  // Filter occurrences by gate and date
  const filteredOccurrences = occurrences.filter((o) => {
    const gateMatch = filterGate ? o.gate === filterGate : true;
    const dateMatch = filterDate
      ? format(new Date(o.submittedAt), "yyyy-MM-dd") === filterDate
      : true;
    return gateMatch && dateMatch;
  });

  // Handle delete
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

  // Handle form input change
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submit new occurrence
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assume submittedBy comes from auth/user context - hardcoded here for demo
      const submittedBy = "64a9d8f2c9e7a4567abcd123"; // replace with actual user id
      const payload = { ...formData, submittedBy };
      await axios.post(`${SERVER_URL}/api/occurrences`, payload);
      setShowForm(false);
      setFormData({ endTime: "", description: "", remarks: "", gate: "Gate 1" });
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
        <form
          onSubmit={handleSubmit}
          className="mb-6 border p-4 rounded bg-white shadow"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <label className="flex flex-col md:col-span-2">
              Description
              <textarea
                required
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border rounded px-2 py-1 mt-1 resize-none"
                rows={3}
              />
            </label>

            <label className="flex flex-col md:col-span-2">
              Remarks
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                className="border rounded px-2 py-1 mt-1 resize-none"
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
      <ClipLoader color="#ec4899" size={50} />
    </div>
      ) : filteredOccurrences.length === 0 ? (
        <p>No occurrences found.</p>
      ) : (
        <div className="overflow-x-auto shadow rounded bg-white">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Description</th>
                <th className="border px-4 py-2 text-left">Remarks</th>
                <th className="border px-4 py-2 text-left">Gate</th>
                <th className="border px-4 py-2 text-left">End Time</th>
                <th className="border px-4 py-2 text-left">Submitted By</th>
                <th className="border px-4 py-2 text-left">Submitted At</th>
                <th className="border px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOccurrences.map((occ) => (
                <tr key={occ._id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{occ.description}</td>
                  <td className="border px-4 py-2">{occ.remarks || "-"}</td>
                  <td className="border px-4 py-2">{occ.gate}</td>
                  <td className="border px-4 py-2">
                    {format(new Date(occ.endTime), "dd/MM/yyyy HH:mm")}
                  </td>
                  <td className="border px-4 py-2">
                    {occ.submittedBy?.username || occ.submittedBy?.email || "Unknown"}
                  </td>
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
