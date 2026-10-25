import React from 'react';

const tips = [
  {
    icon: '🥣',
    title: 'Nutrisi seimbang',
    text: 'Pilih makanan sesuai usia dan kebutuhan kucing. Pastikan air bersih selalu tersedia.',
  },
  {
    icon: '🪮',
    title: 'Rawat bulunya',
    text: 'Sisir bulu secara rutin dan periksa telinga, mata, serta kuku dengan lembut.',
  },
  {
    icon: '🩺',
    title: 'Periksa kesehatan',
    text: 'Jadwalkan pemeriksaan dokter hewan, vaksinasi, dan pencegahan parasit.',
  },
];

export default function CareGuide() {
  return (
    <section className="care-section" id="panduan">
      <div className="wrap">
        <p className="eyebrow">KARENA MEREKA KELUARGA</p>
        <h2>
          Sayangi dengan <em>sepenuh hati.</em>
        </h2>
        <p className="section-intro">
          Perawatan sederhana yang membantu sahabat berbulu tumbuh sehat
          dan nyaman.
        </p>

        <div className="tips-grid">
          {tips.map((tip, index) => (
            <article className="tip-card" key={tip.title}>
              <span className="tip-number">
                0{index + 1}
              </span>
              <span className="tip-icon">{tip.icon}</span>
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
