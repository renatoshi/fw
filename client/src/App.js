import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Search from "./components/Search";
import Register from "./components/Register";

const App = () => {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />   
        <Route path="/login" element={<Login />} />
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route path="/search" element={<Search />} />
        
      </Routes>
    </Router>
  );
};

export default App;
