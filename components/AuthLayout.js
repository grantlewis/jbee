import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

export default function Layout ({
	children, 
	title = 'Keep score with JBee'
}) {

	const [authState, setAuthState] = useState();
	const [user, setUser] = useState();

	useEffect(() => {
		return onAuthUIStateChange((nextAuthState, authData) => {
			setAuthState(nextAuthState);
			setUser(authData);
		});
	});

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<header>
				<nav>
					<Link href="/">
            <a>Home</a>
          </Link>{' '}
          |
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |
          <Link href="/contact">
            <a>Contact</a>
          </Link>
					<AmplifySignOut />
				</nav>
			</header>

				{authState === AuthState.SignedIn && user ? (
					<div>
						{children}
					</div>
				) : (
					<AmplifyAuthenticator />
				)}

			<footer>{'JBee footer'}</footer>
		</div>
	)
}