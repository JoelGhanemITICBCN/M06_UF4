import React, {useState} from 'react';
import FormulariTasques from './FormulariTasques';
import Tasca from './Tasca';


function LlistatTasques() {
  const [tasques, setTasques] = useState([]);

  const afegirTasca = tasca => {
    const tasquesActuals = [...tasques, tasca];
    setTasques(tasquesActuals);
  }

  const eliminarTasca = id => {
    const tasquesRestants = tasques.filter((tasca, index) => index !== id);
    setTasques(tasquesRestants);
  }

  const completarTasca = id => {
    const tasquesActuals = tasques.map((tasca, index) => 
      index === id ? {...tasca, completada: !tasca.completada} : tasca
    );
    setTasques(tasquesActuals);
  }

 return (
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'left'}}>
    <h1>Tasques</h1>
    <FormulariTasques funcAfegirTasca={afegirTasca} />
    {tasques.map((tasca, index) => (
      <Tasca
        key={index}
        text={tasca.text}
        completada={tasca.completada}
        onCompletar={() => completarTasca(index)}
        onEliminar={() => eliminarTasca(index)}
      />
    ))}
  </div>
);
}

export default LlistatTasques;