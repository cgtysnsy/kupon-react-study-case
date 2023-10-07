import React from 'react';
import './App.css';
import { DataProvider } from './context/DataContext';
import DataFetcher from './components/DataFetcher';
import Table from './components/Table';
import Cart from './components/Cart';

function App() {
  return (
    <DataProvider>
      <h1>Nesine React Test Case</h1>
      <DataFetcher />
      <Table />
      <Cart />
    </DataProvider>
  );
}

export default App;
