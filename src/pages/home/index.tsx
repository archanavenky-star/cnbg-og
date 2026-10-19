import "./Home.css";

function Home() {
  return (
    <main className="page home-page">
      <div className="glow" />
      <article className="card home-card">
        <header className="home-hero">
          <div className="home-hero-copy">
            <h1>Chinmaya Naada Bindu Gurukula (CNBG)</h1>
            <p>
              Chinmaya Naada Bindu Gurukula (CNBG) was born in 2009 as a
              conduit for expression to flow as art; a stage for artistic
              expression to find liberation. Some years later, in 2016, it was
              gracefully added to Chinmaya Vishwa Vidyapeeth (CVV) imparting
              Hindustani Music.
            </p>
            <p>
              The romantic notion of a gurukula was challenged by the demands
              of deliverables like higher education degree programmes
              including Bachelors, Masters and Doctorate programmes, which
              also implied, more advanced education. Much thinking and
              ideating later, CNBG was determined to make the arts aspirational
              as an education, integrating the holistic developmental approach
              of a gurukula with the structured framework of a modern
              university. The time for immersive learning and teaching for the
              arts to bloom and blossom had arrived.
            </p>
          </div>
        </header>

        <section className="home-section home-vision" aria-labelledby="vision-title">
          <div className="home-section-copy">
            <h2 id="vision-title">Vision:</h2>
            <p>
              <strong>
                To be a globally admired institution that nurtures Indian art
                forms, enabling self-discovery through education, performance,
                and research.
              </strong>
            </p>
          </div>
        </section>

        <section className="home-section" aria-labelledby="focus-title">
          <div className="home-section-heading">
            <h2 id="focus-title">
              The Key Result Areas deriving from this vision statement, are:
            </h2>
          </div>
          <ul className="home-focus-list">
            <li>
              <p>
                Fostering excellence in the learning, practice, creation, and
                appreciation of the classical performing arts of India;
              </p>
            </li>
            <li>
              <p>
                Nurturing and promoting spiritual exploration through Indian
                performing arts;
              </p>
            </li>
            <li>
              <p>
                Facilitating research, documentation, and preservation of the
                arts through archival resources.
              </p>
            </li>
          </ul>
        </section>

        <section className="home-section home-outcomes">
          <p>
            Most of the alumnus have settled well in their performing, teaching
            and allied careers. Some of them have received the prestigious
            scholarships from CCRTC on merit; some have won prizes in national
            and global competitions, and many have cleared the National
            Entrance Test with some qualifying for Junior Research Fellowship,
            for PhD, or for teaching positions in universities.
          </p>
        </section>

        <section className="home-section home-learning">
          <p>
            What makes CNBG stand out is its double-layered teaching
            methodology. While the techniques, practice methods and even the
            grammar of music is honed by one set of Gurus, the mentoring of the
            students towards developing as professional musicians is done by
            another level of Gurus. The blessings of our Gurus have brought to
            the Gurukula faculty that is by far the best, and with them, their
            teaching methodology, that is of an extremely high order.
          </p>
        </section>

        <section className="home-section" aria-label="Events hosted by CNBG">
          <p className="home-event-intro">
            Below are some of the events hosted by CNBG, events that see the
            coming together of a virtual celebration of music:
          </p>
          <div className="home-initiatives">
            <article className="home-initiative">
              <p>
                <strong>Kalateet Mahotsav</strong> is an annual one-day music
                festival fully organized by students.
              </p>
            </article>
            <article className="home-initiative">
              <p>
                <strong>Baithaks</strong> form a part of the overall learning
                process for students. This gives them opportunities to perform
                in front of new audiences
              </p>
            </article>
            <article className="home-initiative">
              <p>
                Free sessions are offered online (
                <strong>OLA –Open Learning for All)</strong> frequently, with
                bhajans, chanting and even music being taught to registered
                participants.
              </p>
            </article>
            <article className="home-initiative">
              <p>
                Under its <strong>CSR (Chinmaya Social Responsibility) initiative</strong>,
                CNBG has reached more than 150 students in remote schools and
                homes of Bharat, with free music training.
              </p>
            </article>
          </div>
        </section>

        <section className="home-festival">
          <p>
            The <strong>Naada Bindu Festival (NBF)</strong> is where acclaimed
            artists make it to the stage, people with most uncommon
            backgrounds make it to the audience. In the audience, there is an
            absorbing and appreciative silence while performances happen, and
            child-like abandon during participative activities.
          </p>
          <p>
            As mentioned earlier, Pujya Swami Tejomayananda is integral to
            anything Naada-Bindu, having struck the first note, as it were,
            with Chinmaya Swaranjali. Needless to say, the NBF is incomplete
            without his spiritual talks and bhajans elevating the audience to
            a higher plane from where to enjoy <strong>Swara</strong> as a means
            to reach <strong>Ishwara</strong>.
          </p>
        </section>

        <footer className="home-footer">
          <div>
            <p>
              The School of Kalayoga currently operates from Baner, Pune. There
              is a need for a city-based gurukula and big plans are afoot to
              make this a reality.
            </p>
          </div>
          <p className="home-signoff">Be with us, as we grow.</p>
        </footer>
      </article>
    </main>
  );
}

export default Home;
