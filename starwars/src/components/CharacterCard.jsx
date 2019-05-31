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
      default:
      // return 'https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200'
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
