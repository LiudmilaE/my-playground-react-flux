import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BookList = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.books.map((book) => (
          <tr key={book.slug}>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => props.deleteBook(book.id)}
              >
                Delete
              </button>
            </td>
            <td>
              <Link to={"/book/" + book.slug}>{book.title}</Link>
            </td>
            <td>{book.authorId}</td>
            <td>{book.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

BookList.propTypes = {
  deleteBook: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BookList;
