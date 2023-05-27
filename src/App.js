import React, { useState } from "react";
import { BookCreate } from "./components/BookCreate";

export const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("need to add book with:", title);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
};
