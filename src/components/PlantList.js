import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ url, plantsArr }) {
  const planC = plantsArr.map((eachPlant) => {
    return <PlantCard plant={eachPlant} key={eachPlant.id} url={url} />;
  });
  return <ul className="cards">{planC}</ul>;
}

export default PlantList;