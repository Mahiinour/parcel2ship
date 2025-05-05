import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg"; 

const Navbar = () => {
  return (
    <nav
      className="bg-white shadow-md flex items-center justify-between"
      style={{
        width: "100%",
        maxWidth: "1440px",
        height: "78px",
        paddingLeft: "70px",
        paddingRight: "70px",
        margin: "0 auto",
      }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Parcel2Ship Logo"
          style={{ width: "94px", height: "61px", objectFit: "contain" }}
        />
      </div>

      {/* Nav*/}
      <ul className="flex text-gray-700 font-medium" style={{ gap: "112px" }}>
        <li>
          <Link to="/business" className="text-[18px]">
            Business
          </Link>
        </li>
        <li>
          <Link to="/getAquote" className="text-[18px]">
            Get a Quote
          </Link>
        </li>
        <li>
          <Link to="/services" className="text-[18px]">
            Services
          </Link>
        </li>
        <li>
          <Link to="/tracking" className="text-[18px]">
            Track a Parcel
          </Link>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <Link to="/login" className="text-blue-600 font-bold ">
          SIGN IN
        </Link>
        <Link
          to="/signup"
          className="text-white text-sm font-bold rounded text-center"
          style={{
            backgroundColor: "rgba(1, 0, 252, 1)",
            padding: "6px 12px", 
            width: "120px", 
            height: "36px", 
            fontSize: "14px", 
            borderRadius: "5px",
            border: "1px solid rgba(1, 0, 252, 1)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          SIGN UP
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
