import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Dashboard } from 'pages/Dashboard'
import { Login } from 'pages/Login'
import { theme } from 'styles/theme'

// Chakra automatically includes <CSSReset />, by default set to true

const RootLayout = (): JSX.Element => (
  <ChakraProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  </ChakraProvider>
)

export default RootLayout
