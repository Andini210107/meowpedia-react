import React, { useState } from 'react';

const quizResults = {
  play: 'Kamu si Petualang! ⚡ Kucing aktif dengan banyak permainan interaktif mungkin cocok dengan gaya hidupmu. Pastikan kebutuhan gerak dan stimulasi mereka terpenuhi.',
  cozy: 'Kamu si Pencari Cozy! ☁️ Kamu menghargai momen tenang. Kenali karakter setiap kucing—ada yang suka dipangku, ada juga yang cukup duduk di dekatmu.',
  care: 'Kamu si Perawat Andal! 🩺 Rasa ingin tahumu adalah modal bagus. Terus belajar dan konsultasikan kebutuhan kesehatan kucing kepada dokter hewan.',
};

export default function Modal({ cat, quiz, onClose }) {
  const [choice, setChoice] = useState('');
  const [result, setResult] = useState('');

  React.useEffect(() => {
    if (quiz) {
      setChoice('');
      setResult('');
    }
  }, [quiz]);

  if (!cat && !quiz) return null;

  function submitQuiz() {
    if (!choice) {
      setResult('Pilih satu jawaban dulu, ya! 🐾');
      return;
    }
    setResult(quizResults[choice]);
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className={`modal ${quiz ? 'quiz-modal' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Tutup">
          ×
        </button>

        {cat ? (
          <>
            <p className="eyebrow">KENALI SAHABAT BERBULU</p>
            <h2 id="modal-title">{cat.name}</h2>
            <p>{cat.detail}</p>
            <p className="modal-tip">
              Tip: setiap kucing punya karakter unik. Kenali kebutuhan individu kucingmu, bukan hanya rasnya.
            </p>
          </>
        ) : (
          <>
            <p className="eyebrow">FUN QUIZ 🐾</p>
            <h2 id="modal-title">Kamu tipe cat parent apa?</h2>
            <p className="quiz-description">Pilih aktivitas yang paling kamu suka.</p>

            <div className="quiz-options">
              <label className={`quiz-option ${choice === 'play' ? 'selected' : ''}`}>
                <input type="radio" name="quiz" value="play" checked={choice === 'play'} onChange={() => { setChoice('play'); setResult(''); }} />
                <span><strong>Aktif bermain dan eksplorasi</strong><small>Main kejar-kejaran, puzzle, dan petualangan.</small></span>
              </label>
              <label className={`quiz-option ${choice === 'cozy' ? 'selected' : ''}`}>
                <input type="radio" name="quiz" value="cozy" checked={choice === 'cozy'} onChange={() => { setChoice('cozy'); setResult(''); }} />
                <span><strong>Quality time yang tenang</strong><small>Baca buku ditemani kucing tidur.</small></span>
              </label>
              <label className={`quiz-option ${choice === 'care' ? 'selected' : ''}`}>
                <input type="radio" name="quiz" value="care" checked={choice === 'care'} onChange={() => { setChoice('care'); setResult(''); }} />
                <span><strong>Merawat dan belajar hal baru</strong><small>Mempelajari nutrisi, kesehatan, dan perilaku.</small></span>
              </label>
            </div>

            {result && <p className="quiz-result" role="status">{result}</p>}

            <div className="quiz-actions">
              <button type="button" className="button button-coral" onClick={submitQuiz}>Lihat hasilku ✨</button>
              <button type="button" className="button quiz-close-button" onClick={onClose}>Tutup</button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
