import React, { useState } from 'react';
import initialCats from './data/cats.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import CatSection from './components/CatSection.jsx';
import CareGuide from './components/CareGuide.jsx';
import ArticleSection from './components/ArticleSection.jsx';
import Adoption from './components/Adoption.jsx';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal.jsx';

export default function App() {
  const [cats, setCats] = useState(initialCats);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Semua');
  const [favorites, setFavorites] = useState([]);
  const [name, setName] = useState('');
  const [trait, setTrait] = useState('Ramah');
  const [dark, setDark] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function addCat(event) {
    event.preventDefault();

    const cleanName = name.trim();

    if (!cleanName) {
      return;
    }

    if (
      cats.some(
        (cat) => cat.name.toLowerCase() === cleanName.toLowerCase()
      )
    ) {
      window.alert('Ras tersebut sudah ada di daftar. Coba nama lain, ya!');
      return;
    }

    const newCat = {
      id: Date.now(),
      name: cleanName,
      trait,
      emoji: trait === 'Aktif' ? '⚡' : trait === 'Tenang' ? '☁️' : '🧡',
      care: 'Belum diketahui',
      description: 'Ras yang ditambahkan oleh pengunjung Meowpedia.',
      image:
        'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=700&q=80',
      detail: `Kamu menambahkan ${cleanName} ke daftar Meowpedia. Cari informasi tepercaya untuk mengetahui kebutuhan perawatan ras ini.`,
    };

    setCats((current) => [...current, newCat]);
    setName('');
    setFilter('Semua');
    setSearch('');
  }

  function closeModal() {
    setSelectedCat(null);
    setShowQuiz(false);
  }

  return (
    <div className={`app ${dark ? 'dark-theme' : ''}`}>
      <Header
        dark={dark}
        onToggleTheme={() => setDark((value) => !value)}
      />

      <main>
        <Hero onQuiz={() => setShowQuiz(true)} />

        <section className="wrap stats">
          <div>
            <b>01</b>
            <span>Kenali ras</span>
          </div>
          <div>
            <b>02</b>
            <span>Rawat dengan tepat</span>
          </div>
          <div>
            <b>03</b>
            <span>Baca cerita baru</span>
          </div>
          <div>
            <b>04</b>
            <span>Adopsi, jangan beli</span>
          </div>
        </section>

        <CatSection
          cats={cats}
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          favorites={favorites}
          onFavorite={toggleFavorite}
          onDetail={setSelectedCat}
          name={name}
          setName={setName}
          trait={trait}
          setTrait={setTrait}
          onSubmit={addCat}
        />

        <CareGuide />
        <ArticleSection />
        <Adoption />
      </main>

      <Footer />

      <Modal
        cat={selectedCat}
        quiz={showQuiz}
        onClose={closeModal}
      />
    </div>
  );
}
