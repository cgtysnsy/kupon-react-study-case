import React from 'react';
import './App.css';
import { DataProvider } from './context/DataContext';
import DataFetcher from './components/DataFetcher';
import DataTable from './components/DataTable';
import Cart from './components/Cart';

function App() {
  return (
    <DataProvider>
      <h1>Nesine</h1>
      <DataFetcher />
      <DataTable />
      <Cart />
    </DataProvider>
  );
}

export default App;
