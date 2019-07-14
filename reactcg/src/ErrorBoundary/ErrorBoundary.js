import React, { Component } from 'react'

export class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (err, info) => {
        this.setState({
            hasError: true,
            errorMessage: err
        })
    }
    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong</h1>
                    <h3>{this.state.errorMessage}</h3>
                </div>
            )
        }
        else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary



