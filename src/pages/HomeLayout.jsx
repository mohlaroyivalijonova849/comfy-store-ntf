import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";
import Navbar from "../components/Navbar";

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default HomeLayout;
