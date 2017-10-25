import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      cardName: "",
      primaryType: "",
      subTypes: [{name: ""}],
      manaCsot: "",
      action: "",
      castRange: "",
      target: "",
      schools: [{name: "", level: ""}],
      armor: "",
      health: "",
      defense: "",
      equipmentSlot: [],
      abilities: [],
      description: ""
    }

  }

  // Handle Functions
  // __________________________________________________________
  handleCardNameChange = e => {
    this.setState({cardName: e.target.value})
  }
  handlePrimaryTypeChange = e => {
    this.setState({primaryType: e.target.value})
  }
  handleSubTypeNameChange = idx => e => {
    const newSubTypes = this.state.subTypes.map((type, sidx) => {
      if (idx !== sidx) return type;
      return {...type, name: e.target.value}
    })
    this.setState({subTypes: newSubTypes})
  }
  handleAddSubType = e => {
    e.preventDefault()
    this.setState({
      subTypes: this.state.subTypes.concat([{ name: "", level: ""}])
    });
  }
  handleRemoveSubType = idx => () => {
    this.setState({
      subTypes: this.state.subTypes.filter((sub, sidx) => idx !== sidx)
    })
  }
  handleManaCostChange = e => {
    this.setState({
      manaCsot: e.target.value
    })
  }
  handleCastRangeChange = e => {
    this.setState({
      castRange: e.target.value
    })
  }
  handleTargetChange = e => {
    this.setState({
      target: e.target.value
    })
  }
  handleSchoolNameChange = idx => e => {
    console.log(this.state.schools.name);
    const newSchools = this.state.schools.map((type, sidx) => {
      if (idx !== sidx) return type;
      return {...type, name: e.target.value}
    })
    this.setState({schools: newSchools})
  }
  handleSchoolLevelChange = idx => e => {
    console.log(this.state.schools.level);
    const newSchools = this.state.schools.map((type, sidx) => {
      if (idx !== sidx) return type;
      return {...type, level: e.target.value}
    })
    this.setState({schools: newSchools})
  }
  handleAddSchool = e => {
    e.preventDefault()
    this.setState({
      schools: this.state.schools.concat([{ name: "", level: ""}])
    });
  }
  handleRemoveSchool = idx => () => {
    this.setState({
      schools: this.state.schools.filter((sub, sidx) => idx !== sidx)
    })
  }




  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault()

    // Creating a card with the current state
    // let card = JSON.stringify(this.state);
    // fetch('https://secret-gorge-71512.herokuapp.com/api/card', {
    //   method: 'POST',
    //   body: card,
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data);
    // })

  }


  render() {
    return (
      <div>
        <h1>Create a Card</h1>
        <form action="" method="">

          <div>
            <label>Card Name:</label>
            <input onChange={this.handleCardNameChange} />
          </div>


          <div>
            <label>Primary-type:</label>
            <input onChange={this.handlePrimaryTypeChange} />
          </div>


          <div>
            <label>Sub-types:</label>
            {
              this.state.subTypes.map((type, idx) => (
                <div>
                <input
                  placeholder={`Sub-type ${idx + 1}`}
                  value={type.name}
                  onChange={this.handleSubTypeNameChange(idx)}
                />
                <button onClick={this.handleRemoveSubType(idx)}> - </button>
                </div>
              ))
            }
            <button onClick={this.handleAddSubType}>Add Sub-type</button>
          </div>

          <div>
            <label>Mana cost:</label>
              <select onChange={this.handleManaCostChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
          </div>

          <div>
            <label>Action:</label>
              <select onChange={this.handleActionChange}>
                <option value="Full">Full</option>
                <option value="Quick">Quick</option>
              </select>
          </div>

          <div>
            <label>Cast Range:</label>
              <select onChange={this.handleCastRangeChange}>
                <option value="0-0">0-0</option>
                <option value="0-1">0-1</option>
                <option value="0-2">0-2</option>
                <option value="1-1">1-1</option>
                <option value="1-2">1-2</option>
              </select>
          </div>

          <div>
            <label>Target:</label>
              <input onChange={this.handleTargetChange}/>
          </div>

          <div>
            {
              this.state.schools.map((type, idx) => (
                <div>
                <input
                  placeholder={`School ${idx + 1}`}
                  value={type.name}
                  onChange={this.handleSchoolNameChange(idx)}
                />
              <select onChange={this.handleSchoolLevelChange(idx)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              <button onClick={this.handleRemoveSchool(idx)}> - </button>
                </div>
              ))
            }
            <button onClick={this.handleAddSchool}>Add</button>
          </div>






          <button onClick={this.handleSubmit}>Create!</button>
        </form>
      </div>
    );
  }
}

export default App;
