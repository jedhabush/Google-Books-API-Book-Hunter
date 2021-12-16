import style from "./HeaderStyle.module.scss";
const Header = () => {
  return (
    <header className={style.header}>
      <h1>
        <span>B</span>ook <span>H</span>unter
      </h1>
      <q>Spread The Knowledge</q>
    </header>
  );
};

export default Header;
