import React from 'react';
import { Link } from 'react-router-dom';

function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <h2>{ticket.title}</h2>
      <p>{ticket.description}</p>
      <Link to="/">Zurück zum Board</Link>
    </div>
  );
}

export default Ticket;
