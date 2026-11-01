import './KotakPencarian.css'

export default function KotakPencarian({nilai, onUbah}){
    return(
        <div id='kotakPencarian' className="w-full flex items-center">
            <div className="relative w-full flex items-center rounded-md shadow-md">
                <i className="z-30 bx bx-file absolute left-4"></i>
                <input
                    type="search"
                    className="relative bg-transparent z-20 pl-10 border-none outline outline-1 outline-gray-800 w-full p-3 rounded-l-md" 
                    name="searchKoleksi" 
                    required
                    value={nilai} 
                    onChange={(e) => onUbah(e.target.value)} 
                 />
                <label htmlFor="searchKoleksi" className=" z-10 absolute left-8 top-2.5 text-sm text-gray-400 py-1 px-2 transition-all duration-200 ease-in-out">Cari Jadwal Kegiatan Kampus</label>
                <button>
                    <i className="bx bx-search p-4 outline outline-1 outline-gray-800 bg-gray-800 rounded-r-md text-white"></i>
                </button>
            </div>
        </div>
    );
}