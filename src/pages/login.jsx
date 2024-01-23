import React, { Suspense, useRef } from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";
import { getProviders, signIn} from "next-auth/react";
import Headphones from "/public/assets/models/Headphones";
export default function Login({providers}) {

	return (
		<main className={"h-screen w-screen flex items-center justify-center"}>
			<div className={"relative w-full h-4/5 sm:h-full uppercase flex flex-col-reverse xl:flex-col items-center justify-between xl:justify-start pt-20 xl:pt-0 sm:pb-10 xl:pb-0 xl:h-3/5"}>
				<div className={"w-full xl:h-fit flex flex-col items-center pb-2 sm:pb-10 xl:pb-0"}>
					<div className={"text-sm font-thin mb-2 xl:mt-0"}>discover how you listen.</div>
					<div className={"w-full xl:max-w-fit px-[10vw] xl:absolute -bottom-[5%]"}>
						<SignInButton provider={providers}/>
					</div>
				</div>
				<div className={"flex leading-[0.75] xl:-mt-4 select-none"}>
					<div className={"font-bold text-[15vw] tracking-tight leading-none"}>blendify</div>
					<div className={"text-[2vw] ml-1 mt-[3.3%]"}>©</div>
				</div>
				<div className={"absolute top-16 w-4/5 h-4/5 sm:w-2/5 sm:w-2/5"}>
					<Canvas shadows dpr={[1, 2]} camera={{ fov: 10, zoom: 0.75, near: 1, far: 2500}}>
						<Suspense fallback={null}>
							<Stage preset="rembrandt" intensity={1.5}  environment="city">
								<Headphones />
							</Stage>
						</Suspense>
						<OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false}/>
					</Canvas>
				</div>
			</div>
		</main>
	)
}

const SignInButton = ({ provider }) => {
	return (
		<>
			<button
				className={"mt-2 py-4 px-6 w-full rounded-full text-lg font-semibold transition backdrop-filter backdrop-blur-3xl bg-white/50 hover:bg-white/30 flex items-center gap-20 uppercase"}
				onClick={(e) => {
					e.preventDefault()
					signIn(provider?.spotify?.id, { callbackUrl: '/'})
				}}
			>
				<span className={"select-none w-full"}> login with Spotify </span>
			</button>
		</>
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