import booksData from "../data/books.json";
import BookCard from "../components/BookCard";
import { useState } from "react";

function Categories() {
  const [selectedGenre, setSelectedGenre] = useState("");

  const genres = [...new Set(booksData.map((book) => book.genre))];

  const filteredBooks = selectedGenre
    ? booksData.filter((book) => book.genre === selectedGenre)
    : booksData;

  return (
    <div style={{ padding: "2rem", backgroundColor: "#e6f0fa", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Categorías de Libros</h1>

      {/* Selector de género */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "1rem",
        marginBottom: "2rem"
      }}>
        {genres.map((genre, index) => (
          <button
            key={index}
            onClick={() => setSelectedGenre(genre)}
            style={{
              padding: "10px 15px",
              backgroundColor: selectedGenre === genre ? "#9370DB" : "#E6CCFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            {genre}
          </button>
        ))}
        {/* Botón para limpiar filtro */}
        {selectedGenre && (
          <button
            onClick={() => setSelectedGenre("")}
            style={{
              padding: "10px 15px",
              backgroundColor: "#FF6B6B",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Mostrar Todos
          </button>
        )}
      </div>

      {/* Libros filtrados */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
