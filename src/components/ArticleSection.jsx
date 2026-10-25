import React from 'react';

const articles = [
  {
    tag: 'PERAWATAN',
    time: '5 menit baca',
    title: 'Cara membuat kucing betah di rumah',
    text: 'Kenali ruang aman, rutinitas, tempat bersembunyi, dan permainan yang membuat kucing merasa nyaman.',
  },
  {
    tag: 'NUTRISI',
    time: '4 menit baca',
    title: 'Memahami kebutuhan makan kucing',
    text: 'Pahami pentingnya makanan lengkap, porsi yang sesuai, dan air minum bersih setiap hari.',
  },
  {
    tag: 'PERILAKU',
    time: '6 menit baca',
    title: 'Apa arti bahasa tubuh kucing?',
    text: 'Ekor, telinga, suara, dan postur tubuh bisa membantu kita memahami suasana hati kucing.',
  },
];

const articleIcons = ['🏡', '🥣', '🐈'];

export default function ArticleSection() {
  return (
    <section className="section wrap" id="artikel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">CERITA DARI DUNIA MEONG</p>
          <h2>
            Bekal jadi cat parent<span>.</span>
          </h2>
          <p className="section-intro">
            Baca wawasan ringan untuk mengenal dan merawat kucing dengan
            lebih baik.
          </p>
        </div>
      </div>

      <div className="article-grid">
        {articles.map((article, index) => (
          <article className="article-card" key={article.title}>
            <div className={`article-art art-${index + 1}`}>
              {articleIcons[index]}
            </div>

            <div className="article-content">
              <div className="article-meta">
                <span>{article.tag}</span>
                <small>{article.time}</small>
              </div>

              <h3>{article.title}</h3>
              <p>{article.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
