function Contact() {
    return (
      <div style={{ padding: "2rem", backgroundColor: "#e6f0fa", minHeight: "100vh" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Contáctanos</h1>
  
        <form style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
          <input
            type="text"
            placeholder="Tu nombre"
            required
            style={{ padding: "0.8rem", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            type="email"
            placeholder="Tu correo electrónico"
            required
            style={{ padding: "0.8rem", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <textarea
            placeholder="Tu mensaje"
            rows="5"
            required
            style={{ padding: "0.8rem", borderRadius: "5px", border: "1px solid #ccc" }}
          ></textarea>
          <button
            type="submit"
            style={{
              backgroundColor: "#9370DB",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem"
            }}
          >
            Enviar
          </button>
        </form>
      </div>
    );
  }
  
  export default Contact;
  