import React from "react";
import '../hojas-de-estilos/testimonio.css'
function Testimonios(props) {

  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/${props.imagen}.jpeg`)}
        alt='Foto de Emma'
      />
      <div className='contenedor-texto-testimonio'>
         <p className='noombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
         <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
         <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );

}

export default Testimonios