import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BookList = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.books.map((book) => (
          <tr key={book.slug}>
            <td>
              <Link to={"/book/" + book.slug}>{book.title}</Link>
            </td>
            <td>{book.authotId}</td>
            <td>{book.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

BookList.propTypes = {
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
