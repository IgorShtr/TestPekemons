import React, { useState, useEffect} from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';


import styled from "styled-components";

export const SinglePokemonInfo = (props) => {
  const { siglePokemonId } = props;


  const [pokemonInfo, setPokemonInfo] = useState({});
  const [isDataResived, setIsDataResived] = useState(false);

  useEffect(() => {

    const url1 = `https://pokeapi.co/api/v2/pokemon/${siglePokemonId}/`
    axios.get(url1).then(result => {
      setPokemonInfo(result.data);
      setIsDataResived(true)
    });

  }, [siglePokemonId]);
  const pokemonData = {}
  if (isDataResived) {
    const { stats } = pokemonInfo;
    const { stats: [{ base_stat: speedVal },
      { base_stat: SPdefensedVal },
      { base_stat: SPattackVal },
      { base_stat: defenseVal },
      { base_stat: attackVal },
      { base_stat: HPVal }] } = pokemonInfo;
    const { stats: [{ stat: { name: Speed } },
      { stat: { name: SPdefense } },
      { stat: { name: SPattack } },
      { stat: { name: defense } },
      { stat: { name: attack } },
      { stat: { name: HP } }] } = pokemonInfo;
    const {types:[{type:{name: typeName}} ]} = pokemonInfo; 
    pokemonData.type = typeName 
    pokemonData.attack = attackVal;
    pokemonData.defense = defenseVal;
    pokemonData.HP = HPVal;
    pokemonData.SPattack = SPattackVal;
    pokemonData.SPdefense = SPdefensedVal;
    pokemonData.Speed = speedVal;
   }


  const pokemonDataForJSX = Object.entries(pokemonData);
 

  const pokemonDataJSX = pokemonDataForJSX.map(([name, value]) => {
    return (<ExectData key={uuidv4()}>
              <p>{name}</p>
              <p>{value}</p>
            </ExectData>)

  })

  

  const { name, id, height, weight, types, base_experience } = pokemonInfo && pokemonInfo

  return <PokemonDitails style={{ display: siglePokemonId ? "block" : "none" }}>
    <img src={`http://pokeapi.co/media/img/${siglePokemonId}.png`} alt="not found"></img>
    <p>{name}#{id}</p>{}
    {pokemonDataJSX}
    <ExectData>
      <p>Experience</p>
      <p>{base_experience}</p>
    </ExectData>
    <ExectData>
      <p>Height</p>
      <p>{height}</p>
    </ExectData>
    <ExectData>
      <p>Weight</p>
      <p>{weight}</p>
    </ExectData>
  </PokemonDitails>
}


const PokemonDitails = styled.div`
padding-top: 10px;
padding-bottom: 10px;
width: 200px;
height: fit-content;
border: 1px solid grey;
& img {
  
  margin: 0 10px;
  width: 180px;
  height: 75px;
  border: 1px solid grey;
}
& > p {
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  margin: 0;
}
`
const ExectData = styled.div`
display: flex;
justify-content: center;
 & p{
  text-transform: capitalize;
  margin: 0;
  border: 1px solid grey;
  padding: 3px 5px;
  text-align: center;
  font-size: 12px;
 }
 & p:first-child{
 width: 50%;
 }
 & p:last-child{
  width: 20%;
  }
`