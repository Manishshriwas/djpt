import { useState } from "react";
import D from "../assets/D.jpg"; // company logo

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Register form submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 px-4">
      <div className="w-full max-w-md p-6 sm:p-8 bg-white rounded-2xl shadow-lg">

        {/* COMPANY LOGO (same as Login) */}
        <div className="flex justify-center mb-4">
          <img
            src={D}
            alt="Company Logo"
            className="h-16 w-16 rounded-full"
          />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* EMAIL */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="
                w-full px-3 py-2
                border border-gray-300
                rounded-lg
                bg-white
                text-gray-900
                placeholder-gray-400
                focus:outline-none
                focus:ring-2 focus:ring-blue-500
                focus:border-transparent
              "
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="
                w-full px-3 py-2
                border border-gray-300
                rounded-lg
                bg-white
                text-gray-900
                placeholder-gray-400
                focus:outline-none
                focus:ring-2 focus:ring-blue-500
                focus:border-transparent
              "
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
              className="
                w-full px-3 py-2
                border border-gray-300
                rounded-lg
                bg-white
                text-gray-900
                placeholder-gray-400
                focus:outline-none
                focus:ring-2 focus:ring-blue-500
                focus:border-transparent
              "
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="
              w-full bg-blue-600 text-white
              py-2 px-4 rounded-lg
              hover:bg-blue-700
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
              focus:ring-offset-2
              transition duration-200
            "
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Login
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;
