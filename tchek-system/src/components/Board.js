// Board.js
import React, { useState } from 'react';
import Column from './Column';
import './board.css';

function Board() {
  const [columns, setColumns] = useState([
    { id: 1, title: 'Backlog', tickets: [] },
    { id: 2, title: 'Ready', tickets: [] },
    { id: 3, title: 'Done', tickets: [] }
  ]);

  const addColumn = () => {
    const newColumnName = prompt("Geben Sie den Namen der neuen Spalte ein:");
    if (newColumnName) {
      const newColumn = {
        id: columns.length + 1,
        title: newColumnName,
        tickets: []
      };
      setColumns([...columns, newColumn]);
    }
  };

  return (
    <div className="board">
      <div className="columns-container">
        {columns.map(column => (
          <Column key={column.id} column={column} />
        ))}
        <div className="add-column" onClick={addColumn}>+</div>
      </div>
    </div>
  );
}

export default Board;
