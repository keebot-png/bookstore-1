import React, { useState } from 'react';
import './AddBooks.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../../redux/books/books';

const AddBook = () => {
  const [titleInput, setTitleInput] = useState('');

  const [authorInput, setAuthorInput] = useState('');

  const [categoryInput, setCategoryInput] = useState('');

  const dispatch = useDispatch();

  const items = {
    item_id: uuidv4(),
    title: titleInput,
    author: authorInput,
    category: categoryInput,
  };

  const titleSet = (e) => {
    setTitleInput(e.target.value);
  };

  const categorySet = (e) => {
    setCategoryInput(e.target.value);
  };

  const authorSet = (e) => {
    setAuthorInput(e.target.value);
  };

  const firstInput = () => {
    if ((titleInput === '') || (categoryInput === '') || (authorInput === '')) {
      alert('All fields are required'); // eslint-disable-line no-alert
    } else {
      dispatch(postBook(items));
      setTitleInput('');
      setAuthorInput('');
      setCategoryInput('');
    }
  };

  return (
    <section className="addingBook">
      <h1>Add a new book</h1>
      <form action="" className="data">
        <input
          type="text"
          id="title"
          name="title"
          onChange={titleSet}
          value={titleInput}
          placeholder="Title"
          required
        />
        <input
          type="text"
          id="author"
          name="author"
          onChange={authorSet}
          value={authorInput}
          placeholder="Author"
          required
        />
        <input
          type="text"
          id="author"
          name="author"
          onChange={categorySet}
          value={categoryInput}
          placeholder="Category"
          required
        />
        <button
          onClick={() => {
            firstInput();
          }}
          type="button"
          name="add"
          id="add"
        >
          Add Book
        </button>
      </form>
    </section>
  );
};

export default AddBook;
