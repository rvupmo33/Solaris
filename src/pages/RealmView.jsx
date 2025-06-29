import React, { useState } from "react";
import "../style/RealmView.css";
import { useNavigate, useParams } from "react-router-dom";
import CavernChaos from "../assets/Cavern-Chaos.png";

const RealmView = () => {
  const { emotion } = useParams();
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const [clickedPins, setClickedPins] = useState([]);

  const ScoreManager = (index) => {
    if (!clickedPins.includes(index)) {
      setClickedPins([...clickedPins, index]);
      if (counter < 7) {
        setCounter(counter + 1);
      }
    }
  };

  const realmData = {
    Anxiety: {
      name: "Caverns of Chaos",
      bg: CavernChaos,
      definition: "Anxiety is a feeling of worry or nervousness.",
      symptoms: [
        "Racing heart",
        "Restlessness",
        "Overthinking",
        "Tense muscles",
      ],
      message: "Even chaos can be calmed. You’ve already taken the first step.",
      tools: ["Breathing", "Grounding", "Reframing"],
      pins: [
        {
          top: "43%",
          left: "59%",
          text: "⛧ Use breathing or grounding tools to manage it.",
          label: "⛧",
        },
        {
          top: "67%",
          left: "59%",
          text: "꩜ Overthinking can spiral in tight loops — try writing your thoughts down to break the cycle.",
          label: "꩜",
        },
        {
          top: "80%",
          left: "33%",
          text: "✦ Deep in the cave lies clarity — a few deep breaths can lead you back to calm.",
          label: "✦",
        },
        {
          top: "5%",
          left: "50.5%",
          text: "⏾ This dark cavern represents uncertainty. Shine a light with small, safe actions.",
          label: "⏾",
        },
        {
          top: "47%",
          left: "33.5%",
          text: "⚡ Common symptoms include racing heart and tense muscles.",
          label: "⚡︎",
        },
        {
          top: "23%",
          left: "65%",
          text: "𖤓 You've already braved the path — every step is progress.",
          label: "𖤓",
        },
        {
          top: "15%",
          left: "37.5%",
          text: "? Anxiety is a feeling of worry or nervousness.",
          label: "?",
        },
      ],
    },
  };

  const realm = realmData[emotion];

  if (!realm) return <div className="page">Realm not found.</div>;

  return (
    <div className="page">
      <h1 className="realm-title">Welcome to the {realm.name}</h1>
      <div className="floating-card">
        {counter < 7 ? (
          <p>
            Tap the symbols across the map to reveal insights and tools.
            Discover all
            <strong> 7 hidden pins</strong> to unlock the portal.
          </p>
        ) : (
          <p>
            You've uncovered every insight. The <strong>🔮 portal</strong> is
            now open — click it to continue your journey.
          </p>
        )}
      </div>

      <div className="floating-score">
        <p>
          Score: <span>{counter}</span>
        </p>
      </div>

      <div className="map-container">
        <img src={realm.bg} alt="" className="realm-map" />
        {realm.pins.map((pin, index) =>
          clickedPins.includes(index) ? null : (
            <div
              key={index}
              className="pin-wrapper"
              onClick={() => ScoreManager(index)}
              style={{ top: pin.top, left: pin.left }}
            >
              <div className="pin">{pin.label}</div>
              <div className="pin-label">{pin.text}</div>
            </div>
          )
        )}

        {counter === 7 && (
          <div
            className="pin-wrapper main-pin"
            onClick={() => navigate(`/${emotion}/tools`)}
          >
            <div className="pin">🔮</div>
            <div className="pin-label">
              🔮 Enter the portal to a breathing tool that calms your inner
              storm.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RealmView;
