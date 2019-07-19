// import React from 'react';

// import classes from './Person.css';

// const person = (props) => {

//     console.log('Person.js  called')
//     return (
//         <div className={classes.Person}>
//             <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
//         </div>
//     )
// };

// export default person;

import React, { Component } from 'react'
import classes from './Person.css';
import Auxiliary from "../../hoc/Auxiliary"
import withClass from "../../hoc/withClass"
import PropTypes from 'prop-types'


export class Person extends Component {

   constructor(props) {
       super(props);
      this.inputElementref = React.createRef ();
   }

    componentDidMount() {
        // this.inputElement.focus();

        this.inputElementref.current.focus();
    }

    render() {
        console.log('Person.js  called')
        return (
            //instead of wrapping div use hoc element
            // <div className={classes.Person}>
            <Auxiliary>
            
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                
                <input 
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} 
                //ref={(element)=> {this.inputElement = element}}
                ref={this.inputElementref}
                />

           
            </Auxiliary>

            // </div>
        )
    }
}

Person.propTypes = { 
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
