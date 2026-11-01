import mahasiswa from '../../mahasiswa.json'
import './Tentang.css'

// Ganti dengan alamat repo fork kamu.
const REPO = 'https://github.com/gedevalendra/uts-paw'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section className='TentangSection'>
      <h1 id="tentangH1">Tentang Saya</h1>
      <dl>
        <div className="ttgGrup">
          <dt>Tema</dt>
          <dd>{tema}</dd>
        </div>
        <div className="ttgGrup">
          <dt>Nama</dt>
          <dd>{nama}</dd>
        </div>
        <div className="ttgGrup">
          <dt>NIM</dt>
          <dd>{nim}</dd>
        </div>
        <div className="ttgGrup">
          <dt>Kelas</dt>
          <dd>{kelas}</dd>
        </div>
      </dl>
      <p>
        Kode sumber: <a href={REPO}>{REPO}</a>
      </p>
    </section>
  )
}