import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const url = "http://localhost:6001/plants";
  const [plantsArr, setPlantsArr] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPlantsArr(data))
      .catch(console.error);
  }, []);
  console.log(plantsArr);

  const searchedPlantArr = plantsArr.filter((eachPlant) => {
    return eachPlant.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  //console.log(searchedPlantArr)

  const addNewPlant = (newlyAddedPlant) => {
    setPlantsArr([...plantsArr, newlyAddedPlant]);
  };
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    // setPlantsArr(searchedPlantArr)
  };
  return (
    <main>
      <NewPlantForm url={url} onAddNewPlant={addNewPlant} />
      <Search onSearch={handleSearch} />
      <PlantList plantsArr={searchedPlantArr} url={url} />
    </main>
  );
}

export default PlantPage;