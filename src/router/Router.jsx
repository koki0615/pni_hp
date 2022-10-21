import React from "react";
import { Routes, Route } from "react-router-dom";
import { QContainer } from "../Container";
import { Page1 } from "../Page/Page1";
import { Page2 } from "../Page/Page2";
import { Page3 } from "../Page/Page3";


export const SRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<QContainer />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
  );
}