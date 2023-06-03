import React, { useState, useContext } from "react";
import { BookEdiit } from "./BookEdiit";
import { BooksContext } from "../context/Books";

export const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useContext(BooksContext);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdiit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      <div>{content}</div>
      <div className="actions">
        <button onClick={handleEditClick} className="edit">
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};
