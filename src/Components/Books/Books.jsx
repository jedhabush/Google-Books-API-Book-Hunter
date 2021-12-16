import SearchArea from "../SearchArea/SearchArea";
import BookListing from "../BookListing/BookListing";
import ScrollTop from "../ScrollTop/ScrollTop";

import { useState } from "react";

const Books = () => {
  // State for the input search
  const [searchTerm, setSearchTerm] = useState("");

  //State to store the books
  const [books, setBooks] = useState({ items: [] });

  //Fetch Api request
  let apiUrl = "https://www.googleapis.com/books/v1/volumes";
  const getBooks = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${apiUrl}?q=${searchTerm}`);
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      alert(err);
    }
  };

  console.log(books);

  //function to handle the input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <SearchArea getBooks={getBooks} handleSearch={handleSearch} />
      <BookListing books={books} />
      <ScrollTop />
    </div>
  );
};

export default Books;
