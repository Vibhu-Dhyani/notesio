import { useState } from "react";
import "./App.css";
import Authentication from "./Pages/Auth/Authentication";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Components/LogIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="app">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Authentication />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
