import { Route, Router } from "wouter"
import LoginPage from "./pages/LoginPage"
import NotGaliciaMsgPage from "./pages/NotGaliciaMsgPage"
import { UserContextProvider } from "./context/userContext"

const App = () => (
  <UserContextProvider>
    <Router>
      <Route path="/login" component={LoginPage} />
      <Route path="/notgalicia" component={NotGaliciaMsgPage} />
    </Router>
  </UserContextProvider>
)

export default App
