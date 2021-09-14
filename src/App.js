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
import MyProfile from './components/users/MyProfile'
import BallerShow from './components/users/BallersShow'
import Ballers from './components/users/Ballers'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <SecureRoute path="/jordans/new/">
          <JordansNew />
        </SecureRoute>
        <SecureRoute path="/jordans/:id/edit/">
          <JordansEdit />
        </SecureRoute>
        <Route path="/jordans/:id/">
          <JordansShow />
        </Route>
        <Route path="/jordans/">
          <JordansIndex />
        </Route>
        <Route path="/auth/register/">
          <Register />
        </Route>
        <Route path="/auth/login/">
          <Login />
        </Route>
        <Route path="/auth/profile/username/">
          <BallerShow />
        </Route>
        <Route path="/auth/users">
          <Ballers />
        </Route>
        <SecureRoute path="/auth/myprofile/">
          <MyProfile />
        </SecureRoute>
      </Switch>
    </BrowserRouter>
  )
}

export default App
