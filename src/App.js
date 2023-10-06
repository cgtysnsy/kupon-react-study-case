import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [tickets, setTickets] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
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

  if (loader) return <h1>Loading...</h1>;
  if (error) return <h3>Error Message : {Error}</h3>;
  return (
    <div className="App">
      <h1>Nesine</h1>

      <table>
        <thead>
          <tr>
            <th>EVENT COUNT</th>
            <th>YORUMLAR</th>
            <th>null</th>
            <th>1</th>
            <th>x</th>
            <th>2</th>
            <th>Alt</th>
            <th>Üst</th>
            <th>H1</th>
            <th>1</th>
            <th>X</th>
            <th>2</th>
            <th>H2</th>
            <th>1-x</th>
            <th>1-2</th>
            <th>x-2</th>
            <th>Var</th>
            <th>Yok</th>
            <th>+99</th>
          </tr>
        </thead>
        {tickets.map((ticket, i) => {
          return (
            <tbody key={ticket.NID}>
              <tr>
                <th>
                  {ticket.D} {ticket.DAY} {ticket.LN}
                </th>
                <td>Yorumlar</td>
                <td></td>
                <td>1</td>
                <td>x</td>
                <td>2</td>
                <td>Alt</td>
                <td>Üst</td>
                <td>H1</td>
                <td>1</td>
                <td>X</td>
                <td>2</td>
                <td>H2</td>
                <td>1-X</td>
                <td>1-2</td>
                <td>X-2</td>
                <td>Var</td>
                <td>Yok</td>
                <td>+99</td>
              </tr>
              <tr>
                <td>
                  {ticket.C} {ticket.T} {ticket.N}
                </td>
                <td>Yorumlar</td>
                {/* <td>{ticket.OCG.1.MBS}</td>
                <td>{ticket.OCG.1.OC.0.0 }</td> */}
                <td>????</td>
                <td>????</td>
                <td>????</td>
                <td>????</td>
                <td>????</td>
                <td>????</td>
                <td>????</td>
                <td>????</td>
                <td>????</td>
                <td>????</td>
                <td>????</td>
                <td>????</td>
                <td>????</td>
                <td>????</td>
                <td>????</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;

// {
//   "C": "2002",
//   "N": "Real Madrid - Galatasaray",
//   "TYPE": "1",
//   "NID": "2146483649",
//   "D": "17.08.2023",
//   "T": "10:35",
//   "DAY": "Salı",
//   "S": "Open",
//   "LN": "Türkiye Süper Ligi",
//   "IMF": false,
//   "OCG": {
//       "1": {
//           "ID": "1",
//           "N": "Maç Sonucu",
//           "MBS": "4",
//           "SO": 1,
//           "OC": {
//               "0": {
//                   "ID": "0",
//                   "O": "6.71",
//                   "N": "1",
//                   "MBS": "4",
//                   "G": "1",
//                   "OD": 0,
//                   "IMF": false
//               },
//               "1": {
//                   "ID": "1",
//                   "O": "4.63",
//                   "N": "X",
//                   "MBS": "4",
//                   "G": "1",
//                   "OD": 0,
//                   "IMF": false
//               }
//           }
//       },
//       "2": {
//           "ID": "2",
//           "N": "Çifte Şans",
//           "MBS": "4",
//           "SO": 4,
//           "OC": {
//               "3": {
//                   "ID": "3",
//                   "O": "1.79",
//                   "N": "1-X",
//                   "MBS": "4",
//                   "G": "2",
//                   "OD": 0,
//                   "IMF": false
//               },
//               "4": {
//                   "ID": "4",
//                   "O": "2.89",
//                   "N": "1-2",
//                   "MBS": "4",
//                   "G": "2",
//                   "OD": 0,
//                   "IMF": false
//               },
//               "5": {
//                   "ID": "5",
//                   "O": "1.35",
//                   "N": "X-2",
//                   "MBS": "4",
//                   "G": "2",
//                   "OD": 0,
//                   "IMF": false
//               }
//           }
//       },
//       "5": {
//           "ID": "5",
//           "N": "Alt/Üst 2,5 Gol",
//           "MBS": "4",
//           "SO": 2,
//           "OC": {
//               "25": {
//                   "ID": "25",
//                   "O": "7.34",
//                   "N": "Alt",
//                   "MBS": "4",
//                   "G": "5",
//                   "OD": 0,
//                   "IMF": false
//               },
//               "26": {
//                   "ID": "26",
//                   "O": "1.51",
//                   "N": "Üst",
//                   "MBS": "4",
//                   "G": "5",
//                   "OD": 0,
//                   "IMF": false
//               }
//           }
//       }
//   },
//   "HEC": false
// },
