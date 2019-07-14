//Temporary comment out class to explore Hooks
// uncomment functional aproach below

import React, { Component } from "react";
import cls from "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Marina", age: 28 },
      { id: "2", name: "Pavel", age: 43 },
      { id: "3", name: "Alex", age: 15 },
      { id: "4", name: "Anna", age: 13 }
    ],
    someOtherState: "other state",
    showPerson: false
  };

  deletePersonHandler = personToDelete => {
    // const personArrWDeleted = this.state.persons.slice();
    const personArrWDeleted = [...this.state.persons];
    personArrWDeleted.splice(personToDelete, 1);
    this.setState({ persons: personArrWDeleted });
  };

  nameChangedHandler = (event, id) => {
    const pIndex = this.state.persons.findIndex(m => {
      return m.id === id;
    });

    // from the state array find one record with given id
    const p = { ...this.state.persons[pIndex] };
    //alternative to above
    //const p = Object.assign({}, this.state.persons[pIndex]);

    //change its name
    p.name = event.target.value;

    //get copy of full array
    const personsArr = [...this.state.persons];
    //update given person with new person's name
    personsArr[pIndex] = p;

    //update original array
    this.setState({
      persons: personsArr
    });
  };

  togglerPersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  render() {
    const styleButton = {
      background: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let personsDisplayArray = null;

    if (this.state.showPerson) {
      personsDisplayArray = (
        <div>
          {this.state.persons.map((eachPerson, index) => {
            return (
             
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={eachPerson.name}
                  age={eachPerson.age}
                  key={eachPerson.id}
                  changed={event => this.nameChangedHandler(event, eachPerson.id)}
                />
            
            );
          })}
        </div>
      );
      styleButton.background = "red";
    }

    let switchParagraphs = [];
    // let switchParagraphs = ['red', 'bold'].join(' ');

    if (this.state.persons.length > 3) {
      switchParagraphs.push(cls.red);
      switchParagraphs.push(cls.bold);
      switchParagraphs = switchParagraphs.join(" ");
    } else if (
      this.state.persons.length <= 3 &&
      this.state.persons.length > 0
    ) {
      switchParagraphs.push(cls.bold);
    }

    return (

      <div className={cls.App}>
        <h1>Hi, Marina</h1>
        <h3 className="bg-secondary w-50 d-inline-block py-3"> React App</h3>

        <p className={switchParagraphs}>This is really working</p>

        <button style={styleButton} onClick={this.togglerPersonHandler}>
          Switch Name
          </button>
        {personsDisplayArray}
      </div>

    );
  }
}

export default App;