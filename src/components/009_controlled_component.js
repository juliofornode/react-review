import React, { Component } from 'react';

class ControlledComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div style={{marginTop: '30'}}>
                <p><strong>Controlled Components: Forms.</strong></p>
                <p>We set it by assigning a state value to the value attribute of a form field.</p>
                <p>To set a value attribute associated with the state in the input field allows us to display
                    an initial text (not a placeholder, but an initial text in case we want to have like a
                    default pre-population of the field. It is also a good way to get the value of the input
                    field from any other place in our application.</p>
                <form onSubmit={this.handleSubmit}>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>

        );
    }
}

export default ControlledComponent;