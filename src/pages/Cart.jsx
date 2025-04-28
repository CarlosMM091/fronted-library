import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, clearCart, removeFromCart } = useContext(CartContext);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  const total = cartItems.reduce((sum, book) => sum + book.price, 0);

  const handlePurchase = () => {
    if (!clientName || !clientEmail) {
      alert("Por favor completa tu nombre y correo electrónico antes de confirmar la compra.");
      return;
    }
    setPurchaseCompleted(true);
    clearCart();
  };

  if (purchaseCompleted) {
    return (
      <div style={{ width: "100%", minHeight: "100vh", backgroundColor: "#e6f0fa", padding: "2rem", boxSizing: "border-box", textAlign: "center" }}>
        <h1>¡Gracias por tu compra, {clientName}!</h1>
        <Link to="/" style={{
          marginTop: "2rem",
          display: "inline-block",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#4CAF50",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px"
        }}>
          Volver a la Tienda
        </Link>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", minHeight: "100vh", backgroundColor: "#e6f0fa", padding: "2rem", boxSizing: "border-box" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Carrito de Compras</h1>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center" }}>No hay libros en el carrito.</p>
      ) : (
        <>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            {cartItems.map((book, index) => (
              <div key={index} style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0 0 5px rgba(0,0,0,0.1)",
                width: "90%",
                maxWidth: "500px",
                justifyContent: "space-between"
              }}>
                <img src={book.image} alt={book.title} style={{ width: "50px", height: "75px", objectFit: "cover", borderRadius: "4px" }} />
                <div style={{ flexGrow: 1, marginLeft: "1rem", textAlign: "left" }}>
                  <strong>{book.title}</strong><br />
                  ${book.price.toLocaleString()}
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  style={{
                    backgroundColor: "#ff4d4f",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "0.3rem 0.7rem",
                    cursor: "pointer"
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <h3 style={{ textAlign: "center", marginTop: "2rem" }}>Total: ${total.toLocaleString()}</h3>

          <div style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem"
          }}>
            <input
              type="text"
              placeholder="Tu Nombre"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              style={{ padding: "0.5rem", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            <input
              type="email"
              placeholder="Tu Correo Electrónico"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              style={{ padding: "0.5rem", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            <button
              onClick={handlePurchase}
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Confirmar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
