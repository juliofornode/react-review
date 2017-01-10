import React from 'react';

function ConditionalComponent(props) {

    const isLoggedIn = true;

    if (isLoggedIn) {
         return (
            <div style={{marginTop: '30'}}>
                <p><strong>Conditional Component.</strong></p>
                <p>It is as easy as using an if in the component.</p>
                <p style={{color: 'orange'}}>Condition positive</p>
            </div>
        );
    } else {
        return <p>Condition negative</p>;
    }


}

export default ConditionalComponent;
