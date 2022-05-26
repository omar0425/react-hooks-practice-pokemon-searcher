import React,{useEffect, useState} from "react";
import PokemonPage from "./PokemonPage";

function App() {
const[pokemon, setPokemon] = useState([])
const pokemonAPI= "http://localhost:3001/pokemon"

useEffect(() => {
fetch(pokemonAPI)
.then(res => res.json())
.then(data => setPokemon(data))
  },[])

  return (

    <div className="App">
      <PokemonPage pokemon ={pokemon} setPokemon={setPokemon}/>
    </div>
  );
}

export default App;
