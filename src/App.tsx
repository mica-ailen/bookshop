import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BooksCatalog from "./components/BooksCatalog";
import BookList from "./components/BookList";

interface IAppAppProps {
  item: string;
}

interface Book {
  id: number;
  title: string;
}

const App: React.FC<IAppAppProps> = ({ item }) => {
  const [bookList, setBookList] = useState<Array<Book>>([]);

  //Add books to the list

  const addToBookList = (book: any) => {
    setBookList([...bookList, book]);
  };

  //Delete books

  const handleDeleteBook = (bookId: any) => {
    setBookList(bookList.filter((book) => book.id !== bookId));
  };

  return (
    <>
      <Header />
      <BooksCatalog item={item} addToBookList={addToBookList} />
      <BookList books={bookList} onDeleteBook={handleDeleteBook} />
    </>
  );
};

export default App;
