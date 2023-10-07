// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import { getCachedBets, saveBets } from '../utils/local-storage';

const DataFetcher = () => {
  const { setLoader, setTickets, setError } = useContext(DataContext);
  const URL = 'https://nesine-case-study.onrender.com/bets';

  useEffect(() => {
    const fetchTickets = async () => {
      const bets = getCachedBets();
      if (bets) {
        setTickets(bets);
        return;
      }
      setLoader(true);
      try {
        const response = await fetch(URL);
        const data = await response.json();

        setTickets(data);
        saveBets(data);
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
