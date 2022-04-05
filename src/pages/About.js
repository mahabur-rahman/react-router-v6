import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MySelf from "./MySelf";

const About = () => {
  const navigate = useNavigate();
  // console.log(navigate);

  return (
    <>
      <h1 className="text-4xl">About page</h1>
      <button onClick={() => navigate("/")}>Go to home</button>

      {/* Nested Route  */}
      <Routes>
        {/* <Route path="/*" element={<MySelf />} /> */}
        <Route path="me" element={<MySelf />} />
      </Routes>
    </>
  );
};

export default About;
