import { useSearchParams } from "react-router-dom";
import "@videojs/react/video/compat-skin.css";
import { VideoPlayer, CompatVideoSkin } from "@videojs/react/video";
import { YouTubeVideo } from "@videojs/react/media/youtube-video";
import { useRef, useState } from "react";

interface Card {
  question: string;
  rest: React.ReactNode;
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
  // const [isVideoOpen, setIsVideoOpen] = useState(false);

  const CARDS: Record<string, Card> = {
    k7Qm2v9R: {
      question: "What can you actually study here?",
      rest: (
        <div className="kalayoga-content">
          <p>
            At the School of Kalayoga, Chinmaya Vishwa Vidyapeeth, Pune campus,
            music is not merely an extracurricular activity or a hobby—it is a
            discipline of study, practice, research, and artistic exploration.
            The School offers structured undergraduate and postgraduate
            programmes in Hindustani classical music. Students receive
            systematic training that combines the richness of the Gharana
            tradition blended with the modern university education.
          </p>

          <p>
            <b>Undergraduate and Postgraduate Programmes</b>
          </p>

          <p>
            The School offers undergraduate (BA-Honors) and postgraduate (MA)
            programmes for students who wish to pursue music seriously, whether
            their aspiration is to become a professional performer, a teacher, a
            composer, or a researcher.
          </p>

          <p>
            Students can currently specialise in three principal disciplines:
          </p>

          <ul>
            <li>Hindustani Vocal</li>
            <li>Tabla</li>
            <li>Bansuri</li>
          </ul>

          <p>
            The programmes are designed to help students progress from
            foundational concepts to advanced musical understanding and
            performance. Alongside practical training, students engage with the
            musicological, historical, and aesthetic dimensions of Indian
            classical music.
          </p>

          <p>
            <b>Links for more details:</b>
          </p>

          <ul className="kalayoga-links">
            <li>
              <a
                href="https://www.cvv.ac.in/study-program/b-a-music-hon-bansuri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                B.A. Music (Hon.) Bansuri
              </a>
            </li>
            <li>
              <a
                href="https://www.cvv.ac.in/study-program/b-a-music-hon-hindustani-vocal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                B.A. Music (Hon.) Hindustani Vocal
              </a>
            </li>
            <li>
              <a
                href="https://www.cvv.ac.in/study-program/b-a-music-hon-tabla/"
                target="_blank"
                rel="noopener noreferrer"
              >
                B.A. Music (Hon.) Tabla
              </a>
            </li>
            <li>
              <a
                href="https://www.cvv.ac.in/study-program/m-a-music-bansuri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                M.A. Music (Bansuri)
              </a>
            </li>
            <li>
              <a
                href="https://www.cvv.ac.in/study-program/m-a-music-hindustani-vocal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                M.A. Music (Hindustani Vocal)
              </a>
            </li>
            <li>
              <a
                href="https://www.cvv.ac.in/study-program/m-a-music-tabla/"
                target="_blank"
                rel="noopener noreferrer"
              >
                M.A. Music (Tabla)
              </a>
            </li>
          </ul>

          <p>
            <b>Learning Through the Gurukula Tradition</b>
          </p>

          <p>
            A distinctive feature of the School is its emphasis on the Gurukula
            mode of learning, inspired by the traditional Guru-Shishya
            Parampara. Music is a living art, and its finer nuances cannot be
            acquired through textbooks alone. They emerge through attentive
            listening, observation, sustained practice, demonstration, and
            direct interaction between the guru and the disciple.
          </p>

          <p>
            Teaching is therefore centred on personal guidance and continuous
            engagement. The teacher-student ratio does not exceed 1:10, allowing
            faculty members to understand individual strengths, identify areas
            for improvement, and guide students according to their learning
            needs.
          </p>

          <p>
            This approach encourages discipline, patience, dedication,
            sensitivity, and an appreciation of the deeper values embedded in
            Indian musical traditions.
          </p>

          <p>
            <b>About the Gurukula and Faculty (Hindi):</b>
          </p>

          <ul className="kalayoga-links">
            <li>
              <a
                href="https://drive.google.com/file/d/1Ser0g8SVsCka01fDx6DctgSL7xFmUWQr/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video 1
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1HNnGxQ4nJcQud63ziJw6wbtuKD93WLJT/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Video 2
              </a>
            </li>
          </ul>

          <p>
            <b>Performance at the Core</b>
          </p>

          <p>
            At the School, performance is central to the learning experience.
            Students are trained not only to understand music but also to
            perform it confidently and creatively before an audience. Their
            learning involves regular Sadhana (practice), periodic performances
            and opportunities to develop their individual musical expression.
            Students develop the confidence required for public performance.
          </p>

          <p>
            The culmination of a student's programme is an opportunity to
            demonstrate the musical knowledge and artistic abilities developed
            over the course of study. A student's final performance “Padaarpan”
            offers a glimpse into this journey—from disciplined training and
            technical development to the expression of an individual artistic
            voice.
          </p>

          <p>
            <b>Testimonial by a parent (Hindi):</b>
          </p>

          <p>
            <a
              href="https://drive.google.com/file/d/14oZG0G23J0AGiojRO1RPKTgSNWM0Br_w/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch the Video
            </a>
          </p>

          <p>
            <b>Research and Doctoral Degree</b>
          </p>

          <p>
            For those interested in exploring music beyond performance, the
            School also offers doctoral research through its PhD programme. The
            programme is intended for serious researchers who wish to
            investigate musical subjects in depth and contribute to the
            expanding body of knowledge in music and related disciplines.
            Research may engage with Indian classical music, performance
            traditions, musicology, pedagogy, aesthetics, and interdisciplinary
            questions, subject to the programme's research framework and
            available supervision. The aim is to encourage rigorous scholarship
            that remains connected to the living practice of music and
            contributes to its documentation, interpretation, and continued
            development.
          </p>

          <p>
            <b>Link for more details:</b>
            <br />
            <a
              href="https://www.cvv.ac.in/study-program/doctoral-phd-programmes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Doctoral (PhD) Programmes
            </a>
          </p>
        </div>
      ),
    },

    N4xP8c1L: {
      question: "Is this a real degree?",
      rest: (
        <div className="recognition-content">
          <p>
            Yes. These are purely academic programmes, not merely music classes
            or hobby courses. The degrees with CVV are at par with any other
            UCG-recognized universities in India. We have been having students
            from India as well as overseas.
          </p>

          <p>
            <b>CVV - A Recognised University</b>
          </p>

          <p>
            The programmes are offered by Chinmaya Vishwa Vidyapeeth (CVV), a
            deemed-to-be university, through its School of Kalayoga. The
            University offers degree programmes in Hindustani Vocal, Tabla, and
            Bansuri.
          </p>

          <p>
            <b>Know more about CVV and its affiliation:</b>
          </p>

          <ul className="recognition-links">
            <li>
              <a
                href="https://www.cvv.ac.in/about/#whoweare"
                target="_blank"
                rel="noopener noreferrer"
              >
                About CVV — Who We Are
              </a>
            </li>
            <li>
              <a
                href="https://www.cvv.ac.in/about/#CVV-Accreditations"
                target="_blank"
                rel="noopener noreferrer"
              >
                CVV Accreditations
              </a>
            </li>
          </ul>

          <p>
            <b>Watch How Evaluation is Done:</b>
          </p>

          <p>
            <a
              href="https://drive.google.com/file/d/1nSNIVlXWueNlF0sQKrL5PU9lLYln1IW_/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch the Video
            </a>
          </p>

          <p>
            <b>Testimonial by a student (English):</b>
          </p>

          <p>
            <a
              href="https://drive.google.com/file/d/1HvTePEdN0ebByF4EGsrSJufdbc69e9JK/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch the Video
            </a>
          </p>
        </div>
      ),
    },

    r3Vb6K0z: {
      question: "What do students do after this?",
      rest: (
        <div className="careers-content">
          <p>
            A degree in music can open doors to a diverse range of professional
            opportunities. At the School of Kalayoga, Chinmaya Vishwa
            Vidyapeeth, students specialising in Hindustani Vocal, Tabla, and
            Bansuri are prepared to pursue careers that combine their musical
            abilities, creativity, and academic knowledge. While many graduates
            take up music teaching, others build careers as performers,
            researchers, composers, and professionals in the music industry.
          </p>

          <p>
            <b>Performance and Concerts</b>
          </p>

          <ul>
            <li>
              <b>Solo performers:</b> Establish themselves as vocalists or
              instrumentalists and perform at concerts, festivals, and cultural
              events.
            </li>
            <li>
              <b>Accompanying artists:</b> Tabla players accompany vocalists,
              instrumentalists, and dancers, while vocalists and Bansuri players
              collaborate with other musicians.
            </li>
            <li>
              <b>Recording artists:</b> Contribute to studio recordings, musical
              projects, and digital performances.
            </li>
          </ul>

          <p>
            <b>Teaching and Entrepreneurship</b>
          </p>

          <p>
            Teaching is an important career pathway for music graduates.
            Students can teach independently, join music schools and educational
            institutions, or offer specialised training to aspiring musicians.
          </p>

          <p>
            Graduates may also establish their own music academies, develop
            online teaching programmes, and build independent music education
            ventures.
          </p>

          <p>
            <b>Music Production and Arrangement</b>
          </p>

          <p>
            For students interested in the contemporary music industry, possible
            career directions include:
          </p>

          <ul>
            <li>
              Music composition and direction for films, theatre, and digital
              media.
            </li>
            <li>Music production, recording, and sound-based projects.</li>
            <li>
              Music arrangement and collaboration with composers and performers.
            </li>
            <li>
              Creating original compositions and exploring collaborations across
              musical genres.
            </li>
          </ul>

          <p>
            <b>Research and Higher Education</b>
          </p>

          <p>
            Students who wish to pursue academic careers can explore musicology,
            performance traditions, music pedagogy, and other areas of music
            research. With appropriate further qualifications, they may work
            towards careers in higher education, scholarly research, and musical
            documentation. Many of our alumni have completed the National
            Eligibility Test (NET) by UGC, some received Junior Research
            Fellowship (JRF) for their Doctoral Research.
          </p>

          <p>
            <b>Testimonial by a successful alumni (Hindi):</b>
          </p>

          <p>
            <a
              href="https://drive.google.com/file/d/105maExjmiR_RhRnlav5MYFcXy0efGDrk/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch the Video
            </a>
          </p>
        </div>
      ),
    },

    H9dW2s5A: {
      question: "What is the Naada Bindu Festival?",
      rest: (
        <div className="nbf-experience-content">
          <p>
            When a participant registers for the Naada Bindu Festival (NBF), he
            is actually enrolling for a treat for the body, mind, intellect, and
            the soul!
          </p>

          <p>
            Three days of stay in the lap of nature, surrounded by the Sahyadri
            hills, is itself a treat for the mind, which relaxes the moment one
            steps into the campus.
          </p>

          <p>
            The soul gets its feed with the two magnificent temples dedicated to
            Pranav Ganesh and Chinmaya Maruti; the Swanubhooti Vatika, where one
            takes a close look at oneself; and the Chinmaya Jeevan Darshan,
            where one feels inspired by the life, work and teachings of a great
            spiritual master, Swami Chinmayananda.
          </p>

          <p>
            The mind and intellect are tickled with the rich classical art
            presentations made by maestro artists. Each artist brings in a rich
            tradition, passed on for generations, per se, on to the Sudharma
            stage. How these traditions have survived over the ages, and what
            efforts are being taken to keep up the same, are some aspects that
            are covered in art-conversations with select artists.
          </p>

          <p>
            The food and stay arrangements more than take care of the bodily
            requirements. The Sudharma auditorium is a place filled with vibes
            of spiritual discourses and satsangs held there over the years.
            Naturally, every performance shines out better in this space, and
            many artists have acknowledged this fact.
          </p>

          <p>
            Most of the artists are hosted within the premises, and one may be
            lucky enough to walk past and meet some of them.
          </p>

          <p>
            After 15 successful annual gatherings, Chinmaya Naada Bindu Gurukula
            (CNBG) is all set to roll out the 16th NBF in February 2027. The
            dates are 12 - 14th February, and is usually the 2nd weekend of this
            month every year. The average attendance for this residential
            festival has been around 500 or so, the tag line of which is, 'Come,
            Experience the Arts as a Lifestyle!'
          </p>

          <p>
            About half of the registrations are filled before the artist line-up
            is announced! That is valid proof of the quality offered.
          </p>

          <p>
            Any event of such large scale does not happen without incurring
            expenses. If you would like to be a part of the audience next year,
            or be a part of our support system, you are welcome to connect with
            us via email (<a href="mailto:nbf@cvv.ac.in">nbf@cvv.ac.in</a>) or
            phone (<a href="tel:+917720839000">77208 39000</a>).
          </p>

          <p>
            <b>Watch the 15th NBF Highlights:</b>
          </p>

          <p>
            <a
              href="https://youtu.be/kCuC2uuH9qg?si=dvBcrBgvpLDVCUrW"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch the Video
            </a>
          </p>
        </div>
      ),
    },

    m1Fq7Y4p: {
      question: "When is the next NBF? How do I register?",
      rest: (
        <div className="festival-content">
          <p>
            <b>Naada Bindu Festival - Come, Experience Arts as a Lifestyle!</b>
          </p>

          <p>
            The NBF is slated for the 2nd weekend of February every year, and
            unless a change is intimated, the days are the 2nd Friday, Saturday
            and Sunday of February.
          </p>

          <p>
            The festival opens in the afternoon of Friday, and closes post lunch
            on Sunday. Participants usually arrive in the morning of Friday and
            leave by evening of Sunday.
          </p>
          <br />
          <p>
            <b>
              Venue: Chinmaya Vibhooti, At Post Kolwan, Mulshi Taluka, Pune
              District.
            </b>
          </p>

          <p>
            The venue is about 40 to 50 KM away from the Pune Railway Station /
            Airport. There are occasional ST and PMT buses plying between Swar
            Gate (close to Station) and Kolwan. One may even get an Uber plying
            right up to Kolwan from Pune or Mumbai. The best way to commute may
            be to hire a vehicle as a group. There are regular agents who
            provide their services.
          </p>

          <p>
            The stay is in comfortable rooms, and options of single, twin,
            triple, quadruple and multiple (max.5) occupancy are available.
            Early Bird discounts are applicable for early registrations.
            Registrations in groups of 10 or more also attract discounts.
          </p>

          <p>
            Follow Chinmaya Naada Bindu Gurukula on Facebook &amp; Instagram to
            get more information. The event will be announced on social media,
            links for registration will be made available. If you are not on
            social media, kindly contact the office on email (
            <a href="mailto:nbf@cvv.ac.in">nbf@cvv.ac.in</a>) or phone (
            <a href="tel:+917720839000">77208 39000</a>).
          </p>
        </div>
      ),
    },

    C6tR0n8J: {
      question: "Is there a support system for students?",
      rest: (
        <div className="student-support-content">
          <p>
            Arts is a field that is seldom preferred as a chosen career path. A
            general taboo, which says that art is to be pursued as a hobby and
            not as a profession, is present, whether one likes it or not. Add to
            it the fact that students of both performing arts, as well as
            professions like medicine, engineering, architecture, etc. take
            almost the same amount of time to complete their education, it takes
            much longer for the artist to settle down into a comfortable space
            of self-dependency. There is little history of a music student
            receiving education loans from banks, as it is not considered one of
            the lucrative professions in India, as yet.
          </p>

          <p>
            Only someone passionate about the arts would want to step into this
            field. Such a person also needs the family's consent to walk the
            unknown path. When both these aspects are conducive, there comes the
            hurdle of finances.
          </p>

          <p>
            The hurdle of finances is not just on the students. CVV's School of
            Kalayoga runs music programmes more as a philanthropic activity, in
            order to retain and nurture the rich tradition of Indian Knowledge
            Systems that has been passed down from generation to generation.
          </p>

          <p>
            It is here that CVV, extends a helping hand to students, with the
            help of benevolent donors. Deserving and meritorious students are
            offered a waiver on part of the fees, based on the marks from their
            earlier exams. Some CSR support has been forthcoming for those who,
            despite their musical talent, come from needy families.
          </p>

          <p>
            It is indeed gratifying to see such students do well for themselves
            and share their joy at their achievements.
          </p>

          <p>
            If you wish to be part of this support system, you may please get in
            touch with us at email (
            <a href="mailto:infocnbg@cvv.ac.in">infocnbg@cvv.ac.in</a>) or phone
            (<a href="tel:+917720839000">77208 39000</a>).
          </p>

          <p>
            <b>
              Watch two of our supported students performing at the end of their
              2 years' training at SOK:
            </b>
          </p>

          <div className="student-support-videos">
            <p>
              <a
                href="https://youtu.be/TbSGhlH__Rw?si=TSJrabZH0YfS6XRA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Student Performance 1
              </a>
            </p>
            <p>
              <a
                href="https://youtu.be/ORuefpPevZU?si=FJcPExBbI29xpsnd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Student Performance 2
              </a>
            </p>
          </div>
        </div>
      ),
    },

    z5Lh3B9w: {
      question: "What does CNBG do beyond its own students?",
      rest: (
        <div className="community-music-content">
          <p>
            Music is a therapy by itself. Just listening to good music can
            assist in putting the listener in a better frame of mind, readying
            him for great achievements. Animals and plants can also be
            beneficiaries of good music, resulting in better produce of milk and
            crops, etc. Then, why would humans not benefit from this gift of
            nature?
          </p>

          <p>
            Giving back to society has been an inherent part of our culture, and
            the Chinmaya Mission Pledge reiterates the same. Music is a gift
            that CNBG can share with those who don't have the means to enjoy.
            The sharing began in 2013, where local schools were identified and
            children who were inclined towards music were taught the same. Post
            COVID, most of the sessions had to turn to online mode.
          </p>

          <p>
            Children from remote villages may be inheriting the local tradition
            of music from the older generations, but they have very little
            exposure or knowledge of the rich tradition of classical music. Much
            so, because learning classical music does not come for free, in most
            cases.
          </p>

          <p>
            At CVV CNBG, we now have about 75 children from Tamil Nadu,
            Maharashtra and Uttar Pradesh, studying music online and offline
            (Kolwan). Recently, a 2-day residential workshop was held for the
            children from Tamil Nadu at Chinmaya Gardens, Coimbatore, where they
            were given intensive training in the fundamentals of music. More of
            such events are envisaged in future for other parts of the country,
            too.
          </p>

          <p>
            Music has a scientifically-proven way of activating both the sides
            of the brain cells. Proficiency in music empowers students with the
            ability and confidence to achieve more in other fields, too.
          </p>

          <p>
            Handholding such bright children and showing them the light at the
            end of the tunnel is not the prerogative of all and sundry. Are the
            chosen one for this. If so, don't wait. Get in touch with us at
            email (<a href="mailto:infocnbg@cvv.ac.in">infocnbg@cvv.ac.in</a>)
            or phone (<a href="tel:+917720839000">77208 39000</a>) and let us
            know your intent.
          </p>

          <p>
            <b>
              Watch a small coverage of a recent residential workshop of
              children from the CSR project, at Coimbatore:
            </b>
          </p>
          <p>
            <a
              href="https://drive.google.com/file/d/1OjCeB6hkWF7pmXBZjuGRX6DcgEStnBVw/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch the Video
            </a>
          </p>

          <p>
            <b>
              Watch two of our CVV supported students performing at the end of
              their 2 years' training at SOK:
            </b>
          </p>
          <div className="community-music-links">
            <p>
              <a
                href="https://youtu.be/TbSGhlH__Rw?si=TSJrabZH0YfS6XRA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Student Performance 1
              </a>
            </p>
            <p>
              <a
                href="https://youtu.be/ORuefpPevZU?si=FJcPExBbI29xpsnd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Student Performance 2
              </a>
            </p>
          </div>
        </div>
      ),
    },

    P2uX6e1M: {
      question: "What does a year of each student cost the University?",
      rest: (
        <div className="kalayoga-funding-content">
          <p>
            Pursuing the arts as a vocation calls for a genuine passion and a
            willingness to embrace an uncertain journey, as also encouragement
            from family. Even when passion and family support come together,
            financial limitations can remain a major obstacle.
          </p>

          <p>
            At CVV's School of Kalayoga, music education is offered primarily as
            a philanthropic initiative, driven by a commitment to safeguard,
            sustain, and enrich the invaluable heritage of Indian Knowledge
            Systems and ensure that these age-old traditions continue to
            flourish across generations.
          </p>

          <p>
            Three Gurus (renowned visiting maestros) and three Acharyas
            (full-time expert faculty) cater to the practical training of the
            current number of 21 students. The cost to the University in terms
            of faculty salary is approximately ₹5 lakhs per student.
          </p>

          <p>
            <b>
              Highly subsidised fees for the students is between ₹50,000/- &amp;
              ₹60,000/-
            </b>
          </p>
          <p>
            As this is a niche and artistic segment, students are given good
            discounts so that they don't worry about funds, and can fully
            concentrate on the knowledge they are here for. This is done mainly
            with the help of benevolent donors. Deserving and meritorious
            students are offered a waiver on part of the fees, based on the
            marks from their earlier exams. Some CSR support has been
            forthcoming for those who, despite their musical talent, come from
            needy families.
          </p>

          <p>
            It is indeed gratifying to see such students do well for themselves
            and share the joy of their achievements.
          </p>

          <p>
            <b>Watch out Guru speak about the Gurukula method of teaching:</b>
          </p>

          <p>
            <a
              href="https://drive.google.com/file/d/1HNnGxQ4nJcQud63ziJw6wbtuKD93WLJT/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch the Video
            </a>
          </p>

          <p>
            <b>Testimonial by a CVV parent (Hindi):</b>
          </p>

          <p>
            <a
              href="https://drive.google.com/file/d/14oZG0G23J0AGiojRO1RPKTgSNWM0Br_w/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch the Video
            </a>
          </p>
        </div>
      ),
    },

    V8nK3q2D: {
      question: "",
      rest: "",
    },

    f4Jm9R1x: {
      question: "",
      rest: "",
    },
  };

