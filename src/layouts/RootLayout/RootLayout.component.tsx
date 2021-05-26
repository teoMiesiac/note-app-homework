import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DataStoreProvider } from 'store/store'
import { Dashboard } from 'pages/Dashboard'
import { Landing } from 'pages/Landing'
import { Note } from 'pages/Note'
import { theme } from 'styles/theme'

// Chakra automatically includes <CSSReset />, by default set to true

const RootLayout = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <DataStoreProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/note/:id">
              <Note />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </DataStoreProvider>
    </ChakraProvider>
  )
}

export default RootLayout
