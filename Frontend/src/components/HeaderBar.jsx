import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import adminLogo from "../assets/admin-logo.svg";
import userLogo from "../assets/user-logo.webp";
import axios from "axios";
import HeaderSettings from "./HeaderSettings"; // Import the menu component
import { useTranslation } from "react-i18next"; // Import translation hook
import { Globe } from "lucide-react"; // Using lucide-react for the globe icon

function HeaderBar({ user }) {
  const [showMenu, setShowMenu] = useState(false); // Track whether menu is open or closed
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false); // Track whether language menu is open
  const { t, i18n } = useTranslation(); // Translation functions
  const navigator = useNavigate();

  const handleMenuClick = () => {
    setShowMenu(!showMenu); // Toggle the menu visibility
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language); // Change the current language
  };

  const [isLoading, setLoading] = useState(false);

  return (
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="w-16 h-16 border-4 border-t-gray-400 border-b-gray-400 border-r-transparent rounded-full animate-spin"></div>
          <h2 className="text-white ml-2">Loading please wait...</h2>
        </div>
      )}
      {!isLoading && (
        <header className="bg-gray-800">
          <div className="px-6 py-3 bg-white shadow-md grid grid-cols-10 fixed top-0 right-0 left-0 z-10 items-center">
            <h1 className="text-4xl font-bold text-black col-span-2 flex items-center space-x-2 tracking-wide font-poppins">
              <img src="/logo.png" alt="Logo" className="h-14" />
              <span className="text-5xl">StockCloud</span>
            </h1>

            {/* Language Selector */}
            <div className="col-span-6 flex justify-center items-center">
              <div className="relative">
                <button
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className="flex items-center px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-black"
                >
                  <Globe className="h-6 w-6 mr-2" />
                  {t("Language")}
                </button>
                {languageMenuOpen && (
                  <div className="absolute mt-2 w-40 bg-white border rounded shadow-lg z-20">
                    <button
                      onClick={() => handleLanguageChange("en")}
                      className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                    >
                      English
                    </button>
                    <button
                      onClick={() => handleLanguageChange("es")}
                      className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                    >
                      Español
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="col-span-2 flex items-center justify-end">
              <div className="flex items-center">
                <img
                  src={user.role === "user" ? userLogo : adminLogo}
                  alt="User Logo"
                  className="h-10 w-10 rounded-full border-4 border-green-600 bg-green-300 p-1"
                />
                <div className="ml-3">
                  <h3 className="text-lg text-neutral-900 font-semibold">
                    {user.name}
                  </h3>
                  <span className="text-sm text-neutral-500">{user.email}</span>
                </div>
              </div>
              <button
                className="ml-4 text-neutral-100 hover:text-white"
                onClick={handleMenuClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Conditionally render the HeaderSettings menu when showMenu is true */}
          {showMenu && <HeaderSettings />}
        </header>
      )}
    </>
  );
}

export default HeaderBar;
