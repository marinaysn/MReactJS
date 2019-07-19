import React, { useEffect, useRef } from 'react';
import classes2 from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

  const toggleBtnRef = useRef(null);

  //will run only first time it randers and return when unmount the element
  useEffect(() => {
    console.log("cockpit useEffect 3 in functions");
    // Http request
    setTimeout(() => {
      toggleBtnRef.current.click();
      // alert('Run first time only');
    }, 1000);
    return () => {
      console.log('cockpit useEffect 1-1. Cleanup in useEffect')
    }
  }, []);

  //runs on every update cycle because it has not second agrument
  useEffect(() => {
    console.log("cockpit useEffect 2nd in functions");

    return () => {
      console.log('cockpit useEffect 2. Cleanup in  2nd useEffect')
    }
  });



  console.log('Cockpit.js  called')

  let status = props.appStatus

  let btnClass = '';
  const assignedClasses = [];
  if (props.personsLength <= 2) {
    assignedClasses.push(classes2.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes2.bold); // classes = ['red', 'bold']
    status = status + " - danger low!!!";
  }

  if (props.personsLength <= 0) {
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
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.click}>Toggle Persons</button>
      <p></p>

      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}> Log In</button> }
      </AuthContext.Consumer>
    </div>
  )
}

export default React.memo(Cockpit);

