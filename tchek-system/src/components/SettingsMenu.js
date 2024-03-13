import React, { useState } from 'react';
import './settingsMenu.css'; // Importiere das Stylesheet für das Einstellungsmenü
import { FaCog } from 'react-icons/fa'; // Importiere das Zahnrad-Symbol aus React Icons

function SettingsMenu() {
  const [showSettingsMenu, setShowSettingsMenu] = useState(false); // Zustand für das Einstellungsmenü

  const toggleSettingsMenu = () => {
    setShowSettingsMenu(!showSettingsMenu);
  };

  // Funktionen für die Einstellungsoptionen
  const handleAccountSettings = () => {
    // Hier könnten Logik oder Navigation zu den Kontoeinstellungen implementiert werden
    console.log('Navigiere zu den Kontoeinstellungen');
    setShowSettingsMenu(false); // Schließe das Menü nach der Aktion
  };

  const handlePreferences = () => {
    // Hier könnten Logik oder Navigation zu den Präferenzen implementiert werden
    console.log('Navigiere zu den Präferenzen');
    setShowSettingsMenu(false); // Schließe das Menü nach der Aktion
  };

  return (
    <div className="settings-wrapper">
      <div className="settings-icon" onClick={toggleSettingsMenu}>
        <FaCog />
      </div>
      {showSettingsMenu && (
        <div className="settings-menu">
          {/* Einstellungsoptionen */}
          <div className="settings-option" onClick={handleAccountSettings}>
            Kontoeinstellungen
          </div>
          <div className="settings-option" onClick={handlePreferences}>
            Präferenzen
          </div>
        </div>
      )}
    </div>
  );
}

export default SettingsMenu;
