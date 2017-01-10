import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { secreto: 'secret'};
    }

    render() {
        return (
            <div>
                <p><strong>Class Components.</strong></p>
                <ul>
                    <li>Class components are JS classes that extend React's Component class.</li>
                    <li>They have a constructor function with props as parameter.</li>
                    <ul>
                        <li>The constructor function calls super(props) to inherint the properties of the Component class.</li>
                        <li>this.state is defined in the constructor function.</li>
                    </ul>
                    <br/>
                    <li>The render function of the class component is the one returning the JSX markup.</li>
                    <ul>
                        <li>Calling functions inside the JSX markup can be tricky: if they are external functions you need to bind this in the constructor.</li>
                    </ul>
                    <br/>
                    <li>This is from the state: <span style={{color: 'blue'}}>{this.state.secreto}</span></li>
                    <li>And this prop comes from the parent component: <span style={{color: 'red'}}>{this.props.nombre}</span></li>
                </ul>
            </div>
        )
    }

}

export default ClassComponent;