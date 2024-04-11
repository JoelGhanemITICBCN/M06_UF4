import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

function Tasca({ id, text, completada, onCompletar, onEliminar }) {
  return (
    <div 
      className={`tasca ${completada ? 'tascaCompletada' : ''}`} 
      onClick={() => onCompletar(id)}
      style={{ display: 'block', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'blue' }}
    >
      <span style={{ marginRight: '10px', padding: '15px', textDecoration: completada ? 'line-through' : 'none' }}>{text}</span>
      <button 
        onClick={(e) => {e.stopPropagation(); onEliminar(id);}}
        style={{justifyContent:'space-between',backgroundColor: 'black', border: 'none',paddingLeft: '10px'}}
      >
        <AiOutlineDelete/>
      </button>
    </div>
  );
}

export default Tasca;