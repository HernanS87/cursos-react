import { useState } from "react";
import "../styles/card.css";

// eslint-disable-next-line react/prop-types
export const Card = ({ image, title, description, price, addProduct, deleteProduct }) => {
  const [added, setAdded] = useState(false);

  const clickAdd = () => {
    addProduct();
    setAdded(true);
  };
  const clickDelete = () => {
    deleteProduct
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
          <button type="button" className="boton-quitar" onClick={clickDelete}>
            Quitar del Carrito
          </button>
        ) : (
          <button
            type="button"
            className="boton-agregar"
            onClick={clickAdd}
          >
            Agregar Carrito
          </button>
        )}
      </div>
    </div>
  );
};
