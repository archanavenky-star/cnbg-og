import { useState } from "react";
import { useSearchParams } from "react-router-dom";
// import "../App.css";

interface Card {
  question: string;
  lead: string;
  rest: string;
}
function Cards() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const CARDS: Record<string, Card> = {
    Ab12Cd34: {
      question: "What can you actually study here?",
      lead: "An MA in Hindustani music, with specialisations in vocal, bansuri and tabla.",
      rest: "A BA in Music opens from 2026 to 27. Students learn at the new facility in Baner, Pune. Alongside performance there is theory, Sanskrit, research and the study of Indian Knowledge Systems.",
    },

    Xy98Zk76: {
      question: "Is this a real degree?",
      lead: "Yes.",
      rest: "Chinmaya Vishwa Vidyapeeth is a deemed-to-be university. Programmes carry credits and examinations, faculty hold doctorates, and the curriculum follows the National Education Policy. A graduate leaves with a recognised degree and with a discipline.",
    },

    Qr45Mn23: {
      question: "What do students do after this?",
      lead: "Performance and accompaniment.",
      rest: "Teaching, in schools and independently. Research and further study. Work in recording, documentation and arts administration. Several return to teach here.",
    },

    Tk71Lp90: {
      question: "What is the Naada Bindu Festival?",
      lead: "Three days of music every February at the Kolwan campus, held for fifteen years.",
      rest: "Hindustani and Carnatic, instrumental and vocal, alongside dance, workshops and discourses. Students perform on the same stage as visiting artists.",
    },

    Hv36Za82: {
      question: "Can I come to the next one?",
      lead: "Yes.",
      rest: "The Festival is open, and the sixteenth edition is in February. Kolwan is around an hour and a half from Pune. Some visitors come for a day and some stay for all three.",
    },

    Bc84Rw17: {
      question: "Is there a support system for students?",
      lead: "Students are supported so that ability, not means, decides who studies here.",
      rest: "Support covers tuition. Several of the Gurukula's strongest musicians came in this way.",
    },

    Yp52Kd64: {
      question: "What does CNBG do beyond its own students?",
      lead: "Students and faculty teach music to children who have no access to it.",
      rest: "The Gurukula records and documents traditional repertoire and teaching practice, much of which exists nowhere else. The Festival brings artists and audiences to a rural campus each year.",
    },

    Lm29Xs51: {
      question: "What does a year of one student cost?",
      lead: "A year covers tuition, residence, an instrument and the Festival.",
      rest: "It is set out in full at the link, alongside what a term or a single instrument covers. Support is welcome and is never solicited.",
    },
  };

  const card = id ? CARDS[id] : undefined;

  const [isFlipped, setIsFlipped] = useState(false);

  if (!card) {
    return (
      <div className="page">
        <div className="glow" />

        <header className="blank">
          <div className="subtitle">The Question Cards</div>
        </header>

        <div className="card blank" />
      </div>
    );
  }

  return (
    <div className="page">
      <div className="glow" />

      <div className="card">
        <button
          className={`flip-btn ${isFlipped ? "is-flipped" : ""}`}
          type="button"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="flip-inner">
            {/* FRONT */}
            <div className="face face-front">
              <div className="question">{card.question}</div>

              <div className="rule" />
            </div>

            {/* BACK */}
            <div className="face face-back">
              <div className="answer">
                <b>{card.lead}</b> {card.rest}
              </div>

              <div className="code-row">
                <span className="code-label">
                  a recording from
                  <br />
                  the Gurukula
                </span>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Cards;
