import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      { name: 'Alex', age: 28},
      { name: 'Manu', age: 30},
      { name: 'Stephanie', age: 33}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log(this.state);
    // Don't DO THIS: this.state.persons[0].name = "Aleksandr"
    this.setState({persons : [
      { name: newName, age: 28},
      { name: 'Manu', age: 30},
      { name: 'Stephanie', age: 30}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Alex', age: 28},
        { name: event.target.value, age: 30},
        { name: 'Stephanie', age: 33}
       ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {
    const style = {
      backgroundColor: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Aleks")}
            changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello i'm React</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Show Persons</button>
        { persons }   
    </div>
    );
  }
}

export default App;
