import { useLocation } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import './Layout.css'

const MENU = [
  { ke: '/', label: 'Beranda' },
  { ke: '/koleksi', label: 'Koleksi' },
  { ke: '/tambah', label: 'Tambah' },
  { ke: '/statistik', label: 'Statistik' },
  { ke: '/tentang', label: 'Tentang' },
]


export default function Layout() {
  const location = useLocation();

  const [isSidebarShow, setSidebarShow] = useState(false);
  const toggleSidebar = () => {
    setSidebarShow(!isSidebarShow);
  }
  return (
    <div className="kerangka relative">
      <header className="z-[10000] sticky top-0 w-full flex justify-between items-center p-[1%] backdrop-blur-md">
        <strong className='text-gray-800'>
          AgendaKampus
        </strong>        
        <nav className="hidden md:flex text-gray-800 gap-2 hover bg-white shadow-md px-4 py-2 rounded-full">
          {MENU.map(({ ke, label }) => (
            <NavLink key={ke} to={ke} end={ke === '/'}
              className={({ isActive }) => 
              `transition-all duration-200 ${
                isActive 
                  ? 'bg-gray-100 p-2 px-4 rounded-full' 
                  : 'bg-transparent text-gray-500 p-2 px-4 hover:text-gray-800'               
                }`
            }
              >
              {label}
            </NavLink>
          ))}
        </nav>
        <nav className='flex items-center gap-4'>
          <a href="https://github.com/gedevalendra" className={`flex items-center gap-2 bg-gray-800 py-2 px-4 rounded-md text-white `}>
            <i className='bxl bx-github text-xl'></i>
            GitHub
          </a>
        </nav>
      </header>
      <main className="w-full max-w-7xl">
        <Outlet />
      </main>
      <footer className="text-sm border-t border-gray-800/20 w-full flex justify-center items-center fixed bottom-0 backdrop-blur-md py-4 text-gray-800">Ujian Tengah Semester Pengembangan Aplikasi Web</footer>
    </div>
  )
}