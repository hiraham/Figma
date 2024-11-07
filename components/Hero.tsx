
import Image from "next/image";
import React from "react";
import Head from "next/head";

function Herosection() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Bodoni&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="main flex flex-col md:flex-row justify-center items-center mt-20 px-4 md:px-0">
        <div className="text w-full md:w-3/5 text-left py-10 ml-44">
        
          <h1 className="md:text-6xl  mb-12 font-bodoni mt-2.5% ">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="text-[#787054] w-[500px] font-bodoni mb-14 text-lg md:text-xl ">
            An example of intricate workmanship and detail, elegant necklaces and
            long and short chains form a part of our desirable collection.
          </p>
          <button className="btn bg-[#A29875] text-white text-[25px] font-bodoni px-6 py-3 rounded hover:bg-[#9A8770] transition">
            Explore Now
          </button>
        </div>
        <div className="img w-full md:w-2/5">
      
          <Image
            src="/images/j.png"
            alt="img"
            width={350} 
            height={480}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
export default Herosection;
