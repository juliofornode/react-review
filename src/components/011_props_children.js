import React, { Component } from 'react';

class PropsChildren extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{marginTop: '30'}}>
                <p><strong>This is the PropsChildren component.</strong></p>
                <p>We use props.children when we do not know how many components or elements we are
                    going to add as childrens. In this example, we add two div elements as children:</p>
                {this.props.children}
            </div>
        )
    }

}

export default PropsChildren;
