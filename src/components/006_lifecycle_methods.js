//Example from React Documentation: https://facebook.github.io/react/docs/state-and-lifecycle.html
import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <p><strong>Lifecycle methods.</strong></p>
                <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
                <ol>
                    <li>ShouldComponentUpdate(newProps, newState): before ComponentWillUpdate(), allows you to cancel the update.</li>
                    <li>ComponentWillUpdate(): before render() is called again.</li>
                    <li>...DidUpdate(): after render().</li>
                    <li>...WillMount(): before inserted in the DOM.</li>
                    <li>...DidMount(): after inserted in the DOM.</li>
                    <li>...WillUnmount(): before is removed from the DOM.</li>
                </ol>
            </div>
        );
    }
}

export default Clock;