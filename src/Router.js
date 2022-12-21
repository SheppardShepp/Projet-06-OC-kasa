import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import Propos from "./pages/Propos";
import Found from "./pages/Found";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="/propos" element={<Propos />} />
      <Route path="/*" element={<Found />} />
    </Routes>
  );
}

export default Router;
