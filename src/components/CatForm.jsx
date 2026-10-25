import React from 'react';

export default function CatForm({
  name,
  setName,
  trait,
  setTrait,
  onSubmit,
}) {
  return (
    <form className="add-cat-form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="catName">Tambah ras kucing</label>
        <p>Masukkan ras yang ingin kamu kenali.</p>
      </div>

      <input
        id="catName"
        name="catName"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Contoh: Anggora"
        aria-label="Nama ras kucing"
        required
      />

      <select
        value={trait}
        onChange={(event) => setTrait(event.target.value)}
        aria-label="Karakter kucing"
      >
        <option value="Ramah">Ramah</option>
        <option value="Aktif">Aktif</option>
        <option value="Tenang">Tenang</option>
      </select>

      <button className="button button-coral" type="submit">
        + Tambah
      </button>
    </form>
  );
}
