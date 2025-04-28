import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <nav style={{
      width: "100vw", /* 👈 aquí */
      padding: "1rem",
      backgroundColor: "#DBC8FF",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "2rem",
      boxSizing: "border-box"
    }}>
      <Link to="/">Inicio</Link>
      <Link to="/categories">Categorías</Link>
      <Link to="/offers">Ofertas</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/cart">
        🛒 Carrito {cartItems.length > 0 && <span style={{ color: "red" }}>({cartItems.length})</span>}
      </Link>
    </nav>
  );
}

export default Navbar;
