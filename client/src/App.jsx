import { useState } from "react";
import "./App.css";
import Authentication from "./Pages/Auth/Authentication";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import MyNotes from "./Pages/MyNotes/MyNotes";

function App() {
  return (
    <>
      <div className="app">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Authentication />} exact />
            <Route path="/mynotes" element={<MyNotes />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
