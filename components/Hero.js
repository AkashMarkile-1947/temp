import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


const HeroSection = () => {
    return (
      <div>
      <div className="relative h-screen">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Replace video with blue linear gradient on small devices */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-0 md:" />
          <div className="md:hidden absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 to-blue-800 z-0" />
          <video
            className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            muted
            loop
            src="/hero.mp4"
            type="video/mp4"
          />
          <div className="absolute top-0 left-[-100px] w-2/3 h-full bg-black opacity-50 z-0 skew-x-12" />
        </div>
        <div className="absolute top-1/2 left-[33%] transform -translate-x-[50%] -translate-y-[50%] text-left text-white  z-5 h-fit w-[66%] flex  flex-col justify-center parent-container">
        <div className="h-fit w-full bg-emerald-800 skew-x-[165deg] relative left-[-20px] hidden md:block ">
          <h1 className="text-xl md:text-[5xl] font-bold mb-[32px] pl-[80px md:20] skew-x-[12deg]">Welcome to my website</h1>
          <p className="text-base md:text-[2xl] leading-7 w-[15ch]  md:w-[45ch] skew-x-[12deg] pl-[80px md:20]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        </div>
        <div className="flex w-full bg-black hidden md:flex  absolute bottom-0 justify-around flex-wrap py-4">
            <HeroLinks title="IP Networking" />
            <HeroLinks title="Instrumentation" />
            <HeroLinks title="IP Security" />
            <HeroLinks title="Metal Fabrication" />
        </div>
      </div>
      </div>
    );
  };
  
  export default HeroSection;


export const HeroLinks = ({title}) =>  {
    return (
        <a
        href="#"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`${inter.className} mb-3 text-base md:text-[2xl] font-semibold`}>
          {title}{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p
          className={`${inter.className} m-0 max-w-[17ch]  md:max-w-[30ch] text-sm opacity-50`}
        >
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
      </a>
    )
}