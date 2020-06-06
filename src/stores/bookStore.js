import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _books = [];

class BookStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getBooks() {
    return _books;
  }

  getBookBySlug(slug) {
    return _books.find((book) => book.slug === slug);
  }
}

const store = new BookStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_BOOK:
      _books.push(action.book);
      store.emitChange();
      break;
    case actionTypes.UPDATE_BOOK:
      _books = _books.map((book) =>
        book.id === action.book.id ? action.book : book
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_BOOKS:
      _books = action.books;
      store.emitChange();
      break;
    case actionTypes.DELETE_BOOK:
      _books = _books.filter((book) => book.id !== parseInt(action.id, 10));
      store.emitChange();
      break;
    default:
    // nothing to do here
  }
});

export default store;
