import { Auth0Provider } from '@auth0/auth0-react';

<Auth0Provider
  domain="dev-324janaawwvpp2sv.us.auth0.com"
  clientId="2CDk2JqEHMnGDsNmavg720xxsAmtmaUj"
  redirectUri={window.location.origin}
>
  <App />
</Auth0Provider>;
