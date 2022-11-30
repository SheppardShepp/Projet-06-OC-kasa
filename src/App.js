import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home';
import Logement from "./pages/Logement";
import Propos from "./pages/Propos";
import Found from "./pages/Found";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logement/:id' element={<Logement />} />
        <Route path='/propos' element={<Propos />} />
        <Route path='/Found/*' element={<Found />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
