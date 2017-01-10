import React from 'react';

const FunctionalComponent = (props) => {
  return (
      <div>
          <p><strong>Functional Components.</strong></p>
          <ul>
              <li>A functional component is just a function that returns markup and props.</li>
              <li>Props is passed as an argument, so we refer to it using props instead of this.props</li>
              <li>This prop is passed by the parent component: <span style={{color: 'red'}}>{props.propiedad}</span></li>
          </ul>
      </div>
  )
};

export default FunctionalComponent;