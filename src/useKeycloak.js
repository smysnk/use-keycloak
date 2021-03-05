import { useContext } from 'react';
import { KeycloakContext } from 'keycloak-js';

export default function useKeycloak() {
  const keycloak = useContext(KeycloakContext);
  if (!keycloak) {
    throw new Error('Missing <KeycloakProvider>');
  }

  return {
    login: () => keycloak.login(),
    logout: () => keycloak.logout(),
  };
}
