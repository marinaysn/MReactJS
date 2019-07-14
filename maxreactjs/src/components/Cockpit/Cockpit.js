import React from 'react'
// import classes from '../../containers/App.css'
import classes2 from './Cockpit.css'
const Cockpit = (props) => {

     let btnClass = '';
    const assignedClasses = [];
    if ( props.persons.length <= 2 ) {
      assignedClasses.push( classes2.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( classes2.bold ); // classes = ['red', 'bold']
    }
    if (props.showPerson) {
       btnClass = classes2.Red;
    }

    return (
        <div className={classes2.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.click}>Toggle Persons</button>
        </div>
    )
}

export default Cockpit
