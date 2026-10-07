import { useSearchParams } from "react-router-dom";
import "@videojs/react/video/compat-skin.css";
import { VideoPlayer, CompatVideoSkin } from "@videojs/react/video";
import { YouTubeVideo } from "@videojs/react/media/youtube-video";
import { useRef } from "react";

interface Card {
  question: string;
  lead: string;
  rest: string;
  url: string;
}
function VideoSlide({ slide }: { slide: string }) {
  return (
    <div className="video-slide">
      <VideoPlayer>
        <CompatVideoSkin style={{ width: "100%", aspectRatio: "16 / 9" }}>
          <YouTubeVideo src={slide} />
        </CompatVideoSkin>
      </VideoPlayer>
    </div>
  );
}

function Cards() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const dialogRef = useRef<HTMLDialogElement>(null);

  const CARDS: Record<string, Card> = {
    Ab12Cd34: {
      question: "What can you actually study here?",
      lead: "An MA in Hindustani music, with specialisations in vocal, bansuri and tabla.",
      rest: "A BA in Music opens from 2026 to 27. Students learn at the new facility in Baner, Pune. Alongside performance there is theory, Sanskrit, research and the study of Indian Knowledge Systems.",
      url: "https://www.youtube.com/watch?v=wYSncx9zLIU",
    },

    Xy98Zk76: {
      question: "Is this a real degree?",
      lead: "Yes.",
      rest: "Chinmaya Vishwa Vidyapeeth is a deemed-to-be university. Programmes carry credits and examinations, faculty hold doctorates, and the curriculum follows the National Education Policy. A graduate leaves with a recognised degree and with a discipline.",
      url: "https://www.youtube.com/watch?v=nP-nMZpLM1A",
    },

    Qr45Mn23: {
      question: "What do students do after this?",
      lead: "Performance and accompaniment.",
      rest: "Teaching, in schools and independently. Research and further study. Work in recording, documentation and arts administration. Several return to teach here.",
      url: "https://www.youtube.com/watch?v=YE7VzlLtp-4",
    },

    Tk71Lp90: {
      question: "What is the Naada Bindu Festival?",
      lead: "Three days of music every February at the Kolwan campus, held for fifteen years.",
      rest: "Hindustani and Carnatic, instrumental and vocal, alongside dance, workshops and discourses. Students perform on the same stage as visiting artists.",
      url: "https://www.youtube.com/watch?v=eRsGyueVLvQ",
    },

    Hv36Za82: {
      question: "Can I come to the next one?",
      lead: "Yes.",
      rest: "The Festival is open, and the sixteenth edition is in February. Kolwan is around an hour and a half from Pune. Some visitors come for a day and some stay for all three.",
      url: "https://www.youtube.com/watch?v=R6MlUcmOul8",
    },

    Bc84Rw17: {
      question: "Is there a support system for students?",
      lead: "Students are supported so that ability, not means, decides who studies here.",
      rest: "Support covers tuition. Several of the Gurukula's strongest musicians came in this way.",
      url: "https://www.youtube.com/watch?v=TLkA0RELQ1g",
    },

    Yp52Kd64: {
      question: "What does CNBG do beyond its own students?",
      lead: "Students and faculty teach music to children who have no access to it.",
      rest: "The Gurukula records and documents traditional repertoire and teaching practice, much of which exists nowhere else. The Festival brings artists and audiences to a rural campus each year.",
      url: "https://www.youtube.com/watch?v=nYTrIcn4rjg",
    },

    Lm29Xs51: {
      question: "What does a year of one student cost?",
      lead: "A year covers tuition, residence, an instrument and the Festival.",
      rest: "It is set out in full at the link, alongside what a term or a single instrument covers. Support is welcome and is never solicited.",
      url: "https://www.youtube.com/watch?v=WhWc3b3KhnY",
    },
  };

  const card = id ? CARDS[id] : undefined;

  if (!card) {
    return (
      <div className="page">
        <div className="glow" />
        <div className="card-blank">
          <div className="face">
            <div className="question">The Question Cards</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="page">
        <div className="glow" />
        <div className="card">
          <div className="face">
            <div className="question">{card.question}</div>
            <div className="answer">
              <b>{card.lead}</b> {card.rest}
            </div>
            <div className="rule" />
            <button
              className="code-row"
              type="button"
              aria-label="Open recording from the Gurukula"
              onClick={() => dialogRef.current?.showModal()}
            >
              <span className="code-label">
                a recording from
                <br />
                the Gurukula
              </span>
            </button>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="video-modal"
        aria-labelledby="video-modal-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            dialogRef.current?.close();
          }
        }}
      >
        <div className="video-modal-content">
          <div className="video-modal-heading">
            <h2 id="video-modal-title">A recording from the Gurukula</h2>
            <button
              className="video-modal-close"
              type="button"
              aria-label="Close video"
              onClick={() => dialogRef.current?.close()}
            ></button>
          </div>
          {card.url ? (
            <VideoSlide slide={card.url} />
          ) : (
            <p className="video-unavailable">
              A recording for this question is not available yet.
            </p>
          )}
        </div>
      </dialog>
    </>
  );
}

export default Cards;
