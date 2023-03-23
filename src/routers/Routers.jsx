import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Routers;
