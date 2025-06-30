import React from "react";

const WorksheetModal = ({ worksheet, setWorksheet, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Worksheet</h2>

        <div className="worksheet-scroll">
          <p>1. What storm is rising inside you right now?</p>
          <textarea
            value={worksheet.q1}
            onChange={(e) => setWorksheet({ ...worksheet, q1: e.target.value })}
            placeholder="Name the feeling — no judgment."
          />

          <p>2. What signs did you notice in your mind or body?</p>
          <textarea
            value={worksheet.q2}
            onChange={(e) => setWorksheet({ ...worksheet, q2: e.target.value })}
            placeholder="Racing heart? Tight chest? Thoughts looping?"
          />

          <p>3. What may have triggered this emotional weather?</p>
          <textarea
            value={worksheet.q3}
            onChange={(e) => setWorksheet({ ...worksheet, q3: e.target.value })}
            placeholder="A memory? A thought? A situation?"
          />

          <p>4. Name 3 powers you can summon now.</p>
          <input
            type="text"
            value={worksheet.q4a}
            onChange={(e) =>
              setWorksheet({ ...worksheet, q4a: e.target.value })
            }
            placeholder="e.g., Deep breathing"
          />
          <input
            type="text"
            value={worksheet.q4b}
            onChange={(e) =>
              setWorksheet({ ...worksheet, q4b: e.target.value })
            }
            placeholder="e.g., Talking to someone"
          />
          <input
            type="text"
            value={worksheet.q4c}
            onChange={(e) =>
              setWorksheet({ ...worksheet, q4c: e.target.value })
            }
            placeholder="e.g., Touching something textured"
          />

          <p>5. What’s one step toward calm you're willing to take?</p>
          <textarea
            value={worksheet.q5}
            onChange={(e) => setWorksheet({ ...worksheet, q5: e.target.value })}
            placeholder="Be gentle with yourself."
          />

          <p>6. Write a calming phrase to carry with you.</p>
          <textarea
            value={worksheet.q6}
            onChange={(e) => setWorksheet({ ...worksheet, q6: e.target.value })}
            placeholder="A mantra, affirmation, or line of power."
          />
        </div>

        <p className="footer-note">
          ✎ Your responses are saved during this session.
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default WorksheetModal;
