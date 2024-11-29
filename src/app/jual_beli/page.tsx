'use client'
import NewCards from "../../components/NewCards"
import Navbar from '../../components/Navbar';
import Sidebar from "../../components/sidebar"
import Header from "../../components/header"
import FeatureList from '../../components/FeatureList'
import TopCards from '../../components/TopCards';


import Footer from '../../components/Footer'
import BannerBottom from '@/components/BannerBottom';
export default function page() {




  return (
    <>
  <div className="  flex flex-col min-h-screen max-w-screen-xl container mx-auto">

  <Navbar />
  <div className="lg:px-24 px-4 pt-5 flex flex-row">
    <div className="relative w-3/12 lg:flex hidden flex-shrink-0 ">
      <Sidebar />
    </div>
    <div className="lg:ml-10 w-full lg:w-8/12 bg-custom-gradient-hero h-max lg:h-[360px] rounded-lg flex flex-col items-center relative">
      <Header />
    </div>
  </div>
  <div className="lg:px-24 px-4 pt-5 flex flex-row w-full">
    <div className="lg:w-3/12 lg:flex hidden flex-shrink-0"></div>
    <FeatureList />
  </div>
  <div className="min-h-screen lg:px-24 px-4 pt-5 flex flex-col w-full container mx-auto">
    <div className="w-full pt-5 mb-5 gap-4">
      <div className="w-full flex-col justify-items-end">
        <div className="flex flex-col w-full lg:w-8/12 mx-auto my-8 ">
          <div className='lg:mx-32'>
          <h1 className="gradient-text-wavy font-extrabold text-4xl my-5">
            Tersedia Ayam
          </h1>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-8/12 mx-auto my-8">
        <NewCards />
      </div>
      <div className="flex flex-col w-full lg:w-8/12 mx-auto my-8">
        <TopCards />
      </div>

        <BannerBottom />
      </div>
    </div>
  </div>
  <Footer />
</div>

   
    </>
    
    
  )
}
