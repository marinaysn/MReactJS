import React from 'react'
// import classes from '../../containers/App.css'
import classes2 from './Cockpit.css'

const Cockpit = (props) => {

  console.log('Cockpit.js  called')

  let status = props.appStatus

  let btnClass = '';
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes2.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes2.bold); // classes = ['red', 'bold']
    status = status + " - danger low!!!";
  }

  if (props.persons.length <= 0) {
    assignedClasses.push(classes2.bold); // classes = ['red', 'bold']
    status = "offline - nothing to show";
  }

  if (props.showPerson) {
    btnClass = classes2.Red;
  }

  return (
    
    <div className={classes2.Cockpit}>
      <h1>{props.title} App</h1>
      <p className={assignedClasses.join(' ')}> status: {status}</p>
      <button
        className={btnClass}
        onClick={props.click}>Toggle Persons</button>
    </div>
  )
}

export default Cockpit
