import React, { Component } from 'react';
import classes from './App.css';
// import Person from '../components/Person/Person';
import PersonList from '../components/PersonList/PersonList';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('App.js constructor called')
    console.log(this.props);
  }
  state = {
    persons: [
      { id: "1", name: "Marina", age: 28 },
      { id: "2", name: "Pavel", age: 43 },
      { id: "3", name: "Alex", age: 15 },
      { id: "4", name: "Anna", age: 13 },
      { id: "5", name: "Jane", age: 37 },
      { id: "6", name: "Sasha", age: 41 },
      { id: "7", name: "Bob", age: 21 },
      { id: "8", name: "Alice", age: 4 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("App.js: getDerivedStateFromProps is c alled", nextProps);
    return prevState;
  }
  

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
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
   // let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          <PersonList
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
          {/* {this.state.persons.map( ( person, index ) => {
            return <Person
              click={() => this.deletePersonHandler( index )}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={( event ) => this.nameChangedHandler( event, person.id )} />
          } )} */}
        </div>
      );

    //  btnClass = classes.Red;
    }

    // const assignedClasses = [];
    // if ( this.state.persons.length <= 2 ) {
    //   assignedClasses.push( classes.red ); // classes = ['red']
    // }
    // if ( this.state.persons.length <= 1 ) {
    //   assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    // }

    return (
      <div className={classes.App}>

        <Cockpit
          title={this.props.appTitle}
          appStatus={this.props.appStatus}
          persons={this.state.persons}
          click={this.togglePersonsHandler}
          showPerson={this.state.showPersons}
        />
        {/* <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join( ' ' )}>This is really working!</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons</button> */}
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
