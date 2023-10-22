import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Card } from "../components/Card";

export const ShoppingPage = () => {
  const { products, isLoadingProducts } = useContext(ProductContext);

  return (
    <>
      <h1 className="mb-4">Bienvenido a ShoppingCart </h1>
      
      {isLoadingProducts ? (
        <h2>Cargando...</h2>
      ) : (
        products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          ></Card>
        ))
      )}
    </>
  );
};
