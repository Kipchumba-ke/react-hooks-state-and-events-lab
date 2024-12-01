import React , {useState} from "react";

function Item({ name, category }) {
  const [cart, setcart] =useState(false)

  const toggleCart = () => {
    setcart((prevcart) => !prevcart);
  };
  return (
    <li className={cart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>{cart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
