import { useState } from "react";
// global scss
import Topbar from "./components/Topbar";
// global css
import "./global.scss";
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
// react router dom v6
import { Route, Routes, Navigate } from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
// error page
import NotFound from "./pages/NotFound";

const App = () => {
  const [cartIsEmpty] = useState(true);

  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/service/:id" element={<Service />} />
        <Route
          path="/demo"
          element={
            <div>
              <h3>Demo page</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          }
        />
        {/* error page  */}
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/redirect" element={<Navigate to="/about" />} />
        {/* ________ conditional start _______ */}
        {/* <Route
          path="/checkout"
          element={cartIsEmpty ? <About /> : <Service />} */}

        <Route
          path="/checkout"
          element={
            cartIsEmpty ? <Navigate to="/about" /> : <Navigate to="/service" />
          }
        />

        {/* ________ conditional end _______ */}
      </Routes>
    </>
  );
};

export default App;
