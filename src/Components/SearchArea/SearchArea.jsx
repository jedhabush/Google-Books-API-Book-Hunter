import style from "./SearchAreaStyle.module.scss";
const SearchArea = ({ handleSearch, getBooks }) => {
  return (
    <div className={style["search-area"]}>
      <form onSubmit={getBooks} action="">
        <input
          className={style["input-space"]}
          onChange={handleSearch}
          type="text"
          placeholder="Hunt a book down..."
        />
        <button
          data-back="Shall we ..."
          data-front="Hunt a Book"
          className={style.btn}
          type="submit"
        ></button>
      </form>
    </div>
  );
};

export default SearchArea;
