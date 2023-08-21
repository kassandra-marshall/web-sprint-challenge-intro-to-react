import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [data, setData] = useState({
    people: [],
    planets: []
  })
  
  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    const peoplePromise = axios.get(urlPeople)
    const planetPromise = axios.get(urlPlanets)
    Promise.all([peoplePromise, planetPromise]).then(function(res) {
      setData({people: res[0].data, planets: res[1].data});
    }).catch(err => {
      console.error(err)
    });
  }, [])

  const characters = data.people.map(character => {
    return {
      id: character.id,
      name: character.name,
      homeworld: character.homeworld
    }
  })

  const charactersWithPlanets = characters.map((character) => {
    let homeworld = data.planets.find(planet => {
      if (character.homeworld === planet.id)
        return planet.name
    })

    return {
      id: character.id,
      name: character.name,
      homeworld: {
        id: character.homeworld,
        name: homeworld.name
      }
    }
    })

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {charactersWithPlanets.map(character => {
        return <Character key={character.id} {...character} />
      })}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
