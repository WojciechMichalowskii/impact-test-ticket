"use client";

import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import Link from "next/link";
import "../styles/globals.scss";
import Image from "next/image";
import cartIcon from "@/assets/icons/cart-icon.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div className="header">
            <button onClick={toggleDarkMode}>
              {isDarkMode ? "Tryb jasny" : "Tryb ciemny"}
            </button>
            <Link href="/cart">
              <Image
                src={cartIcon}
                alt="Koszyk"
                width={30}
                height={30}
                style={{ cursor: "pointer", marginLeft: "20px" }}
              />
            </Link>
          </div>
          {children}
        </Provider>
      </body>
    </html>
  );
}
