import Keycloak from 'keycloak-js';

export const keycloak = new Keycloak({
  url: process.env.REACT_APP_KEYCLOAK_URL,
  realm: process.env.REACT_APP_KEYCLOAK_REALM||"",
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID||""
});

export const initOptions = {
  onLoad: 'check-sso',
  flow:   'standard',
  pkceMethod: 'S256',
  silentCheckSsoRedirectUri:
      `${window.location.origin}/validate-sso.html`,
  checkLoginIframe: true,
  checkLoginIframeInterval: 30,
  enableLogging: true
};