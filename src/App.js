
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Correctly import components with capitalized names
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


const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* <Route exact path="/" element={<Login />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/form" element={<Form />} />
        <Route path="/history" element={<History />} />
        <Route path="/fire" element={<Fire />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
