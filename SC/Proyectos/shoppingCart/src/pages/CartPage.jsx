import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartPage = () => {
  const { shopList, increaseQuantity, decreaseQuantity, deleteProduct } =
    useContext(CartContext);

  const calcularTotal = () => {
    return shopList
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleImpresion = () => {
    print();
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {shopList.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <button
                  className="btn btn-ouline-primary"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <button className="btn btn-primary">{item.quantity}</button>
                <button
                  className="btn btn-ouline-primary"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteProduct(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}

          <td>
            <b>TOTAL: </b>
          </td>
          <td></td>
          <td></td>
          <td>${calcularTotal()}</td>
        </tbody>
      </table>

      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          onClick={handleImpresion}
          disabled={shopList < 1}
        >
          COMPRAR
        </button>
      </div>
    </>
  );
};
