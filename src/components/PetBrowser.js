import { getNodeText } from "@testing-library/react";
import React from "react";
import Pet from "./Pet";

function PetBrowser( { onAdoptPet, pets} ) {

  const allPets = pets.map(pet => {
    return (
      <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
    )
  })


  return <div className="ui cards">{allPets}</div>;
}

export default PetBrowser;
