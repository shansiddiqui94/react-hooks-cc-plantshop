import React, { useState } from "react";

function PlantCard({ url, plant }) {
  const { id, name, image, price } = plant;

  const [isInStock, setIsInStock] = useState(true);

  const handleClick = () => {
    setIsInStock(!isInStock);
  };
  const handleEdit = () => {};

  const handleDelete = () => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(console.log("deleted"))
      .catch(console.error);
  };
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>

      <button onClick={handleEdit}> Edit </button>

      <button onClick={handleDelete}> Delete </button>
      {isInStock ? (
        <button onClick={handleClick} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;