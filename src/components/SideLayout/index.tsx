"use client";

import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import CartIcon from "@/components/CartIcon";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles.module.scss";
import store from "@/store/store";
import { Provider } from "react-redux";
import Link from "next/link";

interface SideLayoutProps {
  children: React.ReactNode;
}

export default function SideLayout({ children }: SideLayoutProps) {
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
    <Provider store={store}>
      <div className={styles.header}>
        <div className={styles.buttonsWrapper}>
          <button onClick={toggleDarkMode} className={styles.darkModeButton}>
            {isDarkMode ? "Tryb jasny" : "Tryb ciemny"}
          </button>
          <Link href="/" className={styles.homeButton}>
            Strona główna
          </Link>
        </div>

        <CartIcon />
      </div>
      {children}
      <ToastContainer />
    </Provider>
  );
}
