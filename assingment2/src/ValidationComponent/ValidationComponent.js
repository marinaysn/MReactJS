import React from 'react'

const ValidationComponent = (props) => {

    // console.log(props.name)
    let max = 5;

    if (props.name.length> max) {

    return (
        <div>
        <p> Text is long enough</p>           
        </div>
    )}
    else {
        return (
            <div>
            <p> Text is too short</p>           
            </div>
        )
    }
}


export default ValidationComponent
