import React from 'react';

export default function CatCard({
  cat,
  favorite,
  onFavorite,
  onDetail,
}) {
  return (
    <article className="cat-card">
      <div className="cat-image">
        <img
          src={cat.image}
          alt={`Kucing ras ${cat.name}`}
          loading="lazy"
        />

        <span className="trait">
          {cat.emoji} {cat.trait}
        </span>

        <button
          type="button"
          className={`favorite ${favorite ? 'is-favorite' : ''}`}
          onClick={() => onFavorite(cat.id)}
          aria-label={`${favorite ? 'Hapus' : 'Tambahkan'} ${cat.name} ${
            favorite ? 'dari' : 'ke'
          } favorit`}
          aria-pressed={favorite}
        >
          {favorite ? '♥' : '♡'}
        </button>
      </div>

      <div className="cat-card-body">
        <h3>{cat.name}</h3>
        <p>{cat.description}</p>

        <div className="cat-card-bottom">
          <span>Perawatan: {cat.care.toLowerCase()}</span>
          <button type="button" onClick={() => onDetail(cat)}>
            Kenali →
          </button>
        </div>
      </div>
    </article>
  );
}
