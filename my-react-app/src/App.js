import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import SideBar from "./SideBar"

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

// function Contact() {
//   return <h2>Contact Page</h2>;
// }

function Main() {
  return (
      <div>
        <img src="/TableTennisMain.png" className="main" alt="logo" />
        <div className="main-header">
          <img id="main-logo" src="/main-logo.png"/>
          <p id="header-font">Table Tennis</p>
        </div>
        <div className="main-font-container">
          {/* <p className="main-font"> */}
            Welcome <br></br> 42 transcendence
          {/* </p> */}
        </div>
        <div className="main-auth-container">
          <button className="button"><img id="google-icon" src="/google-icon.png"/>continue with google</button>
          <button className="button" id="button-42"><img id="four-icon" src="/42-icon.png" />continue with intra</button>
        </div>
      </div>
  );
}

function App() {
  useEffect(() => {
    window.onpopstate = () => {
      // 뒤로가기 후 서버에서 페이지를 다시 요청
      // console.log("pathname: ", window.location.pathname);
      window.location.href = window.location.pathname;
    };
  }, []);

  return (
    <Router>
      <nav id="nav-bar">
        <Link to="/">Main</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/sidebar">SideBar</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sidebar" element={<SideBar />} />
      </Routes>
    </Router>
  );
}

export default App;
