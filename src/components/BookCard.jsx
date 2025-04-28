import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function BookCard({ book }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{
      width: "180px",
      minHeight: "340px",
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      margin: "10px",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      textAlign: "center",
      overflow: "hidden"
    }}>
      
      {/* Contenedor de la imagen */}
      <div style={{
        width: "140px",
        height: "210px",
        overflow: "hidden",
        borderRadius: "8px",
        marginBottom: "10px"
      }}>
        <img
          src={book.image}
          alt={book.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </div>

      {/* Información del libro */}
      <div style={{ marginBottom: "0.5rem" }}>
        <h3 style={{ fontSize: "1rem", marginBottom: "0.2rem" }}>{book.title}</h3>
        <p style={{ fontSize: "0.85rem", color: "#555", marginBottom: "0.2rem" }}>{book.author}</p>
        <strong style={{ fontSize: "0.9rem", color: "#333" }}>
          ${book.price.toLocaleString("es-CO")}
        </strong>
      </div>

      {/* Botón agregar al carrito */}
      <button
        onClick={() => addToCart(book)}
        style={{
          backgroundColor: "#E6CCFF",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "0.85rem"
        }}
      >
        Agregar al Carrito
      </button>
    </div>
  );
}

export default BookCard;
