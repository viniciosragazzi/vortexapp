import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import { MenuNavigation } from "../components/MenuNavigation";
import { Home } from "../pages/Home";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MenuNavigation />
      <Header />
      <div className="ml-0 md:ml-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
