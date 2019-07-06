//import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

//Temporary comment out to explore Hooks
// class App extends Component {

//   state = {
//     persons: [{name: 'Marina', age: 28},
//     {name: 'Pavel', age: 43},
//     {name: 'Alex', age: 15},
//     {name: 'Anna', age: 13}]
//   };

//   switchNameHandler = () => {
//     //console.log("This was clicked")
//     //DON'T DO THIS: this.state.persons[0].name = "Marina Ysn"
//     this.setState({persons: 
//       [{name: 'Marina Ysn', age: 43},
//       {name: 'Pavel', age: 43},
//       {name: 'Alex', age: 15},
//       {name: 'Anna', age: 13}]})
//   }
//   render() {
//     return (
//       <div className="App">
//        <h1>Hi, Marina</h1>
//       <h3> React App</h3>

//       <p>This is really working</p>
//       <button onClick={this.switchNameHandler}>Switch Name</button>
//       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobby: Racing</Person>
//       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
//       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
//       <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
//       </div>


//     );
//    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, Marina'), React.createElement('h3', null, 'React App'))
//   }
// }

// export default App;

// Learning Hooks
const app = props => {

  const [personState, setPersonState] = useState(
    {
      persons:
        [{ name: 'Marina', age: 28 },
        { name: 'Pavel', age: 43 },
        { name: 'Alex', age: 15 },
        { name: 'Anna', age: 13 }],
      someOtherState: 'other state'
    }
  );

  const switchNameHandler = () => {
    setPersonState({
      persons:
        [{ name: 'Marinka', age: 23 },
        { name: 'Paul', age: 33 },
        { name: 'Jane', age: 15 },
        { name: 'Sasha', age: 13 }]
    })
  };

  return (
    <div className="App">
      <h1>Hi, Marina</h1>
      <h3> React App</h3>

      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}>My hobby: Racing</Person>
      <Person name={personState.persons[1].name} age={personState.persons[1].age} />
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
      <Person name={personState.persons[3].name} age={personState.persons[3].age} />
    </div>


  );

}

export default app;



