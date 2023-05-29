import React, { useState } from "react";
import { BookEdiit } from "./BookEdiit";

export const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdiit onEdit={onEdit} book={book} />;
  }

  return (
    <div className="book-show">
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
