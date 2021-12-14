import Home from '../views/Home'
import { Switch, Route, Redirect } from 'react-router-dom'

const Router = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='*' render={() => <Redirect to='/' />}></Route>
    </Switch>
  )
}

export default Router
