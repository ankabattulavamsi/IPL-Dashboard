import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'
import TeamMatches from './components/TeamMatches'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
