import React,{useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";


function PokemonPage({pokemon, setPokemon}) {
  const [filterPokemon, setFilterPokemon] = useState(pokemon)
  
  
  function addPokemon(newPokemon){
    const options= {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(newPokemon)
    }
    fetch('http://localhost:3001/pokemon', options)
    .then(res => res.json())
    .then(data => setPokemon([...pokemon, newPokemon]))
  }
  
  
  
  function handleSearchChange(e){
    const filterPokemons = pokemon.filter(pok => {
      return pok.name.includes (e.target.value)
    })
    setFilterPokemon(filterPokemons)
  }
  useEffect(()=> {
    setFilterPokemon(pokemon)
  },[pokemon])
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon = {addPokemon} />
      <br />
      <Search handleSearchChange = {handleSearchChange}/>
      <br />
      <PokemonCollection pokemon = {filterPokemon} />
    </Container>
  );
}

export default PokemonPage;
