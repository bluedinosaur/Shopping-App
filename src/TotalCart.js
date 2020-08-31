import React from "react";
import { items } from "./static-data";

const Total = ({ cart }) => {
  let itemCounts = cart.reduce((item, itemId) => {
    item[itemId] = item[itemId] || 0;
    item[itemId]++;
    return item;
  }, {});

  let cartItems = Object.keys(itemCounts).map((itemId) => {
    var item = items.find((item) => item.id === parseInt(itemId, 10));
    return {
      ...item,
      count: itemCounts[itemId],
    };
  });

  let total = cartItems.reduce((fullAmount, item) => {
    return fullAmount + item.price * item.count;
  }, 0);

  let totalItems = cartItems.reduce((total, item) => {
    return total + item.count;
  }, 0);

  return (
    <span className="total">
      <i className="fas fa-shopping-cart"></i> {totalItems} items (${total})
    </span>
  );
};

export default Total;
