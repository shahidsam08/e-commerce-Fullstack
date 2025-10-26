import React from "react";
import Navigation from "../../components/Navigation";
import Body_page from "./Body_page";
import { BrowserRouter } from "react-router";
import { Route, Routes } from "react-router";
import Man_section from "../Sections_page/Man_section/Man_section";

function Homepage() {
  return (
    <div>
      <Navigation />
      <Body_page />
    </div>
  );
}

export default Homepage;

// This is the main file when the website open, this file open first.
