import React from "react";
import { Link } from "react-router-dom";
import { Handshake, BarChart, Briefcase, Mail, Phone } from "lucide-react";
import Footer from "./footer";

const profiles = [
  {
    name: "John Doe",
    role: "CEO & Founder | A leader in innovative agricultural solutions.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    email: "john.doe@agrofirm.com",
    phone: "+254700123456",
  },
  {
    name: "Jane Smith",
    role: "Chief Agronomist | Expert in sustainable crop technologies.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "jane.smith@agrofirm.com",
    phone: "+254711234567",
  },
  {
    name: "Mike Johnson",
    role: "Head of Veterinary Services | Specialist in animal welfare.",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    email: "mike.johnson@agrofirm.com",
    phone: "+254722345678",
  },
];

const About = () => {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden font-light italic animate-fadeIn mt-12 md:mt-32">
      {/* Hero Section */}
      <div
        className="w-full min-h-[50vh] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-xl">
          <h1 className="italic text-3xl sm:text-4xl md:text-5xl text-white font-semibold mb-3 animate-fadeIn">
            About Our Company
          </h1>
          <p className="italic text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl mx-auto animate-fadeInDelay">
            Empowering modern agriculture through innovative, sustainable, and quality solutions.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="w-full py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="italic text-3xl md:text-4xl font-bold text-center mb-10 text-purple-700 animate-fadeIn">
            Our Mission & Values
          </h2>
          <p className="italic text-base text-gray-700 mb-10 text-center leading-relaxed max-w-3xl mx-auto animate-fadeInDelay">
            We are dedicated to supporting farmers, pet owners, and agribusinesses with top-quality products.
            From animal drugs and pet food to pesticides and hybrid seeds, our mission is to enhance
            productivity, sustainability, and animal welfare.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fadeInDelay2">
            <div className="bg-purple-50 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition duration-300">
              <Handshake size={36} className="text-purple-700 mb-3 mx-auto" />
              <h3 className="italic text-lg font-semibold text-purple-800">Trusted Quality</h3>
              <p className="text-sm text-gray-600 mt-2">
                All our products meet the highest standards in animal health and crop care.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition duration-300">
              <BarChart size={36} className="text-purple-700 mb-3 mx-auto" />
              <h3 className="italic text-lg font-semibold text-purple-800">Innovative Solutions</h3>
              <p className="text-sm text-gray-600 mt-2">
                Blending science and practice for cutting-edge agro solutions.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition duration-300">
              <Briefcase size={36} className="text-purple-700 mb-3 mx-auto" />
              <h3 className="italic text-lg font-semibold text-purple-800">Customer Support</h3>
              <p className="text-sm text-gray-600 mt-2">
                Guidance, after-sale support, and tailored expert advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Contacts Section */}
      <section className="w-full py-16 px-6 bg-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="italic text-3xl font-bold text-center text-purple-800 mb-12 animate-fadeIn">
            Inquiry Staff
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 animate-fadeInDelay3">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="italic text-xl font-semibold text-purple-800">{profile.name}</h3>
                <p className="italic text-sm text-gray-600 mt-1">{profile.role}</p>

                <div className="mt-4 space-y-2">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex justify-center items-center gap-2 text-sm text-purple-700 hover:underline"
                  >
                    <Mail size={18} />
                    <span>{profile.email}</span>
                  </a>
                  <a
                    href={`tel:${profile.phone}`}
                    className="flex justify-center items-center gap-2 text-sm text-purple-700 hover:underline"
                  >
                    <Phone size={18} />
                    <span>{profile.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <div className="text-center mt-16 animate-fadeInDelay4">
        <Link
          to="/services"
          className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
        >
          Discover Our Services
        </Link>
      </div> */}

      {/* Footer */}
      {/* <div className="w-full mt-20">
        <Footer />
      </div> */}

      {/* Floating Help Button */}
      <a
        href="mailto:support@agrofirm.com" // Replace with your support email
        className="fixed bottom-6 right-6 bg-purple-700 hover:bg-purple-800 text-white p-4 rounded-full shadow-lg flex items-center justify-center animate-bounce transition-all duration-300"
        title="Contact Support"
      >
        <Mail size={28} />
      </a>
    </div>
  );
};

export default About;
