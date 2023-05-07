import "./index.css";
import React ,{useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Heropage from "./Components/Heropage";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Notes from "./Components/Notes";
function App() {
  const [userName, setUserName] = useState(
    window.localStorage.getItem("username")
  );

  return (
    <>
      <Router>
        <Navbar userName={userName} setUserName={setUserName} />
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
