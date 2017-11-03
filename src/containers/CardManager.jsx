import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/meyers_reset.css'
import styled from 'styled-components'
// Import Router
import { Link } from 'react-router-dom';

// BEGIN STYING
// __________________________________________________________

const H1 = styled.h1`
  font-size: 20px;
  text-align: center;
`


class CardManager extends Component {
  constructor(){
    super()
    this.state = {
      cards: []
    }
  }

  deleteCard = e => {
    fetch(`https://secret-gorge-71512.herokuapp.com/api/card/${e.target.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .then(() => {
      fetch('https://secret-gorge-71512.herokuapp.com/api/card', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ cards: data.results})
      })
    })
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
        console.log(data);
        this.setState({ cards: data.results})
      })
  }


  render() {
    return (
      <div>
        <H1>Cards List</H1>
        {
          this.state.cards.map((card, idx) => (
            <div>
            <h1>{card.cardName} <button id={card._id}onClick={this.deleteCard}>Delete</button></h1>
            </div>
          ))
        }
      </div>
    );
  }
}

export default CardManager;
