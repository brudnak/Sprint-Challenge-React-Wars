import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
`
const MainHeader = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      starwarsChars: []
    }
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/')
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({ starwarsChars: data.results })
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  render() {
    return (
      <Wrapper>
        <MainHeader>React Wars</MainHeader>
      </Wrapper>
    )
  }
}

export default App
