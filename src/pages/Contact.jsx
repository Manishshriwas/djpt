import React from 'react'

const Contact = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4">
  <div className="max-w-screen-md mx-auto">
    {/* Header */}
    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
      Contact Us
    </h2>
    <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 text-center">
      Have a question or want to work with us? Fill out the form below and we'll get back to you.
    </p>

    {/* Form */}
    <form className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 space-y-6">
      {/* Name */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 text-sm"
          placeholder="Your Name"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 text-sm"
          placeholder="you@example.com"
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="phone">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 text-sm"
          placeholder="+91 12345 67890"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 text-sm"
          placeholder="Your message..."
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer transition"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

  )
}

export default Contact
