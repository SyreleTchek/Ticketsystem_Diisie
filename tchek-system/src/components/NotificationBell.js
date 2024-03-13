import React, { useState } from 'react';
import './notificationBell.css'; // Importiere das Stylesheet für die Benachrichtigungsglocke
import { FaBell } from 'react-icons/fa'; // Importiere das Glocken-Symbol aus React Icons

function NotificationBell() {
  const [showNotifications, setShowNotifications] = useState(false); // Zustand für die Benachrichtigungen

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  // Funktionen für die Benachrichtigungsoptionen
  const handleNotificationClick = (notification) => {
    // Hier könnten Logik oder Navigation für die Benachrichtigungen implementiert werden
    console.log('Benachrichtigung geklickt:', notification);
    setShowNotifications(false); // Schließe das Menü nach der Aktion
  };

  return (
    <div className="notification-wrapper">
      <div className="notification-icon" onClick={toggleNotifications}>
        <FaBell />
      </div>
      {showNotifications && (
        <div className="notification-menu">
          {/* Benachrichtigungsoptionen */}
          <div className="notification-item" onClick={() => handleNotificationClick("Benachrichtigung 1")}>
            Benachrichtigung 1
          </div>
          <div className="notification-item" onClick={() => handleNotificationClick("Benachrichtigung 2")}>
            Benachrichtigung 2
          </div>
          <div className="notification-item" onClick={() => handleNotificationClick("Benachrichtigung 3")}>
            Benachrichtigung 3
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationBell;
