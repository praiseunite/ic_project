import React, { useEffect } from 'react';
import { AuthClient } from "@dfinity/auth-client";
import { ic_project_backend } from 'declarations/ic_project_backend';

const AuthComponent = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [principal, setPrincipal] = React.useState(null);

  useEffect(() => {
    const init = async () => {
      const authClient = await AuthClient.create();
      if (await authClient.isAuthenticated()) {
        handleAuthenticated(authClient);
      } else {
        await authClient.login({
          identityProvider: "https://identity.ic0.app/#authorize",
          onSuccess: () => {
            handleAuthenticated(authClient);
          }
        });
      }
    };

    const handleAuthenticated = async (authClient) => {
      const principal = await authClient.getIdentity().getPrincipal();
      setPrincipal(principal);
      await ic_project_backend.storePrincipal(principal.toText());
      setIsAuthenticated(true);
    };

    init();
  }, []);

  return isAuthenticated ? children : <div>Loading...</div>;
};

export default AuthComponent;