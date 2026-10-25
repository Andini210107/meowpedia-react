import React from 'react';
import CatCard from './CatCard.jsx';
import CatForm from './CatForm.jsx';

export default function CatSection(props) {
  const {
    cats,
    search,
    setSearch,
    filter,
    setFilter,
    favorites,
    onFavorite,
    onDetail,
    name,
    setName,
    trait,
    setTrait,
    onSubmit,
  } = props;

  const filters = ['Semua', 'Ramah', 'Aktif', 'Tenang'];

  const visible = cats.filter((cat) => {
    const matchSearch = cat.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      filter === 'Semua' || cat.trait === filter;

    return matchSearch && matchFilter;
  });

  return (
    <section className="section wrap" id="ras-kucing">
      <div className="section-heading">
        <div>
          <p className="eyebrow">KENALAN, YUK!</p>

          <h2>
            Temukan ras favoritmu<span>.</span>
          </h2>

          <p className="section-intro">
            Setiap kucing punya kepribadian unik. Cari tahu
            karakter mereka sebelum memilih sahabat berbulu.
          </p>
        </div>

        <label className="search-box">
          <span>⌕</span>

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari ras kucing..."
            aria-label="Cari ras kucing"
          />
        </label>
      </div>

      <div
        className="filter-row"
        role="group"
        aria-label="Filter ras kucing"
      >
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`filter-btn ${
              filter === item ? 'active' : ''
            }`}
          >
            {item === 'Semua'
              ? 'Semua ras'
              : item === 'Ramah'
                ? 'Ramah 🧡'
                : item === 'Aktif'
                  ? 'Aktif ⚡'
                  : 'Tenang ☁️'}
          </button>
        ))}
      </div>

      <div className="cat-grid">
        {visible.map((cat) => (
          <CatCard
            key={cat.id}
            cat={cat}
            favorite={favorites.includes(cat.id)}
            onFavorite={onFavorite}
            onDetail={onDetail}
          />
        ))}
      </div>

      {cats.length === 0 ? (
        <p className="empty-state">
          Belum ada data Ras Kucing
        </p>
      ) : visible.length === 0 ? (
        <p className="empty-state">
          Tidak ada ras yang cocok dengan pencarianmu.
          Coba kata kunci atau filter lain, ya! 🐾
        </p>
      ) : null}

      <p className="small-note">
        Catatan: karakter tiap kucing bisa berbeda.
        Informasi ras ini bersifat pengenalan umum.
      </p>

      <CatForm
        name={name}
        setName={setName}
        trait={trait}
        setTrait={setTrait}
        onSubmit={onSubmit}
      />
    </section>
  );
}