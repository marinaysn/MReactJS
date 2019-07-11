import React, { Component } from 'react'
import './App.css'
import ValidationComponent from './ValidationComponent/ValidationComponent'

import CharComponent from './CharComponent/CharComponent'
export class App extends Component {

  state = {
    inputArray: ""
  }


  inputAppHandler = (event) => {
    let temp = event.target.value;
    this.setState({ inputArray: temp })
  }

  deleteCharHandler = (event) =>{
    let arr = this.state.inputArray.split('');
   // arr.splice(index, 1);
    console.log(event)
    console.log(arr)

    let arrJ = arr.join();
    this.setState({persons: arrJ}) 
  }

  render() {

    let infoDisplay = null;

    if (this.state.inputArray.length > 0) {
      infoDisplay = (
      <div>
         < ValidationComponent
            name={this.state.inputArray}
            key={this.state.inputArray.length}
          />
      </div>
      )
    }

    let stringDisplay = null;
    let arr = this.state.inputArray.split('');

    if (arr.length > 0) {
      stringDisplay = (
      <div>
         < CharComponent
            name={arr}
            key={arr.length}
            click={(event) => this.deleteCharHandler(event)}
          />
      </div>
      )
    }


    return (

      <div className="App">
        <div className="float-left">
          <ol>
            <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
            <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
            <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>

            <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>

            <li>When you click a CharComponent, it should be removed from the entered text.</li>
          </ol>
        </div>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />


        <div className="float-left">
          <input type="text" onChange={this.inputAppHandler} />

          <p>{this.state.inputArray.length}</p>
          {infoDisplay}
          {stringDisplay}
        </div>
      </div>

    )
  }
}

export default App
