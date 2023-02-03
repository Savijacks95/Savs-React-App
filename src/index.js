import React from "react";
import ReactDOM from "react-dom/client";

import Search from "./Search";
import Temp from "./Temp";
import Link from "./link";
import Description from "./Description";
import HiLo from "./Hi-Lo";

import "./App.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Link />
    <Search />
    <Temp />
    <Description />
    <HiLo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
