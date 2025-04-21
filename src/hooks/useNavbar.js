import { useState, useRef, useEffect } from "react";
import { useNavigation } from "../Context/NavigationContext";

const useNavbar = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const profileDropdownRef = useRef(null);
  
  const { setActiveTab, profile, isAuthenticated, authLoading, logout } =
    useNavigation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePopup = () => setShowLoginPopup(!showLoginPopup);

  const handleLogoClick = () => {
    setActiveTab("Home");
  };

  const handleMyCreativesClick = () => {
    setActiveTab("My Creatives");
  };

  const handleLogout = () => {
    const result = logout();
    if (result.success) {
      window.location.href = "/";
    }
  };

  return {
    showLoginPopup,
    setShowLoginPopup,
    showProfileDropdown,
    setShowProfileDropdown,
    profileDropdownRef,
    profile,
    isAuthenticated,
    authLoading,
    handleLogoClick,
    handleMyCreativesClick,
    handleLogout,
    togglePopup,
  };
};

export default useNavbar;
