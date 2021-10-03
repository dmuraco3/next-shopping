import '../styles/globals.css'
import Navbar from '../components/navbar'
import SaleHeader from '../components/SaleHeader'

import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor } from '../stores/configureStore'

// import { SessionProvider } from 'next-auth/client'
import { Provider as SessionProvider} from "next-auth/client"




export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SessionProvider session={pageProps.session}>
            <SaleHeader {...pageProps}/>
            <Navbar {...pageProps} />
            <Component {...pageProps} />
          </SessionProvider>

        </PersistGate>

      </Provider>
  )
}

