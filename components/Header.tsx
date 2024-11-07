import React from 'react';
import Head from "next/head";
import { FaRegHeart, FaRegUser, FaSearch ,} from 'react-icons/fa'; 
import { BsCart3 } from "react-icons/bs";
import Link from 'next/link';
import './style.css'


function Header() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Bodoni&family=Rye&display=swap" rel="stylesheet" />
      </Head>
      <div className="main flex flex-col md:flex-row justify-between items-center bg-[#A29875] px-6 md:px-12 py-4 w-full"> {/* Responsive padding */}
        
      
      <h1 className="font-rye text-6xl sm:text-5xl text-white mb-4 md:mb-0">
  Purity
</h1>


        <div className="relative w-full md:w-[769.89px]">
  <input
    type="text"
    className="w-full h-[40px] rounded-xl text-left font-nunito text-[18.68px] font-normal leading-[25.48px] placeholder:text-[#6C757D] pl-10"
    placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
  />
  <div className="search-wrapper">
    <FaSearch />
  </div>
</div>

<div className="flex space-x-6 mt-4 md:mt-0">
  <div className="icon-wrapper">
    <FaRegHeart />
  </div>
  <div className="icon-wrapper">
    <FaRegUser />
  </div>
  <div className="icon-wrapper">
    <BsCart3 />
  </div>
</div>

      </div>
    </>
  );
}

export default Header;


