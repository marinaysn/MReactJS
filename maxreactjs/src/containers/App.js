import React, { Component } from 'react';
import classes from './App.css';
import PersonList from '../components/PersonList/PersonList';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('App.js constructor called', this.props)
  }
  state = {
    persons: [
      { id: "1", name: "Marina", age: 28 },
      { id: "2", name: "Pavel", age: 43 },
      { id: "3", name: "Alex", age: 15 },
      { id: "4", name: "Anna", age: 13 },
      { id: "5", name: "Jane", age: 37 },
      // { id: "6", name: "Sasha", age: 41 },
      // { id: "7", name: "Bob", age: 21 },
      // { id: "8", name: "Alice", age: 4 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  componentDidMount() {
    console.log("App.js: componentDidMount is called");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("App.js: componentDidUpdate is called");
    return true;
  }

  componentDidUpdate(){
    console.log("App.js: componentDidUpdate is called");
  }
  


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    console.log('App.js rander called')
    let persons = null;
 

    if (this.state.showPersons) {
      persons = (
        <div>
          <PersonList
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />      
        </div>
      ); 
    }

    return (
      <div className={classes.App}>

        <Cockpit
          title={this.props.appTitle}
          appStatus={this.props.appStatus}
          persons={this.state.persons}
          click={this.togglePersonsHandler}
          showPerson={this.state.showPersons}
        />
      
        {persons}
      </div>
    );
   
  }
}

export default App;
