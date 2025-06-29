import React, { useState, useEffect } from "react";
import "../style/Tools.css";
import { useNavigate, useParams } from "react-router-dom";

const BreathingOrb = () => {
  const [phase, setPhase] = useState("Breathe In");
  const phases = ["Breathe In", "Hold", "Exhale", "Hold"];
  const durations = [4000, 2000, 4000, 2000];

  useEffect(() => {
    let current = 0;
    let timeoutId;

    const cycle = () => {
      setPhase(phases[current]);
      timeoutId = setTimeout(() => {
        current = (current + 1) % phases.length;
        cycle();
      }, durations[current]);
    };

    cycle();

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, []);

  return (
    <div className="orb-container">
      <div className={`orb ${phase.toLowerCase().replace(" ", "-")}`} />
      <p className="breathing-instruction">{phase}</p>
    </div>
  );
};

const Tools = () => {
  const [tool, setTool] = useState("");
  const navigate = useNavigate();
  const { emotion } = useParams();

  return (
    <div className="page">
      {tool === "" ? (
        <>
          <h1 className="tool-title">Select a calming tool to explore:</h1>
          <button onClick={() => setTool("breathing")}>Breathing Orb</button>
          <button onClick={() => setTool("grounding")}>
            5 Senses Grounding
          </button>
          <button onClick={() => setTool("reframe")}>Affirmation Cards</button>
          <button onClick={() => setTool("journaling")}>Journaling</button>
          <button
            className="result-btn"
            onClick={() => navigate(`/${emotion}/result`)}
          >
            I'm done exploring ✓
          </button>
        </>
      ) : (
        <>
          {tool === "breathing" && <BreathingOrb />}
          <button className="back-btn" onClick={() => setTool("")}>
            ← Back
          </button>
        </>
      )}
    </div>
  );
};

export default Tools;
