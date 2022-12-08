import "./asset/app.css";
import React from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Asx from "./asx";
import Forms from "./forms";
import App from "./App";
import Navbar from "./navbar";
import App1 from "./app1";
import ReactQuery from "./reactquery";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export const AppContext= createContext();

export function Xtra() {
  return <div> No Idea which page you are looking for</div>;
}

export default function Apps() {
  const client= new QueryClient();
  const [userName, setUserName]=useState("Rahul Singh")
  return (
    <QueryClientProvider client={client}>
    <AppContext.Provider value={{userName, setUserName}}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Asx userName={userName}/>}>
          <Route path="forms" element={<Forms />} />
          <Route path="app" element={<App />} />
        </Route>
        <Route path="app1" element={<App1 userName={userName} setUserName={setUserName}/>} />
        <Route path="*" element={<Xtra />} />
        <Route path="reactquery" element={<ReactQuery />} />
      </Routes>
    </BrowserRouter>
    </AppContext.Provider> 

    </QueryClientProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Apps />
  </>
);
// ReactDOM.render(x,document.getElementById('root'));
