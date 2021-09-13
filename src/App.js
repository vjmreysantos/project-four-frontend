import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SecureRoute from './components/common/SecureRoute'

import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import JordansIndex from './components/jordans/JordansIndex'
import JordansShow from './components/jordans/JordansShow'
import JordansNew from './components/jordans/JordansNew'
import JordansEdit from './components/jordans/JordansEdit'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <SecureRoute path="/jordans/new">
          <JordansNew />
        </SecureRoute>
        <SecureRoute path="/jordans/edit">
          <JordansEdit />
        </SecureRoute>
        <Route path="/jordans/:jordanId">
          <JordansShow />
        </Route>
        <Route path="/jordans">
          <JordansIndex />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
