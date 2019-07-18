import React, { PureComponent } from 'react'
import Person from '../Person/Person'

export class PersonList extends PureComponent {

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('PersonList.js 2 shouldComponentUpdate called', nextProps);
    //     if (nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed || 
    //         nextProps.clicked !== this.props.clicked) {
    //         return true
    //     }
    //     return false;
    // }

    getSnapshotBeforeUpdate(prev, prevState) {
        console.log('PersonList.js 3 getSnapshotBeforeUpdate called', prev);
        return null;
    }

    componentDidUpdate() {
        console.log('PersonList.js 4 componentDidUpdate called');
    }
    componentWillUnmount() {
        console.log('Personslist componentWillUnmount ')
    }

    render() {
        console.log('PersonList.js render called');

        return this.props.persons.map((person, index) => {
            return (<Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />);
        });
    }
}

export default PersonList

