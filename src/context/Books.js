import { createContext, useState } from "react";

export const BooksContext = createContext();

export const Provider = ({ children }) => {
  return <BooksContext.Provider value={{}}>{children}</BooksContext.Provider>;
};
