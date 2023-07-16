import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider } from "../context/globalContext";
import { UserAuthProvider } from "../context/UserAuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <UserAuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </UserAuthProvider>
  </>
  )
}
