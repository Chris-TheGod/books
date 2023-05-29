import React, { useState } from "react";

export const BookEdiit = ({ book }) => {
  const [title, setTitle] = useState(title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("new title:", title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label htmlFor="">Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
};
