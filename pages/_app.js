import '../styles/globals.css'

import Amplify from '@aws-amplify/core';
import { Auth } from '@aws-amplify/auth';
import config from '../src/aws-exports';
import { AuthProvider } from '../context/authContext';
Amplify.configure({
  ...config,
  ssr: true
});
Auth.configure(config);

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp
