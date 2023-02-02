import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import { MenuNavigation } from "../components/MenuNavigation";
import { Fun } from "../pages/Fun";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MenuNavigation />
      <Header />
      <div className="ml-0 md:ml-20">
        <Routes>
          <Route path="/fun" element={<Home />} />
          <Route path={`/fun/${"movies"}`} element={<Home />} />
          <Route path={`/fun/${"series"}`} element={<Home />} />
          <Route path={`/fun/${"top"}`} element={<Home />} />
          <Route path={`/fun/${"lasted"}`} element={<Home />} />
          <Route path="*" element={<Navigate to="/fun" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
