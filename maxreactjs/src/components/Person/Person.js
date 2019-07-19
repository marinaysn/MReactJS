import React, { Component } from 'react';
import classes from './Person.css';
import Auxiliary from "../../hoc/Auxiliary";
import withClass from "../../hoc/withClass";
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth-context'


export class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementref = React.createRef();
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
                <AuthContext.Consumer>
                    {(context) =>  context.authernticated ? <p>Authenticated</p> : <p>Please Log In</p> 
                    }
                </AuthContext.Consumer>

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
