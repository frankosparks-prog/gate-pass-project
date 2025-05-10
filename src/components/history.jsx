import React, { useEffect, useState } from 'react';
import Footer from './footer'; // ✅ Import Footer component

export default function History() {
  const [history, setHistory] = useState([]);

  // Simulated visitor data
  useEffect(() => {
    const data = [
      {
        name: 'John Doe',
        timeIn: '08:15 AM',
        timeOut: '10:45 AM',
      },
      {
        name: 'Jane Smith',
        timeIn: '09:00 AM',
        timeOut: null,
      },
      {
        name: 'Samuel M.',
        timeIn: '09:30 AM',
        timeOut: '11:00 AM',
      },
    ];

    const sortedData = data.sort((a, b) => (a.timeIn < b.timeIn ? 1 : -1));
    setHistory(sortedData);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-purple-800 text-white">
      <div className="flex-grow py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Visitor History - Today</h1>
          
          {history.length === 0 ? (
            <p className="text-center text-lg">No visitors yet today.</p>
          ) : (
            <div className="space-y-4">
              {history.map((visitor, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-90 text-black rounded-lg shadow-md p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center"
                >
                  <div>
                    <p className="font-semibold text-lg">{visitor.name}</p>
                    <p className="text-sm">Time In: {visitor.timeIn}</p>
                    <p className="text-sm">
                      Time Out:{' '}
                      {visitor.timeOut ? (
                        <span className="text-green-600 font-medium"> {visitor.timeOut} ✅</span>
                      ) : (
                        <span className="text-red-600 font-medium"> Not Timed Out ⏳</span>
                      )}
                    </p>
                  </div>

                  {visitor.timeOut && (
                    <div className="mt-3 sm:mt-0">
                      <span className="inline-block bg-purple-200 text-purple-800 font-bold px-4 py-1 rounded-full text-sm">
                        Timed Out
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ✅ Add Footer here */}
      <Footer />
    </div>
  );
}
