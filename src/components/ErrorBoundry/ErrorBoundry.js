import React, { Component } from 'react';
import ErrorInicator from '../ErrorIndicator/ErrorIndicator';

export default class ErrorBoundry extends Component {
    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({ error: true })
    }

    render() {
        if (this.state.error) {
            return <ErrorInicator />
        }

        return this.props.children;
    }
}