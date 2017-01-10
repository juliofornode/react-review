import React, { Component } from 'react';

class UncontrolledComponent extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.value);
        event.preventDefault();
    }

    render() {
        return (
            <div style={{marginTop: '30'}}>
                <p><strong>Uncontrolled Components: Forms.</strong></p>
                <p>To write an uncontrolled component, instead of writing an event handler
                    for every state update, you can use a ref to get form values from the DOM.</p>
                <form onSubmit={this.handleSubmit}>
                    Name:
                    <input type="text" ref={(input) => this.input = input} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}


export default UncontrolledComponent;