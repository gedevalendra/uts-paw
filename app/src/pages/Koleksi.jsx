import { useState } from 'react'
import useKoleksi from '../hooks/useKoleksi.js'
import KotakPencarian from '../components/KotakPencarian.jsx'
import KartuItem from '../components/KartuItem.jsx'

export default function Koleksi() {
  const { items, loading, error } = useKoleksi()
  const [cari, setCari] = useState('')
  const [kategori, setKategori] = useState('Semua')

  if (loading) return <p>Memuat data...</p>
  if (error) return <p role="alert">Gagal memuat: {error}</p>

  const daftarKategori = ['Semua', ...new Set(items.map((item) => item.kategori))]
  const tampil = items.filter(
    (item) => item.judul.toLowerCase().includes(cari.toLowerCase()) && (kategori === 'Semua' || item.kategori === kategori),
  )

  return (
    <section className='bg-white p-10 rounded-xl flex flex-col items-center justify-center gap-4'>
      <h1 className='text-2xl italic'>Koleksi Semua Jadwal Kegiatan Kampus</h1>
      <div className="w-full flex items-center justify-center gap-4">
        <select aria-label="Kategori" className='outline outline-1 outline-gray-800 p-3 bg-gray-800 text-white rounded-md' value={kategori} onChange={(e) => setKategori(e.target.value)}>
          {daftarKategori.map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>
        <KotakPencarian nilai={cari} onUbah={setCari}  />
      </div>
      {tampil.length === 0 ? (
        <p>Tidak ada item yang cocok.</p>
      ) : (
        <div className="daftar-kartu w-full">
          {tampil.map((item) => (
            <KartuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}