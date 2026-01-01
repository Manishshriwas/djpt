import React from "react";
import { MapPin } from "lucide-react";
import contactImg from "../assets/con.jpg"; // <-- your image

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900 py-20 px-4">
      <div className="max-w-screen-xl mx-auto">

        {/* ===== TOP CENTER HEADER ===== */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Have a question or want to work with us? Our team would love to hear from you.
          </p>

          <a
            href="https://www.google.com/maps/place/C%2FO+MOHD+AHSAN+BEHIND+BHARAT+PETROL+PUMP+JHANSI+JHANSI+284001+UTTAR+PRADESH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2
                       text-blue-600 hover:text-blue-800
                       font-medium transition"
          >
            <MapPin size={22} />
            View on Google Maps
          </a>
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <div className="relative hidden md:block">
            <img
              src={contactImg}
              alt="Contact"
              className="w-full h-[520px] object-cover rounded-3xl shadow-xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* RIGHT FORM */}
          <form className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 md:p-10 space-y-6 shadow-lg">

            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700
                           text-gray-900 dark:text-white
                           placeholder-gray-400
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700
                           text-gray-900 dark:text-white
                           placeholder-gray-400
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone
              </label>
              <input
                type="tel"
                placeholder="+91 12345 67890"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700
                           text-gray-900 dark:text-white
                           placeholder-gray-400
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your project..."
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700
                           text-gray-900 dark:text-white
                           placeholder-gray-400
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700
                         text-white font-semibold
                         py-3 rounded-xl
                         transition-all duration-300
                         hover:shadow-lg hover:-translate-y-0.5
                         focus:ring-4 focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
