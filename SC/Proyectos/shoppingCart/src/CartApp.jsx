import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ShoppingPage } from "./pages/ShoppingPage";
import { CartPage } from "./pages/CartPage";

export const CartApp = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ShoppingPage />}></Route>
          <Route path="/carrito" element={<CartPage />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
    </>
  );
};
