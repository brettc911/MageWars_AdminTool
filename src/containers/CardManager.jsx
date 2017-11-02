import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/meyers_reset.css'
import styled from 'styled-components'
// Import Router
import { Link } from 'react-router-dom';

// BEGIN STYING
// __________________________________________________________

const Header = styled.div`
  background: white;
`


class CardManager extends Component {
  constructor(){
    super()
    this.state = {
      cards: []
    }
  }

  componentWillMount(){
      fetch('https://secret-gorge-71512.herokuapp.com/api/card', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ cards: data.results})
      })

  }

  render() {
    return (
      <div>
        {
          this.state.cards.map((card, idx) => (
            <h1>{card.cardName}</h1>
          ))
        }
      </div>
    );
  }
}

export default CardManager;
