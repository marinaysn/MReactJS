import React from 'react'

const withClass = (WrappedComponent, clsName) => {
    return props => (
    <div className={clsName}>
    <WrappedComponent {...props} / >
    </div>)
}

export default withClass
