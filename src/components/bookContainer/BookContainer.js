import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBook from '../Addbook/AddingBooks';
import Books from '../books/Books';
import { useEffect } from 'react';
import { fetchBooks } from '../../redux/books/books';

const BookContainer = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch]);

  return (
    <div>
      <section>
        {books.map((book) => (
          <Books
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        ))}
      </section>
      <AddBook />
    </div>
  );
};

export default BookContainer;
