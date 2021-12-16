import style from "./FooterStyle.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer_style}>
      <h3 className={style.name_style}>
        Created by <span>J</span>ed <span>H</span>abush
      </h3>
      <h4>Copyright &copy; 2021 - 2022 Photo by</h4> {"  "}
      <a href="https://unsplash.com/@jaredd_craig?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Jaredd Craig
      </a>
      {"  "}
      <h4>on</h4>
      {"  "}
      <a href="https://unsplash.com/s/photos/library?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Unsplash
      </a>
      {"  "}
    </footer>
  );
};

export default Footer;
