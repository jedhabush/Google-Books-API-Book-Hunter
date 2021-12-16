import style from "./ModalStyle.module.scss";

const Modal = ({ setOpenModal, description, title, publishDate, viewBook }) => {
  return (
    <div className={style["modalBackground"]}>
      <div className={style["modalContainer"]}>
        <div className={style["titleCloseBtn"]}>
          <button
            className={style["close-btn"]}
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <h2>{title}</h2>
        <h4>{publishDate}</h4>
        <div className={style["desc-body"]}>
          <p>{description}</p>
        </div>
        <div className={style["view-button_div"]}>
          <a
            data-back="Back"
            data-front="Front"
            className={style["view-book"]}
            href={viewBook}
            target="_blank"
          >
            <button>View Book</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
