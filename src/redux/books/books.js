// Actions
const ADD = 'bookstore-1/books/ADD';
const UPDATE = 'bookstore-1/books/UPDATE';
const DELETE = 'bookstore-1/books/DELETE';
const LOAD = 'bookstore-1/books/LOAD';

// Reducer
export const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD: {
      return state;
    }

    case UPDATE: {
      return state;
    }

    case DELETE: {
      return state;
    }

    case LOAD: {
      return state;
    }

    default: {
      return state;
    }
  }
};

// Action Creators
export const createBook = (book) => ({ type: ADD, book });

export const loadBooks = () => ({ type: LOAD });

export const deleteBook = (book) => ({ type: DELETE, book });

export const updateBook = (book) => ({ type: UPDATE, book });
