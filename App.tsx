import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/theme/theme'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigation/AppNavigator'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { useFirebaseConfig } from './src/services/firebase'

function App(): React.JSX.Element {

  useFirebaseConfig()

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  )
}

export default App
