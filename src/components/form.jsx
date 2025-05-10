import React, { useState } from 'react';
import Footer from './footer';

export default function VisitorForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    idNumber: '',
    vehicleReg: '',
    company: '',
    visitorType: '',
    phone: '',
    officer: '',
    department: '',
    purpose: '',
  });

  const [timeOut, setTimeOut] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleTimeOut = () => {
    const now = new Date().toLocaleTimeString();
    setTimeOut(now);
    console.log('Time Out recorded:', now);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative flex-grow w-full flex items-center justify-center px-4 py-12">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVnPjKj2cmBWbKp5QNYij3ckAFIXEKY_eAkw&s')`,
          }}
        ></div>

        <div className="relative z-10 w-full max-w-4xl shadow-lg rounded-lg p-6 sm:p-10 text-black bg-transparent">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
            Visitor Registration Form
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-black">
            <input
              type="text"
              name="name"
              placeholder="Name of Visitor"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-2 border-purple-600 p-3 rounded-md bg-white bg-opacity-90"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address of Visitor"
              value={formData.address}
              onChange={handleChange}
              className="w-full border-2 border-purple-600 p-3 rounded-md bg-white bg-opacity-90"
              required
            />
            <input
              type="text"
              name="idNumber"
              placeholder="ID Number"
              value={formData.idNumber}
              onChange={handleChange}
              className="w-full border-2 border-purple-600 p-3 rounded-md bg-white bg-opacity-90"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full border-2 border-purple-600 p-3 rounded-md bg-white bg-opacity-90"
              required
            />
            <input
              type="text"
              name="visitorType"
              placeholder="Type of Visitor (e.g., Contractor, Client)"
              value={formData.visitorType}
              onChange={handleChange}
              className="w-full border-2 border-purple-600 p-3 rounded-md bg-white bg-opacity-90"
              required
            />
            <input
              type="text"
              name="vehicleReg"
              placeholder="Vehicle Registration Number"
              value={formData.vehicleReg}
              onChange={handleChange}
              className="w-full border-2 border-purple-600 p-3 rounded-md bg-white bg-opacity-90"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-2 border-purple-600 p-3 rounded-md bg-white bg-opacity-90"
              required
            />
            <input
              type="text"
              name="officer"
              placeholder="Officer to be Seen"
              value={formData.officer}
              onChange={handleChange}
              className="w-full border-2 border-purple-600 p-3 rounded-md bg-white bg-opacity-90"
              required
            />
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full border-2 border-purple-600 p-3 rounded-md bg-white bg-opacity-90"
              required
            >
              <option value="">Select Department</option>
              <option value="Logistics">Logistics</option>
              <option value="Human Resource">Human Resource</option>
              <option value="Production">Production</option>
              <option value="Finance">Finance</option>
              <option value="Sales and Marketing">Sales and Marketing</option>
              <option value="BDS">BDS</option>
              <option value="Directors Office">Directors Office</option>
            </select>
            <textarea
              name="purpose"
              placeholder="Purpose of Visit"
              value={formData.purpose}
              onChange={handleChange}
              className="w-full border-2 border-purple-600 p-3 rounded-md bg-white bg-opacity-90 sm:col-span-2"
              rows="3"
              required
            />
            <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:col-span-2 justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleTimeOut}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition w-full sm:w-auto"
              >
                Time Out
              </button>
            </div>
            {timeOut && (
              <p className="text-center text-green-600 sm:col-span-2 mt-4">
                Visitor signed out at: {timeOut}
              </p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
