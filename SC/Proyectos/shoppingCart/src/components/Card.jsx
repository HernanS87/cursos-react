import { useState } from "react";
import "../styles/card.css";

// eslint-disable-next-line react/prop-types
export const Card = ({ image, title, description, price }) => {
  const [added, setAdded] = useState(false);

  const clickAgregar = () => {
    setAdded(true);
  };
  const clickQuitar = () => {
    setAdded(false);
  };

  return (
    <div className="tarjeta">
      <img src={image} alt={title} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{title}</h3>
        <p className="tarjeta-descripcion">{description}</p>
        <p className="tarjeta-precio">{price}</p>

        {added ? (
          <button type="button" className="boton-quitar" onClick={clickQuitar}>
            Quitar del Carrito
          </button>
        ) : (
          <button
            type="button"
            className="boton-agregar"
            onClick={clickAgregar}
          >
            Agregar Carrito
          </button>
        )}
      </div>
    </div>
  );
};
