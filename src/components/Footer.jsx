import React, { useState } from "react";

export default function Footer() {
  const [openModal, setOpenModal] = useState(null); 
  // values: "privacy", "terms", "refund" or null

  const closeModal = () => setOpenModal(null);

  return (
    <>
      <footer className="bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 w-full py-7">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 w-full">
          
          {/* Left side */}
          <div className="text-sm mb-4 md:mb-0">
            © 2024 <span className="font-semibold text-gray-900 dark:text-white">DJ TECH PVT LTD™</span>. All Rights Reserved.
          </div>

          {/* Right side */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            <a href="/about" className="hover:text-gray-900 dark:hover:text-white transition">About</a>
            <button onClick={() => setOpenModal("privacy")} className="hover:text-gray-900 dark:hover:text-white transition">
              Privacy Policy
            </button>
            <button onClick={() => setOpenModal("terms")} className="hover:text-gray-900 dark:hover:text-white transition">
              Terms & Conditions
            </button>
            <button onClick={() => setOpenModal("refund")} className="hover:text-gray-900 dark:hover:text-white transition">
              Refund Policy
            </button>
            <a href="/contact" className="hover:text-gray-900 dark:hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              ✕
            </button>

            {/* Modal Content */}
            {openModal === "privacy" && (
              <>
                <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  This is where your privacy policy text will go. You can explain how user data is collected, stored, and used.
                </p>
              </>
            )}
            {openModal === "terms" && (
              <>
                <h2 className="text-xl font-bold mb-4">Terms & Conditions</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Here you can outline your website or service's terms and conditions. Add detailed content as needed.
                </p>
              </>
            )}
            {openModal === "refund" && (
              <>
                <h2 className="text-xl font-bold mb-4">Refund Policy</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Mention your company’s refund and cancellation policy here. Be transparent and clear.
                  Mention your company’s refund and cancellation policy here. Be transparent and clear.
                  Mention your company’s refund and cancellation policy here. Be transparent and clear.
                  Mention your company’s refund and cancellation policy here. Be transparent and clear.
                  Mention your company’s refund and cancellation policy here. Be transparent and clear.
                  Mention your company’s refund and cancellation policy here. Be transparent and clear.
                  Mention your company’s refund and cancellation policy here. Be transparent and clear.
                  Mention your company’s refund and cancellation policy here. Be transparent and clear.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
