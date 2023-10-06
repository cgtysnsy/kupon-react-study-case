import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  return (
    <DataContext.Provider
      value={{ tickets, setTickets, loader, setLoader, error, setError }}
    >
      {children}
    </DataContext.Provider>
  );
};
