// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Correctly import components with capitalized names
import Contacts from './components/contacts';

import Form from './components/form';
import Home from './components/home';
import Navbar from './components/navbar';
import History from './components/history';
import Fire from './components/fire';
import About from './components/about';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/form" element={<Form />} />
        <Route path="/history" element={<History />} />
        <Route path="/fire" element={<Fire />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
