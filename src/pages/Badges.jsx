import React from "react";
import "../style/Badges.css";
import ChaosBadge from "../assets/Chaos-badge.png";
import Lock from "../assets/badge.png";
import { useNavigate } from "react-router-dom";

const Badges = () => {
  const navigate = useNavigate();
  const badges = [
    { icon: ChaosBadge, name: "Caverns of Chaos", emotion: "Anxiety" },
    { icon: Lock, name: "Isle of Isolation", emotion: "Sadness" },
    { icon: Lock, name: "Volcano of Vex", emotion: "Anger" },
    { icon: Lock, name: "Forest of Fog", emotion: "Overwhelm" },
    { icon: Lock, name: "Mirror Maze", emotion: "Uncertainty" },
  ];
  return (
    <div className="page">
      <h2 className="realm-title">Your Collected Badges</h2>
      <div className="card-grid">
        {badges.map((badges, idx) => (
          <div key={idx} className="emotion-card badge-card">
            <div className="realm-name">{badges.name}</div>
            <div className="emotion-label">{badges.emotion}</div>
            <img src={badges.icon} alt={badges.name} className="realm-icon" />
          </div>
        ))}
      </div>
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
};

export default Badges;
