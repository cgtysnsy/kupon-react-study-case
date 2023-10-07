import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <DataContext.Provider
      value={{
        tickets,
        setTickets,
        loader,
        setLoader,
        error,
        setError,
        cartItems,
        setCartItems,
        isClicked,
        setIsClicked,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
