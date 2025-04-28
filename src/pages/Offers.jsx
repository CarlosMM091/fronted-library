import booksData from "../data/books.json";
import BookCard from "../components/BookCard";

function Offers() {
  // Vamos a considerar oferta los libros de precio <= 30.000
  const offerBooks = booksData.filter((book) => book.price <= 30000);

  return (
    <div style={{ padding: "2rem", backgroundColor: "#e6f0fa", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Libros en Oferta</h1>

      {offerBooks.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {offerBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>No hay libros en oferta en este momento.</p>
      )}
    </div>
  );
}

export default Offers;
