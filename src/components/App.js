import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onChangeType(animal) {
    setFilters({type: animal})
  }

  function onFindPetsClick() {
    if (filters.type === "all") {
      fetch("http://localhost:3001/pets")
      .then(resp => resp.json())
      .then(data => setPets(data))
    } else {
      fetch(`http://localhost:3001/pets?type=${filters.type}`)
      .then(resp => resp.json())
      .then(data => setPets(data))
    }
  }

  function onAdoptPet(id) {
    const adoptedPetChange = pets.map( pet => {
      if (id === pet.id) {
        return {...pet, isAdopted: true}
      } else {
        return pet
      }
    })
    setPets(adoptedPetChange)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser onAdoptPet={onAdoptPet} pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
