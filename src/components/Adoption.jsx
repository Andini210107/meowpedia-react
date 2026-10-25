import React from 'react';

export default function Adoption() {
  return (
    <section className="adoption-wrap" id="adopsi">
      <div className="adoption">
        <span className="adoption-paws" aria-hidden="true">🐾</span>
        <div className="adoption-content">
          <div>
            <p className="eyebrow">SATU RUMAH, SATU KESEMPATAN BARU</p>
            <h2>Mungkin kamu adalah rumah yang mereka cari.</h2>
            <p className="adoption-copy">Pertimbangkan adopsi dari shelter atau komunitas tepercaya. Kenali kebutuhan mereka dan bersiaplah untuk komitmen seumur hidup.</p>
          </div>
          <a className="button button-light" href="https://www.google.com/search?q=komunitas+adopsi+kucing+Indonesia" target="_blank" rel="noreferrer">Cari komunitas adopsi ↗</a>
        </div>
      </div>
    </section>
  );
}
