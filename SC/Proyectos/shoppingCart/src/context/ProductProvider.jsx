import { useFetch } from "../hooks/useFetch";
import { ProductContext } from "./ProductContext";

const fakeStoreAPI = "https://fakestoreapi.com/products";
// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const {
    data: products,
    isLoading: isLoadingProducts,
    errors: errorsProducts,
  } = useFetch(fakeStoreAPI);

  return (
    <ProductContext.Provider
      value={{ products, isLoadingProducts, errorsProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
