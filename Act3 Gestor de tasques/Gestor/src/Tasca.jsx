import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

function Tasca({ id, text, completada, onCompletar, onEliminar }) {
  return (
    <div 
      className={`tasca ${completada ? 'tascaCompletada' : ''}`} 
      onClick={() => onCompletar(id)}
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
    >
      <span style={{ marginRight: '10px', backgroundColor: 'purple', padding: '5px' }}>{text}</span>
      <button 
        onClick={(e) => {e.stopPropagation(); onEliminar(id);}}
        style={{ background: 'none', border: 'none' }}
      >
        <AiOutlineDelete />
      </button>
    </div>
  );
}

export default Tasca;