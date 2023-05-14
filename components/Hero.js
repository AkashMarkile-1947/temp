import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


const HeroSection = () => {
    return (
      <div>
      <div className="relative h-[60vh] sm:h-[91vh]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Replace video with blue linear gradient on small devices */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-0 md:" />
          <div className="md:hidden absolute top-0 left-0 w-full h-full">
            <img
              src="/hero_xs.jpg"
              alt="industry 4.0"
              className="object-cover z-0"
            />
          </div>
          <video
            className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            muted
            loop
            src="/hero.mp4"
            type="video/mp4"
          />
          <div className="absolute hidden md:block top-0 left-[-100px] w-5/6 md:w-2/3 bg-black h-full opacity-50 z-0 skew-x-12" />
        </div>
        <div className="absolute top-1/2 left-[33%] transform -translate-x-[50%] -translate-y-[50%] text-left text-white  z-5 h-fit w-[66%] flex  flex-col justify-center parent-container">
        <div className="h-fit w-full  bg-transparent skew-x-[165deg] relative left-[-20px] hidden md:block  mb-[12%] ml-[5%]">
          <h1 className="text-xl md:text-4xl font-bold md:pl-[30px] skew-x-[12deg]">Industry 4.0 Evolution</h1>
          <p className="text-base md:text-lg leading-7 w-[15ch]  md:w-[45ch] skew-x-[12deg] md:pl-[50px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        </div>
        <div className="flex w-full backdrop-blur-md hidden md:flex  absolute bottom-0 justify-around flex-wrap py-4">
          <HeroLinks title="Data Communication" />
          <HeroLinks title="Control panel" />
          <HeroLinks title="Wherehouse Management" />
          <HeroLinks title="Components Manufacturing" />
        </div>
      </div>
      </div>
    );
  };
  
  export default HeroSection;


export const HeroLinks = ({title}) =>  {
    return (
        <a
        href="#"//border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30
        className="group rounded-lg hero-link bg-white rounded-lg px-5 py-4 mb-4 min-w-[65%] sm:min-w-[270px]"
        rel="noopener noreferrer"
      >
        <h2 className={`${inter.className} mb-3 text-base md:text-[2xl] font-semibold text-black`}>
          {title}{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-black">
            -&gt;
          </span>
        </h2>
        <p
          className={`${inter.className} m-0 max-w-[17ch]  md:max-w-[30ch] text-sm opacity-50 text-gray-950`}
        >
          click for more details
        </p>
      </a>
    )
}