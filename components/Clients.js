import React from 'react';
import bsnl from '../public/bsnl.webp';
import Image from 'next/image';

const Clients = () => {
  return (
    <div className="w-full mx-auto bg-white text-black p-4">
      <h1 className="text-center font-serif text-4xl underline-offset-8" style={{ textDecoration: 'underline'}}>Our esteemed clients</h1>
      <div className="w-full flex flex-wrap justify-around items-center">
        <div className="w-full sm:w-6/12 md:w-3/12 px-2">
          <img
            src="/suzlon.png"
            className="w-[250px] sm:w-[200px] md:w-[150px] mx-auto h-auto aspect-[3/4] object-contain grayscale"
            alt="bsnl logo"
          />
        </div>
        <div className="w-full sm:w-6/12 md:w-3/12 px-2">
          <img
            src="/Renew.png"
            className="w-[250px] sm:w-[200px] md:w-[150px] mx-auto h-auto aspect-[3/4] object-contain grayscale"
            alt="bsnl logo"
          />
        </div>
        <div className="w-full sm:w-6/12 md:w-3/12 px-2">
          <img
            src="/sbi.png"
            className="w-[250px] sm:w-[200px] md:w-[150px] mx-auto h-auto aspect-[3/4] object-contain grayscale"
            alt="bsnl logo"
          />
        </div>
        <div className="w-full sm:w-6/12 md:w-3/12 px-2">
          <img
            src="/bsnl.webp"
            className="w-[250px] sm:w-[200px] md:w-[150px] mx-auto h-auto aspect-[3/4] object-contain grayscale"
            alt="bsnl logo"
          />
        </div>
        {/*
        <div className="w-full sm:w-6/12 md:w-3/12 px-2">
          <img
            src="/japfa2.png"
            className="w-[250px] sm:w-[200px] md:w-[150px] mx-auto h-auto aspect-[3/4] object-contain grayscale"
            alt="bsnl logo"
          />
        </div>
  */}
      </div>
    </div>
  );
};

export default Clients;
