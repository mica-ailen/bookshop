import { useState, useEffect } from "react";


interface BooksCatalogProps {
  item: string;
  addToBookList: (book: Books) => void;
}

interface Books{
  id: number;
  image: string;
  title: string;
}

const BooksCatalog: React.FC<BooksCatalogProps> = ({ item, addToBookList}) => {
    const [books, setBooks] = useState<Array<Books>>([]);
    
  useEffect(() => {
    async function fetchBooks() {
    const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=technology&filter=free-ebooks&maxResults=14&key=AIzaSyDPlltPenWIa7vSCXQWwERYjBaVuQ9fz_8');
      const data = await response.json();

      const bookItems = data.items.map((item: string | any) => ({
        id: item.id,
        title: item.volumeInfo.title,
        image: item.volumeInfo.imageLinks.thumbnail,
      }));

      setBooks(bookItems);
    }

    fetchBooks();
  }, [item]);

    return (
        <div id="catalog">
            <h1 className='title'>Which book would you like to read?</h1>
            <div className='card-container'>
            {books.map((book: any) => (
              <div className="card">
                <div key={book.id}>
                <div className="image-container">
                  <img src={book.image} alt={book.title} className="image"></img>
                  </div>
                  <div className="card-title">
                <h2>{book.title}</h2>
                </div>
                <button type='button' className='button-card' onClick={() => addToBookList(book)}>Add to book list</button>
              </div>
              </div>
            ))}
              
            </div>
            </div>
  
    )
}

export default BooksCatalog;