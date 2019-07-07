import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { About, Items, Menu, NotFound } from 'pages'
import './App.css'

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Menu} />
        <Route path='/items' component={Items} />
        <Route path='/about' component={About} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  )
}

export default App
