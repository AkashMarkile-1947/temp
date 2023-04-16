import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white p-6">
   <div className="flex flex-col md:flex-row items-center justify-around">
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
  <div className="w-full md:w-1/4 md:ml-4">
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Company Name</h2>
      <p>123 Main St.</p>
      <p>City, State Zip</p>
    </div>
    <div className="mb-2">
      <a href="#">Facebook</a>
      <span className="mx-2">|</span>
      <a href="#">Twitter</a>
      <span className="mx-2">|</span>
      <a href="#">Instagram</a>
    </div>
  </div>
  </div>
  <hr className="w-full" />
  <p  className="text-xl text-right">Company @2023</p>
</footer>

  );
};

export default Footer;
