import React from 'react'
import { HashRouter, Route, Switch, RouteComponentProps } from 'react-router-dom'
import { About, Items, Menu, NotFound } from 'pages'
import { routes } from './routes'
import './App.css'

const mapPageToComponent = (page: string): React.FC<RouteComponentProps> => {
  switch (page) {
    case 'menu': return Menu
    case 'items': return Items
    case 'about': return About
    default: return NotFound
  }
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        {Object.entries(routes).map(entry =>(
          <Route path={`/${entry[0]}`} component={mapPageToComponent(entry[1])} />
        ))}
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  )
}

export default App
