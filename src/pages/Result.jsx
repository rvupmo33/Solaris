import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../style/Result.css";
import chaosBadge from "../assets/Chaos-badge.png";

const Result = () => {
  const navigate = useNavigate();
  const { emotion } = useParams();

  return (
    <div className="page">
      <div className="background-visuals">
        <div className="petals" />
        <div className="stars" />
      </div>

      <h1 className="result-title">You’ve reached the Celestial Garden</h1>
      <p className="result-message">
        Your journey through the {emotion} realm is complete, breathe in the
        peace you’ve created...
      </p>

      <img className="badge-cont1" src={chaosBadge} alt="" />

      <div className="result-buttons">
        <button className="btn" onClick={() => navigate("/realms")}>
          ᨒ Explore Another Realm
        </button>
        <button className="btn" onClick={() => navigate(`/${emotion}/badges`)}>
          ⍟ View All Badges
        </button>
        <button className="btn" onClick={() => navigate("/reflect")}>
          ☘︎ Reflect
        </button>
        <button className="btn" onClick={() => navigate(`/${emotion}/tools`)}>
          ✎ Learn More
        </button>
      </div>
    </div>
  );
};

export default Result;
