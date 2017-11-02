import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/meyers_reset.css'
import styled from 'styled-components'
// Import Router
import { Link } from 'react-router-dom';

// BEGIN STYING
// __________________________________________________________

const Form = styled.form`
  width: 50%;
  margin: auto;
`


class Dashboard extends Component {
  constructor(){
    super()

  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Dashboard</Link></li>
          <li><Link to='/create'>Create Cards</Link></li>
          <li><Link to='/manage/cards'>Manage Cards</Link></li>
          <li><Link to='/manage/users'>Manage Users</Link></li>
        </ul>
      </div>
    );
  }
}

export default Dashboard;
