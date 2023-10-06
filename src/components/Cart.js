import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Cart = () => {
  const { cartItems } = useContext(DataContext);

  const prices = cartItems.map((i) => Number(i.itemValue));
  const multiplyOfCartPrices = prices.reduce((acc, curr) => acc * curr, 1);
  return (
    <div className="cartWrapper">
      <ul>
        {cartItems.map((item, i) => (
          <li key={item.id}>
            <span>{item.parentObject.OCG[1].MBS}</span>
            <span>Kod:{item.parentObject.C}</span>
            <span>Maç:{item.parentObject.N}</span>
            <span>Oran: {item.itemValue}</span>
          </li>
        ))}
      </ul>

      {cartItems.length == 0 ? (
        <span>Toplam Tutar: 0 TL</span>
      ) : (
        <span>Toplam Tutar: {multiplyOfCartPrices.toFixed(2)} TL</span>
      )}
    </div>
  );
};

export default Cart;
