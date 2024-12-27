import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginPage: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect();
  };

  return (
    <div className="container mt-4">
      <h1>Login</h1>
      <p>Please log in to access your tasks.</p>
      <button className="btn btn-primary" onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
};
