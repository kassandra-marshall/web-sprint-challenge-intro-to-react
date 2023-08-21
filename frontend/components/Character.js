import React, { useState } from 'react'

function Character(character) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [displayHW, setDisplayHW] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const handleClick = (e) => {
    e.preventDefault();
    displayHW ? setDisplayHW(false) : setDisplayHW(true)
  }

  return (
    <div className='character-card'>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name' onClick={e => handleClick(e)}>{character.name}</h3>
      {displayHW ? 
        <p>Planet: <span className='character-planet'>{character.homeworld.name}</span>
        </p>
      : null}
    </div>
  )
}

export default Character
