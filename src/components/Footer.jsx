export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 w-full py-7 ">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 w-full">
        
        {/* Left side */}
        <div className="text-sm mb-4 md:mb-0">
          © 2024 <span className="font-semibold text-white">DJ TECH PVT LTD™</span>. All Rights Reserved.
        </div>

        {/* Right side */}
        <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition">Terms & Conditions</a>
          <a href="#refund" className="hover:text-white transition">Refund Policy</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
