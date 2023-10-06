import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Table = () => {
  const { tickets, loader, error } = useContext(DataContext);

  if (loader) return <h1>Loading...</h1>;
  if (error) return <h3>Error Message : {Error}</h3>;
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>EVENT COUNTS {tickets.length}</th>
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
                <td>{ticket.OCG[1].MBS}</td>
                <td>{ticket.OCG[1].OC[0].O}</td>
                <td>{ticket.OCG[1].OC[1].O}</td>
                <td>BLANK</td>
                <td>{ticket.OCG[5].OC[25].O}</td>
                <td>{ticket.OCG[5].OC[26].O}</td>
                <td>BLANK</td>
                <td>BLANK</td>
                <td>BLANK</td>
                <td>BLANK</td>
                <td>BLANK</td>
                <td>{ticket.OCG[2].OC[3].O}</td>
                <td>{ticket.OCG[2].OC[4].O}</td>
                <td>{ticket.OCG[2].OC[5].O}</td>
                <td>BLANK</td>
                <td>BLANK</td>
                <td>3</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
