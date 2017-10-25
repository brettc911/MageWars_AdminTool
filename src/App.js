import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      cardName: undefined,
      primaryType: undefined,
      subTypes: [{name: undefined}],
      manaCsot: undefined,
      action: undefined,
      castRange: undefined,
      target: undefined,
      schools: [{name: undefined, level: undefined}],
      armor: undefined,
      health: undefined,
      defense: {roll: undefined, uses: undefined},
      channeling: undefined,
      equipmentSlot: undefined,
      abilities: [{
                    name: "",
                    action: "",
                    range: "",
                    damageType: "",
                    dice: "",
                    effects: [{roll: "", effectType: ""}],
                    damageModifiers: [{modifier: "", bonus: ""}]
                 }],
      description: undefined
    }

  }

  // Handle Functions
  // __________________________________________________________
  handleCardNameChange = e => {
    this.setState({ cardName: e.target.value })
  }
  handlePrimaryTypeChange = e => {
    this.setState({ primaryType: e.target.value })
  }
  handleSubTypeNameChange = idx => e => {
    const newSubTypes = this.state.subTypes.map((type, sidx) => {
      if (idx !== sidx) return type;
      return {...type, name: e.target.value}
    })
    this.setState({ subTypes: newSubTypes })
  }
  handleAddSubType = e => {
    e.preventDefault()
    this.setState({
      subTypes: this.state.subTypes.concat([{ name: "", level: ""}])
    });
  }
  handleRemoveSubType = idx => (e) => {
    e.preventDefault()
    this.setState({
      subTypes: this.state.subTypes.filter((sub, sidx) => idx !== sidx)
    })
  }
  handleManaCostChange = e => {
    this.setState({ manaCsot: e.target.value })
  }
  handleCastRangeChange = e => {
    this.setState({ castRange: e.target.value })
  }
  handleTargetChange = e => {
    this.setState({ target: e.target.value })
  }
  handleSchoolNameChange = idx => e => {
    console.log(this.state.schools.name);
    const newSchools = this.state.schools.map((type, sidx) => {
      if (idx !== sidx) return type;
      return {...type, name: e.target.value}
    })
    this.setState({ schools: newSchools })
  }
  handleSchoolLevelChange = idx => e => {
    console.log(this.state.schools.level);
    const newSchools = this.state.schools.map((type, sidx) => {
      if (idx !== sidx) return type;
      return {...type, level: e.target.value}
    })
    this.setState({ schools: newSchools })
  }
  handleAddSchool = e => {
    e.preventDefault()
    this.setState({
      schools: this.state.schools.concat([{ name: "", level: ""}])
    });
  }
  handleRemoveSchool = (idx) => (e) => {
    e.preventDefault()
    this.setState({
      schools: this.state.schools.filter((s, sidx) => idx !== sidx) })
  }
  handleHealthChange = e => {
    this.setState({ health: e.target.value })
  }
  handleArmorChange = e => {
    this.setState({ armor: e.target.value })
  }
  handleDefenseRollChange = e => {
    this.setState({ defense: {roll: e.target.value, uses: this.state.defense.uses} })
  }
  handleDefenseUsesChange = e => {
    this.setState({ defense: {roll: this.state.defense.roll, uses: e.target.value} })
  }
  handleChannelingChange = e => {
    this.setState({ channeling: e.target.value })
  }
  handleEquipmentChange = e => {
    this.setState({ equipmentSlot: e.target.value })
  }

  handleAddAbility = e => {
    e.preventDefault()
    this.setState({
      abilities: this.state.abilities.concat([{
                    name: "",
                    action: "",
                    range: "",
                    damageType: "",
                    dice: "",
                    effects: [{roll: "", effectType: ""}],
                    damageModifiers: [{modifier: "", bonus: ""}]
                 }])
    });
  }
  handleRemoveAbility = (idx) => (e) => {
    e.preventDefault()
    this.setState({
      abilities: this.state.abilities.filter((s, sidx) => idx !== sidx) })
  }
  handleAbilityNameChange = idx => e => {
    const newAbilities = this.state.abilities.map((abil, sidx) => {
      if (idx !== sidx) return abil;
      return {...abil, name: e.target.value}
    })
    this.setState({ abilities: newAbilities })
  }
  handleAbilityActionChange = idx => e => {
    const newAbilities = this.state.abilities.map((abil, sidx) => {
      if (idx !== sidx) return abil;
      return {...abil, action: e.target.value}
    })
    this.setState({ abilities: newAbilities })
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
                <option></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
          </div>

          <div>
            <label>Action:</label>
              <select onChange={this.handleActionChange}>
                <option></option>
                <option value="full">Full</option>
                <option value="quick">Quick</option>
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
            <label>Schools:</label>
            {
              this.state.schools.map((type, idx) => (
                <div>
                <input
                  placeholder={`School ${idx + 1}`}
                  value={type.name}
                  onChange={this.handleSchoolNameChange(idx)}
                />
              <select onChange={this.handleSchoolLevelChange(idx)}>
                  <option></option>
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

          <div>
            <label>Health:</label>
              <input onChange={this.handleHealthChange}/>
          </div>

          <div>
            <label>Armor:</label>
              <input onChange={this.handleArmorChange}/>
          </div>

          <div>
            <label>Defense Roll:</label>
              <select onChange={this.handleDefenseRollChange}>
                <option></option>
                <option value="1+">1+</option>
                <option value="2+">2+</option>
                <option value="3+">3+</option>
              </select>
            <label>Defense use number:</label>
              <select onChange={this.handleDefenseUsesChange}>
                <option></option>
                <option value="infinite">infinite</option>
                <option value="1x">1x</option>
                <option value="2x">2x</option>
                <option value="3x">3x</option>
              </select>
          </div>

          <div>
            <label>Channeling:</label>
              <select onChange={this.handleChannelingChange}>
                <option></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
          </div>

          <div>
            <label>Equipment Slot:</label>
              <div>
                <label>
                  <input type="radio" value="" name="equipment" onChange={this.handleEquipmentChange}/>None
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="helmet" name="equipment" onChange={this.handleEquipmentChange}/>Helment
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="amulet" name="equipment" onChange={this.handleEquipmentChange}/>Amulet
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="cloak" name="equipment" onChange={this.handleEquipmentChange}/>Cloak
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="ring" name="equipment" onChange={this.handleEquipmentChange}/>Ring
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="chest" name="equipment" onChange={this.handleEquipmentChange}/>Chest Piece
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="belt" name="equipment" onChange={this.handleEquipmentChange}/>Belt
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="gloves" name="equipment" onChange={this.handleEquipmentChange}/>Gloves
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="shield" name="equipment" onChange={this.handleEquipmentChange}/>Shield
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="boots" name="equipment" onChange={this.handleEquipmentChange}/>Boots
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="weapon or shield" name="equipment" onChange={this.handleEquipmentChange}/>One-handed Weapon
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="weapon and shield " name="equipment" onChange={this.handleEquipmentChange}/>Two-handed Weapon
                </label>
              </div>

              <div>
                <label>Abilities:</label>
                  {
                    this.state.abilities.map((abil, idx) => (
                      <div>
                        <input
                          placeholder={`Ability ${idx + 1}`}
                          value={abil.name}
                          onChange={this.handleAbilityNameChange(idx)}
                        />
                        <select onChange={this.handleAbilityActionChange(idx)}>
                          <option></option>
                          <option value="full">Full</option>
                          <option value="quick">Quick</option>
                        </select>
                        <button onClick={this.handleRemoveAbility(idx)}> - </button>
                      </div>
                    ))
                  }
                  <button onClick={this.handleAddAbility}>Add</button>
              </div>


            </div>



          <button onClick={this.handleSubmit}>Create!</button>
        </form>
      </div>
    );
  }
}

export default App;
