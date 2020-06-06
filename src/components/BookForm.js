import React from "react";
import PropTypes from "prop-types";

import TextInput from "./common/TextInput";

function BookForm(props) {
  const { book, onChange, onSubmit, errors } = props;
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        id="title"
        label="Title"
        name="title"
        onChange={onChange}
        value={book.title}
        error={errors.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={onChange}
            value={book.authorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Jim Collins</option>
            <option value="2">Don Beck</option>
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{errors.authorId}</div>
        )}
      </div>

      <TextInput
        id="category"
        label="Category"
        name="category"
        onChange={onChange}
        value={book.category}
        error={errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

BookForm.propTypes = {
  book: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default BookForm;
