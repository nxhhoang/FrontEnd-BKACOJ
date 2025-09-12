import React from "react";
import { Link } from "react-router-dom";
  

const Login: React.FC = () => {
  const handleClick = () => {
    alert("Bạn đã click vào nút!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form className="flex flex-col w-72 bg-white p-6 rounded-xl shadow-md">
        <input
          type="text"
          placeholder="Username"
          className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="confirm_password"
          placeholder="Confirm password"
          className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-4"
          onClick={handleClick}
        >
          Register
        </button>
        <h2>
          Bạn đã có tài khoản!{" "}
          <Link
            to="../Login"
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            Log In
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default Login;
