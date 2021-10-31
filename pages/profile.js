import { useState, useEffect } from 'react';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import AuthLayout from '../components/AuthLayout';

export default function Profile () {
	return (
		<AuthLayout>
			<div>Profile</div>
		</AuthLayout>
	)
}

// function Profile() {
// 	const [user, setUser] = useState(null);
// 	useEffect(() => {
// 		Auth.currentAuthenticatedUser()
// 			.then(user => {
// 				console.log("User: ", user);
// 				setUser(user);
// 			})
// 			.catch(() => setUser(null));
// 	}, []);
// 	return (
// 		<div>
// 			{ user && <h1>Welcome, {user.username}</h1>}
// 			<AmplifySignOut />
// 		</div>
// 	)
// }

// export default withAuthenticator(Profile);