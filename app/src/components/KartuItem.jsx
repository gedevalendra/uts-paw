import { Link } from "react-router-dom";
import './KartuItem.css'

export default function KartuItem({ item }) {
    const { id, judul, kategori, tanggal, lokasi, penyelenggara } = item
    return (
        <article className="relative flex flex-col justify-between bg-white shadow-md rounded-md p-2 w-full">
            <div className="relative w-full h-full flex flex-col justify-between gap-2 bg-gray-50 shadow-md rounded-sm p-2">
                <h1>{judul}</h1>
                <span className='bg-gray-100 outline outline-[1px] px-2 py-1 rounded-md text-xs outline-gray-400 w-fit'>
                    {tanggal}
                </span>
                <span>Kategori : {kategori}</span>
                <span>{penyelenggara}</span>
                <div className="flex items-center bg-gray-800 text-white w-fit py-1 px-2 rounded-md gap-1 text-sm">
                    <i className="bx bx-location"></i>
                    {lokasi}
                </div>
                <hr />
                <div className="BtnDetailKoleksi">
                    <Link to={`/koleksi/${id}`} >Lihat Detail Koleksi</Link>
                </div>
            </div>
        </article>
    );
}