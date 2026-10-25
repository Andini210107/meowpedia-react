import React from 'react';

export default function Header({ dark, onToggleTheme }) {
  return (
    <header className="site-header">
      <nav className="nav wrap">
        <a className="brand" href="#beranda">
          <span className="brand-icon">🐱</span>
          <span>
            <b>
              meow<span>pedia</span>
            </b>
            <small>CAT LOVERS CLUB</small>
          </span>
        </a>

        <div className="nav-links">
          <a href="#ras-kucing">Ras Kucing</a>
          <a href="#panduan">Panduan</a>
          <a href="#artikel">Artikel</a>
          <a href="#adopsi">Adopsi</a>
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-button"
            onClick={onToggleTheme}
            aria-label="Ganti tema"
            aria-pressed={dark}
          >
            {dark ? '☀️' : '☾'}
          </button>

          <a className="button button-dark nav-cta" href="#adopsi">
            Temukan teman ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
