import React, {useEffect} from "react";
import {useSession} from "next-auth/react";
import useSpotify from "@/utils/useSpotify";

export default function Home() {

  const spotifyApi = useSpotify()
  const {data: session} = useSession()

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      console.log("session", session)
    }
  }, [session, spotifyApi])

  return (
    <main>
      hello
    </main>
  )
}
