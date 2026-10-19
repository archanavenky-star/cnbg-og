import { useRef, useState } from "react";
import "@videojs/react/video/compat-skin.css";
import { VideoPlayer, CompatVideoSkin } from "@videojs/react/video";
import { YouTubeVideo } from "@videojs/react/media/youtube-video";
import "./VideoGallery.css";

type GalleryVideo = {
  year: number | null;
  title: string;
  url: string;
};

const gallery: Record<string, GalleryVideo[]> = {
  SWARA: [
    {
      year: 2013,
      title: "Pt. Rupak Kulkarni & Pt. Rakesh Chaurasia - Bansuri Jugalbandi",
      url: "https://youtu.be/obTPzKmXFec",
    },
    {
      year: 2014,
      title: "Vid. Nirupama & Vid. Rajendra - Kathak Duet",
      url: "https://youtu.be/DHPN53ubD30",
    },
    {
      year: 2015,
      title: "Pt. Shivkumar Sharma – Santoor",
      url: "https://youtu.be/MLTtQ9tmIQc",
    },
    {
      year: 2020,
      title:
        "Jugalbandi Pt. Abhijit Banerjee: Tabla & Vid. Satish Patri: Mridangam",
      url: "https://youtu.be/f4jbMiFivY0",
    },
    {
      year: 2023,
      title: "Pt. Swapan Chaudhari – Tabla",
      url: "https://youtu.be/kA1x5dauvwA",
    },
    {
      year: 2024,
      title: "Dr. N Rajam - Hindustani Violin",
      url: "https://youtu.be/YhePOgmROBY",
    },
    {
      year: 2025,
      title: "Pt. Kushal Das – Sitar",
      url: "https://youtu.be/2N9eqxom3qo",
    },
    {
      year: 2026,
      title: "Pt. Tarun Bhattacharaya – Santoor",
      url: "https://youtu.be/MlTmOvo8RR4",
    },
    {
      year: 2026,
      title: "Vid. R. Kumaresh: Violin & Vid. Jayanti Kumaresh: Veena",
      url: "https://youtu.be/qunqpAuKxys",
    },
  ],
  BHAVA: [
    {
      year: 2012,
      title: "Vid. Rajkumar Bharati - Ramadarshan - Carnatic Vocal",
      url: "https://youtu.be/0xl3pTJSUNg",
    },
    {
      year: 2017,
      title: "Parshwanath Upadhye & Punyah Dance Company - Bharatanatyam",
      url: "https://youtu.be/CtzEB3J9n4U",
    },
    {
      year: 2018,
      title: "Shankar Kandaswamy – Bharatanatyam",
      url: "https://youtu.be/mtPq-uXgLTg",
    },
    {
      year: 2019,
      title: "Aham Sita - Bharatanatyam Dance drama",
      url: "https://youtu.be/abFx65eQlaI",
    },
    {
      year: 2025,
      title: "Mir Mukhtiar Ali - Sufi",
      url: "https://youtu.be/GfTg5UEU2do",
    },
    {
      year: 2026,
      title: "Chinmaya Jhankaar - Audio-Video Devotional Presentation",
      url: "https://youtu.be/LzwWEEghIb4",
    },
    {
      year: 2026,
      title: "Loknaad - Folk Music of Maharashtra",
      url: "https://youtu.be/OPpeVlXmAuQ",
    },
  ],
  RAGA: [
    {
      year: 2011,
      title: "Vid. Ashwini Bhide Deshpande - Hindustani Vocal",
      url: "https://youtu.be/6mmzWejozY0",
    },
    {
      year: 2023,
      title: "Pt. Raghunandan Panshikar - Hindustani Vocal",
      url: "https://www.youtube.com/watch?v=pcpDfb1EFYU",
    },
    {
      year: 2024,
      title: "Vid. Sikkil Gurucharan - Carnatic Vocal",
      url: "https://youtu.be/LfMYDVIxv6E",
    },
    {
      year: 2025,
      title: "Pt. Ojesh Pratap Singh - Hindustani Vocal",
      url: "https://youtu.be/bMvQfUfDCRE",
    },
    {
      year: 2026,
      title: "Vid. Kriti Bhat - Carnatic Vocal",
      url: "https://youtu.be/-dvgqLb9VtU",
    },
  ],
  ISHWARA: [
    {
      year: 2016,
      title: "Pt. Rajan & Pt. Sajan Mishra - Hindustani Vocal",
      url: "https://youtu.be/90x-4jzz1DA",
    },
    {
      year: 2024,
      title: "Vid. Sikkil Gurucharan – Jai Hanumana – Guruji’s lyrics",
      url: "https://www.youtube.com/watch?v=BFIpIfKA27Y",
    },
    {
      year: 2026,
      title: "Vid. Kruti Bhat – Ramsiya Awadh Aaye – Guruji’s composition",
      url: "https://www.youtube.com/watch?v=iemcO22JP34",
    },
    {
      year: 2026,
      title: "Br. Ved Chaitanya – Manache Shlok",
      url: "https://www.youtube.com/watch?v=dMB0_gubWDM",
    },
    {
      year: 2026,
      title: "Swami Tejomayananda – The Heart of a Saint",
      url: "https://www.youtube.com/watch?v=salr5mkRYYs",
    },
    {
      year: 2026,
      title: "Vid. Arati Ankalikar – Hari Tum Jana Jana – Guruji’s composition",
      url: "https://www.youtube.com/watch?v=eeTIyBRFjuk",
    },
    {
      year: 2026,
      title: "SOK Students – Ganapati Ghanapaat",
      url: "https://www.youtube.com/watch?v=vppxVftaR4Y",
    },
    {
      year: null,
      title: "SOK Students – Saraswati Vandana",
      url: "https://www.youtube.com/watch?v=UEw-93plRRk",
    },
    {
      year: 2020,
      title: "SOK & CSR Students – Taal Tarang",
      url: "https://www.youtube.com/watch?v=pcpDfb1EFYU",
    },
    {
      year: 2015,
      title: "Gurudev Tava Mahaniya Kripa – Guruji’s composition",
      url: "https://www.youtube.com/watch?v=CpO54CKqJNo",
    },
  ],
};

