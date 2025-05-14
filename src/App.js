
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// // Correctly import components with capitalized names
// import Contacts from './components/contacts';

// import Form from './components/form';
// import Navbar from './components/navbar';
// import History from './components/history';
// import Fire from './components/fire';
// import About from './components/about';
// import Login from './components/login';
// import Home from './components/home';
// import Footer from './components/footer';
// import ScrollToTop from './components/scrollTop';
// import Occurrence from './components/Occurrence';
// import { Toaster } from 'react-hot-toast';

// const App = () => {
//   return (
//     <div>
//       <ScrollToTop />
//       <Toaster
//         position="top-right"
//         reverseOrder={false}
//         toastOptions={{
//           success: {
//             style: {
//               background: '#D1FAE5', // light green
//               color: '#065F46',      // dark green text
//             },
//           },
//           error: {
//             style: {
//               background: '#FEE2E2', // light red
//               color: '#991B1B',      // dark red text
//             },
//           },
//   }}
// />
//       <Navbar />
//       <Routes>
//         {/* <Route exact path="/" element={<Login />} /> */}
//         <Route exact path="/" element={<Home />} />
//         <Route path="/contact" element={<Contacts />} />
//         <Route path="/form" element={<Form />} />
//         <Route path="/history" element={<History />} />
//         <Route path="/fire" element={<Fire />} />
//         <Route path="/about" element={<About />} />
//          <Route path="/occurrence" element={<Occurrence />} />
        
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Contacts from './components/contacts';
import Form from './components/form';
import Navbar from './components/navbar';
import History from './components/history';
import Fire from './components/fire';
import About from './components/about';
import Login from './components/login';
import Home from './components/home';
import Footer from './components/footer';
import ScrollToTop from './components/scrollTop';
import Occurrence from './components/Occurrence';
import { Toaster } from 'react-hot-toast';
import Signup from './components/SignUp';
import NotFound from './components/NotFound';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
  return localStorage.getItem('token') ? true : false;
});

  return (
    <div>
      <ScrollToTop />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: '#D1FAE5',
              color: '#065F46',
            },
          },
          error: {
            style: {
              background: '#FEE2E2',
              color: '#991B1B',
            },
          },
        }}
      />

      {/* Show Navbar only after login */}
      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}

      <Routes>
        {/* Login Route */}
        <Route
          path="/"
          element={<Login onLogin={() => setIsLoggedIn(true)} />}
        />

        {/* Protected Routes */}
        {isLoggedIn && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/form" element={<Form />} />
            <Route path="/history" element={<History />} />
            <Route path="/fire" element={<Fire />} />
            <Route path="/about" element={<About />} />
            <Route path="/occurrence" element={<Occurrence />} />
            
          </>
          
        )}
        <Route path="*" element={<NotFound  />} />
      </Routes>

      {/* Show footer only after login */}
      {isLoggedIn && <Footer />}
    </div>
  );
};

export default App;
