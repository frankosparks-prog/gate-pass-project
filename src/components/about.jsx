import React from "react";
import { Link } from "react-router-dom";
import { Handshake, BarChart, Briefcase } from "lucide-react";
import Footer from "./footer";

const profiles = [
  {
    name: "John Doe",
    role: "CEO & Founder | A leader in innovative agricultural solutions.",
    image: "https://www.example.com/path-to-your-image.jpg",
  },
  {
    name: "Jane Smith",
    role: "Chief Agronomist | Expert in sustainable crop technologies.",
    image: "https://www.example.com/path-to-your-image.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Head of Veterinary Services | Specialist in animal welfare.",
    image: "https://www.example.com/path-to-your-image.jpg",
  },
];

const About = () => {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden font-light italic animate-fadeIn">

      {/* Optimized Banner Section */}
      <div className="w-full min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] bg-gradient-to-r from-purple-900 to-purple-900 flex items-center justify-center text-center px-4">
        <div>
          <h1 className="italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-2 animate-fadeIn">
            About Our Company
          </h1>
          <p className="italic text-sm sm:text-base md:text-lg text-white max-w-2xl mx-auto animate-fadeInDelay">
            Empowering modern agriculture through innovative, sustainable, and quality solutions.
          </p>
        </div>
      </div>

      {/* About Content Section */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-8 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="italic text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-green-700 animate-fadeIn">
            Our Mission & Values
          </h2>

          <p className="italic text-sm sm:text-base md:text-lg text-gray-700 mb-10 leading-relaxed animate-fadeInDelay">
            We are dedicated to supporting farmers, pet owners, and agribusinesses with top-quality products. From animal drugs and pet food to pesticides and hybrid seeds, our mission is to enhance productivity, sustainability, and animal welfare.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 animate-fadeInDelay2">
            <div className="bg-green-50 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-center">
              <Handshake size={36} className="text-green-700 mb-3 mx-auto"/>
              <h3 className="italic text-lg font-semibold text-green-800 mb-1">Trusted Quality</h3>
              <p className="italic text-gray-600 text-sm">
                We ensure all our products meet the highest standards in animal health, crop care, and nutrition.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-center">
              <BarChart size={36} className="text-green-700 mb-3 mx-auto"/>
              <h3 className="italic text-lg font-semibold text-green-800 mb-1">Innovative Solutions</h3>
              <p className="italic text-gray-600 text-sm">
                We integrate modern science with practical farming needs to offer cutting-edge agro solutions.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-center">
              <Briefcase size={36} className="text-green-700 mb-3 mx-auto"/>
              <h3 className="italic text-lg font-semibold text-green-800 mb-1">Customer Support</h3>
              <p className="italic text-gray-600 text-sm">
                Our dedicated team offers guidance, after-sale support, and expert advice tailored to your needs.
              </p>
            </div>
          </div>

          {/* Profiles Section */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center animate-fadeInDelay3">
            {profiles.map((profile, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden shadow-md">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="italic text-xl font-semibold text-green-800">{profile.name}</h3>
                <p className="italic text-sm text-gray-600 mt-2">{profile.role}</p>
              </div>
            ))}
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-16 text-center animate-fadeInDelay4">
            <Link
              to="/services"
              className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              Discover Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default About;
