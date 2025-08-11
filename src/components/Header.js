import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/bkac.png" alt="BKAC OJ" />
      </div>
      <nav>
        <ul>
          <li>
            <Link className="nav-link"  to="/">HOME</Link>
          </li>
          <li>
            <Link className="nav-link"  to="/announcement">ANNOUNCEMENT</Link>
          </li>
          <li>
            <Link className="nav-link"  to="/problem">PROBLEMSET</Link>
          </li>
          <li>
            <Link className="nav-link"  to="/contest">CONTEST</Link>
          </li>
          <li>
            <Link className="nav-link"  to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
      <div className="user">
        <span>Hello <strong><a href="https://marisaoj.com/user/nxhhoang/submissions">nxhhoang!</a></strong></span>
        <span>|</span>
        <a href="#">Logout</a>
      </div>
    </header>
  );
}

export default Header;
