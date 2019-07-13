import React, { Component } from 'react'
import './App.css'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import 'bootstrap/dist/css/bootstrap.css'
import CharComponent from './CharComponent/CharComponent'
export class App extends Component {

  state = {
    inputArray: ""
  }


  inputAppHandler = (event) => {
    let temp = event.target.value;
    this.setState({ inputArray: temp })
  }

  deleteCharHandler = (inx) =>{

 const chDeleted = this.state.inputArray.split('');
 chDeleted.splice(inx, 1);
 this.setState({inputArray: chDeleted.join('')}) 
  }

  render() {
    let charList = null;

    if (this.state.inputArray.length > 0) {
    charList = this.state.inputArray.split('').map( (ch, index) => {
      return <CharComponent 
        character={ch}
        arr = {this.state.inputArray.split('')}
        click={() => this.deleteCharHandler(index)}
        key = {index}
      />
    }); }

    return (

      <div className="App ">
        <div className="float-left bg-secondary p-3 m-2">
          <input type="text" onChange={this.inputAppHandler} value={this.state.inputArray} />

          <p>{this.state.inputArray.length}</p>

          <div>
            < ValidationComponent
              name={this.state.inputArray}
              length={this.state.inputArray.length}
              key={this.state.inputArray.length}
            />
            {charList}
          </div>

        </div>
      </div>

    )
  }
}

export default App
