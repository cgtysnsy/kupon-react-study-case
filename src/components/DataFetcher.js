import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";

const DataFetcher = () => {
  const { setLoader, setTickets, setError } = useContext(DataContext);
  const URL = "https://nesine-case-study.onrender.com/bets";

  useEffect(() => {
    const fetchTickets = async () => {
      setLoader(true);
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };

    fetchTickets();
  }, []);

  return null;
};

export default DataFetcher;
