import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Error from './pages/Error'
import Home from './pages/Home'
import Books from './pages/Books'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import AuthContextProvider from './context/AuthContextProvider'
import PrivateRoute from './utils/PrivateRoute'
import "./styles/App.css"

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/user/dashboard" component={Home} />
          <PrivateRoute exact path="/user/products" component={Books} />
          <Route component={Error} />
        </Switch>
      </AuthContextProvider>
    </>
  )
}

export default App
