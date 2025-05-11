import React, { useEffect, useState } from 'react';
import Footer from './footer';
import {
  Clock,
  LogOut,
  CheckCircle2,
  TimerOff,
  LogOutIcon,
  Search,
} from 'lucide-react';

export default function History() {
  const [history, setHistory] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Simulated visitor data
  useEffect(() => {
    const data = [
  { name: 'John Doe', timeIn: '08:15 AM', timeOut: '10:45 AM' },
  { name: 'Jane Smith', timeIn: '09:00 AM', timeOut: null },
  { name: 'Samuel M.', timeIn: '09:30 AM', timeOut: '11:00 AM' },
  { name: 'Alice Johnson', timeIn: '08:45 AM', timeOut: '10:10 AM' },
  { name: 'Michael Brown', timeIn: '07:50 AM', timeOut: '09:15 AM' },
  { name: 'Laura Wilson', timeIn: '10:00 AM', timeOut: null },
  { name: 'David Lee', timeIn: '11:30 AM', timeOut: '12:45 PM' },
  { name: 'Emma Davis', timeIn: '10:25 AM', timeOut: null },
  { name: 'James King', timeIn: '09:10 AM', timeOut: '10:40 AM' },
  { name: 'Olivia Green', timeIn: '08:00 AM', timeOut: null },
  { name: 'Ethan Scott', timeIn: '07:30 AM', timeOut: '08:30 AM' },
  { name: 'Sophia Clark', timeIn: '09:50 AM', timeOut: null },
  { name: 'Daniel Hall', timeIn: '10:40 AM', timeOut: '12:00 PM' },
  { name: 'Grace Turner', timeIn: '11:10 AM', timeOut: null },
  { name: 'Lucas Young', timeIn: '08:30 AM', timeOut: '09:45 AM' },
  { name: 'Ava Adams', timeIn: '07:45 AM', timeOut: null },
  { name: 'Benjamin Nelson', timeIn: '09:20 AM', timeOut: '10:50 AM' },
  { name: 'Mia Perez', timeIn: '10:05 AM', timeOut: null },
];

    const sortedData = data.sort((a, b) => (a.timeIn < b.timeIn ? 1 : -1));
    setHistory(sortedData);
  }, []);

  const handleSignOut = (index) => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    const updatedHistory = [...history];
    updatedHistory[index].timeOut = currentTime;
    setHistory(updatedHistory);
  };

  const filteredHistory = history.filter((visitor) =>
    visitor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 text-white mt-12 md:mt-28">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 z-0" />

      <div className="flex-grow py-12 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center mb-6 tracking-wide">
            🗂️ Visitor History – Today
          </h1>

          {/* Search Bar */}
          <div className="mb-8 flex items-center bg-white bg-opacity-90 text-gray-800 rounded-full px-4 py-2 shadow-md max-w-md mx-auto">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow bg-transparent outline-none text-sm"
            />
          </div>

          {filteredHistory.length === 0 ? (
            <p className="text-center text-lg">No matching visitors.</p>
          ) : (
            <div className="space-y-6">
              {filteredHistory.map((visitor, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-95 text-gray-800 rounded-xl shadow-lg p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center transition hover:scale-[1.01]"
                >
                  <div className="space-y-2">
                    <p className="text-xl font-semibold flex items-center gap-2">
                      <Clock className="w-5 h-5 text-purple-700" /> {visitor.name}
                    </p>
                    <p className="text-sm flex items-center gap-2 text-purple-600">
                      <LogOut className="w-4 h-4" /> Time In: {visitor.timeIn}
                    </p>
                    <p className="text-sm flex items-center gap-2">
                      {visitor.timeOut ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span className="text-green-600 font-medium">
                            Time Out: {visitor.timeOut}
                          </span>
                        </>
                      ) : (
                        <>
                          <TimerOff className="w-4 h-4 text-red-600" />
                          <span className="text-red-600 font-medium">Not Timed Out</span>
                        </>
                      )}
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-0 flex items-center gap-4">
                    <span
                      className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                        visitor.timeOut
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {visitor.timeOut ? 'Signed Out' : 'Still Inside'}
                    </span>

                    {!visitor.timeOut && (
                      <button
                        onClick={() => handleSignOut(index)}
                        className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold px-4 py-2 rounded-full transition"
                      >
                        <LogOutIcon className="w-4 h-4" />
                        Sign Out
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
{/* 
      <Footer /> */}
    </div>
  );
}
