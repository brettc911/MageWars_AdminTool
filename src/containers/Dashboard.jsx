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


class Dashboard extends Component {

  render() {
    return (
      <div>
        <Header>
          <ul>
            <li><Link to='/'>Dashboard</Link></li>
            <li><Link to='/create'>Create Cards</Link></li>
            <li><Link to='/cardManager'>Manage Cards</Link></li>
          </ul>
        </Header>
        {this.props.children}
      </div>
    );
  }
}

export default Dashboard;
