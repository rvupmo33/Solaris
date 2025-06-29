import React, { useState } from "react";
import "../style/Reflect.css";
import { useNavigate } from "react-router-dom";

const Reflect = () => {
  const navigate = useNavigate();
  const initialReflections = [
    {
      realm: "Cavern of Chaos",
      text: "I learned...",
    },
    {
      realm: "Isle of Isolation",
      text: "I learned...",
    },
    {
      realm: "Volcano of Vex",
      text: "I learned...",
    },
    {
      realm: "Forest of Fog",
      text: "I learned...",
    },
    {
      realm: "Mirror Maze",
      text: "I learned...",
    },
  ];

  const [reflections, setReflections] = useState(initialReflections);
  const [editingIndex, setEditingIndex] = useState(null);
  const [draftText, setDraftText] = useState("");

  const startEditing = (index) => {
    setEditingIndex(index);
    setDraftText(reflections[index].text);
  };

  const saveReflection = () => {
    const updated = [...reflections];
    updated[editingIndex].text = draftText;
    setReflections(updated);
    setEditingIndex(null);
    setDraftText("");
  };

  return (
    <div className="page">
      <h1 className="reflect-title">Reflections from the Realms</h1>
      {reflections.map((item, index) => (
        <div className="reflect-cont" key={index}>
          <div>
            <h3>Reflections from the {item.realm}:</h3>
            {editingIndex === index ? (
              <>
                <textarea
                  value={draftText}
                  onChange={(e) => setDraftText(e.target.value)}
                  rows={4}
                />
                <button onClick={saveReflection}>Save</button>
              </>
            ) : (
              <p>{item.text}</p>
            )}
          </div>
          {editingIndex !== index && (
            <h4
              onClick={() => startEditing(index)}
              style={{ cursor: "pointer" }}
            >
              ✎
            </h4>
          )}
        </div>
      ))}

      <button className="btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <br />
    </div>
  );
};

export default Reflect;
