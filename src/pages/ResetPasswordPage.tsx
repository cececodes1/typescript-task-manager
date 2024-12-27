import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const ResetPasswordPage: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleResetPassword = async () => {
    await loginWithRedirect({
      screen_hint: 'reset_password', // Auth0-specific hint for password reset
    });
  };

  return (
    <div className="container mt-4">
      <h1>Reset Password</h1>
      <p>If you forgot your password, you can reset it.</p>
      <button className="btn btn-primary" onClick={handleResetPassword}>
        Reset Password
      </button>
    </div>
  );
};
