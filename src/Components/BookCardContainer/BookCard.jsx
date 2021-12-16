import style from "./BookCardStyle.module.scss";
import Modal from "../Modal/Modal";
import React, { useState } from "react";

//-- State for overlay Modal clicking outside
import { useEffect, useRef } from "react";

const BookCard = ({
  img,
  title,
  author,
  publishDate,
  description,
  viewBook,
}) => {
  const ref = useRef();
  const [modalOpen, setModalOpen] = useState(false);

  // Detect any clicking outsited the Modal
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (modalOpen && ref.current && !ref.current.contains(e.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [modalOpen]);

  return (
    <div className={style["card-container"]} ref={ref}>
      <img
        onClick={() => {
          setModalOpen(true);
        }}
        src={img}
        alt={title} //if there's no photo display title
      />
      <div className={style["details"]}>
        <h3>
          <span>by </span>
          {author}
        </h3>
        {modalOpen && (
          <Modal
            setOpenModal={setModalOpen}
            description={description}
            title={title}
            publishDate={publishDate}
            viewBook={viewBook}
          />
        )}
      </div>
    </div>
  );
};

export default BookCard;
