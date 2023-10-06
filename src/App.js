import "./App.css";
import { DataProvider } from "./context/DataContext";
import DataFetcher from "./components/DataFetcher";
import Table from "./components/Table";

function App() {
  return (
    <DataProvider>
      <h1>Nesine</h1>
      <DataFetcher />
      <Table />
    </DataProvider>
  );
}

export default App;
