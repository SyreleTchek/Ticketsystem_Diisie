import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './board.css';

function Board() {
  const [boardName, setBoardName] = useState("");
  const [columns, setColumns] = useState([]);
  const [ticketTitle, setTicketTitle] = useState("");
  const [tickets, setTickets] = useState([]);

  const handleDragEnd = (result) => {
    // Behandlung des Drag-and-Drop-Vorgangs
  };

  const addColumn = () => {
    const newColumnName = prompt("Geben Sie den Namen der Spalte ein:");
    if (newColumnName) {
      const newColumn = {
        id: `column-${columns.length + 1}`,
        name: newColumnName,
        tickets: []
      };
      setColumns([...columns, newColumn]);
    }
  };

  const addTicket = () => {
    const newTicketId = tickets.length + 1;
    const newTicket = {
      id: newTicketId,
      title: ticketTitle,
      description: `Description for Ticket ${newTicketId}`,
      status: columns.length > 0 ? columns[0].id : "" // Setze das Ticket in die erste Spalte
    };
    setTickets([...tickets, newTicket]);
    setTicketTitle("");
  };

  const handleInputChange = (e) => {
    setTicketTitle(e.target.value);
  };

  const handleBoardNameChange = (e) => {
    setBoardName(e.target.value);
  };

  return (
    <div className="board">
      <h1>Kanban Board: {boardName}</h1>
      <div>
        <label>
          Boardname:
          <input
            type="text"
            value={boardName}
            onChange={handleBoardNameChange}
          />
        </label>
      </div>
      <div>
        <button onClick={addColumn}>Neue Spalte hinzufügen</button>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="columns-container">
          {columns.map((column, index) => (
            <div key={column.id} className="column">
              <h2>{column.name}</h2>
              <Droppable droppableId={column.id} key={column.id}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="ticket-list"
                  >
                    {column.tickets.map((ticket, index) => (
                      <Draggable key={ticket.id} draggableId={ticket.id.toString()} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="ticket"
                          >
                            {ticket.title}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
      <div>
        <input
          type="text"
          value={ticketTitle}
          onChange={handleInputChange}
          placeholder="Tickettitel"
        />
        <button onClick={addTicket}>Neues Ticket erstellen</button>
      </div>
    </div>
  );
}

export default Board;
