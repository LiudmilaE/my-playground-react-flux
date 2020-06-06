import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import bookStore from "../stores/bookStore";
import BookList from "./BookList";
import { loadBooks, deleteBook } from "../actions/bookActions";

const BooksPage = () => {
  const [books, setBooks] = useState(bookStore.getBooks());

  useEffect(() => {
    bookStore.addChangeListener(onChange);
    if (bookStore.getBooks().length === 0) loadBooks();
    return () => {
      bookStore.removeChangeListener(onChange); //clean up on unmount
    };
  }, []);

  function onChange() {
    setBooks(bookStore.getBooks());
  }

  return (
    <>
      <h2>Books</h2>
      <Link className="btn btn-primary" to="/book">
        Add book
      </Link>
      <BookList books={books} deleteBook={deleteBook} />
    </>
  );
};

export default BooksPage;
