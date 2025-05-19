import React from 'react';
import {
  AlertTriangle,
  PhoneCall,
  DoorOpen,
  Users,
  FireExtinguisher,
  ArrowRightCircle,
} from 'lucide-react';

export default function Fire() {
  const actions = [
    {
      icon: <AlertTriangle className="text-red-600 w-12 h-12" />,
      title: 'Raise the Alarm',
      description: "Immediately activate the nearest fire alarm or shout 'Fire!' to alert others.",
    },
    {
      icon: <PhoneCall className="text-blue-600 w-12 h-12" />,
      title: 'Call Emergency Services',
      description: 'Dial 999 (or your local emergency number) and provide clear information about the fire.',
    },
    {
      icon: <DoorOpen className="text-yellow-500 w-12 h-12" />,
      title: 'Evacuate the Building',
      description: 'Leave calmly via the nearest safe exit. Do not use elevators.',
    },
    {
      icon: <Users className="text-green-600 w-12 h-12" />,
      title: 'Assemble at Meeting Point',
      description: 'Gather at the designated assembly point for headcount and instructions.',
    },
    {
      icon: <FireExtinguisher className="text-purple-600 w-12 h-12" />,
      title: 'Use Fire Extinguisher (if trained)',
      description: "Only attempt to fight the fire if it's small and you are trained to use an extinguisher.",
    },
    {
      icon: <ArrowRightCircle className="text-gray-600 w-12 h-12" />,
      title: 'Do Not Re-enter',
      description: 'Never go back into a burning building unless cleared by fire authorities.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-red-700 via-orange-600 to-yellow-500 text-white mt-12 md:mt-28">
      <div className="flex-grow px-4 py-10 sm:px-6 lg:px-16">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-12 animate-fadeIn tracking-tight text-shadow-md">
          🔥 Fire Emergency Action Plan
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {actions.map((action, idx) => (
            <div
              key={idx}
              className="bg-opacity-85 backdrop-blur-md rounded-xl shadow-3xl p-10 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 ease-in-out transform hover:shadow-2xl"
            >
              <div className="mb-6 p-3 rounded-full bg-white text-black">
                {action.icon}
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">{action.title}</h2>
              <p className="text-lg text-white/90">{action.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="tel:999"
            className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold py-4 px-12 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Call Emergency Now
          </a>
        </div>
      </div>
    </div>
  );
}
