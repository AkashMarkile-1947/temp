// about-us.js
import ImageSlideshow from "./ImageSlider";

const AboutUsPage = () => {
  const images = [
    '/ip-networking.png',
    '/robotics.png',
    '/automation.png'
  ];

  return (
    <div className="py-10 px-4 sm:px-8 md:px-12 lg:px-20 bg-white text-black">
      <h2 className="text-4xl font-bold text-center mb-10">About Us</h2>
      <div className="flex flex-col sm:flex-row mb-10">
        <div className="sm:w-1/2 sm:pr-8 mb-6 sm:mb-0">
          <h3 className="text-2xl font-bold mb-4">Our Story</h3>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a eleifend eros, non interdum turpis. Nunc pellentesque aliquet ex, id tincidunt est imperdiet eu. Sed dictum magna vel tincidunt consectetur.</p>
          <p className="mb-4">Integer vulputate, purus et posuere ultrices, neque nibh faucibus quam, vel varius lacus tortor ac massa. Suspendisse volutpat ipsum a lectus lacinia, sit amet vestibulum metus bibendum. Aenean at risus non tellus tempor venenatis.</p>
          <div className="flex justify-start">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">Learn More</button>
          </div>
        </div>
        <div className="sm:w-1/2">
          <div className="w-full h-80 overflow-hidden">
            <ImageSlideshow images={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
