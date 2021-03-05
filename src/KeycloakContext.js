import React from 'react';

const KeycloakContext = React.createContext('Keycloak');

export const { Provider, Consumer } = KeycloakContext;
export default KeycloakContext;
