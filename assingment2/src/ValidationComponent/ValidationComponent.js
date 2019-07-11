import React from 'react'

const ValidationComponent = (props) => {

    let max = 5;
        return (
            <div>
                {
                    props.length === 0 ? null : props.length > max ? 
                    <p> Text is long enough</p> :
                    <p> Text is too short</p>
                }
            </div>
        )
    }



export default ValidationComponent
