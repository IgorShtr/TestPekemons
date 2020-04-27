import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {AllPokemons} from '../components/commonPage';
import {SinglePokemonInfo} from '../components/singlePokemonInfo'
import styled from 'styled-components';

export const  HomePage = ()=> {
  const [pokemonList, setPokemonList] = useState([]);
  const [shownItems, setIShowntems] = useState(9);
  const [siglePokemonId, setSiglePokemonId] = useState();

 useEffect(() => {
  
      const url = `https://pokeapi.co/api/v2/pokemon/?limit=${shownItems}&offset=${shownItems}`;      
      axios.get(url).then(result => {
        setPokemonList(result.data.results);
      });  
  }, [shownItems]);
 
  return (
    <Container className="App">
      <Header className="App-header">
        <p>POKEDEX</p> 
      </Header>
      <PokemonsData>
        <AllPokemons pokemonList ={pokemonList} setSiglePokemonId={setSiglePokemonId}></AllPokemons>
        <SinglePokemonInfo siglePokemonId={siglePokemonId}/>
      </PokemonsData>      
      <LoadMore onClick={()=>setIShowntems(shownItems+9)}>Load more</LoadMore>
    </Container>
  );
}


const Container = styled.div`
display: flex;
flex-direction: column;
`
const Header = styled.header`
// margin: 0 auto;
display: flex;
justify-content: center;
& p {
  background-color: white;
  border: 1px solid black;
  padding: 10px 30px;
  font-size: 24px;
}
`
const PokemonsData = styled.div`
display: flex;
// justify-content: space-around;
// justify-content: start;
align-items: center;
`
const LoadMore = styled.button`
width: 25%;
margin: 0 auto;
`