import React, { Component } from 'react';

class UserEvents extends Component{
    constructor(props) {
        super(props);
        this.state = {
            secret: '',
            text: '',
            respuesta: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleChange(eventObject) {
        this.setState({ secret: eventObject.target.value });
    }

    handleClick() {
        alert('No me toques los cojones!');
    }

    handleFormChange(eventObject) {
        this.setState({ text: eventObject.target.value });
    }

    handleSubmit(eventObject) {
        this.setState({ respuesta: this.state.text });
        this.setState({ text: '' });
        eventObject.preventDefault();
    }

    render() {
        return(
          <div>
              <p><strong>User events.</strong></p>
              <ul>
                  <li>onChange: when user enters each letter.</li>
                  <li>onClick: when user clicks the link or the button.</li>
                  <li>onSubmit: when user submits the form.</li>
              </ul>
              <div>
                  <p><strong>onChange</strong></p>
                  <p>The eventObject parameter is passed in the function declaration. We do not invoke the function.</p>
                  <p>Change state when user enters content:</p>
                  <input onChange={this.handleChange} />
                  <p>This is the secret word stored in the state: {this.state.secret}</p>
              </div>
              <div style={{marginBottom: '20'}}>
                  <p><strong>onClick</strong></p>
                  <p>The eventObject parameter is passed in the function declaration. We do not invoke the function.</p>
                  <p>Throw an alert box when user clicks the button:</p>
                  <button onClick={this.handleClick}>Click Me</button>
              </div>
              <div>
                  <p><strong>onSubmit</strong></p>
                  <p>The interesting thing about onSubmit is that the event is thrown when you click on the submit button.</p>
                  <p>To set a value attribute associated with the state in the input field allows us to display an
                      initial text (not a placeholder, but an initial text in case we want to have like a default
                      pre-population of the field. It is also a good way to get the value of the input field from any other
                      place in our application.</p>
                  <form onSubmit={this.handleSubmit}>
                      Enter text: <input type="text" value={this.state.text} onChange={this.handleFormChange}/>
                      <input type="submit" value="Submit"/>
                  </form>
                  <p>This is the text entered: {this.state.respuesta}</p>
              </div>
          </div>
        );
    }

}


export default UserEvents;