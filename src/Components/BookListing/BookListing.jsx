import style from "./BookListStyle.module.scss";
import BookCard from "../BookCardContainer/BookCard";

const BookListing = ({ books }) => {
  if (books.items === undefined) {
    return (
      <h1 className={style["no-results"]}>
        <h1 className={style["no-results-sign"]}>⚠</h1>
        No matching results try different search
      </h1>
    );
  }
  return (
    <div className={style["card-list"]}>
      {books.items.map((book, i) => {
        return (
          <BookCard
            key={i}
            img={
              book.volumeInfo.imageLinks === undefined
                ? ""
                : `${book.volumeInfo.imageLinks.thumbnail}`
            }
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            publishDate={book.volumeInfo.publishedDate}
            description={
              book.volumeInfo.description === undefined
                ? book.volumeInfo.description
                : book.volumeInfo.description.substring(0, 100) + "..."
            }
            viewBook={book.volumeInfo.infoLink}
          />
        );
      })}
    </div>
  );
};

export default BookListing;
