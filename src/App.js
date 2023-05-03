import "./index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Heropage from "./Components/Heropage";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Notes from "./Components/Notes";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Heropage />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
