import React, { useState, useLayoutEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components";

export const AllPokemons = props => {
  const { pokemonList, setSiglePokemonId } = props;  
 
  const [pokemonsInfoList, setPokemonsInfoList] = useState([]);

  useLayoutEffect(() => {
    let pokemonsListData = [];
    let typesAll = []
    pokemonList.forEach(({ url }, index) => {
      axios.get(url).then(result => {        
        const url1 = `http://pokeapi.co/api/v2/pokemon/${result.data.id}/`
        axios.get(url1).then(result => {
          const { name, types, id } = result.data;
          const type = types.map(({ type }) => type.name)
          const singlePokData = {
            id,
            name,
            type
          }
          pokemonsListData.push(singlePokData);             
          (index === pokemonList.length - 1) && setPokemonsInfoList(pokemonsListData);
         (type.length>1) ? type.forEach((item)=>typesAll.push(item)):typesAll.push(type[0])
          const unification = ()=> Array.from(new Set(typesAll));
          // const unikTypesAll = unification();         
        });
      });
    });
  }, [pokemonList]);

  const bgColor = (type) =>{
    switch (type) {
   case "poison" :
     return "#b383e0"
    case "flying" :
      return " #5454d1"
    case "bug":
      return "#968f54"
    case "fire":
      return " #f07f6b"
    case "water":
      return "#749adf"
    case "grass":
      return " #85ee81"
    case "fairy":
      return "#e286da"
    case "electric":
      return "#e7e1a8"
    case "ground":
      return "#615f4b"
    case "steel":
      return "lightgrey"
    case "ice":
      return "#c3d2ee"
    case "fighting":
      return "#a5352d"
    case "psychic":
      return "#8aac3c"
    case "rock":
      return "#494e3e"
    default:  
        return "white"
 }         
 }
  const pokemonsCard = pokemonsInfoList && pokemonsInfoList.map(({ name, id, type }) => {
    const pokAbil = type.map(item => (
      <div key={uuidv4()} style={{backgroundColor:bgColor(item)}}>
        <p >
          {item}
        </p>
      </div>
    ))

    return (
      <PokemonCard key={uuidv4()} onClick={() => setSiglePokemonId(id)}>
        <Image>
          <img src={`http://pokeapi.co/media/img/${id}.png`} alt="not found"></img> 
        </Image>          
        <p>
          {name}
        </p>
        <Abilblock>
          {pokAbil}
        </Abilblock>
      </PokemonCard>
    )
  });  
  return <MainSection>
          {pokemonsCard}
        </MainSection>
}

const MainSection = styled.div`
display: flex;
flex-wrap: wrap;
width: 70%;
`;

const PokemonCard = styled.div`
margin: 10px;
width: 100px;
height: 150px;
border: 1px solid grey;

& p{ 
  text-transform: capitalize;
  font-weight: 700;
  text-align: center;
  margin: 0 5px;
}
`
const Image = styled.div`
margin: 5px 5px;
 height: 40%;
 wigth: 80%;
 border:1px solid grey;
`
const Abilblock = styled.div`
display: flex;
flex-wrap:wrap;
& div {
  width:45px;
  margin-top: 5px;
  margin-left: 5px;
  border:1px solid grey;
  padding: 2px;    
  & p{
    font-size: 12px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0;
  }
}

`

