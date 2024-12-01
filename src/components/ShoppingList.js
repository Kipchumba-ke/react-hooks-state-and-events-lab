import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setselectedCategory] = useState("All")
  const handleCategoryChange = (event) => {
    setselectedCategory(event.target.value);
  };

  const filteredItems = items.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <li key={item.id}>
          {item.name} - {item.category}
        </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
