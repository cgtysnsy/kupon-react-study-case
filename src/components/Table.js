import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";

const Table = () => {
  const { tickets, loader, error, cartItems, setCartItems, setIsClicked } =
    useContext(DataContext);

  const handleCellClick = (object) => {
    const isSelected = cartItems.some((o) => o.id === object.id);
    const existingIndex = cartItems.findIndex(
      (obj) => obj.rowId === object.rowId
    );
    if (isSelected) {
      // Remove the object from the selectedObjects state
      setCartItems((prevSelected) =>
        prevSelected.filter((o) => o.id !== object.id)
      );
      setIsClicked(false);
    } else if (existingIndex !== -1) {
      const newItemsArray = [...cartItems];
      newItemsArray[existingIndex] = object;
      setCartItems(newItemsArray);
    } else {
      // Add the object to the selectedObjects state
      setCartItems((prevSelected) => [...prevSelected, object]);
      setIsClicked(true);
    }
  };
  useEffect(() => {
    console.log(cartItems, "cart state list");
  }, [cartItems]);

  if (loader) return <h1>Loading...</h1>;
  if (error) return <h3>Error Message : {Error}</h3>;
  return (
    <div>
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
                <td
                  key={`${ticket.C}${ticket.OCG[1].OC[0].O}${i}`}
                  onClick={() =>
                    handleCellClick({
                      id: `${ticket.C}${ticket.OCG[1].OC[0].O}${i}`,
                      itemValue: ticket.OCG[1].OC[0].O,
                      rowId: i,
                    })
                  }
                  style={{
                    backgroundColor: cartItems.some(
                      (o) => o.id === `${ticket.C}${ticket.OCG[1].OC[0].O}${i}`
                    )
                      ? "yellow"
                      : "white",
                  }}
                >
                  {ticket.OCG[1].OC[0].O}
                </td>
                <td
                  key={`${ticket.C}${ticket.OCG[1].OC[1].O}${i}${i}`}
                  onClick={() =>
                    handleCellClick({
                      id: `${ticket.C}${ticket.OCG[1].OC[1].O}${i}${i}`,
                      itemValue: ticket.OCG[1].OC[1].O,
                      rowId: i,
                    })
                  }
                  style={{
                    backgroundColor: cartItems.some(
                      (o) =>
                        o.id === `${ticket.C}${ticket.OCG[1].OC[1].O}${i}${i}`
                    )
                      ? "yellow"
                      : "white",
                  }}
                >
                  {ticket.OCG[1].OC[1].O}
                </td>
                <td></td>
                <td
                  key={`${ticket.C}${ticket.OCG[5].OC[25].O}${i}${i}${i}`}
                  onClick={() =>
                    handleCellClick({
                      id: `${ticket.C}${ticket.OCG[5].OC[25].O}${i}${i}${i}`,
                      itemValue: ticket.OCG[5].OC[25].O,
                      rowId: i,
                    })
                  }
                  style={{
                    backgroundColor: cartItems.some(
                      (o) =>
                        o.id ===
                        `${ticket.C}${ticket.OCG[5].OC[25].O}${i}${i}${i}`
                    )
                      ? "yellow"
                      : "white",
                  }}
                >
                  {ticket.OCG[5].OC[25].O}
                </td>
                <td
                  key={`${ticket.C}${ticket.OCG[5].OC[26].O}${i}${i}${i}${i}`}
                  onClick={() =>
                    handleCellClick({
                      id: `${ticket.C}${ticket.OCG[5].OC[26].O}${i}${i}${i}${i}`,
                      itemValue: ticket.OCG[5].OC[26].O,
                      rowId: i,
                    })
                  }
                  style={{
                    backgroundColor: cartItems.some(
                      (o) =>
                        o.id ===
                        `${ticket.C}${ticket.OCG[5].OC[26].O}${i}${i}${i}${i}`
                    )
                      ? "yellow"
                      : "white",
                  }}
                >
                  {ticket.OCG[5].OC[26].O}
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{ticket.OCG[2].OC[3].O}</td>
                <td>{ticket.OCG[2].OC[4].O}</td>
                <td>{ticket.OCG[2].OC[5].O}</td>
                <td></td>
                <td></td>
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
