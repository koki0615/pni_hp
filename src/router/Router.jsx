import React from "react";
import { Routes, Route } from "react-router-dom";
import { QContainer } from "../Pages/Container";
import { Page1 } from "../Pages/Profile";
import { Page2 } from "../Pages/Business";
import { Page3 } from "../Pages/New";


export const SRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<QContainer />} />
        <Route path="/companyprofile" element={<Page1 />} />
        <Route path="/business" element={<Page2 />} />
        <Route path="/new" element={<Page3 />} />
      </Routes>
  );
}