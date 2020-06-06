import React, { useState, useEffect } from "react";
import { Prompt } from "react-router-dom";
import { toast } from "react-toastify";
import bookStore from "../stores/bookStore";
import * as bookActions from "../actions/bookActions";
import BookForm from "./BookForm";

const ManageBookPage = (props) => {
  const [errors, setErrors] = useState({});
  const [books, setBooks] = useState(bookStore.getBooks());
  const [book, setBook] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    bookStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (books.length === 0) {
      bookActions.loadBooks();
    } else if (slug) {
      setBook(bookStore.getBookBySlug(slug));
    }
    return () => bookStore.removeChangeListener(onChange);
  }, [books.length, props.match.params.slug]);

  function onChange() {
    setBooks(bookStore.getBooks());
  }

  const handleChange = ({ target }) => {
    setBook({ ...book, [target.name]: target.value });
  };

  const formIsValid = () => {
    const _errors = {};

    if (!book.title) _errors.title = "Title is required";
    if (!book.authorId) _errors.authorId = "Author ID is required";
    if (!book.category) _errors.category = "Category is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties

    return Object.keys(_errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formIsValid()) return;
    bookActions.saveBook(book).then(() => {
      props.history.push("/books");
      toast.success("Book saved.");
    });
  };

  return (
    <>
      <h2>Manage Book</h2>
      <Prompt when message="Are you sure you want to leave?" />
      <BookForm
        errors={errors}
        book={book}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageBookPage;
