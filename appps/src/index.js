import "./asset/app.css";
import React from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Asx from "./asx";
import Forms from "./forms";
import App from "./App";
import Navbar from "./navbar";
import App1 from "./app1";

const x = <h1>hello</h1>;

export function Xtra() {
  return <div> No Idea which page you are looking for</div>;
}

export default function Apps() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Asx />}>
          <Route path="forms" element={<Forms />} />
          <Route path="app" element={<App />} />
        </Route>
        <Route path="app1" element={<App1 />} />
        <Route path="*" element={<Xtra />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Apps />
  </>
);
// ReactDOM.render(x,document.getElementById('root'));
