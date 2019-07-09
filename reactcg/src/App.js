//Temporary comment out class to explore Hooks
// uncomment functional aproach below

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [{ name: 'Marina', age: 28 },
    { name: 'Pavel', age: 43 },
    { name: 'Alex', age: 15 },
    { name: 'Anna', age: 13 }],
    someOtherState: 'other state',
    showPerson: false
  };



  switchNameHandler = (newName) => {
    this.setState({
      persons:
        [{ name: newName, age: 43 },
        { name: 'Pavel', age: 43 },
        { name: 'Alex', age: 15 },
        { name: 'Anna', age: 13 }]
    })
  }


  nameChangedHandler = (event) => {
    this.setState({
      persons:
        [{ name: 'Marina', age: 43 },
        { name: event.target.value, age: 43 },
        { name: 'Alex', age: 15 },
        { name: 'Anna', age: 13 }]
    })
  }

  togglerPersonHandler = () => {

    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };



  render() {

    const styleButton = {
      background: 'rgb(204, 228, 248)',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, Marina</h1>
        <h3> React App</h3>


        <p>This is really working</p>
        <button style={styleButton}
          onClick={this.togglerPersonHandler}>
          Switch Name</button>
        {
          //use ternary operator  test ? true : false
          this.state.showPerson ?
            <div >
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age} >My hobby: Racing</Person>
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                changed={this.nameChangedHandler} />
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}
                click={this.switchNameHandler.bind(this, 'Arina')} />
              <Person
                name={this.state.persons[3].name}
                age={this.state.persons[3].age} />
            </div> : null}
      </div>
    );
  }
}

export default App;


//  Learning Hooks
// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person'

// const app = props => {

//   const [personState, setPersonState] = useState(
//     {
//       persons:
//         [{ name: 'Marina', age: 28 },
//         { name: 'Pavel', age: 43 },
//         { name: 'Alex', age: 15 },
//         { name: 'Anna', age: 13 }]
//       //   ,
//       // someOtherState: 'other state'
//     }
//   );


//   //const [otherState, setOtherState] = useState(personState.someOtherState);
//   const [otherState, setOtherState] = useState("some Other State");

//   //console.log(personState, otherState);

//   const switchNameHandler = () => {
//     setPersonState({
//       persons:
//         [{ name: 'Marinka', age: 23 },
//         { name: 'Paul', age: 33 },
//         { name: 'Jane', age: 15 },
//         { name: 'Sasha', age: 13 }]
//     })
//   };

//   return (
//     <div className="App">
//       <h1>Hi, Marina</h1>
//       <h3> React App</h3>
// {console.log(personState, otherState)}
//       <p>This is really working</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age}>My hobby: Racing</Person>
//       <Person name={personState.persons[1].name} age={personState.persons[1].age} />
//       <Person name={personState.persons[2].name} age={personState.persons[2].age} />
//       <Person name={personState.persons[3].name} age={personState.persons[3].age} />
//     </div>
//   );
// }

// export default app;

