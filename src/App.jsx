import { Route, Router, useLocation } from "wouter"
import LoginPage from "./pages/LoginPage"
import NotGaliciaMsgPage from "./pages/NotGaliciaMsgPage"
import { UserContextProvider } from "./context/userContext"

const App = () => {
  const [location, setLocation] = useLocation()

  return (
    <UserContextProvider>
      <Router>
        <Route path="/login" component={LoginPage} />
        <Route path="/notgalicia" component={NotGaliciaMsgPage} />
        <Route path="/" component={() => setLocation("login")} />
      </Router>
    </UserContextProvider>
  )
}

export default App
