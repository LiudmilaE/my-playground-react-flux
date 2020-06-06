import dispatcher from "../appDispatcher";
import * as bookApi from "../api/bookApi";
import actionTypes from "./actionTypes";

// action creator
export function saveBook(book) {
  return bookApi.saveBook(book).then((savedBook) => {
    // inform all stores about book that is created or updated
    dispatcher.dispatch({
      // action object
      actionType: book.id ? actionTypes.UPDATE_BOOK : actionTypes.CREATE_BOOK,
      book: savedBook,
    });
  });
}

export function loadBooks() {
  return bookApi.getBooks().then((books) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_BOOKS,
      books,
    });
  });
}

export function deleteBook(id) {
  return bookApi.deleteBook(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_BOOK,
      id,
    });
  });
}
