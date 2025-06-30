import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../style/LearnMoreView.css";

const LearnMoreView = () => {
  const navigate = useNavigate();
  const { emotion } = useParams();

  const LearnMoreInfo = {
    Anxiety: {
      title1: "📜 Tome of Tides: Unraveling Anxiety in Solaris",
      intro:
        "In the realms of Solaris, knowledge is as powerful as courage. Here, you’ll find explanations, wisdom, and magic woven into the meanings behind your emotions.",
      info: [
        {
          subtitle: "𖡎 How Anxiety Feels",
          text: "It doesn’t always look the same. Some feel a flutter in the chest. Others feel frozen, dizzy, or like they’re outside their body. These are all valid experiences.",
          keypoints: {
            p1: "Anxiety affects both the mind and the body",
            p2: "It might feel like something is wrong — even when everything is okay",
            p3: "You are not alone — many people experience it daily",
          },
          trythis: (
            <>
              Try a{" "}
              <span className="tooltip">
                breathing spell
                <span className="tooltip-text">
                  Slowly inhale for 4 seconds, hold for 4, exhale for 4, and
                  pause for 4. This is called box breathing. Repeat it like a
                  calming ritual.
                </span>
              </span>{" "}
              to help steady your heart and focus.
            </>
          ),
        },
        {
          subtitle: "𖡎 Helpful Ways to Handle Anxiety",
          text: "When the storm rises, there are tools you can use. You can’t always stop anxiety from appearing — but you can learn how to move through it safely.",
          keypoints: {
            p1: "Grounding techniques help anchor your senses",
            p2: "Journaling or naming what you feel can reduce its power",
            p3: "Movement, breath, and kindness to yourself all help",
          },
          trythis: (
            <>
              Open your journal and write one sentence:{" "}
              <em>“Right now, I feel...”</em> That’s the start of
              self-understanding.
            </>
          ),
        },
        {
          subtitle: "𖡎 The Origins of Anxiety (Lore of the Mind)",
          text: "In Soralis, anxiety is known as 'The Whispering Wind' — a force that warns of danger but can grow too loud. It's believed to be born from both shadow and light: fear of the unknown, and a deep desire for safety.",
          keypoints: {
            p1: "Anxiety can arise from past experiences or imagined futures",
            p2: "It once helped protect us — and sometimes still does",
            p3: "Understanding its roots can help you transform it",
          },
          trythis: (
            <>
              Next time you feel anxious, gently ask:{" "}
              <em>“What is my mind trying to protect me from?”</em>
            </>
          ),
        },
        {
          subtitle: "🛡️ Your Power Against Anxiety",
          text: "Every adventurer carries tools for defense. Yours may be music, art, movement, or trusted companions. You don’t fight anxiety alone — you outgrow its grip with practice.",
          keypoints: {
            p1: "Everyone has inner tools — explore what calms *you*",
            p2: "Connection is a powerful antidote to anxious thoughts",
            p3: "Repetition builds resilience — small steps make magic",
          },
          trythis: (
            <>
              Create a 'calm inventory' of things that help — sounds, scents,
              songs, phrases — and keep it nearby like a pouch of charms.
            </>
          ),
        },
      ],
    },
  };

  return (
    <div className="page">
      <h3 className="title-1">{LearnMoreInfo[emotion]?.title1}</h3>
      <p className="text-field">{LearnMoreInfo[emotion]?.intro}</p>
      {LearnMoreInfo[emotion]?.info.map((section, i) => (
        <div key={i} className="info-block">
          <h4 className="subtitle">{section.subtitle}</h4>
          <p className="section-text">{section.text}</p>
          <ul className="list">
            <li>{section.keypoints?.p1}</li>
            <li>{section.keypoints?.p2}</li>
            <li>{section.keypoints?.p3}</li>
          </ul>
          <p className="trythis">{section.trythis}</p>
          <hr />
        </div>
      ))}
      <button className="btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <br />
    </div>
  );
};

export default LearnMoreView;
