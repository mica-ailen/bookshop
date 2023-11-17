import React from "react";
import Navbar from "./Navbar";

interface BookListProps {
  onDeleteBook: Function;
  books: any;
}

const BookList: React.FC<BookListProps> = ({ onDeleteBook, books }) => {
  return (
    <>
      <Navbar />
      <div className="book-list-container" id="booklist">
        <h1 className="book-list-title">Book List</h1>
        {books.length > 0 ? (
          <ul className="booklist">
            {books.map((book: any) => (
              <li key={book.id}>
                {book.title}{" "}
                <button
                  className="delete-button"
                  onClick={() => onDeleteBook(book.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-books-message">
            No books have been added to the list yet
          </p>
        )}
      </div>
    </>
  );
};

export default BookList;
