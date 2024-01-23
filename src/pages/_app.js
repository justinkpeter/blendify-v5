import {SessionProvider} from "next-auth/react";
import NoiseTexture from "@/components/NoiseTexture";
import '@/styles/globals.css'
export default function App({ Component, pageProps }) {
  return (
      <SessionProvider session={pageProps.session}>
          <NoiseTexture/>
          <Component {...pageProps} />
      </SessionProvider>
  )
}
