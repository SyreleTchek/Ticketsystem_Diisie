import React, { useState } from 'react';
import './helpMenu.css'; // Importiere das Stylesheet für das Hilfemenü
import { FaQuestionCircle } from 'react-icons/fa'; // Importiere das Fragezeichen-Symbol aus React Icons

function HelpMenu() {
  const [showHelpMenu, setShowHelpMenu] = useState(false); // Zustand für das Hilfemenü

  const toggleHelpMenu = () => {
    setShowHelpMenu(!showHelpMenu);
  };

  // Funktionen für die Hilfeoptionen
  const handleFAQ = () => {
    // Hier könnten Logik oder Navigation zur FAQ-Seite implementiert werden
    console.log('Navigiere zur FAQ-Seite');
    setShowHelpMenu(false); // Schließe das Menü nach der Aktion
  };

  const handleContact = () => {
    // Hier könnten Logik oder Navigation zum Kontaktformular implementiert werden
    console.log('Navigiere zum Kontaktformular');
    setShowHelpMenu(false); // Schließe das Menü nach der Aktion
  };

  return (
    <div className="help-wrapper">
      <div className="help-icon" onClick={toggleHelpMenu}>
        <FaQuestionCircle />
      </div>
      {showHelpMenu && (
        <div className="help-menu">
          {/* Hilfeoptionen */}
          <div className="help-option" onClick={handleFAQ}>
            Häufig gestellte Fragen
          </div>
          <div className="help-option" onClick={handleContact}>
            Kontakt
          </div>
        </div>
      )}
    </div>
  );
}

export default HelpMenu;
