import React, { Component } from 'react'
import CharacterCard from './CharacterCard'

class CharacterList extends Component {
  render() {
    return this.props.characters.map(character => (
      <CharacterCard key={character.created} character={character} />
    ))
  }
}

export default CharacterList
