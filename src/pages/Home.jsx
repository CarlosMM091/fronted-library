import { useState } from "react";
import booksData from "../data/books.json";
import BookCard from "../components/BookCard";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  const filteredBooks = booksData.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.isbn.includes(searchTerm);

    const matchesGenre = genreFilter ? book.genre === genreFilter : true;
    const matchesAuthor = authorFilter ? book.author.toLowerCase().includes(authorFilter.toLowerCase()) : true;
    const matchesYear = yearFilter ? book.published === yearFilter : true;
    const matchesPrice =
      (priceMin === "" || book.price >= parseInt(priceMin)) &&
      (priceMax === "" || book.price <= parseInt(priceMax));

    return matchesSearch && matchesGenre && matchesAuthor && matchesYear && matchesPrice;
  });

  const genres = [...new Set(booksData.map((book) => book.genre))];

  return (
    <div style={{ width: "100%", minHeight: "100vh", backgroundColor: "#e6f0fa", padding: "2rem", boxSizing: "border-box" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Libros Destacados</h1>

      {/* Buscador y Filtros */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "2rem",
        maxWidth: "100%",
        padding: "0 1rem",
        boxSizing: "border-box"
      }}>
        <input
          type="text"
          placeholder="Buscar por nombre o ISBN"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "200px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <select
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "150px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        >
          <option value="">Género</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Autor"
          value={authorFilter}
          onChange={(e) => setAuthorFilter(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "150px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <input
          type="text"
          placeholder="Año"
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "100px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <input
          type="number"
          placeholder="Precio Mín"
          value={priceMin}
          onChange={(e) => setPriceMin(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "100px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <input
          type="number"
          placeholder="Precio Máx"
          value={priceMax}
          onChange={(e) => setPriceMax(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "100px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />
      </div>

      {/* Listado de Libros */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p>No se encontraron libros.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
