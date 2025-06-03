import React from "react";

import "./layout.css";
import { Aside } from "../Aside/aside";
import { Outlet, useNavigate } from "react-router-dom";
export const LayoutPage = () => {
  const navigate = useNavigate();
  const isLogged = () => {
    return localStorage.getItem("IsLoggedIn") == "true";
  };
  if (!isLogged()) navigate("/");

  return (
    <>
      <div className="layout-body">
        <Aside></Aside>

        <main className="layout-main">
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
};
