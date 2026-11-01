import { Link, useNavigate, useParams } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Detail.css'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { items, loading, hapus } = useKoleksi()
  const item = items.find((i) => String(i.id) === id)

  if (loading) return <p>Memuat data...</p>
  if (!item) {
    return (
      <section>
        <h1>Item tidak ditemukan</h1>
        <Link to="/koleksi">Kembali ke koleksi</Link>
      </section>
    )
  }

  const konfirmasiHapus = () => {
    if (window.confirm(`Hapus "${item.judul}"?`)) {
      hapus(item.id)
      navigate('/koleksi')
    }
  }

  return (
    <section className='w-fit bg-white p-10 rounded-xl flex flex-col items-center justify-center gap-4'>
      <h1>{item.judul}</h1>
      <dl>
        <dt>Kategori</dt>
        <dd>{item.kategori}</dd>
        <dt>Tanggal</dt>
        <dd>{item.tanggal}</dd>
        <dt>Lokasi</dt>
        <dd>{item.lokasi}</dd>
        <dt>Penyelenggara</dt>
        <dd>{item.penyelenggara}</dd>
      </dl>
      <div className="aksi">
        <button id="btnHapus" type="button" onClick={konfirmasiHapus}>
          Hapus
        </button>
        <Link id='btnKembali' to="/koleksi">Kembali</Link>
      </div>
    </section>
  )
}