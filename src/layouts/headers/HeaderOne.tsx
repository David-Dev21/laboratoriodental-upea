"use client";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./menu/NavMenu";
import HeaderTopOne from "./menu/HeaderTopOne";
import UseSticky from "@/hooks/UseSticky";
import { useState } from "react";

import logo_1 from "@/assets/img/logo-laboratorio-dental.jpg";

const HeaderOne = ({ style, style_2 }: any) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { sticky } = UseSticky();

  const toggleMobileMenu = () => {
    setIsActive(!isActive); // Toggle the isActive state
  };

  return (
    <>
      <div className="navbar-area">
        <nav
          className={`navbar navbar-area  navbar-expand-lg ${
            style_2 ? "bg-white" : ""
          } ${style ? "navbar-area-2" : "navbar-area-1"} ${
            sticky ? "sticky-active" : ""
          }`}
        >
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button
                onClick={toggleMobileMenu}
                className={`menu toggle-btn d-block d-lg-none ${
                  isActive ? "open" : ""
                }`}
                data-target="#edumint_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left"></span>
                <span className="icon-right"></span>
              </button>
            </div>
            <div className="logo">
              <Link href="/">
                <Image src={logo_1} alt="img" width={80} height={80} />
              </Link>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
              <Link
                className="ed-btn btn-base text-white"
                href="https://administracionpaginas.upea.edu.bo/login"
              >
                Ingresar
              </Link>
            </div>
            <div
              className={`collapse navbar-collapse ${isActive ? "sopen" : ""}`}
              id="edumint_main_menu"
            >
              <ul className="navbar-nav menu-open">
                <NavMenu />
              </ul>
            </div>
            <div
              className={`nav-right-part nav-right-part-desktop d-none d-lg-flex align-items-center ${
                style ? "style-black" : ""
              }`}
            >
              <Link
                className="ed-btn btn-base text-white"
                href="https://administracionpaginas.upea.edu.bo/login"
                target="_blank"
              >
                Ingresar
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderOne;
