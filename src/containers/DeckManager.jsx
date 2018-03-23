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


class DeckManager extends Component {
  constructor(){
    super()
    this.state = {
      decks: []
    }
  }

  deleteDeck = e => {
    fetch(`https://secret-gorge-71512.herokuapp.com/api/deck/${e.target.id}`, {
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
      fetch('https://secret-gorge-71512.herokuapp.com/api/deck', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ decks: data.results})
      })
    })
  }

  componentWillMount(){
    fetch('https://secret-gorge-71512.herokuapp.com/api/deck', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({ decks: data.results})
    })
  }

  showState = e => {
    e.preventDefault
    console.log(this.state);
  }


  render() {
    return (
      <div>
        <H1>Decks List</H1>
        <button onClick={this.showState}>Show State</button>
        {
          this.state.decks.map((deck, idx) => (
            <div>
            <h1>{deck.deckName} <button id={deck._id}onClick={this.deleteDeck}>Delete</button></h1>
            </div>
          ))
        }
      </div>
    );
  }
}

export default DeckManager;
