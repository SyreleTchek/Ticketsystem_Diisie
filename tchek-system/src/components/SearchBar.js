import React, { useState } from 'react';
import './searchBar.css'; // Importiere das Stylesheet für die Suchleiste
import { FaSearch } from 'react-icons/fa'; // Importiere das Suchsymbol aus React Icons

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState(''); // Zustand für die Suchanfrage

  // Funktion zum Aktualisieren der Suchanfrage
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Funktion zum Ausführen der Suche
  const handleSearch = () => {
    // Führe hier die Suchlogik aus, z. B.:
    console.log('Suche nach:', searchQuery);
  };

  return (
    <div className="search-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder="Suche..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button className="search-button" onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;
