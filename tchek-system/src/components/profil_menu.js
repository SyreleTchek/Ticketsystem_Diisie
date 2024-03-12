// ProfileMenu.js
import React, { useState, useRef, useEffect } from 'react';
import { FaUser, FaCog, FaSignOutAlt, FaBell } from 'react-icons/fa';
import './profil_menu.css'

function ProfileMenu() {
  const [showProfileMenu, setShowProfileMenu] = useState(false); // Zustand für das Profilmenü
  const menuRef = useRef(null); // Ref für das Menüelement

  // Funktion zum Schließen des Menüs bei Klick außerhalb
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleViewProfile = () => {
    console.log('Navigiere zur Profilseite');
    setShowProfileMenu(false);
  };

  const handleSettings = () => {
    console.log('Navigiere zur Einstellungsseite');
    setShowProfileMenu(false);
  };

  const handleNotifications = () => {
    console.log('Navigiere zur Benachrichtigungsseite');
    setShowProfileMenu(false);
  };

  const handleLogout = () => {
    console.log('Abmelden');
    setShowProfileMenu(false);
  };

  return (
    <div className="profile-wrapper" ref={menuRef}>
      <div className="profile-icon" onClick={toggleProfileMenu} aria-expanded={showProfileMenu} aria-haspopup="true">
        <FaUser />
      </div>
      {showProfileMenu && (
        <div className="profile-menu">
          <div className="profile-option" onClick={handleViewProfile}>
            <FaUser />
            <span>Profil anzeigen</span>
          </div>
          <div className="profile-option" onClick={handleSettings}>
            <FaCog />
            <span>Einstellungen</span>
          </div>
          <div className="profile-option" onClick={handleNotifications}>
            <FaBell />
            <span>Benachrichtigungen</span>
          </div>
          <div className="profile-option" onClick={handleLogout}>
            <FaSignOutAlt />
            <span>Abmelden</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
