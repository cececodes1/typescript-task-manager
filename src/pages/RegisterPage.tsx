import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const RegisterPage: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleRegister = async () => {
    await loginWithRedirect({
      screen_hint: 'signup', // Auth0-specific hint for signup
    });
  };

  return (
    <div className="container mt-4">
      <h1>Register</h1>
      <p>Create an account to start managing your tasks.</p>
      <button className="btn btn-primary" onClick={handleRegister}>
        Sign Up
      </button>
    </div>
  );
};
