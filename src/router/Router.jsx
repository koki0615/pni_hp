import React from "react";
import { Routes, Route } from "react-router-dom";
import { QContainer } from "../Pages/Container";
import { Page2 } from "../Pages/Business";
import { Page3 } from "../Pages/New";
import Employee from "../Pages/Employee";


export const SRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<QContainer />} />
        <Route path="/profile" element={<Employee />} />
        <Route path="/business" element={<Page2 />} />
        <Route path="/new" element={<Page3 />} />
      </Routes>
  );
}