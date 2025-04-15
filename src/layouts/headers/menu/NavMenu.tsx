"use client";
import menu_data from "@/data/MenuData";
import Link from "next/link.js";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NavMenu = () => {
  const [navTitle, setNavTitle] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const currentRoute = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMenuItemActive = (menuLink: string) => {
    if (menuLink === "#") return false;
    return currentRoute === menuLink || currentRoute.startsWith(menuLink + "#");
  };

  const isSubMenuItemActive = (subMenuLink: string) => {
    if (subMenuLink.startsWith("http")) return false;
    return (
      currentRoute === subMenuLink || currentRoute === subMenuLink.split("#")[0]
    );
  };

  const handleMenuClick = (menu: any, e: React.MouseEvent) => {
    if (menu.has_dropdown && (isMobile || !menu.link || menu.link === "#")) {
      e.preventDefault();
      setNavTitle((prev) => (prev === menu.title ? null : menu.title));
    }
  };

  return (
    <>
      {menu_data.map((menu) => (
        <li
          key={menu.id}
          className={`${menu.has_dropdown ? "menu-item-has-children" : ""} 
                        ${
                          isMenuItemActive(menu.link) ||
                          (menu.sub_menus &&
                            menu.sub_menus.some((sub_m) =>
                              isSubMenuItemActive(sub_m.link)
                            ))
                            ? "active"
                            : ""
                        }`}
        >
          <Link
            href={menu.link}
            className={navTitle === menu.title ? "show" : ""}
            onClick={(e) => handleMenuClick(menu, e)}
          >
            {menu.title}
          </Link>
          {menu.has_dropdown && menu.sub_menus && (
            <ul className={`sub-menu ${navTitle === menu.title ? "show" : ""}`}>
              {menu.sub_menus.map((sub_m, i) => (
                <li
                  key={i}
                  className={isSubMenuItemActive(sub_m.link) ? "active" : ""}
                >
                  <Link
                    href={sub_m.link}
                    target={sub_m.link.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      sub_m.link.startsWith("http") ? "noopener noreferrer" : ""
                    }
                  >
                    {sub_m.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );
};

export default NavMenu;
