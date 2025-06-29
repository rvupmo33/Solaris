import React from "react";
import "../style/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <h1 className="title">SOLARIS</h1>
      <button onClick={() => navigate("/realms")}>Start Your Journey</button>
    </div>
  );
};

export default Home;
