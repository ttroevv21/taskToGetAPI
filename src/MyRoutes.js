import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "../src/pages/Main";
const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
