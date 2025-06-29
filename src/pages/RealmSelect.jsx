import React from "react";
import "../style/RealmSelect.css";
import Vex from "../assets/Vex.png";
import Isolation from "../assets/Isolation.png";
import Chaos from "../assets/Chaos.png";
import Fog from "../assets/Fog.png";
import Maze from "../assets/Maze.png";
import { useNavigate } from "react-router-dom";

const RealmSelect = () => {
  const navigate = useNavigate();
  const realms = [
    { emoji: Chaos, name: "Caverns of Chaos", emotion: "Anxiety" },
    { emoji: Isolation, name: "Isle of Isolation", emotion: "Sadness" },
    { emoji: Vex, name: "Volcano of Vex", emotion: "Anger" },
    { emoji: Fog, name: "Forest of Fog", emotion: "Overwhelm" },
    { emoji: Maze, name: "Mirror Maze", emotion: "Uncertainty" },
  ];

  return (
    <div className="page realm-select">
      <h2 className="realm-title">How are you feeling today?</h2>
      <div className="card-grid">
        {realms.map((realm, idx) => (
          <div
            key={idx}
            className="emotion-card"
            onClick={() => navigate(`/realm/${realm.emotion}`)}
          >
            <div className="realm-name">{realm.name}</div>
            <div className="emotion-label">{realm.emotion}</div>
            <img src={realm.emoji} alt={realm.name} className="realm-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealmSelect;