  const card = id ? CARDS[id] : undefined;
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handleRestClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) return;

    const link = target.closest("a");

    if (!link || !link.href) return;

    try {
      const url = new URL(link.href);

      const isYouTube =
        url.hostname === "youtube.com" ||
        url.hostname.endsWith(".youtube.com") ||
        url.hostname === "youtu.be";

      if (!isYouTube) return;

      event.preventDefault();

      setActiveVideo(link.href);
      // setIsVideoOpen(true);
      dialogRef.current?.showModal();
    } catch {
      // Leave invalid or non-URL links untouched.
    }
  };

  if (!card) {
    return (
      <div className="page">
        <div className="glow" />
        <div className="card-blank">
          <div className="face">
            <div className="question">Bindu</div>
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
              {card.rest && (
                <div className="answer-rest" onClick={handleRestClick}>
                  {card.rest}
                </div>
              )}
            </div>
            <div className="rule" />
            {/* <button
              className="code-row"
              type="button"
              aria-label="Open recording from the Gurukula"
              onClick={() => {
                // setIsVideoOpen(true);
                dialogRef.current?.showModal();
              }}
            >
              <span className="code-label">
                a recording from
                <br />
                the Gurukula
              </span>
            </button> */}
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="video-modal"
        aria-labelledby="video-modal-title"
        onClose={() => {
          // setIsVideoOpen(false);
          setActiveVideo(null);
        }}
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
          {activeVideo ? (
            <VideoSlide slide={activeVideo} />
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
