'use client'
import React from 'react'
import Navbar from '../../components/Navbar';
import Sidebar from "../../components/sidebar"
import NewCards from '../../components/NewCards';
import Footer from '../../components/Footer'

export default function page() {




  return (
    <>
    <div className="flex flex-col min-h-screen max-w-screen-xl container mx-auto ">
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <div className="lg:px-24 px-4 pt-5 flex flex-row flex-grow lg:w-full">
        {/* Sidebar */}
        <div className="relative w-3/12 lg:flex hidden">
          <Sidebar />
        </div>

        {/* Konten Tengah */}
        <div className="w-full lg:w-8/12 rounded-lg flex flex-col items-center mx-0 lg:mx-12 pb-2 lg:pb-4">
          <NewCards />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>




   
    </>
    
    
  )
}
