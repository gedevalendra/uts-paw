import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Seminar', tanggal: '', lokasi: '', penyelenggara: '' }

export default function Tambah() {
  const { items = [], loading } = useKoleksi()
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    <section className='w-full p-[5%] flex flex-col items-center justify-center'>
      <form className="formulir max-w-2xl flex flex-col " onSubmit={simpan} noValidate>
        <h1 className='text-4xl italic font-semibold'>Tambah Agenda Kegiatan Kampus</h1>

        <div className="">
          <label htmlFor="judul">Judul Kegiatan</label>
          <input id="judul" name="judul" value={form.judul} onChange={ubah} className='w-full' placeholder='ex. Seminar INFEST' />
          {galat && <p role="alert">{galat}</p>}
        </div>

        <div className="">
          <label htmlFor="kategori">Kategori</label>
          <select className='w-full' id="kategori" name="kategori" value={form.kategori} onChange={ubah} >
            <option>
              Pilih Kategori
            </option>
            {items?.map((item)=>(
              <option>{item.kategori}</option>
            ))}
          </select>
        </div>

        <div className="">
          <label htmlFor="tanggal">Tanggal</label>
          <input className='w-full' id="tanggal" name="tanggal" type="date" value={form.tanggal} onChange={ubah} />

        </div>
        <div className="">
          <label htmlFor="lokasi">Lokasi</label>
          <input className='w-full' id="lokasi" name="lokasi" type="text" value={form.lokasi} onChange={ubah}  placeholder='ex. Aula GK2 - ITERA' />

        </div>
        <div className="">
          <label htmlFor="penyelenggara">Penyelenggara</label>
          <input className='w-full' id="penyelenggara" name="penyelenggara" type="text" value={form.penyelenggara} onChange={ubah}  placeholder='ex. HMIF' />

        </div>
        <div className="flex items-center justify-between gap-4">
          <button type="reset" className='bg-transparent outline outline-2 outline-gray-400 py-2 px-6 rounded-md w-full hover:scale-95 transition-all duration-200 ease-in-out'>Reset</button>
          <button type="submit" className='bg-gray-800 outline outline-2 outline-gray-800 text-white py-2 px-6 rounded-md w-full hover:scale-95  transition-all duration-200 ease-in-out'>Simpan</button>
        </div>
      </form>
    </section>
  )
}