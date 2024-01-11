import React from 'react';
import { getProviders, signIn} from "next-auth/react";
export default function Login({providers}) {
	const SignInButton = ({ provider }) => {
		return (
			<>
				<button
					className={"py-2.5 px-6 text-sm w-fit rounded-full font-medium transition backdrop-filter backdrop-blur-3xl bg-white/20 hover:bg-white/30 flex items-center gap-20 uppercase "}
					onClick={(e) => {
						e.preventDefault()
						// console.log(provider)
						signIn(provider?.spotify?.id, { callbackUrl: '/'})
					}}
				>
					<span> login with Spotify </span>
				</button>
			</>
		)
	}

	return (
		<main className={'h-screen w-screen flex items-center justify-center'} >
			<SignInButton provider={providers}/>
		</main>
	)
}

export async function getServerSideProps() {
	const providers = await getProviders();
	return {
		props: {
			providers,
		},
	};
}