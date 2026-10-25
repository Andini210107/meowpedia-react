import React from 'react';

export default function Hero({ onQuiz }) {
  return (
    <section className="hero" id="beranda">
      <div className="hero-pattern" />

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow-pill">
            ✦ Rumahnya para pecinta kucing
          </span>

          <h1>
            Dunia kucing,
            <br />
            penuh <em>cerita.</em>
          </h1>

          <p>
            Kenali si manis lebih dekat. Temukan ras favoritmu, pelajari
            cara merawatnya, dan bantu kucing menemukan rumah penuh cinta.
          </p>

          <div className="hero-actions">
            <a className="button button-coral" href="#ras-kucing">
              Jelajahi dunia kucing →
            </a>
            <button
              type="button"
              className="button button-light"
              onClick={onQuiz}
            >
              🐾 Kuis kucing
            </button>
          </div>

          <div className="hero-note">
            <span>😺</span>
            <span>🐈</span>
            <span>🐈‍⬛</span>
            <p>
              <b>Untuk cat parents</b>
              <br />
              dan calon manusia kesayangan kucing.
            </p>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="bubble bubble-peach" />
          <div className="bubble bubble-sage" />

          <figure className="hero-figure">
            <img
              src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1100&q=85"
              alt="Kucing oranye menatap kamera"
            />
            <figcaption>
              <small>MOOD HARI INI</small>
              <b>Makan, tidur, mengulang.</b>
              <span>💤</span>
            </figcaption>
          </figure>

          <div className="floating-note">
            💗 <b>Meow = love</b>
          </div>
        </div>
      </div>
    </section>
  );
}
