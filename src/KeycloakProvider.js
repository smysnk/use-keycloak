import React from 'react';
import { Provider } from './KeycloakContext';

export default class KeycloakProvider extends React.Component {  
  constructor(props) {
    super(props);
    this.keycloak = props.keycloak;
  }

  render() {
    return (<Provider value={ this.keycloak }>{ this.props.children }</Provider>);
  }
}