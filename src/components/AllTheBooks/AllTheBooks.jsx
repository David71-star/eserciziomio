import React, { useState } from 'react';
import searchResults from "./fantasy.json";

const BookSearch = ( books ) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    const results = books.filter(book =>
      book.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map(book => (
          <li key={book.asin}>
            <img src={book.img} alt={book.title} />
            <p>{book.title}</p>
            <p>Price: ${book.price}</p>
            <p>Category: {book.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BookSearch;