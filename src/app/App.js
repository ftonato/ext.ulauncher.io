import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import Browse from '../browse/Browse'
import My from '../my/My'
import AddExtension from '../addExtension/AddExtension'
import AuthCallback from '../auth0/AuthCallback'
import UserRoute from '../auth0/UserRoute'
import NotFound from '../error/NotFound'
import Details from '../details/Details'
import NotLoggedIn from '../layout/NotLoggedIn'

const App = () => (
  <BrowserRouter>
    <div>
      <Helmet titleTemplate="%s &mdash; Ulauncher Extensions">
        <body className="gray-bg" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={Browse} />
        <Route path="/-/:id" component={Details} />
        <Route path="/auth0-callback" component={AuthCallback} />
        <UserRoute path="/new" auth={AddExtension} unauth={NotLoggedIn} />
        <UserRoute path="/my" auth={My} unauth={NotLoggedIn} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
