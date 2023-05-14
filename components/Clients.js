import React from 'react';
import Image from 'next/image';
import ciscoLogo from '../public/cisco.png';
import siemensLogo from '../public/siemens.png';
import sbiLogo from '../public/sbi.png';
import bsnlLogo from '../public/bsnl.webp';

const Clients = () => {
  return (
    <div className="w-full mx-auto bg-white text-black p-4">
      <h1 className="text-center font-sans text-4xl font-bold underline-offset-8" style={{ textDecoration: 'underline'}}>Our Esteemed Partners</h1>
      <div className="w-full flex flex-wrap justify-around items-center">
        <div className="w-full sm:w-6/12 md:w-3/12 px-2">
          <Image
            src={ciscoLogo}
            alt="cisco logo"
            width={200}
            height={200 * (3 / 4)}
            className="mx-auto h-auto object-contain grayscale scale-[0.8]"
          />
        </div>
        <div className="w-full sm:w-6/12 md:w-3/12 px-2">
          <Image
            src={siemensLogo}
            alt="siemens logo"
            width={200}
            height={200 * (3 / 4)}
            className="mx-auto h-auto object-contain grayscale"
          />
        </div>
        <div className="w-full sm:w-6/12 md:w-3/12 px-2">
          <Image
            src={sbiLogo}
            alt="sbi logo"
            width={200}
            height={200 * (3 / 4)}
            className="mx-auto h-auto object-contain grayscale"
          />
        </div>
        <div className="w-full sm:w-6/12 md:w-3/12 px-2">
          <Image
            src={bsnlLogo}
            alt="bsnl logo"
            width={200}
            height={200 * (3 / 4)}
            className="mx-auto h-auto object-contain grayscale"
          />
        </div>
        {/*
        <div className="w-full sm:w-6/12 md:w-3/12 px-2">
          <Image
            src={japfaLogo}
            alt="japfa logo"
            width={200}
            height={200 * (3 / 4)}
            className="mx-auto h-auto object-contain grayscale"
          />
        </div>
        */}
      </div>
    </div>
  );
};

export default Clients;
