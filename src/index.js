import React, {useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import theme from './config/theme'
import Router from './config/router'
import createStore from './redux/store'
import reportWebVitals from './reportWebVitals'
import './langage/i18n'
import GlobalStyle from './config/style'
import './config/icons'
import FontStyles from './config/FontStyles'


const { store, persistor } = createStore()

const App = () => {
    useEffect(() => {
        document.title = "Novu"
    }, [])
  return (
    <ThemeProvider theme={theme}>
      <FontStyles />
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals();
