import React, {useEffect} from 'react';
import {ReactKeycloakProvider} from '@react-keycloak/web';
import ReportPage from './components/ReportPage';
import {initOptions, keycloak} from './keycloak';


const App: React.FC = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      keycloak.updateToken(60)   // обновить, если <60 с до истечения
      .catch(() => keycloak.login());
    }, 20_000);                  // каждые 20 секунд

    return () => clearInterval(interval);
  }, []);

  return (
      <ReactKeycloakProvider authClient={keycloak} initOptions={initOptions}>
        <div className="App">
          <ReportPage/>
        </div>
      </ReactKeycloakProvider>
  );
};

export default App;