function getYouTubeId(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") return parsed.pathname.slice(1);
    return parsed.searchParams.get("v") ?? "";
  } catch {
    return "";
  }
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

export default function VideoGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeVideo, setActiveVideo] = useState<GalleryVideo | null>(null);

  const openVideo = (video: GalleryVideo) => {
    setActiveVideo(video);
    dialogRef.current?.showModal();
  };

  const closeVideo = () => {
    dialogRef.current?.close();
    setActiveVideo(null);
  };

  return (
    <>
      <div className="page">
        <div className="glow" />
        <div className="gallery-card">
          <header className="gallery-header">
            <p className="gallery-eyebrow">NBF · THE ARCHIVE</p>
            <h1>Naada Bindu Festival over the Years</h1>
            <p className="gallery-intro">
              Explore recordings of Indian classical music, dance, and
              devotional presentations from across the years.
            </p>
          </header>

          <nav className="gallery-nav" aria-label="Gallery categories">
            {Object.keys(gallery).map((category) => (
              <a key={category} href={`#${category.toLowerCase()}`}>
                {category}
                <span>
                  {gallery[category].length.toString().padStart(2, "0")}
                </span>
              </a>
            ))}
          </nav>

          {Object.entries(gallery).map(([category, videos]) => (
            <section
              className="gallery-section"
              id={category.toLowerCase()}
              key={category}
              aria-labelledby={`${category.toLowerCase()}-heading`}
            >
              <div className="section-heading">
                <div>
                  <p className="gallery-eyebrow">COLLECTION</p>
                  <h2 id={`${category.toLowerCase()}-heading`}>{category}</h2>
                </div>
                <span className="section-count">
                  {videos.length.toString().padStart(2, "0")} recordings
                </span>
              </div>

              <div className="video-grid">
                {videos.map((video, index) => {
                  const videoId = getYouTubeId(video.url);
                  return (
                    <button
                      className="video-card"
                      key={`${video.url}-${index}`}
                      type="button"
                      onClick={() => openVideo(video)}
                      aria-label={`Play ${video.title}`}
                    >
                      <span className="video-card-image">
                        {videoId ? (
                          <img
                            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                            alt=""
                            loading="lazy"
                          />
                        ) : (
                          <span className="thumbnail-fallback">NBF</span>
                        )}
                        <span className="play-button" aria-hidden="true">
                          <svg viewBox="0 0 24 24" focusable="false">
                            <path d="M8 5.5v13l10-6.5z" />
                          </svg>
                        </span>
                        {video.year && (
                          <span className="video-year">{video.year}</span>
                        )}
                      </span>
                      <span className="video-card-copy">
                        <span className="video-card-category">{category}</span>
                        <span className="video-card-title">{video.title}</span>
                      </span>
                      <span className="video-card-action">Watch recording</span>
                    </button>
                  );
                })}
              </div>
            </section>
          ))}

          <dialog
            ref={dialogRef}
            className="video-modal"
            aria-labelledby="video-modal-title"
            onClose={() => setActiveVideo(null)}
            onClick={(event) => {
              if (event.target === dialogRef.current) closeVideo();
            }}
          >
            <div className="video-modal-content">
              <div className="video-modal-heading">
                <div>
                  <p className="gallery-eyebrow">
                    {activeVideo ? "NBF RECORDING" : "NBF ARCHIVE"}
                  </p>
                  <h2 id="video-modal-title">
                    {activeVideo?.title ?? "A recording from the Gurukula"}
                  </h2>
                </div>
                <button
                  className="video-modal-close"
                  type="button"
                  aria-label="Close video"
                  onClick={closeVideo}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              {activeVideo ? (
                <VideoSlide slide={activeVideo.url} />
              ) : (
                <p className="video-unavailable">
                  A recording for this question is not available yet.
                </p>
              )}
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
}
