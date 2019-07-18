import React, { useEffect } from 'react'
// import classes from '../../containers/App.css'
import classes2 from './Cockpit.css'

const Cockpit = (props) => {

  // //use useEffect instanses as many as you need.
  // useEffect(() => {
  //   console.log("cockpit useEffect 2  in functions");
  //   // Http request
  //   setTimeout(() => {
  //     alert('Title is changed');
  //   },1000)
  // }, [props.title]);

  //will run only first time it randers and return when unmount the element
  useEffect(() => {
    console.log("cockpit useEffect 3 in functions");
    // Http request
    setTimeout(() => {
     // alert('Run first time only');
    },1000);
    return () =>{
      console.log('cockpit useEffect 1-1. Cleanup in useEffect')
    }
  }, []);

  //runs on every update cycle because it has not second agrument
  useEffect(() => {
    console.log("cockpit useEffect 2nd in functions");
  
    return () =>{
      console.log('cockpit useEffect 2. Cleanup in  2nd useEffect')
    }
  });



  console.log('Cockpit.js  called')

  let status = props.appStatus

  let btnClass = '';
  const assignedClasses = [];
  if (props.personsLength<= 2) {
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
        className={btnClass}
        onClick={props.click}>Toggle Persons</button>
    </div>
  )
}

export default React.memo(Cockpit);


// import React, { Component } from 'react'
// import classes2 from './Cockpit.css'

// export class Cockpit extends Component {
//   render() {
//     console.log('Cockpit.js  called')

//     let status = this.props.appStatus
  
//     let btnClass = '';
//     const assignedClasses = [];
//     if (this.props.persons.length <= 2) {
//       assignedClasses.push(classes2.red); // classes = ['red']
//     }
//     if (this.props.persons.length <= 1) {
//       assignedClasses.push(classes2.bold); // classes = ['red', 'bold']
//       status = status + " - danger low!!!";
//     }
  
//     if (this.props.persons.length <= 0) {
//       assignedClasses.push(classes2.bold); // classes = ['red', 'bold']
//       status = "offline - nothing to show";
//     }
  
//     if (this.props.showPerson) {
//       btnClass = classes2.Red;
//     }

//     return (
//      <div className={classes2.Cockpit}>
//       <h1>{this.props.title} App</h1>
//       <p className={assignedClasses.join(' ')}> status: {status}</p>
//       <button
//         className={btnClass}
//         onClick={this.props.click}>Toggle Persons</button>
//     </div>
//     )
//   }
// }

// export default Cockpit


