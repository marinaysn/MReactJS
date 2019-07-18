import React from 'react'

const WithClass = props => (
    <div className={props.cls}>
        {props.children}
    </div>
)

export default WithClass
