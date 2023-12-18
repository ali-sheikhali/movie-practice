import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import HomeMovie from "./components/pages/HomeMovie";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/movie-details/:id" Component={HomeMovie} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
