import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Jobs from './components/Jobs'
import ProtectedRoute from './components/ProtectedRoute'
import JobItemDetails from './components/JobItemDetails'

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/jobs" component={Jobs} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    </Switch>
  </BrowserRouter>
)

export default App
