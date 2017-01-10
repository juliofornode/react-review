import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FunctionalComponent from './components/001_functional_component';
import ClassComponent from './components/002_class_component';
import ManageData from './components/003_manage_data';
import ManageComplexData from './components/004_manage_complex_data';
import UserEvents from './components/005_user_events';
import Clock from './components/006_lifecycle_methods';
import Toggle from './components/007_toggle';
import ConditionalComponent from './components/008_conditional_component';
import ControlledComponent from './components/009_controlled_component';
import UncontrolledComponent from './components/010_uncontrolled_component';
import PropsChildren from './components/011_props_children';

class App extends Component {
    render() {
        return(
          <div style={{marginTop: '30', marginBottom: '300'}}>
              <FunctionalComponent propiedad="Unicornio" />
              <ClassComponent nombre="Tintin"/>
              <ManageData />
              <ManageComplexData />
              <UserEvents />
              <Clock />
              <Toggle />
              <ConditionalComponent />
              <ControlledComponent />
              <UncontrolledComponent />
              <PropsChildren>
                  <div>This is child one.</div>
                  <div>And this is child two.</div>
              </PropsChildren>
          </div>

        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
