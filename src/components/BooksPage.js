import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getBooks } from "../api/bookApi";
import BookList from "./BookList";

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((_books) => setBooks(_books));
  }, []);

  return (
    <>
      <h2>Books</h2>
      <Link className="btn btn-primary" to="/book">
        Add book
      </Link>
      <BookList books={books} />
    </>
  );
};

export default BooksPage;
