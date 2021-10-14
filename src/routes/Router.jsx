import Home from '../views/Home/Home'
import { Switch, Route, Redirect } from 'react-router-dom'

const Router = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
  )
}

export default Router
