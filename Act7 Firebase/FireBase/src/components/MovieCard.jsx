import React from 'react';
import { FaTrash } from 'react-icons/fa';

function MovieCard({ title, image, rate, description, duration, onDelete }) {
  return (
    <div style={{ display: 'flex', marginBottom: '20px' }}>
      <img src={image} alt={title} style={{ width: '200px', height: 'auto', marginRight: '20px' }} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <h2>{title} <FaTrash onClick={onDelete} style={{ cursor: 'pointer' }} /></h2>
        <p>Nota: {rate}/10 </p>
        <p>Descripció: {description}</p>
        <p>Duració: {duration} minuts</p>
      </div>
    </div>
  );
}

export default MovieCard;