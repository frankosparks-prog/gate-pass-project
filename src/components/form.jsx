import React, { useState } from "react";
import Footer from "./footer";
import {
  User,
  MapPin,
  IdCard,
  Car,
  Building2,
  Phone,
  UserCheck,
  BookOpen,
  ClipboardCheck,
} from "lucide-react";

export default function VisitorForm() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    idNumber: "",
    vehicleReg: "",
    company: "",
    visitorType: "",
    phone: "",
    officer: "",
    department: "",
    purpose: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const InputField = ({ icon: Icon, ...props }) => (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-600" />
      <input
        {...props}
        className="w-full pl-10 border-2 border-indigo-400 p-3 rounded-lg bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-indigo-600 hover:shadow-lg transition"
        required
      />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br  from-indigo-200 via-purple-100 to-yellow-50 text-gray-900 font-sans mt-12 md:mt-24">
      <div className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="relative w-full max-w-5xl shadow-2xl rounded-3xl p-10 sm:p-12 bg-white/60 backdrop-blur-2xl border border-white/40">
          <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">
            Visitor Registration
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base"
          >
            <InputField
              icon={User}
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            <InputField
              icon={MapPin}
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <InputField
              icon={IdCard}
              name="idNumber"
              placeholder="ID Number"
              value={formData.idNumber}
              onChange={handleChange}
            />
            <InputField
              icon={Building2}
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
            />
            <InputField
              icon={ClipboardCheck}
              name="visitorType"
              placeholder="Visitor Type (e.g. Contractor)"
              value={formData.visitorType}
              onChange={handleChange}
            />
            <InputField
              icon={Car}
              name="vehicleReg"
              placeholder="Vehicle Registration"
              value={formData.vehicleReg}
              onChange={handleChange}
            />
            <InputField
              icon={Phone}
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <InputField
              icon={UserCheck}
              name="officer"
              placeholder="Officer to Visit"
              value={formData.officer}
              onChange={handleChange}
            />

            <div className="relative">
              <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-600" />
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full pl-10 border-2 border-indigo-400 p-3 rounded-lg bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-indigo-600 hover:shadow-lg transition"
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
            </div>

            <textarea
              name="purpose"
              placeholder="Purpose of Visit"
              value={formData.purpose}
              onChange={handleChange}
              className="w-full border-2 border-indigo-400 p-3 rounded-lg bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-indigo-600 hover:shadow-lg transition sm:col-span-2"
              rows="4"
              required
            />

            <div className="flex justify-center sm:col-span-2 mt-6">
              <button
                type="submit"
                className="bg-indigo-700 text-white px-10 py-3 rounded-full hover:bg-indigo-800 shadow-lg transition font-semibold text-lg tracking-wide"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
