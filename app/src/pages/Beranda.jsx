import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'
// import { Image } from 'react'

export default function Beranda() {
  const { items = [], loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section className='h-[60vh] flex flex-col gap-10 items-center justify-center'>
      <div className='w-full flex flex-col gap-1 items-center justify-center'>
        <h1 className='text-4xl italic font-semibold'>Daftar Tugas</h1>
        <p className='text-lg tracking-wider font-semibold uppercase border-y border-1 border-gray-400 py-2 px-8'>{mahasiswa.tema}</p>
      </div>
      <div className="flex flex-col gap-4 w-full items-center">
      {loading ? (
        <p>Memuat ringkasan...</p>
      ) : (
        <p>
          Ada {items.length} tugas dalam {jumlahKategori} kategori.
        </p>
      )}

      <div className="grid grid-cols-5 gap-4 text-center">
        {[...new Set(items?.map((item) => item.kategori))].map((kategori, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-md">
            <h1 className="font-semibold text-gray-800">
              {kategori}
            </h1>
          </div>
        ))}

      </div>
      <Link to="/koleksi" className='bg-gray-800 text-gray-100 py-3 px-6 w-fit rounded-md transition-all duration-200 ease-in-out hover:scale-95 hover:opacity-80'>Lihat semua tugas</Link>
      </div>
    </section>
  )
}