import React from "react";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Đăng nhập</h2>
      <form className="flex flex-col w-72 bg-white p-6 rounded-xl shadow-md">
        <input
          type="text"
          placeholder="Tên đăng nhập"
          className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
