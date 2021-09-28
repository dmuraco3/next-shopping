import '../styles/globals.css'
import Navbar from '../components/navbar'

import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor } from '../stores/configureStore'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Navbar />
      <Component {...pageProps} />
      </PersistGate>

    </Provider>
  )
}

export default MyApp
