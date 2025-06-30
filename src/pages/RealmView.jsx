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
          text: "⛧ Anxiety activates your fight-or-flight system — it's your body sensing danger, even if none is present.",
          label: "⛧",
        },
        {
          top: "67%",
          left: "59%",
          text: "꩜ Common signs of anxiety include restlessness, racing thoughts, and muscle tension.",
          label: "꩜",
        },
        {
          top: "80%",
          left: "33%",
          text: "✦ Anxiety can be triggered by stress, trauma, or even anticipation of the unknown.",
          label: "✦",
        },
        {
          top: "5%",
          left: "50.5%",
          text: "⏾ Avoidance might bring short-term relief — but facing small fears gently can reduce long-term anxiety.",
          label: "⏾",
        },
        {
          top: "47%",
          left: "33.5%",
          text: "⚡ Breathing exercises calm the nervous system — even just 2 minutes can help.",
          label: "⚡︎",
        },
        {
          top: "23%",
          left: "65%",
          text: "𖤓 Journaling helps bring awareness to anxious patterns and can reduce overwhelm.",
          label: "𖤓",
        },
        {
          top: "15%",
          left: "37.5%",
          text: "? Talking to someone you trust can ground you and break the cycle of anxious thinking.",
          label: "?",
        },
      ],
    },
  };

  const realm = realmData[emotion];

  if (!realm) return <div className="page">Realm not found.</div>;

  return (
    <>
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
    </>
  );
};

export default RealmView;
