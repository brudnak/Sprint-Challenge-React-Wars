import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background-color: #fff;
  width: 500px;
  margin: auto;
  border-radius: 10px;
  text-align: left;
  margin: 2% auto;
  box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
`
const CardConent = styled.div`
  color: #443e3e;
  padding: 1%;
  img {
    border-radius: 10px;
  }
`

class CharacterCard extends Component {
  getImage = name => {
    switch (name) {
      case 'Luke Skywalker':
        return 'https://i.imgur.com/snIfH7L.png'
      case 'C-3PO':
        return 'https://i.imgur.com/iY4Yrx6.png'
      case 'R2-D2':
        return 'https://i.imgur.com/eXYava5.png'
      case 'Darth Vader':
        return 'https://i.imgur.com/fa8EzNL.png'
      case 'Leia Organa':
        return 'https://i.imgur.com/TuUgWTZ.png'
      case 'Owen Lars':
        return 'https://i.imgur.com/BlugWLe.png'
      case 'Beru Whitesun lars':
        return 'https://i.imgur.com/QkPN7EN.png'
      case 'R5-D4':
        return 'https://i.imgur.com/7vkAwEG.png'
      case 'Biggs Darklighter':
        return 'https://imgur.com/hjMjZxv.png'
      case 'Obi-Wan Kenobi':
        return 'https://i.imgur.com/YR3UNU3.png'
      default:
        return 'https://i.imgur.com/B1KuQcw.png'
    }
  }

  render() {
    return (
      <Card>
        <CardConent>
          <h3>{this.props.character.name}</h3>
          <p>Height: {this.props.character.height}</p>
          <p>Mass: {this.props.character.mass}</p>
          <p>Skin color: {this.props.character.skin_color}</p>
          <p>Eye color: {this.props.character.eye_color}</p>
          <p>Birth year: {this.props.character.birth_year}</p>
          <img
            src={this.getImage(this.props.character.name)}
            alt={this.props.character.name}
          />
        </CardConent>
      </Card>
    )
  }
}

export default CharacterCard
