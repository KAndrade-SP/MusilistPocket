import React from 'react'
import { SafeAreaView } from 'react-native'
import Header from './src/components/Header'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/theme/theme'

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
    </ThemeProvider>
  )
}

export default App
