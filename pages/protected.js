import { withSSRContext } from 'aws-amplify';

export default function Protected({ authenticated, username }) {
	if (!authenticated) {
		return <h1>Not authenticated</h1>
	}
	return <h1>Hello {username} from SSR route!</h1>
}

export async function getServerSideProps({ req }) {
	const { Auth } = withSSRContext({ req });
	try {
		const user = await Auth.currentAuthenticatedUser();
		return {
			props: {
				authenticated: true,
				username: user.username
			}
		}
	} catch (err) {
		return { 
			props: { authenticated: false }
		}
	}
}