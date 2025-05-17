import React, { useState } from 'react';

const Occurrence = () => {
  const [unusualOccurrence, setUnusualOccurrence] = useState('No');

  return (
    <div className="min-h-screen from-indigo-200 via-purple-100 to-yellow-50 text-gray-900 font-sans flex items-center justify-center p-4 mt-12 md:mt-28">
      <form className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-purple-800">Occurrence Report</h2>

        {/* Reporting Gate */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            I am reporting the occurrences from:
          </label>
          <select
            className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            defaultValue=""
          >
            <option value="" disabled>Select gate</option>
            <option value="Gate One">Gate One</option>
            <option value="Gate Two">Gate Two</option>
          </select>
        </div>

        {/* Condition of the Premise */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Condition of the Premise
          </label>
          <select className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            defaultValue=""
          >
            <option value="" disabled>Select condition</option>
            <option value="good">In Good Condition</option>
            <option value="situation">There Was a Situation</option>
          </select>
        </div>

        {/* Who Disarmed the Premises */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Who Disarmed the Premises?
          </label>
          <input
            type="text"
            className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter name"
          />
        </div>

        {/* What Time Was the Premise Disarmed */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            What Time Was the Premise Disarmed?
          </label>
          <input
            type="time"
            className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Parking Opening Time */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Parking Opening Time
          </label>
          <input
            type="time"
            className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Who Was Left with Phone 1 and 2 and Their Chargers */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Who Was Left with Phone 1 and 2 and Their Chargers?
          </label>
          <input
            type="text"
            className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter name(s)"
          />
        </div>

        {/* Who Armed the Door */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Who Armed the Premise?
          </label>
          <input
            type="text"
            className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter name"
          />
        </div>

        {/* What Time Was the Door Armed */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            What Time Was the Premise Armed?
          </label>
          <input
            type="time"
            className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Parking Closing Time */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Parking Closing Time
          </label>
          <input
            type="time"
            className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Was There Any Unusual Occurrence */}
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-1">
            Was There Any Unusual Occurrence?
          </label>
          <select
            className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={unusualOccurrence}
            onChange={(e) => setUnusualOccurrence(e.target.value)}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        {/* Description Box if Yes */}
        {unusualOccurrence === 'Yes' && (
          <div>
            <label className="block text-sm font-medium text-purple-700 mb-1">
              Describe the Occurrence
            </label>
            <textarea
              rows={4}
              className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Provide details here..."
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Occurrence;
