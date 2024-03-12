// Header.js
import React, { useState } from 'react';
import './header.css'; // Importiere das Stylesheet für den Header
import { FaAngleUp , FaAngleDown , FaCog, FaTasks, FaProjectDiagram, FaChartBar, FaUsers } from 'react-icons/fa'; // Importiere Icons aus React Icons
import ProfileMenu from './profil_menu.js'

function Header() {
  // Zustand für die aktuell ausgewählte Sektion und die Dropdown-Menüs
  const [currentSection, setCurrentSection] = useState(false);
  const [showTasksMenu, setShowTasksMenu] = useState(false);
  const [showProjectsMenu, setShowProjectsMenu] = useState(false);
  const [showDashboardMenu, setShowDashboardMenu] = useState(false);
  const [showTeamsMenu, setShowTeamsMenu] = useState(false);

  // Funktion zum Setzen der aktuellen Sektion
  const setCurrent = (section) => {
    setCurrentSection(section);
  };

  // Funktionen zum Ein-/Ausblenden der Dropdown-Menüs
  const toggleTasksMenu = () => {
    setShowTasksMenu(!showTasksMenu);
    setShowProjectsMenu(false); // Schließe das andere Menü, wenn dieses geöffnet wird
    setShowDashboardMenu(false);
    setShowTeamsMenu(false);
  };

  const toggleProjectsMenu = () => {
    setShowProjectsMenu(!showProjectsMenu);
    setShowTasksMenu(false); // Schließe das andere Menü, wenn dieses geöffnet wird
    setShowDashboardMenu(false);
    setShowTeamsMenu(false);
  };

  const toggleDashboardMenu = () => {
    setShowDashboardMenu(!showDashboardMenu);
    setShowTasksMenu(false); // Schließe das andere Menü, wenn dieses geöffnet wird
    setShowProjectsMenu(false);
    setShowTeamsMenu(false);
  };

  const toggleTeamsMenu = () => {
    setShowTeamsMenu(!showTeamsMenu);
    setShowTasksMenu(false); // Schließe das andere Menü, wenn dieses geöffnet wird
    setShowProjectsMenu(false);
    setShowDashboardMenu(false);
  };
  return (
    <div className="header-container">
      <span className="software-name"><FaCog className="icon" /> tchek.systems</span>
      <div className="header-functions">
        <div className="dropdown-wrapper">
          <span className={`function ${currentSection === "Ihre Aufgaben" ? "active" : ""}`} onClick={toggleTasksMenu}>
          <FaTasks /> Ihre Aufgaben {showTasksMenu ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        {showTasksMenu && (
            <div className="dropdown-menu">
              {/* Hier kommen die Dropdown-Menü-Optionen für Aufgaben */}
              <span className="dropdown-option" onClick={() => { setCurrent("Option 1"); }}>Option 1</span>
              <span className="dropdown-option" onClick={() => { setCurrent("Option 2"); }}>Option 2</span>
              <span className="dropdown-option" onClick={() => { setCurrent("Option 3"); }}>Option 3</span>
            </div>
          )}
        </div>
        <div className="dropdown-wrapper">
          <span className={`function ${currentSection === "Projekte" ? "active" : ""}`} onClick={toggleProjectsMenu}>
          <FaProjectDiagram />  Projekte {showProjectsMenu ? <FaAngleUp /> : <FaAngleDown />}
          </span>
          {showProjectsMenu && (
            <div className="dropdown-menu">
              {/* Hier kommen die Dropdown-Menü-Optionen für Projekte */}
              <span className="dropdown-option" onClick={() => { setCurrent("Projekt 1"); }}>Projekt 1</span>
              <span className="dropdown-option" onClick={() => { setCurrent("Projekt 2"); }}>Projekt 2</span>
              <span className="dropdown-option" onClick={() => { setCurrent("Projekt 3"); }}>Projekt 3</span>
            </div>
          )}
        </div>
        <div className="dropdown-wrapper">
        <span className={`function ${currentSection === "Dashboard" ? "active" : ""}`} onClick={toggleDashboardMenu}>
          <FaChartBar />  Dashboard {showDashboardMenu ? <FaAngleUp /> : <FaAngleDown />}
          </span>
          {showDashboardMenu && (
            <div className="dropdown-menu">
              {/* Hier kommen die Dropdown-Menü-Optionen für das Dashboard */}
              <span className="dropdown-option" onClick={() => { setCurrent("Dashboard Option 1"); }}>Dashboard Option 1</span>
              <span className="dropdown-option" onClick={() => { setCurrent("Dashboard Option 2"); }}>Dashboard Option 2</span>
              <span className="dropdown-option" onClick={() => { setCurrent("Dashboard Option 3"); }}>Dashboard Option 3</span>
            </div>
          )}
        </div>
        <div className="dropdown-wrapper">
        <span className={`function ${currentSection === "Teamsverwaltung" ? "active" : ""}`} onClick={toggleTeamsMenu}>
           <FaUsers /> Teamsverwaltung {showTeamsMenu ? <FaAngleUp /> : <FaAngleDown />}
          </span>
          {showTeamsMenu && (
            <div className="dropdown-menu">
              {/* Hier kommen die Dropdown-Menü-Optionen für die Teamsverwaltung */}
              <span className="dropdown-option" onClick={() => { setCurrent("Team Option 1"); }}>Team Option 1</span>
              <span className="dropdown-option" onClick={() => { setCurrent("Team Option 2"); }}>Team Option 2</span>
              <span className="dropdown-option" onClick={() => { setCurrent("Team Option 3"); }}>Team Option 3</span>
            </div>
          )}
        </div>
      </div>
      <ProfileMenu />
    </div>
  );
}

export default Header;
