import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white p-6">
   <div className="flex flex-col md:flex-row items-start justify-around">
  <div className="w-full md:flex md:w-1/2 md:justify-around">
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Useful Links</h2>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </div>
    <div className="md:mb-0 md:ml-4">
      <h2 className="text-lg font-bold mb-2">More Links</h2>
      <ul>
        <li><a href="#">Link 4</a></li>
        <li><a href="#">Link 5</a></li>
        <li><a href="#">Link 6</a></li>
      </ul>
    </div>
  </div>
  <div className="w-full md:w-2/6 md:ml-4">
    <div className="mb-4">
    <h2 className="text-2xl font-bold font-sans mb-2">WIROMATIC</h2>
    <div className="flex w-full flex justify-between items-baseline">
      <div>
      <p className="text-lg font-semibold">Communication Office:</p>
      <p>Flat No 13, Ronak Center</p>
      <p>Bhistabaug Chowk, </p>
      <p>Savedi Ahmednagar</p>
      <p>India 414003</p>
      </div>
      <div>
      <p className="text-lg font-semibold">Workshop Address:</p>
      <p>M/s Honeybee Automations</p>
      <p>Plot No C24, MIDC Shrirampur</p>
      <p>Dist. AHMEDNAGAR</p>
      <p>India 413709</p>
      </div>
    </div>
    </div>
  </div>
  </div>
  <hr className="w-full" />
  <div className="flex-col md:flex md:justify-between md:flex-row justify-start items-center">
  <div>
      <Link href="https://www.linkedin.com/in/amit-wani-801084208">Linkedin</Link>
      <p>Contact Phone: +91 9422225757</p>
  </div>
  <div>
    <p  className="">WiROMATIC@2023</p>
    <p>Email id: wiroindia@gmail.com</p>
  </div>
  
  </div>
</footer>

  );
};

export default Footer;
