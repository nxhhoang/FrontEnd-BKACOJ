import React from "react";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login-container">
      <h2 className="login-title">Đăng nhập</h2>
      <form className="login-form">
        <input type="text" placeholder="Tên đăng nhập" className="login-input" />
        <input type="password" placeholder="Mật khẩu" className="login-input" />
        <button type="submit" className="login-button">Đăng nhập</button>
      </form>
    </div>
  );
}

export default LoginPage;
