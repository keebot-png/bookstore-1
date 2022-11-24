// Actions
const ADD = 'bookstore-1/books/ADD';
const UPDATE = 'bookstore-1/books/UPDATE';
const DELETE = 'bookstore-1/books/DELETE';

const defaultState = [];

const APILINK = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/01GJNSV0FWZ2CG4E22V5TJHWHE/books';

// Reducer
export const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, {
        id: action.id,
        title: action.title,
        author: action.author,
      }];

    case UPDATE: {
      return [...state, ...action.payload.items];
    }

    case DELETE:
      return state.filter((book) => (book.id !== action.id));

    default: {
      return state;
    }
  }
};

// Action Creators
export const createBook = (items) => ({
  type: ADD,
  id: items.id,
  title: items.title,
  author: items.author,
});

export const deleteBook = (id) => ({ type: DELETE, id });

export const updateBook = (items) => ({ type: UPDATE, payload: { items } });

// Thunks

export const fetchBooks = () => async (dispatch) => fetch(APILINK)
  .then((res) => res.json())
  .then((data) => {
    const dataInput = [];
    Object.values(data).forEach((value) => {
      dataInput.push(value[0]);
    });
    Object.keys(data).forEach((key, i) => {
      dataInput[i].id = key;
    });
    dispatch(updateBook(dataInput));
  });

export const postBook = (items) => async (dispatch) => {
  fetch(APILINK, {
    method: 'POST',
    body: JSON.stringify(items),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => dispatch(createBook(items)));
};

export const deleteBookItem = (id) => async (dispatch) => {
  fetch(`${APILINK}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify(id),
  }).then(() => dispatch(deleteBook(id)));
};
