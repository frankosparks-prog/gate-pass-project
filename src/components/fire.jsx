import React from 'react';
import {
  AlertTriangle,
  PhoneCall,
  DoorOpen,
  Users,
  FireExtinguisher,
  ArrowRightCircle,
} from 'lucide-react';
import Footer from './footer'; // ✅ Make sure this is the correct path

export default function Fire() {
  const actions = [
    {
      icon: <AlertTriangle className="text-red-600 w-8 h-8" />,
      title: 'Raise the Alarm',
      description: "Immediately activate the nearest fire alarm or shout 'Fire!' to alert others.",
    },
    {
      icon: <PhoneCall className="text-blue-600 w-8 h-8" />,
      title: 'Call Emergency Services',
      description: 'Dial 999 (or your local emergency number) and provide clear information about the fire.',
    },
    {
      icon: <DoorOpen className="text-yellow-500 w-8 h-8" />,
      title: 'Evacuate the Building',
      description: 'Leave calmly via the nearest safe exit. Do not use elevators.',
    },
    {
      icon: <Users className="text-green-600 w-8 h-8" />,
      title: 'Assemble at Meeting Point',
      description: 'Gather at the designated assembly point for headcount and instructions.',
    },
    {
      icon: <FireExtinguisher className="text-purple-600 w-8 h-8" />,
      title: 'Use Fire Extinguisher (if trained)',
      description: "Only attempt to fight the fire if it's small and you are trained to use an extinguisher.",
    },
    {
      icon: <ArrowRightCircle className="text-gray-600 w-8 h-8" />,
      title: 'Do Not Re-enter',
      description: 'Never go back into a burning building unless cleared by fire authorities.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-red-800 via-yellow-700 to-orange-600 text-white">
      <div className="flex-grow px-4 py-10 sm:px-6 lg:px-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 underline underline-offset-4">
          🔥 Fire Emergency Action Plan
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {actions.map((action, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{action.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{action.title}</h2>
              <p className="text-sm text-white/90">{action.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Footer added here */}
      <Footer />
    </div>
  );
}
